import { Link } from "react-router-dom";
import React from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        DryFruit Admin
      </h1>

      <div className="flex flex-col gap-6">

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <FaBox />
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <FaShoppingCart />
          Orders
        </Link>

        <Link
          to="/admin/users"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <FaUsers />
          Users
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;