// src/components/layouts/MainLayout.jsx
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
