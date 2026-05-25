import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {

  const fetchProducts = async () => {

    try {

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      setProducts(data);

    } catch (error) {

      console.log(error);

    }
  };

  fetchProducts();

}, []);

const deleteHandler = async (id) => {

  try {

    // GET TOKEN
    const token =
      localStorage.getItem(
        "token"
      );

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/products/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    setProducts(
      products.filter(
        (product) =>
          product._id !== id
      )
    );

    alert(
      "Product Deleted"
    );

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Delete Failed"
    );

  }
};

  return (
    <div>
      {/* Top Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Products</h1>

        {/* Add Product Button */}
        <Link
          to="/admin/add-product"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl"
        >
          <FaPlus />
          Add Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-4">Image</th>

              <th className="py-4 px-4">Product</th>

              <th className="py-4 px-4">Price</th>

              <th className="py-4 px-4">Stock</th>

              <th className="py-4 px-4">Category</th>

              <th className="py-4 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                {/* Product Image */}
                <td className="py-4 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                {/* Product Name */}
                <td className="py-4 px-4 font-medium">{product.name}</td>

                {/* Price */}
                <td className="py-4 px-4">₹{product.price}</td>

                {/* Stock */}
                <td className="py-4 px-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {product.stock} In Stock
                  </span>
                </td>

                {/* Category */}
                <td className="py-4 px-4">{product.category}</td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    {/* Edit Button */}
                    <Link
                      to={`/admin/edit-product/${product._id}`}
                      className="text-blue-500 hover:text-blue-700 text-lg"
                    >
                      <FaEdit />
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteHandler(product._id)}
                      className="text-red-500 hover:text-red-700 text-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
