import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <Sidebar />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          flex-1
          min-w-0
          min-h-screen
          bg-gray-100
        "
      >

        {/* =================================================
            DESKTOP TOPBAR ONLY
        ================================================== */}

        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* =================================================
            MOBILE HEADER SPACE
        ================================================== */}

        <div className="pt-16 md:pt-0">

          <div
            className="
              w-full
              min-w-0
              p-3
              sm:p-5
              md:p-5
            "
          >
            <Outlet />
          </div>

        </div>

      </main>
    </div>
  );
};

export default AdminLayout;