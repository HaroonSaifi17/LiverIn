import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "", // ← added
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.accountType) {
      alert("Please select an account type!");
      return;
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          accountType: formData.accountType, // ← include in payload
        },
      );
      localStorage.setItem("token", response.data.token);
      window.location.href = "/"; // redirect to dashboard

      console.log(response.data);
      // optionally reset the form or redirect
    } catch (err) {
      console.error("Registration error:", err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-sm mb-1">Account Type</label>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="" disabled>
                Select account type
              </option>
              <option value="freelancer">Freelancer</option>
              <option value="recruiter">Recruiter</option>
              <option value="client">Client</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-xl text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
