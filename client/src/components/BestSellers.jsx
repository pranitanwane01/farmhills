
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Star, ArrowUpRight } from "lucide-react";
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
           

//             {/* CHANGED TO BEST COLLECTION */}

//             <h2
//               className="
//                 text-4xl
//                 sm:text-5xl
//                 md:text-6xl
//                 font-bold
//                 text-[#2B1408]
//                 leading-[1.05]
//                 text-center
//               "
//             >
//               Our
//               <span className="text-[#9B4D0D]"> Products </span>
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
//                 pl-5
//                 pr-5
//                 text-center
//               "
//             >
//               Handpicked favourites, packed fresh and delivered
//            straight to your doorstep.
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
//           {products.map((item) => (
//             <div
//               key={item._id}
//               className="
//                 group
//                 relative

//                 /* ATTRACTIVE CARD COLOR */

//                 bg-[#FFF9F0]

//                 rounded-[26px]
//                 sm:rounded-[32px]

//                 overflow-hidden

//                 border
//                 border-[#E7D3B8]

//                 shadow-[0_8px_30px_rgba(91,51,20,0.08)]

//                 hover:border-[#C28B2C]

//                 hover:shadow-[0_20px_50px_rgba(91,51,20,0.16)]

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

//                     /* ATTRACTIVE IMAGE BACKGROUND */

//                     bg-gradient-to-br
//                     from-[#F5E8D2]
//                     via-[#EFE0C5]
//                     to-[#E6CFAE]

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

//                   {/* SOFT IMAGE OVERLAY */}

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

//                   {/* CART BUTTON */}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       addToCart(item);

//                       toast.success("Item added to cart. Check your cart.");
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
import {
  ShoppingCart,
  Star,
  ArrowUpRight,
} from "lucide-react";
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
        md:px-10
        lg:px-12

        py-12
        sm:py-16
        md:py-20

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
            md:items-center
            md:justify-between

            gap-5

            mb-8
            sm:mb-10
            md:mb-12
          "
        >

          {/* LEFT */}

          <div>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-5xl
                lg:text-6xl

                font-bold

                text-[#2B1408]

                leading-tight

                text-center
                md:text-left
              "
            >
              Our
              <span className="text-[#9B4D0D]">
                {" "}Products
              </span>
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

                text-center
                md:text-left

                px-2
                md:px-0
              "
            >
              Handpicked favourites, packed fresh and
              delivered straight to your doorstep.
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
              duration-300
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

            gap-4

            md:gap-6

            lg:gap-7
          "
        >

          {products.map((item) => (

            <div
              key={item._id}
              className="
                group
                relative

                bg-[#FFF9F0]

                rounded-[24px]
                md:rounded-[28px]

                overflow-hidden

                border
                border-[#E7D3B8]

                shadow-[0_8px_30px_rgba(91,51,20,0.08)]

                hover:border-[#C28B2C]

                hover:shadow-[0_18px_45px_rgba(91,51,20,0.16)]

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

                    bg-gradient-to-br
                    from-[#F5E8D2]
                    via-[#EFE0C5]
                    to-[#E6CFAE]

                    h-[185px]

                    sm:h-[230px]

                    md:h-[230px]

                    lg:h-[240px]

                    xl:h-[260px]

                    overflow-hidden
                  "
                >

                  {/* PRODUCT IMAGE */}

                  <img
                    src={item.image}
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

                  {/* SOFT OVERLAY */}

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

                {/* PRODUCT NAME */}

                <Link to={`/product/${item._id}`}>

                  <h3
                    className="
                      text-base

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

                    {[1, 2, 3, 4, 5].map(
                      (star) => (
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
                      ),
                    )}

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
                          text-lg

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

                      toast.success(
                        "Item added to cart. Check your cart.",
                      );
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