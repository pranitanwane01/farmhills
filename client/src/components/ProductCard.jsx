

// import React, { useContext, useState } from "react";

// import { Link } from "react-router-dom";

// import { CartContext } from "../context/CartContext";

// import toast from "react-hot-toast";

// function ProductCard({ product }) {

//   const { addToCart } =
//     useContext(CartContext);

//   // DEFAULT WEIGHT
//   const [selectedWeight, setSelectedWeight] =
//     useState("250g");

//   // DYNAMIC PRICE
//   const prices = {
//     "250g": product.price,
//     "500g": product.price * 2,
//     "1kg": product.price * 4,
//   };

//   return (

//     <Link to={`/product/${product._id || product.id}`}>

//       <div className="relative border rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white group cursor-pointer overflow-hidden">

//         {/* DISCOUNT BADGE */}
//         <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">

//           20% OFF

//         </div>

//         {/* PRODUCT IMAGE */}
//         <div className="overflow-hidden rounded-2xl bg-[#F5F3F0]">

//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
//           />

//         </div>

//         {/* PRODUCT CONTENT */}
//         <div className="mt-5">

//           {/* CATEGORY */}
//           <p className="text-sm uppercase tracking-widest text-[#9B4D0D] font-semibold">

//             {product.category}

//           </p>

//           {/* NAME */}
//           <h2 className="text-2xl font-bold text-[#2B1408] mt-2">

//             {product.name}

//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-[#7B6252] mt-2 line-clamp-2 text-sm">

//             {product.description}

//           </p>

//           {/* RATING */}
//           <div className="flex items-center gap-2 mt-3">

//             <span className="text-yellow-500 text-lg">
//               ⭐
//             </span>

//             <span className="font-medium text-gray-700">
//               4.8 Rating
//             </span>

//           </div>

//           {/* WEIGHT SELECTOR */}
//           <div className="flex gap-2 mt-4">

//             {["250g", "500g", "1kg"].map((weight) => (

//               <button
//                 key={weight}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelectedWeight(weight);
//                 }}
//                 className={`px-3 py-1 rounded-full border text-sm font-medium transition ${
//                   selectedWeight === weight
//                     ? "bg-[#9B4D0D] text-white border-[#9B4D0D]"
//                     : "bg-white text-[#9B4D0D] border-[#9B4D0D]"
//                 }`}
//               >

//                 {weight}

//               </button>
//             ))}

//           </div>

//           {/* STOCK */}
//           <p className="text-green-600 text-sm font-medium mt-3">

//             ✔ In Stock

//           </p>

//           {/* PRICE + BUTTON */}
//           <div className="mt-5">

//             <div className="flex items-center justify-between">

//               <div>

//                 <p className="text-gray-400 line-through text-sm">

//                   ₹{prices[selectedWeight] + 50}

//                 </p>

//                 <p className="text-3xl font-bold text-[#9B4D0D]">

//                   ₹{prices[selectedWeight]}

//                 </p>

//               </div>

//             </div>

//             {/* BUTTON */}
//             <button
//               onClick={(e) => {

//                 e.preventDefault();

//                 addToCart({
//                   ...product,
//                   selectedWeight,
//                   price:
//                     prices[selectedWeight],
//                 });
//                 toast.success("Item added to cart. Check your cart.");

//               }}
//               className="w-full mt-5 bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-3 rounded-2xl font-semibold text-lg transition duration-300"
//             >

//               Add To Cart

//             </button>

//           </div>

//         </div>

//       </div>

//     </Link>
//   );
// }

// export default ProductCard;



import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  // ==========================================
  // SELECTED WEIGHT
  // ==========================================

  const [selectedWeight, setSelectedWeight] =
    useState("250g");

  // ==========================================
  // DYNAMIC PRICE
  // ==========================================

  const prices = {
    "250g": product.price,
    "500g": product.price * 2,
    "1kg": product.price * 4,
  };

  // ==========================================
  // ADD TO CART
  // ==========================================

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedWeight,
      price: prices[selectedWeight],
    });

    toast.success(
      "Item added to cart. Check your cart.",
    );
  };

  return (
    <div
      className="
        relative

        bg-[#FFF9F0]

        border
        border-[#E7D3B8]

        rounded-[22px]
        sm:rounded-[26px]
        md:rounded-[30px]

        overflow-hidden

        shadow-[0_6px_25px_rgba(91,51,20,0.07)]

        hover:shadow-[0_18px_45px_rgba(91,51,20,0.14)]

        hover:-translate-y-1
        md:hover:-translate-y-2

        transition-all
        duration-500

        group
      "
    >
      {/* ==========================================
          DISCOUNT BADGE
      =========================================== */}

      <div
        className="
          absolute

          top-3
          left-3

          sm:top-4
          sm:left-4

          bg-[#C94B35]

          text-white

          text-[9px]
          sm:text-xs

          px-2.5
          sm:px-3

          py-1

          rounded-full

          font-semibold

          z-20

          shadow-md
        "
      >
        20% OFF
      </div>

      {/* ==========================================
          PRODUCT IMAGE
      =========================================== */}

      <Link
        to={`/product/${product._id || product.id}`}
      >
        <div
          className="
            relative

            overflow-hidden

            bg-[#F5F3F0]

            h-[170px]

            sm:h-[210px]

            md:h-[250px]

            lg:h-[270px]
          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-full

              object-cover

              transition-transform
              duration-700

              group-hover:scale-[1.08]
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/10
              via-transparent
              to-white/10

              pointer-events-none
            "
          />
        </div>
      </Link>

      {/* ==========================================
          PRODUCT CONTENT
      =========================================== */}

      <div
        className="
          p-4
          sm:p-5
          md:p-6
        "
      >
        {/* CATEGORY */}

        <p
          className="
            text-[8px]
            sm:text-[10px]

            uppercase

            tracking-[1.5px]

            text-[#9B4D0D]

            font-semibold
          "
        >
          {product.category}
        </p>

        {/* NAME */}

        <Link
          to={`/product/${product._id || product.id}`}
        >
          <h2
            className="
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl

              font-bold

              text-[#2B1408]

              mt-1.5
              sm:mt-2

              leading-tight

              line-clamp-1

              hover:text-[#9B4D0D]

              transition-colors
            "
          >
            {product.name}
          </h2>
        </Link>

        {/* DESCRIPTION */}

        <p
          className="
            text-[#7B6252]

            mt-2

            text-xs
            sm:text-sm

            leading-relaxed

            line-clamp-2
          "
        >
          {product.description}
        </p>

        {/* ========================================
            RATING
        ========================================= */}

        <div
          className="
            flex
            items-center
            gap-1.5

            mt-3
          "
        >
          <span
            className="
              text-yellow-500

              text-sm
              sm:text-lg
            "
          >
            ⭐
          </span>

          <span
            className="
              font-medium

              text-gray-700

              text-xs
              sm:text-sm
            "
          >
            4.8 Rating
          </span>
        </div>

        {/* ========================================
            WEIGHT SELECTOR
        ========================================= */}

        <div
          className="
            flex
            gap-1.5
            sm:gap-2

            mt-4

            overflow-x-auto

            scrollbar-hide

            pb-1
          "
        >
          {["250g", "500g", "1kg"].map(
            (weight) => (
              <button
                key={weight}
                type="button"
                onClick={() =>
                  setSelectedWeight(weight)
                }
                className={`
                  flex-shrink-0

                  px-3
                  sm:px-4

                  py-1.5
                  sm:py-2

                  rounded-full

                  border

                  text-[10px]
                  sm:text-xs

                  font-semibold

                  transition-all
                  duration-300

                  ${
                    selectedWeight === weight
                      ? "bg-[#9B4D0D] text-white border-[#9B4D0D] shadow-sm"
                      : "bg-white text-[#9B4D0D] border-[#D8C2A7] hover:bg-[#FFF4E5]"
                  }
                `}
              >
                {weight}
              </button>
            ),
          )}
        </div>

        {/* ========================================
            STOCK
        ========================================= */}

        <p
          className="
            text-green-600

            text-[10px]
            sm:text-sm

            font-medium

            mt-3
          "
        >
          ✔ In Stock
        </p>

        {/* ========================================
            PRICE
        ========================================= */}

        <div
          className="
            mt-4
            sm:mt-5
          "
        >
          <p
            className="
              text-gray-400

              line-through

              text-xs
              sm:text-sm
            "
          >
            ₹{prices[selectedWeight] + 50}
          </p>

          <div
            className="
              flex
              items-center
              justify-between

              gap-3

              mt-0.5
            "
          >
            <div
              className="
                flex
                items-baseline

                gap-1
              "
            >
              <p
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl

                  font-bold

                  text-[#9B4D0D]
                "
              >
                ₹{prices[selectedWeight]}
              </p>

              <span
                className="
                  text-[8px]
                  sm:text-xs

                  text-[#7B6252]
                "
              >
                / {selectedWeight}
              </span>
            </div>
          </div>
        </div>

        {/* ========================================
            ADD TO CART
        ========================================= */}

        <button
          type="button"
          onClick={handleAddToCart}
          className="
            w-full

            mt-4
            sm:mt-5

            bg-[#9B4D0D]

            hover:bg-[#7A3A05]

            text-white

            py-2.5
            sm:py-3

            rounded-xl
            sm:rounded-2xl

            font-semibold

            text-sm
            sm:text-base
            md:text-lg

            shadow-md

            hover:shadow-lg

            active:scale-[0.98]

            transition-all
            duration-300
          "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;