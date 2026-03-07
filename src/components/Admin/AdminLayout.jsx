import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log("JE")
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggler */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
          <button onClick={toggleSidebar}>
            <FaBars size={24}/>
          </button>
          <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {
        isOpenSidebar ? (
          <div className="fixed inset-0 z-10 bg-black opacity-50 md:hidden">

          </div>
        ) : <div></div>
      }

       {/* Sidebar */}
        <div
          className={`text-white bg-gray-900 w-64 min-h-screen absolute md:relative transform transition-transform z-20 ${
            isOpenSidebar ? "translate-x-0" : "-translate-x-full"
          } duration-300 md:static md:translate-x-0`}
        >
          <AdminSidebar
            toggleSidebar={toggleSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          ></AdminSidebar>
        </div>
        {/* Mian Content */}
        <div className="flex-grow p-6 overflow-auto">
            <Outlet/>
        </div>
    
    </div>
  );
};

export default AdminLayout;
