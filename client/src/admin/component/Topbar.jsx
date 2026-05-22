import React from "react";

const Topbar = () => {

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("userInfo");

    window.location.href = "/login";
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
};

export default Topbar;