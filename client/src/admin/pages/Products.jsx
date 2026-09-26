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
          `${import.meta.env.VITE_API_URL}/api/products`,
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
      const token = localStorage.getItem("token");

      await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(products.filter((product) => product._id !== id));

      alert("Product Deleted");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Delete Failed");
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
                    src={
                      product.images?.length > 0
                        ? product.images[0]
                        : product.image
                    }
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


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [deletingId, setDeletingId] = useState(null);

//   const PRODUCTS_PER_PAGE = 20;

//   // =====================================================
//   // FETCH PRODUCTS
//   // =====================================================

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);

//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//           {
//             params: {
//               page,
//               limit: PRODUCTS_PER_PAGE,
//             },
//           }
//         );

//         setProducts(data.products || []);
//         setTotalPages(data.totalPages || 1);
//       } catch (error) {
//         console.error("Fetch Products Error:", error);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [page]);

//   // =====================================================
//   // DELETE PRODUCT
//   // =====================================================

//   const deleteHandler = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     try {
//       setDeletingId(id);

//       const token = localStorage.getItem("token");

//       await axios.delete(
//         `${import.meta.env.VITE_API_URL}/api/products/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Remove from current page immediately
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => product._id !== id)
//       );

//       alert("Product Deleted");
//     } catch (error) {
//       console.error("Delete Product Error:", error);

//       alert(
//         error.response?.data?.message ||
//           "Delete Failed"
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   // =====================================================
//   // LOADING SKELETON
//   // =====================================================

//   const LoadingRows = () => {
//     return (
//       <>
//         {Array.from({ length: 8 }).map((_, index) => (
//           <tr
//             key={index}
//             className="border-b animate-pulse"
//           >
//             <td className="py-4 px-4">
//               <div className="w-16 h-16 bg-gray-200 rounded-lg" />
//             </td>

//             <td className="py-4 px-4">
//               <div className="h-4 bg-gray-200 rounded w-32" />
//             </td>

//             <td className="py-4 px-4">
//               <div className="h-4 bg-gray-200 rounded w-16" />
//             </td>

//             <td className="py-4 px-4">
//               <div className="h-6 bg-gray-200 rounded-full w-24" />
//             </td>

//             <td className="py-4 px-4">
//               <div className="h-4 bg-gray-200 rounded w-20" />
//             </td>

//             <td className="py-4 px-4">
//               <div className="h-5 bg-gray-200 rounded w-16" />
//             </td>
//           </tr>
//         ))}
//       </>
//     );
//   };

//   // =====================================================
//   // RENDER
//   // =====================================================

//   return (
//     <div>
//       {/* =================================================
//           TOP SECTION
//       ================================================== */}

//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold">
//           Products
//         </h1>

//         {/* ADD PRODUCT */}

//         <Link
//           to="/admin/add-product"
//           className="
//             flex
//             items-center
//             gap-2

//             bg-yellow-500
//             hover:bg-yellow-600

//             text-white

//             px-5
//             py-3

//             rounded-xl

//             transition
//           "
//         >
//           <FaPlus />
//           Add Product
//         </Link>
//       </div>

//       {/* =================================================
//           PRODUCTS TABLE
//       ================================================== */}

//       <div className="bg-white rounded-2xl shadow overflow-x-auto">
//         <table className="w-full text-left">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-4 px-4">
//                 Image
//               </th>

//               <th className="py-4 px-4">
//                 Product
//               </th>

//               <th className="py-4 px-4">
//                 Price
//               </th>

//               <th className="py-4 px-4">
//                 Stock
//               </th>

//               <th className="py-4 px-4">
//                 Category
//               </th>

//               <th className="py-4 px-4">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {/* LOADING */}

//             {loading && <LoadingRows />}

//             {/* PRODUCTS */}

//             {!loading &&
//               products.map((product) => {
//                 const productImage =
//                   product.images?.length > 0
//                     ? product.images[0]
//                     : product.image;

//                 return (
//                   <tr
//                     key={product._id}
//                     className="
//                       border-b
//                       hover:bg-gray-50
//                       transition
//                     "
//                   >
//                     {/* PRODUCT IMAGE */}

//                     <td className="py-4 px-4">
//                       <img
//                         src={productImage}
//                         alt={product.name}
//                         loading="lazy"
//                         decoding="async"
//                         className="
//                           w-16
//                           h-16
//                           object-cover
//                           rounded-lg
//                         "
//                       />
//                     </td>

//                     {/* PRODUCT NAME */}

//                     <td className="py-4 px-4 font-medium">
//                       {product.name}
//                     </td>

//                     {/* PRICE */}

//                     <td className="py-4 px-4">
//                       ₹{product.price}
//                     </td>

//                     {/* STOCK */}

//                     <td className="py-4 px-4">
//                       <span className="
//                         bg-green-100
//                         text-green-700
//                         px-3
//                         py-1
//                         rounded-full
//                         text-sm
//                       ">
//                         {product.stock} In Stock
//                       </span>
//                     </td>

//                     {/* CATEGORY */}

//                     <td className="py-4 px-4">
//                       {product.category}
//                     </td>

//                     {/* ACTIONS */}

//                     <td className="py-4 px-4">
//                       <div className="flex items-center gap-4">

//                         {/* EDIT */}

//                         <Link
//                           to={`/admin/edit-product/${product._id}`}
//                           className="
//                             text-blue-500
//                             hover:text-blue-700
//                             text-lg
//                           "
//                         >
//                           <FaEdit />
//                         </Link>

//                         {/* DELETE */}

//                         <button
//                           type="button"
//                           disabled={deletingId === product._id}
//                           onClick={() =>
//                             deleteHandler(product._id)
//                           }
//                           className="
//                             text-red-500
//                             hover:text-red-700
//                             text-lg
//                             disabled:opacity-50
//                             disabled:cursor-not-allowed
//                           "
//                         >
//                           <FaTrash />
//                         </button>

//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}

//             {/* EMPTY */}

//             {!loading &&
//               products.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="
//                       text-center
//                       py-12
//                       text-gray-500
//                     "
//                   >
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//           </tbody>
//         </table>
//       </div>

//       {/* =================================================
//           PAGINATION
//       ================================================== */}

//       {!loading && totalPages > 1 && (
//         <div className="
//           flex
//           items-center
//           justify-center
//           gap-4
//           mt-6
//         ">
//           {/* PREVIOUS */}

//           <button
//             type="button"
//             disabled={page === 1}
//             onClick={() =>
//               setPage((prev) => prev - 1)
//             }
//             className="
//               px-4
//               py-2
//               rounded-lg
//               border
//               border-gray-300
//               bg-white
//               hover:bg-gray-100
//               disabled:opacity-40
//               disabled:cursor-not-allowed
//             "
//           >
//             Previous
//           </button>

//           {/* PAGE */}

//           <span className="
//             text-sm
//             font-medium
//             text-gray-600
//           ">
//             Page {page} of {totalPages}
//           </span>

//           {/* NEXT */}

//           <button
//             type="button"
//             disabled={page === totalPages}
//             onClick={() =>
//               setPage((prev) => prev + 1)
//             }
//             className="
//               px-4
//               py-2
//               rounded-lg
//               border
//               border-gray-300
//               bg-white
//               hover:bg-gray-100
//               disabled:opacity-40
//               disabled:cursor-not-allowed
//             "
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;