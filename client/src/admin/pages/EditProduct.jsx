
// // export default EditProduct;

// import { useEffect, useState } from "react";

// import axios from "axios";

// import {
//   useNavigate,
//   useParams,
// } from "react-router-dom";

// const EditProduct = () => {

//   const { id } = useParams();

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//     category: "",
//     image: "",
//   });

//   // Fetch Product
//   useEffect(() => {

//     const fetchProduct = async () => {

//       try {

//         const { data } = await axios.get(
//   `${import.meta.env.VITE_API_URL}/api/products/${id}`
// );

//         setFormData(data);

//       } catch (error) {

//         console.log(error);

//       }
//     };

//     fetchProduct();

//   }, [id]);

//   // Handle Change
//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };

//   // Update Product
//  const handleSubmit = async (e) => {

//   e.preventDefault();

//   try {

//     // GET TOKEN
//     const token =
//       localStorage.getItem(
//         "token"
//       );

//   await axios.put(
//   `${import.meta.env.VITE_API_URL}/api/products/${id}`,
//   formData,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );

//     alert(
//       "Product Updated"
//     );

//     navigate(
//       "/admin/products"
//     );

//   } catch (error) {

//     console.log(error);

//     alert(
//       error.response?.data?.message ||
//       "Update Failed"
//     );

//   }
// };

//   return (
//     <div>

//       <h1 className="text-3xl font-bold mb-8">
//         Edit Product
//       </h1>

//       <div className="bg-white p-8 rounded-2xl shadow">

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >

//           {/* Product Name */}
//           <div>

//             <label className="block mb-2 font-medium">
//               Product Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Price */}
//           <div>

//             <label className="block mb-2 font-medium">
//               Price
//             </label>

//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Stock */}
//           <div>

//             <label className="block mb-2 font-medium">
//               Stock
//             </label>

//             <input
//               type="number"
//               name="stock"
//               value={formData.stock}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Category */}
//           <div>

//             <label className="block mb-2 font-medium">
//               Category
//             </label>

//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">

//             <label className="block mb-2 font-medium">
//               Description
//             </label>

//             <textarea
//               rows="5"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Image URL */}
//           <div className="md:col-span-2">

//             <label className="block mb-2 font-medium">
//               Image URL
//             </label>

//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-xl"
//             />

//           </div>

//           {/* Preview */}
//           {formData.image && (

//             <div className="md:col-span-2">

//               <img
//                 src={formData.image}
//                 alt={formData.name}
//                 className="w-40 h-40 object-cover rounded-xl"
//               />

//             </div>

//           )}

//           {/* Submit */}
//           <div className="md:col-span-2">

//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
//             >
//               Update Product
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

  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
    images: [],
    isBestSeller: false,
  });

  // =====================================================
  // FETCH PRODUCT
  // =====================================================

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );

        const productImages =
          data.images?.length > 0
            ? data.images
            : data.image
              ? [data.image]
              : [];

        setFormData({
          name: data.name || "",
          description: data.description || "",
          price: data.price || "",
          stock: data.stock || "",
          category: data.category || "",
          image: productImages[0] || "",
          images: productImages,
          isBestSeller: Boolean(data.isBestSeller),
        });
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data?.message ||
            "Failed to load product"
        );
      }
    };

    fetchProduct();
  }, [id]);

  // =====================================================
  // HANDLE TEXT CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // UPLOAD NEW IMAGES
  // =====================================================

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    try {
      setImageUploading(true);

      const newImageUrls = [];

      for (const file of files) {
        const data = new FormData();

        data.append("image", file);

        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/upload`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        newImageUrls.push(res.data.imageUrl);
      }

      const updatedImages = [
        ...formData.images,
        ...newImageUrls,
      ];

      setFormData((prev) => ({
        ...prev,
        image: updatedImages[0] || "",
        images: updatedImages,
      }));

      alert(
        `${newImageUrls.length} image${
          newImageUrls.length > 1 ? "s" : ""
        } uploaded successfully`
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Image Upload Failed"
      );
    } finally {
      setImageUploading(false);

      // Allow selecting the same file again
      e.target.value = "";
    }
  };

  // =====================================================
  // REMOVE IMAGE
  // =====================================================

  const removeImage = (index) => {
    const updatedImages = formData.images.filter(
      (_, imageIndex) => imageIndex !== index
    );

    setFormData((prev) => ({
      ...prev,
      image: updatedImages[0] || "",
      images: updatedImages,
    }));
  };

  // =====================================================
  // MAKE IMAGE MAIN
  // =====================================================

  const makeMainImage = (index) => {
    if (index === 0) return;

    const selectedImage = formData.images[index];

    const updatedImages = [
      selectedImage,
      ...formData.images.filter(
        (_, imageIndex) => imageIndex !== index
      ),
    ];

    setFormData((prev) => ({
      ...prev,
      image: updatedImages[0],
      images: updatedImages,
    }));
  };

  // =====================================================
  // UPDATE PRODUCT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.images.length) {
        alert(
          "Please keep at least one product image"
        );

        return;
      }

      setLoading(true);

      const token =
        localStorage.getItem("token");

      const productData = {
        ...formData,
        image: formData.images[0],
        images: formData.images,
      };

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Updated Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Update Failed"
      );
    } finally {
      setLoading(false);
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
          {/* PRODUCT NAME */}

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
              value={formData.price}
              onChange={handleChange}
              min="0"
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
              value={formData.stock}
              onChange={handleChange}
              min="0"
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
              value={formData.category}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              required
            />
          </div>

          {/* UPLOAD MORE IMAGES */}

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Add More Product Images
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={imageUploading}
              className="w-full border p-3 rounded-xl"
            />

            <p className="text-sm text-gray-500 mt-2">
              Select multiple images to add them to this
              product.
            </p>
          </div>

          {/* IMAGE UPLOADING */}

          {imageUploading && (
            <div className="md:col-span-2">
              <p className="text-blue-500 font-medium">
                Uploading images to Cloudinary...
              </p>
            </div>
          )}

          {/* CURRENT IMAGES */}

          {formData.images.length > 0 && (
            <div className="md:col-span-2">
              <p className="font-medium mb-4">
                Product Images
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {formData.images.map(
                  (image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="relative group"
                    >
                      <img
                        src={image}
                        alt={`${formData.name} ${
                          index + 1
                        }`}
                        className="
                          w-full
                          h-40
                          object-contain
                          bg-gray-50
                          rounded-xl
                          border
                        "
                      />

                      {/* MAIN IMAGE */}

                      {index === 0 && (
                        <span
                          className="
                            absolute
                            top-2
                            left-2
                            bg-yellow-500
                            text-white
                            text-xs
                            font-semibold
                            px-2
                            py-1
                            rounded-full
                          "
                        >
                          Main Image
                        </span>
                      )}

                      {/* REMOVE */}

                      <button
                        type="button"
                        onClick={() =>
                          removeImage(index)
                        }
                        className="
                          absolute
                          top-2
                          right-2
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          w-8
                          h-8
                          rounded-full
                          font-bold
                        "
                      >
                        ×
                      </button>

                      {/* MAKE MAIN */}

                      {index !== 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            makeMainImage(index)
                          }
                          className="
                            absolute
                            bottom-2
                            left-2
                            right-2
                            bg-black/70
                            hover:bg-black
                            text-white
                            text-xs
                            py-2
                            rounded-lg
                            opacity-0
                            group-hover:opacity-100
                            transition
                          "
                        >
                          Make Main Image
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* BEST SELLER */}

          <div className="md:col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.isBestSeller}
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

          {/* SUBMIT */}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={
                loading ||
                imageUploading ||
                formData.images.length === 0
              }
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                disabled:bg-gray-400
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Updating..."
                : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;