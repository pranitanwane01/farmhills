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
//         bg-[#F5F1EA]

//         px-4
//         sm:px-6
//         md:px-10
//         lg:px-12

//         py-12
//         sm:py-16
//         md:py-20

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
//             md:items-center
//             md:justify-between

//             gap-5

//             mb-8
//             sm:mb-10
//             md:mb-12
//           "
//         >

//           {/* LEFT */}

//           <div>

//             <h2
//               className="
//                 text-4xl
//                 sm:text-5xl
//                 md:text-5xl
//                 lg:text-6xl

//                 font-bold

//                 text-[#2B1408]

//                 leading-tight

//                 text-center
//                 md:text-left
//               "
//             >
//               Our
//               <span className="text-[#9B4D0D]">
//                 {" "}Products
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

//                 text-center
//                 md:text-left

//                 px-2
//                 md:px-0
//               "
//             >
//               Handpicked favourites, packed fresh and
//               delivered straight to your doorstep.
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
//               duration-300
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

//             md:grid-cols-3

//             xl:grid-cols-4

//             gap-4

//             md:gap-6

//             lg:gap-7
//           "
//         >

//           {products.map((item) => (

//             <div
//               key={item._id}
//               className="
//                 group
//                 relative

//                 bg-[#FFF9F0]

//                 rounded-[24px]
//                 md:rounded-[28px]

//                 overflow-hidden

//                 border
//                 border-[#E7D3B8]

//                 shadow-[0_8px_30px_rgba(91,51,20,0.08)]

//                 hover:border-[#C28B2C]

//                 hover:shadow-[0_18px_45px_rgba(91,51,20,0.16)]

//                 hover:-translate-y-2

//                 transition-all
//                 duration-500
//               "
//             >

//               {/* =================================================
//                   IMAGE AREA
//               ================================================== */}

//               <Link to={`/product/${item._id}`}>

//                 <div
//                   className="
//                     relative

//                     bg-gradient-to-br
//                     from-[#F5E8D2]
//                     via-[#EFE0C5]
//                     to-[#E6CFAE]

//                     h-[185px]

//                     sm:h-[230px]

//                     md:h-[230px]

//                     lg:h-[240px]

//                     xl:h-[260px]

//                     overflow-hidden
//                   "
//                 >

//                   {/* PRODUCT IMAGE */}

//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="
//                       w-full
//                       h-full

//                       object-cover

//                       transition-transform
//                       duration-700

//                       group-hover:scale-[1.08]
//                     "
//                   />

//                   {/* SOFT OVERLAY */}

//                   <div
//                     className="
//                       absolute
//                       inset-0

//                       bg-gradient-to-t
//                       from-[#5B3215]/10
//                       via-transparent
//                       to-white/10

//                       pointer-events-none
//                     "
//                   />

//                   {/* BEST COLLECTION BADGE */}

//                   <div
//                     className="
//                       absolute

//                       top-3
//                       left-3

//                       sm:top-4
//                       sm:left-4

//                       bg-[#9B4D0D]

//                       text-white

//                       px-2.5
//                       sm:px-3

//                       py-1

//                       rounded-full

//                       text-[8px]
//                       sm:text-[10px]

//                       font-bold

//                       uppercase

//                       tracking-wide

//                       shadow-md
//                     "
//                   >
//                     Best Collection
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

//                     text-[#B77A24]

//                     mb-1.5
//                   "
//                 >
//                   {item.category}
//                 </p>

//                 {/* PRODUCT NAME */}

//                 <Link to={`/product/${item._id}`}>

//                   <h3
//                     className="
//                       text-base

//                       sm:text-lg

//                       md:text-xl

//                       lg:text-[22px]

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

//                     {[1, 2, 3, 4, 5].map(
//                       (star) => (
//                         <Star
//                           key={star}
//                           size={12}
//                           className="
//                             sm:w-[14px]
//                             sm:h-[14px]

//                             fill-[#E9A72E]
//                             text-[#E9A72E]
//                           "
//                         />
//                       ),
//                     )}

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
//                           text-lg

//                           sm:text-xl

//                           md:text-2xl

//                           lg:text-[30px]

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

//         <div
//           className="
//             flex
//             justify-center

//             mt-9
//             sm:mt-11

//             md:hidden
//           "
//         >

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

  // =====================================================
  // FETCH PRODUCTS
  // =====================================================

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
        console.log("Best Sellers Error:", error);
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
        md:px-10
        lg:px-12

       pt-12
sm:pt-10
md:pt-20

        pb-12
        sm:pb-12
        md:pb-24

        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
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

            gap-6

            mb-11
            sm:mb-12
            md:mb-14
          "
        >
          {/* =====================================================
              TITLE + DESCRIPTION
          ====================================================== */}

          <div
            className="
              w-full
            "
          >
            {/* SMALL DECORATIVE LINE */}

            <div
              className="
                flex
                items-center
                justify-center
                md:justify-start
                gap-2
                mb-3
              "
            >
              <span
                className="
                  w-8
                  h-[2px]
                  bg-[#C28B2C]
                  rounded-full
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#B77A24]
                "
              >
                FarmHills Collection
              </span>

              <span
                className="
                  w-8
                  h-[2px]
                  bg-[#C28B2C]
                  rounded-full
                "
              />
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-[32px]
                sm:text-5xl
                md:text-5xl
                lg:text-6xl

                font-bold

                text-[#64290a]

                leading-[1.05]

                text-center
                md:text-left
              "
            >
              Our{" "}
              <span
                className="
                  text-[#9B4D0D]
                "
              >
                Products
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4

                sm:mt-4

                max-w-[320px]
                sm:max-w-xl

                mx-auto
                md:mx-0

                text-[13px]
                sm:text-base
                md:text-lg

                text-[#aa673e]

                leading-relaxed

                text-center
                md:text-left
              "
            >
              Handpicked favourites, packed fresh and delivered straight to your
              doorstep.
            </p>
          </div>

          {/* =====================================================
              DESKTOP VIEW ALL
          ====================================================== */}

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
              duration-300

              whitespace-nowrap
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

            md:grid-cols-3

            xl:grid-cols-4

            gap-x-4
            gap-y-6

            sm:gap-x-5
            sm:gap-y-8

            md:gap-6

            lg:gap-7
          "
        >
          {products.map((item) => {
            const productImage =
              item.images?.length > 0 ? item.images[0] : item.image;

            return (
              <div
                key={item._id}
                className="
                    group
                    relative

                    bg-[#FFF9F0]

                    rounded-[22px]
                    sm:rounded-[26px]
                    md:rounded-[28px]

                    overflow-hidden

                    border
                    border-[#E7D3B8]

                    shadow-[0_8px_30px_rgba(91,51,20,0.08)]

                    hover:border-[#C28B2C]

                    hover:shadow-[0_18px_45px_rgba(91,51,20,0.16)]

                    md:hover:-translate-y-2

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

                        bg-gradient-to-br
                        from-[#F5E8D2]
                        via-[#EFE0C5]
                        to-[#E6CFAE]

                        h-[155px]

                        sm:h-[210px]

                        md:h-[230px]

                        lg:h-[240px]

                        xl:h-[260px]

                        overflow-hidden
                      "
                  >
                    {/* PRODUCT IMAGE */}

                    <img
                      src={productImage}
                      alt={item.name}
                      className="
                          w-full
                          h-full

                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-[1.08]
                        "
                    />

                    {/* SOFT IMAGE OVERLAY */}

                    <div
                      className="
                          absolute
                          inset-0

                          bg-gradient-to-t
                          from-[#5B3215]/15
                          via-transparent
                          to-white/10

                          pointer-events-none
                        "
                    />

                    {/* =================================================
                          BEST COLLECTION BADGE
                      ================================================== */}

                    <div
                      className="
                          absolute

                          top-2.5
                          left-2.5

                          sm:top-4
                          sm:left-4

                          bg-[#9B4D0D]

                          text-white

                          px-2
                          sm:px-3

                          py-1

                          rounded-full

                          text-[7px]
                          sm:text-[10px]

                          font-bold

                          uppercase

                          tracking-wide

                          shadow-md
                        "
                    >
                      Best Collection
                    </div>

                    {/* =================================================
                          IMAGE BOTTOM FADE
                      ================================================== */}

                    <div
                      className="
                          absolute
                          bottom-0
                          left-0
                          right-0

                          h-10

                          bg-gradient-to-t
                          from-black/10
                          to-transparent

                          pointer-events-none
                        "
                    />
                  </div>
                </Link>

                {/* =================================================
                      PRODUCT CONTENT
                  ================================================== */}

                <div
                  className="
                      relative

                      px-3
                      sm:px-5

                      pt-3.5
                      sm:pt-5

                      pb-4
                      sm:pb-5
                    "
                >
                  {/* =================================================
                        CATEGORY
                    ================================================== */}

                  <p
                    className="
                        uppercase

                        tracking-[1.3px]

                        text-[7px]
                        sm:text-[10px]

                        font-semibold

                        text-[#B77A24]

                        mb-1.5
                      "
                  >
                    {item.category}
                  </p>

                  {/* =================================================
                        PRODUCT NAME
                    ================================================== */}

                  <Link to={`/product/${item._id}`}>
                    <h3
                      className="
                          text-[14px]

                          sm:text-lg

                          md:text-xl

                          lg:text-[22px]

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

                  {/* =================================================
                        RATING
                    ================================================== */}

                  <div
                    className="
                        flex
                        items-center
                        gap-1.5

                        mt-2
                      "
                  >
                    <div
                      className="
                          flex
                          gap-[1px]
                        "
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={11}
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
                          text-[9px]
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

                        mt-3.5
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
                              text-[17px]

                              sm:text-xl

                              md:text-2xl

                              lg:text-[30px]

                              font-bold

                              text-[#9B4D0D]
                            "
                        >
                          ₹{item.price}
                        </span>

                        <span
                          className="
                              text-[8px]

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
                          w-9
                          h-9

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
                        size={15}
                        className="
                            sm:w-5
                            sm:h-5
                          "
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}

        <div
          className="
            flex
            justify-center

            mt-10

            sm:mt-11

            md:hidden
          "
        >
          <Link
            to="/products"
            className="
              flex
              items-center
              justify-center

              gap-2

              px-7
              py-3

              rounded-full

              border
              border-[#9B4D0D]

              text-[#9B4D0D]

              text-sm

              font-semibold

              bg-white/40

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
