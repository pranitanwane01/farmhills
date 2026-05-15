// import React from 'react'

// import { useState } from "react";

// const EditProduct = () => {

//   const [imagePreview, setImagePreview] =
//     useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div>

//       <h1 className="text-3xl font-bold mb-8">
//         Add Product
//       </h1>

//       <div className="bg-white p-8 rounded-2xl shadow">

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Product Name */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Product Name
//             </label>

//             <input
//               type="text"
//               placeholder="Enter product name"
//               className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Price
//             </label>

//             <input
//               type="number"
//               placeholder="Enter price"
//               className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Stock */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Stock
//             </label>

//             <input
//               type="number"
//               placeholder="Enter stock"
//               className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Category
//             </label>

//             <select
//               className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option>Dry Fruits</option>
//               <option>Seeds</option>
//               <option>Premium</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">

//             <label className="block mb-2 font-medium">
//               Description
//             </label>

//             <textarea
//               rows="5"
//               placeholder="Enter product description"
//               className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//           </div>

//           {/* Image Upload */}
//           <div className="md:col-span-2">

//             <label className="block mb-2 font-medium">
//               Product Image
//             </label>

//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="w-full"
//             />

//           </div>

//           {/* Image Preview */}
//           {imagePreview && (

//             <div className="md:col-span-2">

//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="w-40 h-40 object-cover rounded-xl border"
//               />

//             </div>

//           )}

//           {/* Submit Button */}
//           <div className="md:col-span-2">

//             <button
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl"
//             >
//               Add Product
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// };



// export default EditProduct;

import { useEffect, useState } from "react";

import axios from "axios";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

const EditProduct = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  // Fetch Product
  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );

        setFormData(data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProduct();

  }, [id]);

  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Update Product
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:8000/api/products/${id}`,
        formData
      );

      alert("Product Updated");

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Edit Product
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
              className="w-full border p-3 rounded-xl"
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
              className="w-full border p-3 rounded-xl"
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
              className="w-full border p-3 rounded-xl"
            />

          </div>

          {/* Category */}
          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
            />

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
              className="w-full border p-3 rounded-xl"
            />

          </div>

          {/* Image URL */}
          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
            />

          </div>

          {/* Preview */}
          {formData.image && (

            <div className="md:col-span-2">

              <img
                src={formData.image}
                alt={formData.name}
                className="w-40 h-40 object-cover rounded-xl"
              />

            </div>

          )}

          {/* Submit */}
          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Update Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;