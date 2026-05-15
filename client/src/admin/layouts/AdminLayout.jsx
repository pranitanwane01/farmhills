import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { Outlet } from "react-router-dom";
import React from "react";

const AdminLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Topbar />

        <div className="p-5">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;