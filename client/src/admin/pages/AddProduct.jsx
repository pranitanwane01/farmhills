import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigate = useNavigate();

  const [imagePreview, setImagePreview] =
    useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Image URL Preview
  const handleImagePreview = (e) => {

    handleChange(e);

    setImagePreview(e.target.value);

  };

  // Submit Product
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8000/api/products",
        formData
      );

      alert("Product Added Successfully");

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Add Product
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Product Name */}
          <div>

            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

          </div>

          {/* Price */}
          <div>

            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

          </div>

          {/* Stock */}
          <div>

            <label className="block mb-2 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock"
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

          </div>

          {/* Category */}
          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            >

              <option value="">
                Select Category
              </option>

              <option value="Dry Fruits">
                Dry Fruits
              </option>

              <option value="Seeds">
                Seeds
              </option>

              <option value="Premium">
                Premium
              </option>

            </select>

          </div>

          {/* Description */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

          </div>

          {/* Image URL */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Product Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleImagePreview}
              placeholder="Paste image URL"
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

          </div>

          {/* Image Preview */}
          {imagePreview && (

            <div className="md:col-span-2">

              <img
                src={imagePreview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-xl border"
              />

            </div>

          )}

          {/* Submit Button */}
          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl"
            >
              Add Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;