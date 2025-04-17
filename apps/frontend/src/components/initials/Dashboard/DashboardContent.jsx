import React, { useState } from "react";
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

const DashboardContent = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deliveryTime: "",
  });

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
          <p className="text-2xl font-bold">12</p>
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
          {[
            "UI Design",
            "React Website",
            "Logo Design",
            "UI Design",
            "React Website",
            "Logo Design",
          ].map((gig, idx) => (
            <div
              key={idx}
              className="p-4 hover:bg-gray-50 flex justify-between"
            >
              <span>{gig}</span>
              <span className="text-green-500 text-sm">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
