// import React, { useContext, useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { ShoppingCart, Star } from "lucide-react";

// import axios from "axios";

// import { CartContext } from "../context/CartContext";

// import toast from "react-hot-toast";

// function BestSellers() {
//   const { addToCart } = useContext(CartContext);

//   const [products, setProducts] = useState([]);

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//         );

//         // FILTER ONLY BEST SELLERS
//         const bestProducts = data
//           .filter((item) => item.isBestSeller)
//           .slice(0, 8);

//         setProducts(bestProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section className="w-full bg-[#F5F3F0] py-12 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADING */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-[#9B4D0D] mt-2">
//               Best Collection
//             </h2>
//           </div>

//           {/* VIEW ALL BUTTON */}
//           <Link to="/products">
//             <button className="hidden md:block border border-[#9B4D0D] text-[#9B4D0D] px-6 py-3 rounded-full hover:bg-[#9B4D0D] hover:text-white transition">
//               View All
//             </button>
//           </Link>
//         </div>

//         {/* PRODUCTS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
//             >
//               {/* CLICKABLE PRODUCT AREA */}
//               <Link to={`/product/${item._id}`}>
//                 {/* IMAGE */}
//                 <div className="overflow-hidden bg-[#EFE2C8]">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-6">
//                   {/* RATING */}
//                   <div className="flex items-center gap-2 mb-3">
//                     <Star
//                       size={18}
//                       className="fill-yellow-400 text-yellow-400"
//                     />

//                     <span className="text-[#7B6252] font-medium">4.8</span>
//                   </div>

//                   {/* NAME */}
//                   <h3 className="text-2xl font-semibold text-[#2B1408]">
//                     {item.name}
//                   </h3>

//                   {/* CATEGORY */}
//                   <p className="text-[#7B6252] mt-2">{item.category}</p>
//                 </div>
//               </Link>

//               {/* PRICE + CART BUTTON */}
//               <div className="flex items-center justify-between px-6 pb-6">
//                 {/* PRICE */}
//                 <div>
//                   <p className="text-[#9B4D0D] text-3xl font-bold">
//                     ₹{item.price} /250gm
//                   </p>

//                 </div>

//                 {/* ADD TO CART BUTTON */}
//                 <button
//                   onClick={() => {
//                     addToCart(item);
//                     toast.success("Item added to cart. Check your cart.");
//                   }}
//                   className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white p-4 rounded-full transition"
//                 >
//                   <ShoppingCart size={20} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BestSellers;

// import React, {
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import { Link } from "react-router-dom";

// import {
//   ShoppingCart,
//   Star,
// } from "lucide-react";

// import axios from "axios";

// import { CartContext } from "../context/CartContext";

// import toast from "react-hot-toast";

// function BestSellers() {
//   const { addToCart } = useContext(CartContext);

//   const [products, setProducts] = useState([]);

//   // ==========================================
//   // FETCH PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//         );

//         // FILTER ONLY BEST SELLERS

//         const bestProducts = data
//           .filter((item) => item.isBestSeller)
//           .slice(0, 8);

//         setProducts(bestProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section
//       className="
//         w-full
//         bg-[#F5F3F0]
//         py-8
//         sm:py-10
//         md:py-12
//         px-4
//         sm:px-6
//         md:px-12
//       "
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ========================================
//             HEADING
//         ========================================= */}

//         <div
//           className="
//             flex
//             items-center
//             justify-between
//             mb-6
//             sm:mb-8
//             md:mb-10
//           "
//         >
//           <div>
//             <h2
//               className="
//                 text-3xl
//                 sm:text-4xl
//                 md:text-5xl
//                 font-bold
//                 text-[#9B4D0D]
//               "
//             >
//               Best Collection
//             </h2>
//           </div>

//           {/* VIEW ALL */}

//           <Link to="/products">
//             <button
//               className="
//                 hidden
//                 md:block
//                 border
//                 border-[#9B4D0D]
//                 text-[#9B4D0D]
//                 px-6
//                 py-3
//                 rounded-full
//                 hover:bg-[#9B4D0D]
//                 hover:text-white
//                 transition
//               "
//             >
//               View All
//             </button>
//           </Link>
//         </div>

//         {/* ========================================
//             PRODUCTS
//         ========================================= */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-3
//             sm:gap-5
//             lg:gap-8
//           "
//         >
//           {products.map((item) => (
//             <div
//               key={item._id}
//               className="
//                 bg-white
//                 rounded-2xl
//                 sm:rounded-3xl
//                 overflow-hidden
//                 shadow-md
//                 hover:-translate-y-2
//                 hover:shadow-xl
//                 transition
//                 duration-300
//                 group
//               "
//             >

//               {/* ====================================
//                   CLICKABLE PRODUCT AREA
//               ===================================== */}

//               <Link to={`/product/${item._id}`}>

//                 {/* IMAGE */}

//                 <div
//                   className="
//                     overflow-hidden
//                     bg-[#EFE2C8]
//                     w-full
//                     h-[145px]
//                     sm:h-[200px]
//                     md:h-[240px]
//                     lg:h-[280px]
//                   "
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="
//                       w-full
//                       h-full
//                       object-cover
//                       group-hover:scale-105
//                       transition
//                       duration-500
//                     "
//                   />
//                 </div>

//                 {/* CONTENT */}

//                 <div
//                   className="
//                     p-3
//                     sm:p-4
//                     md:p-6
//                   "
//                 >

//                   {/* RATING */}

//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-1.5
//                       mb-2
//                       sm:mb-3
//                     "
//                   >
//                     <Star
//                       size={15}
//                       className="
//                         sm:w-[18px]
//                         sm:h-[18px]
//                         fill-yellow-400
//                         text-yellow-400
//                       "
//                     />

//                     <span
//                       className="
//                         text-[#7B6252]
//                         text-xs
//                         sm:text-sm
//                         font-medium
//                       "
//                     >
//                       4.8
//                     </span>
//                   </div>

//                   {/* NAME */}

//                   <h3
//                     className="
//                       text-base
//                       sm:text-xl
//                       md:text-2xl
//                       font-semibold
//                       text-[#2B1408]
//                       line-clamp-1
//                     "
//                   >
//                     {item.name}
//                   </h3>

//                   {/* CATEGORY */}

//                   <p
//                     className="
//                       text-[#7B6252]
//                       text-xs
//                       sm:text-sm
//                       md:text-base
//                       mt-1
//                       sm:mt-2
//                       line-clamp-1
//                     "
//                   >
//                     {item.category}
//                   </p>
//                 </div>
//               </Link>

//               {/* ====================================
//                   PRICE + CART
//               ===================================== */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-2
//                   px-3
//                   sm:px-4
//                   md:px-6
//                   pb-3
//                   sm:pb-4
//                   md:pb-6
//                 "
//               >

//                 {/* PRICE */}

//                 <div className="min-w-0">
//                   <p
//                     className="
//                       text-[#9B4D0D]
//                       text-base
//                       sm:text-xl
//                       md:text-2xl
//                       lg:text-3xl
//                       font-bold
//                       whitespace-nowrap
//                     "
//                   >
//                     ₹{item.price}
//                   </p>

//                   <p
//                     className="
//                       text-[9px]
//                       sm:text-xs
//                       text-[#7B6252]
//                       mt-0.5
//                     "
//                   >
//                     /250gm
//                   </p>
//                 </div>

//                 {/* ADD TO CART */}

//                 <button
//                   type="button"
//                   onClick={() => {
//                     addToCart(item);

//                     toast.success(
//                       "Item added to cart. Check your cart.",
//                     );
//                   }}
//                   aria-label={`Add ${item.name} to cart`}
//                   className="
//                     flex
//                     items-center
//                     justify-center

//                     bg-[#9B4D0D]
//                     hover:bg-[#7A3A05]

//                     text-white

//                     w-10
//                     h-10

//                     sm:w-11
//                     sm:h-11

//                     md:w-12
//                     md:h-12

//                     lg:w-14
//                     lg:h-14

//                     rounded-full
//                     transition
//                     duration-300

//                     flex-shrink-0
//                   "
//                 >
//                   <ShoppingCart
//                     size={17}
//                     className="
//                       sm:w-[19px]
//                       sm:h-[19px]
//                       md:w-5
//                       md:h-5
//                     "
//                   />
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BestSellers;

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Star, ArrowRight } from "lucide-react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// function BestSellers() {
//   const { addToCart } = useContext(CartContext);

//   const [products, setProducts] = useState([]);

//   // ==========================================
//   // FETCH PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//         );

//         const bestProducts = data
//           .filter((item) => item.isBestSeller)
//           .slice(0, 8);

//         setProducts(bestProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section
//       className="
//         w-full
//         bg-[#F5F3F0]
//         px-4
//         sm:px-6
//         md:px-12
//         py-12
//         sm:py-14
//         md:py-20
//       "
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ==========================================
//             SECTION HEADING
//         =========================================== */}

//         <div className="text-center mb-8 sm:mb-10 md:mb-14">

//           <p
//             className="
//               text-[#C28B2C]
//               uppercase
//               tracking-[3px]
//               sm:tracking-[5px]
//               text-[10px]
//               sm:text-xs
//               md:text-sm
//               font-semibold
//               mb-3
//             "
//           >
//             ✦ Our Finest Selection
//           </p>

//           <h2
//             className="
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
//               font-bold
//               text-[#2B1408]
//             "
//           >
//             Best Collection
//           </h2>

//           <p
//             className="
//               max-w-xl
//               mx-auto
//               mt-3
//               sm:mt-4
//               text-sm
//               sm:text-base
//               md:text-lg
//               text-[#7B6252]
//               leading-relaxed
//             "
//           >
//             Handpicked favourites, packed fresh and delivered
//             straight to your doorstep.
//           </p>

//         </div>

//         {/* ==========================================
//             PRODUCTS
//         =========================================== */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-3
//             sm:gap-5
//             lg:gap-7
//           "
//         >
//           {products.map((item) => (
//             <div
//               key={item._id}
//               className="
//                 group
//                 relative
//                 bg-white
//                 rounded-[24px]
//                 sm:rounded-[28px]
//                 lg:rounded-[32px]
//                 overflow-hidden
//                 border
//                 border-[#EDE4DA]
//                 shadow-[0_8px_30px_rgba(80,40,10,0.07)]
//                 hover:shadow-[0_18px_45px_rgba(80,40,10,0.14)]
//                 hover:-translate-y-1
//                 transition-all
//                 duration-300
//               "
//             >

//               {/* ======================================
//                   BEST SELLER BADGE
//               ======================================= */}

//               <div
//                 className="
//                   absolute
//                   top-3
//                   left-3
//                   sm:top-4
//                   sm:left-4
//                   z-20
//                   bg-[#9B4D0D]
//                   text-white
//                   px-2.5
//                   py-1
//                   rounded-full
//                   text-[8px]
//                   sm:text-[10px]
//                   font-bold
//                   tracking-wide
//                   shadow-md
//                 "
//               >
//                 BEST SELLER
//               </div>

//               {/* ======================================
//                   PRODUCT IMAGE
//               ======================================= */}

//               <Link to={`/product/${item._id}`}>
//                 <div
//                   className="
//                     relative
//                     bg-[#EFE2C8]
//                     overflow-hidden

//                     h-[165px]
//                     sm:h-[210px]
//                     md:h-[240px]
//                     lg:h-[270px]
//                   "
//                 >

//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="
//                       w-full
//                       h-full
//                       object-cover

//                       group-hover:scale-105

//                       transition-transform
//                       duration-700
//                     "
//                   />

//                   {/* IMAGE OVERLAY */}

//                   <div
//                     className="
//                       absolute
//                       inset-x-0
//                       bottom-0
//                       h-20
//                       bg-gradient-to-t
//                       from-black/15
//                       to-transparent
//                       pointer-events-none
//                     "
//                   />
//                 </div>
//               </Link>

//               {/* ======================================
//                   PRODUCT INFORMATION
//               ======================================= */}

//               <div
//                 className="
//                   p-3
//                   sm:p-4
//                   md:p-5
//                 "
//               >

//                 {/* RATING */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-1.5
//                     mb-2
//                   "
//                 >
//                   <div className="flex items-center gap-0.5">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         size={12}
//                         className="
//                           sm:w-[14px]
//                           sm:h-[14px]
//                           fill-[#E9A72E]
//                           text-[#E9A72E]
//                         "
//                       />
//                     ))}
//                   </div>

//                   <span
//                     className="
//                       text-[10px]
//                       sm:text-xs
//                       font-medium
//                       text-[#7B6252]
//                     "
//                   >
//                     4.8
//                   </span>
//                 </div>

//                 {/* NAME */}

//                 <Link to={`/product/${item._id}`}>
//                   <h3
//                     className="
//                       text-base
//                       sm:text-lg
//                       md:text-xl
//                       font-bold
//                       text-[#2B1408]
//                       line-clamp-1
//                       hover:text-[#9B4D0D]
//                       transition
//                     "
//                   >
//                     {item.name}
//                   </h3>
//                 </Link>

//                 {/* CATEGORY */}

//                 <p
//                   className="
//                     mt-1
//                     text-[10px]
//                     sm:text-xs
//                     md:text-sm
//                     text-[#8B7667]
//                     capitalize
//                   "
//                 >
//                   {item.category}
//                 </p>

//                 {/* ====================================
//                     PRICE + CART
//                 ===================================== */}

//                 <div
//                   className="
//                     flex
//                     items-end
//                     justify-between
//                     gap-2
//                     mt-3
//                     sm:mt-4
//                   "
//                 >

//                   {/* PRICE */}

//                   <div>
//                     <p
//                       className="
//                         text-lg
//                         sm:text-xl
//                         md:text-2xl
//                         font-bold
//                         text-[#9B4D0D]
//                         leading-none
//                       "
//                     >
//                       ₹{item.price}
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[9px]
//                         sm:text-[10px]
//                         text-[#8B7667]
//                       "
//                     >
//                       250gm pack
//                     </p>
//                   </div>

//                   {/* CART BUTTON */}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       addToCart(item);

//                       toast.success(
//                         "Item added to cart. Check your cart.",
//                       );
//                     }}
//                     aria-label={`Add ${item.name} to cart`}
//                     className="
//                       flex
//                       items-center
//                       justify-center

//                       w-10
//                       h-10

//                       sm:w-11
//                       sm:h-11

//                       md:w-12
//                       md:h-12

//                       rounded-full

//                       bg-[#9B4D0D]
//                       text-white

//                       shadow-md

//                       hover:bg-[#7A3A05]
//                       hover:scale-110

//                       active:scale-95

//                       transition-all
//                       duration-200

//                       flex-shrink-0
//                     "
//                   >
//                     <ShoppingCart
//                       size={17}
//                       className="
//                         sm:w-[19px]
//                         sm:h-[19px]
//                       "
//                     />
//                   </button>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ==========================================
//             VIEW ALL
//         =========================================== */}

//         <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">

//           <Link
//             to="/products"
//             className="
//               inline-flex
//               items-center
//               gap-2

//               border
//               border-[#9B4D0D]

//               text-[#9B4D0D]

//               px-6
//               sm:px-8

//               py-2.5
//               sm:py-3

//               rounded-full

//               text-sm
//               sm:text-base

//               font-semibold

//               hover:bg-[#9B4D0D]
//               hover:text-white

//               transition-all
//               duration-300
//             "
//           >
//             Explore All Products

//             <ArrowRight
//               size={17}
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default BestSellers;

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ShoppingCart,
//   Star,
//   ArrowUpRight,
// } from "lucide-react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// function BestSellers() {
//   const { addToCart } = useContext(CartContext);

//   const [products, setProducts] = useState([]);

//   // ==========================================
//   // FETCH PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//         );

//         const bestProducts = data
//           .filter((item) => item.isBestSeller)
//           .slice(0, 8);

//         setProducts(bestProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section
//       className="
//         w-full
//         bg-[#F7F3EE]
//         px-4
//         sm:px-6
//         md:px-12
//         py-14
//         sm:py-16
//         md:py-24
//         overflow-hidden
//       "
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* =====================================================
//             HEADER
//         ====================================================== */}

//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row
//             md:items-end
//             md:justify-between
//             gap-5
//             mb-8
//             sm:mb-10
//             md:mb-14
//           "
//         >

//           {/* LEFT */}

//           <div>

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 mb-3
//               "
//             >
//               <span
//                 className="
//                   w-8
//                   sm:w-10
//                   h-[2px]
//                   bg-[#C28B2C]
//                 "
//               />

//               <p
//                 className="
//                   uppercase
//                   tracking-[3px]
//                   sm:tracking-[4px]
//                   text-[10px]
//                   sm:text-xs
//                   font-bold
//                   text-[#C28B2C]
//                 "
//               >
//                 FarmHills Selection
//               </p>
//             </div>

//             <h2
//               className="
//                 text-4xl
//                 sm:text-5xl
//                 md:text-6xl
//                 font-bold
//                 text-[#2B1408]
//                 leading-[1.05]
//               "
//             >
//               Best
//               <span className="text-[#9B4D0D]">
//                 {" "}Sellers
//               </span>
//             </h2>

//             <p
//               className="
//                 mt-3
//                 sm:mt-4
//                 max-w-xl
//                 text-sm
//                 sm:text-base
//                 md:text-lg
//                 text-[#7B6252]
//                 leading-relaxed
//               "
//             >
//               Our most loved dry fruits, carefully selected
//               for freshness, taste and quality.
//             </p>

//           </div>

//           {/* DESKTOP VIEW ALL */}

//           <Link
//             to="/products"
//             className="
//               hidden
//               md:inline-flex
//               items-center
//               gap-2
//               text-[#9B4D0D]
//               font-semibold
//               border-b-2
//               border-[#9B4D0D]
//               pb-1
//               hover:gap-3
//               transition-all
//             "
//           >
//             View All Products

//             <ArrowUpRight size={18} />
//           </Link>

//         </div>

//         {/* =====================================================
//             PRODUCT GRID
//         ====================================================== */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             lg:grid-cols-4
//             gap-x-3
//             gap-y-6
//             sm:gap-x-5
//             sm:gap-y-8
//             lg:gap-7
//           "
//         >

//           {products.map((item, index) => (
//             <div
//               key={item._id}
//               className="
//                 group
//                 relative
//                 bg-white
//                 rounded-[26px]
//                 sm:rounded-[32px]
//                 overflow-hidden
//                 border
//                 border-[#EDE3D8]
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:shadow-[0_25px_60px_rgba(67,35,12,0.13)]
//               "
//             >

//               {/* =================================================
//                   IMAGE AREA
//               ================================================== */}

//               <Link to={`/product/${item._id}`}>
//                 <div
//                   className="
//                     relative
//                     bg-[#EFE2C8]
//                     h-[185px]
//                     sm:h-[230px]
//                     md:h-[270px]
//                     lg:h-[300px]
//                     overflow-hidden
//                   "
//                 >

//                   {/* IMAGE */}

//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="
//                       w-full
//                       h-full
//                       object-cover
//                       transition-transform
//                       duration-700
//                       group-hover:scale-110
//                     "
//                   />

//                   {/* TOP GRADIENT */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-b
//                       from-black/10
//                       via-transparent
//                       to-black/10
//                       pointer-events-none
//                     "
//                   />

//                   {/* BEST SELLER RIBBON */}

//                   <div
//                     className="
//                       absolute
//                       top-3
//                       left-3
//                       sm:top-4
//                       sm:left-4
//                       bg-white
//                       text-[#9B4D0D]
//                       px-2.5
//                       sm:px-3
//                       py-1
//                       rounded-full
//                       text-[8px]
//                       sm:text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-wide
//                       shadow-sm
//                     "
//                   >
//                     Best Seller
//                   </div>

//                   {/* NUMBER */}

//                   <div
//                     className="
//                       absolute
//                       bottom-3
//                       right-3
//                       sm:bottom-4
//                       sm:right-4
//                       w-8
//                       h-8
//                       sm:w-10
//                       sm:h-10
//                       rounded-full
//                       bg-white/90
//                       backdrop-blur-sm
//                       flex
//                       items-center
//                       justify-center
//                       text-[#9B4D0D]
//                       text-xs
//                       sm:text-sm
//                       font-bold
//                       shadow-sm
//                     "
//                   >
//                     0{index + 1}
//                   </div>

//                 </div>
//               </Link>

//               {/* =================================================
//                   CONTENT
//               ================================================== */}

//               <div
//                 className="
//                   relative
//                   px-3
//                   sm:px-5
//                   pt-4
//                   sm:pt-5
//                   pb-4
//                   sm:pb-5
//                 "
//               >

//                 {/* CATEGORY */}

//                 <p
//                   className="
//                     uppercase
//                     tracking-[1.5px]
//                     text-[8px]
//                     sm:text-[10px]
//                     font-semibold
//                     text-[#C28B2C]
//                     mb-1.5
//                   "
//                 >
//                   {item.category}
//                 </p>

//                 {/* NAME */}

//                 <Link to={`/product/${item._id}`}>
//                   <h3
//                     className="
//                       text-lg
//                       sm:text-xl
//                       md:text-2xl
//                       font-bold
//                       text-[#2B1408]
//                       leading-tight
//                       line-clamp-1
//                       hover:text-[#9B4D0D]
//                       transition-colors
//                     "
//                   >
//                     {item.name}
//                   </h3>
//                 </Link>

//                 {/* RATING */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-1.5
//                     mt-2
//                   "
//                 >
//                   <div className="flex gap-[1px]">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         size={12}
//                         className="
//                           sm:w-[14px]
//                           sm:h-[14px]
//                           fill-[#E9A72E]
//                           text-[#E9A72E]
//                         "
//                       />
//                     ))}
//                   </div>

//                   <span
//                     className="
//                       text-[10px]
//                       sm:text-xs
//                       text-[#8A7566]
//                       font-medium
//                     "
//                   >
//                     4.8
//                   </span>
//                 </div>

//                 {/* =================================================
//                     PRICE + CART
//                 ================================================== */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     mt-4
//                     sm:mt-5
//                   "
//                 >

//                   {/* PRICE */}

//                   <div>
//                     <div
//                       className="
//                         inline-flex
//                         items-baseline
//                         gap-1
//                       "
//                     >
//                       <span
//                         className="
//                           text-xl
//                           sm:text-2xl
//                           md:text-3xl
//                           font-bold
//                           text-[#9B4D0D]
//                         "
//                       >
//                         ₹{item.price}
//                       </span>

//                       <span
//                         className="
//                           text-[9px]
//                           sm:text-xs
//                           text-[#8A7566]
//                         "
//                       >
//                         / 250g
//                       </span>
//                     </div>
//                   </div>

//                   {/* CART */}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       addToCart(item);

//                       toast.success(
//                         "Item added to cart. Check your cart.",
//                       );
//                     }}
//                     aria-label={`Add ${item.name} to cart`}
//                     className="
//                       w-10
//                       h-10
//                       sm:w-12
//                       sm:h-12
//                       rounded-full

//                       bg-[#9B4D0D]
//                       text-white

//                       flex
//                       items-center
//                       justify-center

//                       shadow-md

//                       hover:bg-[#7A3A05]
//                       hover:scale-110

//                       active:scale-95

//                       transition-all
//                       duration-300
//                     "
//                   >
//                     <ShoppingCart
//                       size={17}
//                       className="
//                         sm:w-5
//                         sm:h-5
//                       "
//                     />
//                   </button>

//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//         {/* =====================================================
//             MOBILE VIEW ALL
//         ====================================================== */}

//         <div className="flex justify-center mt-9 sm:mt-11 md:hidden">

//           <Link
//             to="/products"
//             className="
//               flex
//               items-center
//               gap-2
//               px-6
//               py-3
//               rounded-full
//               border
//               border-[#9B4D0D]
//               text-[#9B4D0D]
//               text-sm
//               font-semibold
//               hover:bg-[#9B4D0D]
//               hover:text-white
//               transition
//             "
//           >
//             View All Products

//             <ArrowUpRight size={16} />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default BestSellers;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, ArrowUpRight } from "lucide-react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function BestSellers() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  // ==========================================
  // FETCH PRODUCTS
  // ==========================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );

        const bestProducts = data
          .filter((item) => item.isBestSeller)
          .slice(0, 8);

        setProducts(bestProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section
      className="
        w-full
        bg-[#F5F1EA]
        px-4
        sm:px-6
        md:px-12
        py-14
        sm:py-16
        md:py-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5
            mb-8
            sm:mb-10
            md:mb-14
          "
        >
          {/* LEFT */}

          <div>
           

            {/* CHANGED TO BEST COLLECTION */}

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                text-[#2B1408]
                leading-[1.05]
                text-center
              "
            >
              Our
              <span className="text-[#9B4D0D]"> Products </span>
            </h2>

            <p
              className="
                mt-3
                sm:mt-4
                max-w-xl
                text-sm
                sm:text-base
                md:text-lg
                text-[#7B6252]
                leading-relaxed
                pl-5
                pr-5
                text-center
              "
            >
              Handpicked favourites, packed fresh and delivered
           straight to your doorstep.
            </p>
          </div>

          {/* DESKTOP VIEW ALL */}

          <Link
            to="/products"
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              text-[#9B4D0D]
              font-semibold
              border-b-2
              border-[#9B4D0D]
              pb-1
              hover:gap-3
              transition-all
            "
          >
            View All Products
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-x-3
            gap-y-6
            sm:gap-x-5
            sm:gap-y-8
            lg:gap-7
          "
        >
          {products.map((item) => (
            <div
              key={item._id}
              className="
                group
                relative

                /* ATTRACTIVE CARD COLOR */

                bg-[#FFF9F0]

                rounded-[26px]
                sm:rounded-[32px]

                overflow-hidden

                border
                border-[#E7D3B8]

                shadow-[0_8px_30px_rgba(91,51,20,0.08)]

                hover:border-[#C28B2C]

                hover:shadow-[0_20px_50px_rgba(91,51,20,0.16)]

                hover:-translate-y-2

                transition-all
                duration-500
              "
            >
              {/* =================================================
                  IMAGE AREA
              ================================================== */}

              <Link to={`/product/${item._id}`}>
                <div
                  className="
                    relative

                    /* ATTRACTIVE IMAGE BACKGROUND */

                    bg-gradient-to-br
                    from-[#F5E8D2]
                    via-[#EFE0C5]
                    to-[#E6CFAE]

                    h-[185px]
                    sm:h-[230px]
                    md:h-[270px]
                    lg:h-[300px]

                    overflow-hidden
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-110
                    "
                  />

                  {/* SOFT IMAGE OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#5B3215]/10
                      via-transparent
                      to-white/10
                      pointer-events-none
                    "
                  />

                  {/* BEST COLLECTION BADGE */}

                  <div
                    className="
                      absolute
                      top-3
                      left-3

                      sm:top-4
                      sm:left-4

                      bg-[#9B4D0D]
                      text-white

                      px-2.5
                      sm:px-3

                      py-1

                      rounded-full

                      text-[8px]
                      sm:text-[10px]

                      font-bold
                      uppercase
                      tracking-wide

                      shadow-md
                    "
                  >
                    Best Collection
                  </div>
                </div>
              </Link>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  relative

                  px-3
                  sm:px-5

                  pt-4
                  sm:pt-5

                  pb-4
                  sm:pb-5
                "
              >
                {/* CATEGORY */}

                <p
                  className="
                    uppercase
                    tracking-[1.5px]

                    text-[8px]
                    sm:text-[10px]

                    font-semibold

                    text-[#B77A24]

                    mb-1.5
                  "
                >
                  {item.category}
                </p>

                {/* NAME */}

                <Link to={`/product/${item._id}`}>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      md:text-2xl

                      font-bold

                      text-[#2B1408]

                      leading-tight

                      line-clamp-1

                      hover:text-[#9B4D0D]

                      transition-colors
                    "
                  >
                    {item.name}
                  </h3>
                </Link>

                {/* RATING */}

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    mt-2
                  "
                >
                  <div className="flex gap-[1px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="
                          sm:w-[14px]
                          sm:h-[14px]

                          fill-[#E9A72E]
                          text-[#E9A72E]
                        "
                      />
                    ))}
                  </div>

                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      text-[#8A7566]

                      font-medium
                    "
                  >
                    4.8
                  </span>
                </div>

                {/* =================================================
                    PRICE + CART
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    mt-4
                    sm:mt-5
                  "
                >
                  {/* PRICE */}

                  <div>
                    <div
                      className="
                        inline-flex
                        items-baseline
                        gap-1
                      "
                    >
                      <span
                        className="
                          text-xl
                          sm:text-2xl
                          md:text-3xl

                          font-bold

                          text-[#9B4D0D]
                        "
                      >
                        ₹{item.price}
                      </span>

                      <span
                        className="
                          text-[9px]
                          sm:text-xs

                          text-[#8A7566]
                        "
                      >
                        / 250g
                      </span>
                    </div>
                  </div>

                  {/* CART BUTTON */}

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(item);

                      toast.success("Item added to cart. Check your cart.");
                    }}
                    aria-label={`Add ${item.name} to cart`}
                    className="
                      w-10
                      h-10

                      sm:w-12
                      sm:h-12

                      rounded-full

                      bg-[#9B4D0D]
                      text-white

                      flex
                      items-center
                      justify-center

                      shadow-md

                      hover:bg-[#7A3A05]

                      hover:scale-110

                      active:scale-95

                      transition-all
                      duration-300
                    "
                  >
                    <ShoppingCart
                      size={17}
                      className="
                        sm:w-5
                        sm:h-5
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}

        <div
          className="
            flex
            justify-center
            mt-9
            sm:mt-11
            md:hidden
          "
        >
          <Link
            to="/products"
            className="
              flex
              items-center
              gap-2

              px-6
              py-3

              rounded-full

              border
              border-[#9B4D0D]

              text-[#9B4D0D]

              text-sm

              font-semibold

              hover:bg-[#9B4D0D]
              hover:text-white

              transition
            "
          >
            View All Products
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
