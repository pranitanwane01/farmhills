
// import React, {
//   useContext,
//   useState,
// } from "react";

// import { Link } from "react-router-dom";

// import {
//   ShoppingCart,
//   Star,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import products from "../data/products";

// import { CartContext } from "../context/CartContext";

// function AllProducts() {

//   const { addToCart } = useContext(CartContext);

//   // SEARCH STATE

//   const [searchTerm, setSearchTerm] =
//     useState("");

//   // CATEGORY STATE

//   const [selectedCategory, setSelectedCategory] =
//     useState("All");

//   // FILTER PRODUCTS

//   const filteredProducts = products.filter(
//     (item) => {

//       const matchesSearch = item.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());

//       const matchesCategory =
//         selectedCategory === "All" ||
//         item.category === selectedCategory;

//       return (
//         matchesSearch &&
//         matchesCategory
//       );

//     }
//   );

//   return (
//     <>
      

//       <section className="w-full bg-[#F5F3F0] min-h-screen py-16 px-6 md:px-12">

//         <div className="max-w-7xl mx-auto">

//           {/* HEADING */}

//           <div className="mb-12">

//             <p className="text-[#9B4D0D] uppercase tracking-[4px] font-semibold text-sm">

//               Our Collection

//             </p>

//             <h1 className="text-5xl font-bold text-[#2B1408] mt-2">

//               All Products

//             </h1>

//           </div>

//           {/* SEARCH BAR */}

//           <div className="mb-8">

//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) =>
//                 setSearchTerm(e.target.value)
//               }
//               className="w-full md:w-[400px] px-6 py-4 rounded-full border border-gray-300 outline-none focus:border-[#9B4D0D]"
//             />

//           </div>

//           {/* CATEGORY FILTERS */}

//           <div className="flex flex-wrap gap-4 mb-10">

//             <button
//               onClick={() =>
//                 setSelectedCategory("All")
//               }
//               className={`px-6 py-3 rounded-full border transition

//               ${
//                 selectedCategory === "All"
//                   ? "bg-[#9B4D0D] text-white"
//                   : "bg-white text-[#9B4D0D]"
//               }
//               `}
//             >

//               All

//             </button>

//             <button
//               onClick={() =>
//                 setSelectedCategory(
//                   "Dry Fruits"
//                 )
//               }
//               className={`px-6 py-3 rounded-full border transition

//               ${
//                 selectedCategory ===
//                 "Dry Fruits"
//                   ? "bg-[#9B4D0D] text-white"
//                   : "bg-white text-[#9B4D0D]"
//               }
//               `}
//             >

//               Dry Fruits

//             </button>

//           </div>

//           {/* PRODUCTS */}

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//             {filteredProducts.map((item) => (

//               <div
//                 key={item.id}
//                 className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
//               >

//                 {/* CLICKABLE PRODUCT AREA */}

//                 <Link to={`/product/${item.id}`}>

//                   {/* IMAGE */}

//                   <div className="overflow-hidden bg-[#EFE2C8]">

//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
//                     />

//                   </div>

//                   {/* CONTENT */}

//                   <div className="p-6">

//                     {/* RATING */}

//                     <div className="flex items-center gap-2 mb-3">

//                       <Star
//                         size={18}
//                         className="fill-yellow-400 text-yellow-400"
//                       />

//                       <span className="text-[#7B6252] font-medium">

//                         {item.rating}

//                       </span>

//                     </div>

//                     {/* NAME */}

//                     <h3 className="text-2xl font-semibold text-[#2B1408]">

//                       {item.name}

//                     </h3>

//                     {/* WEIGHT */}

//                     <p className="text-[#7B6252] mt-2">

//                       Pack Size: {item.weight}

//                     </p>

//                   </div>

//                 </Link>

//                 {/* PRICE + CART BUTTON */}

//                 <div className="flex items-center justify-between px-6 pb-6">

//                   {/* PRICE */}

//                   <p className="text-[#9B4D0D] text-3xl font-bold">

//                     ₹{item.price}

//                   </p>

//                   {/* ADD TO CART BUTTON */}

//                   <button
//                     onClick={() =>
//                       addToCart(item)
//                     }
//                     className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white p-4 rounded-full transition"
//                   >

//                     <ShoppingCart size={20} />

//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

// export default AllProducts;


import React, {
  useContext,
  useState,
  useEffect,
} from "react";

import { Link } from "react-router-dom";

import {
  ShoppingCart,
  Star,
} from "lucide-react";

import axios from "axios";

import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function AllProducts() {

  const { addToCart } =
    useContext(CartContext);

  // PRODUCTS STATE
  const [products, setProducts] =
    useState([]);

  // SEARCH STATE
  const [searchTerm, setSearchTerm] =
    useState("");

  // CATEGORY STATE
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // FETCH PRODUCTS
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:8000/api/products"
        );

        setProducts(data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProducts();

  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products.filter(
    (item) => {

      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );

    }
  );

  return (
    <>
      <section className="w-full bg-[#F5F3F0] min-h-screen py-16 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-12">

            <p className="text-[#9B4D0D] uppercase tracking-[4px] font-semibold text-sm">

              Our Collection

            </p>

            <h1 className="text-5xl font-bold text-[#2B1408] mt-2">

              All Products

            </h1>

          </div>

          {/* SEARCH BAR */}
          <div className="mb-8">

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full md:w-[400px] px-6 py-4 rounded-full border border-gray-300 outline-none focus:border-[#9B4D0D]"
            />

          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap gap-4 mb-10">

            <button
              onClick={() =>
                setSelectedCategory("All")
              }
              className={`px-6 py-3 rounded-full border transition

              ${
                selectedCategory === "All"
                  ? "bg-[#9B4D0D] text-white"
                  : "bg-white text-[#9B4D0D]"
              }
              `}
            >

              All

            </button>

            <button
              onClick={() =>
                setSelectedCategory(
                  "Dry Fruits"
                )
              }
              className={`px-6 py-3 rounded-full border transition

              ${
                selectedCategory ===
                "Dry Fruits"
                  ? "bg-[#9B4D0D] text-white"
                  : "bg-white text-[#9B4D0D]"
              }
              `}
            >

              Dry Fruits

            </button>

            <button
              onClick={() =>
                setSelectedCategory(
                  "Premium"
                )
              }
              className={`px-6 py-3 rounded-full border transition

              ${
                selectedCategory ===
                "Premium"
                  ? "bg-[#9B4D0D] text-white"
                  : "bg-white text-[#9B4D0D]"
              }
              `}
            >

              Premium

            </button>

          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((item) => (

              <div
                key={item._id}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
              >

                {/* CLICKABLE PRODUCT AREA */}
                <Link to={`/product/${item._id}`}>

                  {/* IMAGE */}
                  <div className="overflow-hidden bg-[#EFE2C8]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* RATING */}
                    <div className="flex items-center gap-2 mb-3">

                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-[#7B6252] font-medium">

                        4.8

                      </span>

                    </div>

                    {/* NAME */}
                    <h3 className="text-2xl font-semibold text-[#2B1408]">

                      {item.name}

                    </h3>

                    {/* CATEGORY */}
                    <p className="text-[#7B6252] mt-2">

                      {item.category}

                    </p>

                  </div>

                </Link>

                {/* PRICE + CART BUTTON */}
                <div className="flex items-center justify-between px-6 pb-6">

                  {/* PRICE */}
                  <p className="text-[#9B4D0D] text-3xl font-bold">

                    ₹{item.price}

                  </p>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={() =>
                      addToCart(item)
                    }
                    className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white p-4 rounded-full transition"
                  >

                    <ShoppingCart size={20} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      
    </>
  );
}

export default AllProducts;