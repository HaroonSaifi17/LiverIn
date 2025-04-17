import React from "react";
import Sidebar from "@/components/initials/Dashboard/Sidebar";
import DashboardContent from "@/components/initials/Dashboard/DashboardContent";
import Navbar from "@/components/common/Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="flex mt-16 min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <DashboardContent />
      </main>
    </div>
  
    </>
  );
};

export default Dashboard;
