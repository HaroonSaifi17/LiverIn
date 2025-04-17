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

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/features" element={<Features/>}/>
      </Route>

      {/* Routes without Navbar */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
