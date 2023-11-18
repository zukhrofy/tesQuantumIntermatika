import Sidebar from "@/pages/dashboard/Sidebar";
import TopNav from "@/pages/dashboard/TopNav";
import MobileNav from "@/pages/dashboard/MobileNav";

import { toast } from "react-toastify";

import { useEffect } from "react";

const Dashboard = ({ children }) => {
  useEffect(() => {
    toast(`Welcome, admin!`);
  }, []);

  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar />
        {/* main */}
        <div className="grow flex flex-col h-screen">
          <TopNav />
          <MobileNav />
          <main className="w-full p-8">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
