
// // export default BestSellers;
// import React, { useContext } from "react";

// import { Link } from "react-router-dom";

// import { ShoppingCart, Star } from "lucide-react";

// import { CartContext } from "../context/CartContext";

// function BestSellers() {

//   const { addToCart } = useContext(CartContext);

//   const products = [

//     {
//       id: 1,
//       name: "Premium Almonds",
//       price: 499,
//       image:
//         "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop",
//       rating: "4.9",
//       weight: "500g",
//       category: "Dry Fruits",
//       description:
//         "Premium quality almonds packed with nutrition and taste.",
//     },

//     {
//       id: 2,
//       name: "Organic Cashews",
//       price: 699,
//       image:
//         "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
//       rating: "4.8",
//       weight: "500g",
//       category: "Dry Fruits",
//       description:
//         "Crunchy organic cashews with rich creamy flavor.",
//     },

//     {
//       id: 3,
//       name: "Natural Pistachios",
//       price: 899,
//       image:
//         "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=800&auto=format&fit=crop",
//       rating: "4.9",
//       weight: "250g",
//       category: "Dry Fruits",
//       description:
//         "Fresh pistachios loaded with healthy nutrients.",
//     },

//     {
//       id: 4,
//       name: "Golden Raisins",
//       price: 299,
//       image:
//         "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop",
//       rating: "4.7",
//       weight: "500g",
//       category: "Dry Fruits",
//       description:
//         "Sweet and juicy golden raisins for healthy snacking.",
//     },

//   ];

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
//               key={item.id}
//               className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
//             >

//               {/* CLICKABLE PRODUCT AREA */}

//               <Link to={`/product/${item.id}`}>

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

//                     <span className="text-[#7B6252] font-medium">

//                       {item.rating}

//                     </span>

//                   </div>

//                   {/* NAME */}

//                   <h3 className="text-2xl font-semibold text-[#2B1408]">

//                     {item.name}

//                   </h3>

//                   {/* WEIGHT */}

//                   <p className="text-[#7B6252] mt-2">

//                     Pack Size: {item.weight}

//                   </p>

//                 </div>

//               </Link>

//               {/* PRICE + CART BUTTON */}

//               <div className="flex items-center justify-between px-6 pb-6">

//                 {/* PRICE */}

//                 <div>

//                   <p className="text-[#9B4D0D] text-3xl font-bold">

//                     ₹{item.price}

//                   </p>

//                 </div>

//                 {/* ADD TO CART BUTTON */}

//                 <button
//                   onClick={() => addToCart(item)}
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

import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ShoppingCart, Star } from "lucide-react";

import { CartContext } from "../context/CartContext";

import products from "../data/products";

function BestSellers() {

  const { addToCart } = useContext(CartContext);

  return (

    <section className="w-full bg-[#F5F3F0] py-12 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#9B4D0D] mt-2">

              Best Collection

            </h2>

          </div>

          {/* VIEW ALL BUTTON */}

          <Link to="/products">

            <button className="hidden md:block border border-[#9B4D0D] text-[#9B4D0D] px-6 py-3 rounded-full hover:bg-[#9B4D0D] hover:text-white transition">

              View All

            </button>

          </Link>

        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
            >

              {/* CLICKABLE PRODUCT AREA */}

              <Link to={`/product/${item.id}`}>

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

                      {item.rating}

                    </span>

                  </div>

                  {/* NAME */}

                  <h3 className="text-2xl font-semibold text-[#2B1408]">

                    {item.name}

                  </h3>

                  {/* WEIGHT */}

                  <p className="text-[#7B6252] mt-2">

                    Pack Size: {item.weight}

                  </p>

                </div>

              </Link>

              {/* PRICE + CART BUTTON */}

              <div className="flex items-center justify-between px-6 pb-6">

                {/* PRICE */}

                <div>

                  <p className="text-[#9B4D0D] text-3xl font-bold">

                    ₹{item.price}

                  </p>

                </div>

                {/* ADD TO CART BUTTON */}

                <button
                  onClick={() => addToCart(item)}
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

  );
}

export default BestSellers;