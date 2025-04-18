import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Contact from "./Pages/Contact"; // Example
import MainLayout from "./Layouts/MainLayout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Product from "./Pages/Product";
import Features from "./Pages/Features";
import Category from "./Pages/Category";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import FreelancerProfile from "./Pages/FreelancerProfile";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/category/:category" element={<Category />} />
      </Route>
      {/* <Route path="/freelancer-profile/:slug" element={<FreelancerProfile />} /> */}
      <Route path="/freelancer/:name" element={<FreelancerProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Routes without Navbar */}
    </Routes>
  );
};

export default App;
