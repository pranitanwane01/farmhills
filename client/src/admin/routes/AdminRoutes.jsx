import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="products" element={<Products />} />

        <Route path="orders" element={<Orders />} />

        <Route path="users" element={<Users />} />
        <Route path="add-product" element={<AddProduct />} />

        <Route path="edit-product/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
