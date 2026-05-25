


import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image: "",
      isBestSeller: false,
    });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE IMAGE UPLOAD
  const handleImageUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      try {

        setLoading(true);

        const data =
          new FormData();

        data.append(
          "image",
          file
        );

        const res =
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/upload`,
            data,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setFormData((prev) => ({
          ...prev,
          image:
            res.data.imageUrl,
        }));

        setImagePreview(
          res.data.imageUrl
        );

        alert(
          "Image Uploaded Successfully"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Image Upload Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        // CHECK IMAGE
        if (!formData.image) {

          alert(
            "Please upload image first"
          );

          return;
        }

        // GET TOKEN
        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/products`,

          formData,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        alert(
          "Product Added Successfully"
        );

        navigate(
          "/admin/products"
        );

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Something went wrong"
        );
      }
    };

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">

        Add Product

      </h1>

      <div className="bg-white p-8 rounded-2xl shadow">

        <form
          onSubmit={
            handleSubmit
          }
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <div>

            <label className="block mb-2 font-medium">

              Product Name

            </label>

            <input
              type="text"
              name="name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              placeholder="Enter product name"
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          {/* PRICE */}
          <div>

            <label className="block mb-2 font-medium">

              Price

            </label>

            <input
              type="number"
              name="price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              placeholder="Enter price"
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          {/* STOCK */}
          <div>

            <label className="block mb-2 font-medium">

              Stock

            </label>

            <input
              type="number"
              name="stock"
              value={
                formData.stock
              }
              onChange={
                handleChange
              }
              placeholder="Enter stock"
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          {/* CATEGORY */}
          <div>

            <label className="block mb-2 font-medium">

              Category

            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              className="w-full border p-3 rounded-xl"
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

          {/* DESCRIPTION */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">

              Description

            </label>

            <textarea
              rows="5"
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              placeholder="Enter description"
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          {/* IMAGE */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">

              Upload Product Image

            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          {/* LOADING */}
          {loading && (

            <p className="text-blue-500">

              Uploading Image...

            </p>
          )}

          {/* PREVIEW */}
          {imagePreview && (

            <div className="md:col-span-2">

              <img
                src={imagePreview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-xl border"
              />

            </div>
          )}

          {/* BEST SELLER */}
          <div className="md:col-span-2 flex items-center gap-3">

            <input
              type="checkbox"
              checked={
                formData.isBestSeller
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isBestSeller:
                    e.target.checked,
                })
              }
              className="w-5 h-5"
            />

            <label className="font-medium text-lg">

              Show In Best Collection

            </label>

          </div>

          {/* BUTTON */}
          <div className="md:col-span-2">

            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl disabled:bg-gray-400"
            >

              {
                loading
                  ? "Uploading..."
                  : "Add Product"
              }

            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;