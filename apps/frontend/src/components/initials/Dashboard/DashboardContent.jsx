import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useUser } from "@/ContextAPI/UserProvider";

const DashboardContent = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deliveryTime: "",
  });
  const [gigs, setGigs] = useState([]); // P7ca9

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        import.meta.env.VITE_API_URL + "/gigs",
        {
          ...form,
          price: parseFloat(form.price),
          deliveryTime: parseInt(form.deliveryTime),
          category: form.category,
          createdBy: "6630f...dummyUserId", // Optional: backend should ideally use token to infer this
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setOpen(false);
      setForm({
        title: "",
        description: "",
        category: "",
        price: "",
        deliveryTime: "",
      });
    } catch (err) {
      console.error("Failed to add gig", err);
    }
  };

  const fetchGigs = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/gigs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setGigs(response.data);
    } catch (err) {
      console.error("Failed to fetch gigs", err);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []); // P3d81

  const handleDeleteGig = async (gigId) => {
    try {
      await axios.delete(import.meta.env.VITE_API_URL + `/gigs/${gigId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setGigs(gigs.filter((gig) => gig._id !== gigId));
    } catch (err) {
      console.error("Failed to delete gig", err);
    }
  }; // P6826

  const handleToggleGigStatus = async (gigId, isActive) => {
    try {
      await axios.patch(
        import.meta.env.VITE_API_URL + `/gigs/${gigId}`,
        { isActive: !isActive },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setGigs(
        gigs.map((gig) =>
          gig._id === gigId ? { ...gig, isActive: !isActive } : gig,
        ),
      );
    } catch (err) {
      console.error("Failed to toggle gig status", err);
    }
  }; // P07e9

  const { user } = useUser();
  console.log(user);

  return (
    <div className="max-h-[calc(100vh-78px)] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Welcome back, Freelancer!</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Gig</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Gig</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category (ID)</Label>
                <Input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="deliveryTime">Delivery Time (days)</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={form.deliveryTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Gigs</h3>
          <p className="text-2xl font-bold">{gigs.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Active Orders</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Earnings</h3>
          <p className="text-2xl font-bold">₹18,500</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Gigs</h2>
        <div className="bg-white rounded shadow divide-y">
          {gigs.map((gig) => (
            <div
              key={gig._id}
              className="p-4 hover:bg-gray-50 flex justify-between"
            >
              <span>{gig.title}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    gig.isActive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {gig.isActive ? "Active" : "Inactive"}
                </span>
                <button
                  onClick={() => handleToggleGigStatus(gig._id, gig.isActive)}
                  className="text-blue-500 text-sm"
                >
                  {gig.isActive ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleDeleteGig(gig._id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
