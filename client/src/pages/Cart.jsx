// import React, { useContext } from "react";

// import {
//   Trash2,
//   Plus,
//   Minus,
//   ShoppingBag,
//   ArrowRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const {
//     cartItems,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//   } = useContext(CartContext);

//   // ==========================================
//   // TOTAL ITEMS
//   // ==========================================

//   const totalItems = cartItems.reduce(
//     (acc, item) => acc + item.quantity,
//     0
//   );

//   // ==========================================
//   // TOTAL PRICE
//   // ==========================================

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   // ==========================================
//   // EMPTY CART
//   // ==========================================

//   if (cartItems.length === 0) {
//     return (
//       <section
//         className="
//           min-h-screen
//           flex
//           items-center
//           justify-center
//           bg-[#F5F3F0]
//           px-4
//           sm:px-6
//         "
//       >
//         <div
//           className="
//             text-center
//             bg-white
//             rounded-[28px]
//             p-8
//             sm:p-12
//             shadow-lg
//             border
//             border-[#E7D3B8]
//             max-w-md
//             w-full
//           "
//         >
//           <div
//             className="
//               w-16
//               h-16
//               sm:w-20
//               sm:h-20
//               mx-auto
//               rounded-full
//               bg-[#EFE2C8]
//               flex
//               items-center
//               justify-center
//               text-[#9B4D0D]
//               mb-5
//             "
//           >
//             <ShoppingBag
//               size={32}
//               className="sm:w-10 sm:h-10"
//             />
//           </div>

//           <h1
//             className="
//               text-2xl
//               sm:text-3xl
//               font-bold
//               text-[#2B1408]
//             "
//           >
//             Your Cart Is Empty
//           </h1>

//           <p
//             className="
//               text-[#7B6252]
//               text-sm
//               sm:text-base
//               mt-3
//             "
//           >
//             Looks like you haven't added anything
//             to your cart yet.
//           </p>

//           <Link to="/products">
//             <button
//               className="
//                 mt-6
//                 px-6
//                 sm:px-8
//                 py-3
//                 rounded-full
//                 bg-[#9B4D0D]
//                 hover:bg-[#7A3A05]
//                 text-white
//                 text-sm
//                 sm:text-base
//                 font-semibold
//                 transition
//               "
//             >
//               Continue Shopping
//             </button>
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       className="
//         min-h-screen
//         bg-[#F5F3F0]

//         px-3
//         sm:px-6
//         md:px-10
//         lg:px-12

//         py-6
//         sm:py-10
//         md:py-16
//       "
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ==========================================
//             TITLE
//         =========================================== */}

//         <div className="mb-5 sm:mb-10">

//           <p
//             className="
//               text-[#9B4D0D]
//               uppercase
//               tracking-[2.5px]
//               sm:tracking-[3px]
//               text-[10px]
//               sm:text-sm
//               font-semibold
//             "
//           >
//             Your Shopping Bag
//           </p>

//           <h1
//             className="
//               text-2xl
//               sm:text-4xl
//               md:text-5xl
//               font-bold
//               text-[#2B1408]
//               mt-1
//               sm:mt-2
//             "
//           >
//             Shopping Cart
//           </h1>

//           <p
//             className="
//               text-[#7B6252]
//               text-xs
//               sm:text-base
//               mt-1
//               sm:mt-2
//             "
//           >
//             {totalItems}{" "}
//             {totalItems === 1 ? "item" : "items"}{" "}
//             in your cart
//           </p>

//         </div>

//         {/* ==========================================
//             MAIN LAYOUT
//         =========================================== */}

//         <div
//           className="
//             grid
//             grid-cols-1
//             lg:grid-cols-3
//             gap-4
//             sm:gap-8
//             lg:gap-10
//           "
//         >

//           {/* ========================================
//               CART ITEMS
//           ========================================= */}

//           <div
//             className="
//               lg:col-span-2
//               space-y-3
//               sm:space-y-5
//             "
//           >

//             {cartItems.map((item) => (

//               <div
//                 key={item._id}
//                 className="
//                   bg-white

//                   rounded-[18px]
//                   sm:rounded-[28px]

//                   p-2.5
//                   sm:p-5
//                   md:p-6

//                   shadow-[0_4px_18px_rgba(91,51,20,0.06)]

//                   border
//                   border-[#E7D3B8]

//                   flex
//                   flex-col
//                   sm:flex-row

//                   gap-3
//                   sm:gap-5
//                   md:gap-6
//                 "
//               >

//                 {/* ==================================
//                     IMAGE
//                 =================================== */}

//                 <Link
//                   to={`/product/${item._id}`}
//                   className="
//                     flex-shrink-0
//                     block
//                   "
//                 >
//                   <img
//   src={item.image}
//   alt={item.name}
//   className="
//     w-full
//     h-[125px]

//     sm:w-36
//     sm:h-36

//     md:w-40
//     md:h-40

//     object-cover
//     object-center

//     rounded-[14px]
//     sm:rounded-[20px]

//     bg-[#EFE2C8]

//     transition-transform
//     duration-300

//     hover:scale-[1.03]
//   "
// />
//                 </Link>

//                 {/* ==================================
//                     CONTENT
//                 =================================== */}

//                 <div className="flex-1 min-w-0">

//                   {/* NAME */}

//                   <Link
//                     to={`/product/${item._id}`}
//                   >
//                     <h2
//                       className="
//                         text-base
//                         sm:text-2xl
//                         md:text-3xl

//                         font-bold

//                         text-[#2B1408]

//                         leading-tight

//                         hover:text-[#9B4D0D]

//                         transition-colors

//                         line-clamp-2
//                       "
//                     >
//                       {item.name}
//                     </h2>
//                   </Link>

//                   {/* CATEGORY */}

//                   <p
//                     className="
//                       text-[#7B6252]

//                       text-[10px]
//                       sm:text-sm

//                       mt-1
//                     "
//                   >
//                     {item.category}
//                   </p>

//                   {/* PRICE */}

//                   <h3
//                     className="
//                       text-lg
//                       sm:text-2xl
//                       md:text-3xl

//                       font-bold

//                       text-[#9B4D0D]

//                       mt-2
//                       sm:mt-3
//                     "
//                   >
//                     ₹{item.price}
//                   </h3>

//                   {/* =================================
//                       QUANTITY + DELETE
//                   ================================== */}

//                   <div
//                     className="
//                       flex
//                       items-center
//                       justify-between

//                       mt-3
//                       sm:mt-4
//                     "
//                   >

//                     {/* QUANTITY */}

//                     <div
//                       className="
//                         flex
//                         items-center
//                         gap-2
//                         sm:gap-4
//                       "
//                     >

//                       {/* DECREASE */}

//                       <button
//                         type="button"
//                         onClick={() =>
//                           decreaseQuantity(item._id)
//                         }
//                         className="
//                           w-7
//                           h-7

//                           sm:w-9
//                           sm:h-9

//                           rounded-full

//                           bg-[#EFE2C8]

//                           hover:bg-[#E3D0AF]

//                           text-[#2B1408]

//                           flex
//                           items-center
//                           justify-center

//                           transition
//                         "
//                       >
//                         <Minus
//                           size={13}
//                           className="sm:w-[17px]"
//                         />
//                       </button>

//                       {/* QUANTITY */}

//                       <span
//                         className="
//                           min-w-[20px]

//                           text-center

//                           text-sm
//                           sm:text-lg

//                           font-semibold

//                           text-[#2B1408]
//                         "
//                       >
//                         {item.quantity}
//                       </span>

//                       {/* INCREASE */}

//                       <button
//                         type="button"
//                         onClick={() =>
//                           increaseQuantity(item._id)
//                         }
//                         className="
//                           w-7
//                           h-7

//                           sm:w-9
//                           sm:h-9

//                           rounded-full

//                           bg-[#EFE2C8]

//                           hover:bg-[#E3D0AF]

//                           text-[#2B1408]

//                           flex
//                           items-center
//                           justify-center

//                           transition
//                         "
//                       >
//                         <Plus
//                           size={13}
//                           className="sm:w-[17px]"
//                         />
//                       </button>

//                     </div>

//                     {/* REMOVE */}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         removeFromCart(item._id)
//                       }
//                       aria-label={`Remove ${item.name} from cart`}
//                       className="
//                         w-8
//                         h-8

//                         sm:w-10
//                         sm:h-10

//                         rounded-full

//                         bg-red-50

//                         text-red-500

//                         hover:bg-red-100

//                         hover:text-red-700

//                         flex
//                         items-center
//                         justify-center

//                         transition
//                       "
//                     >
//                       <Trash2
//                         size={16}
//                         className="sm:w-5 sm:h-5"
//                       />
//                     </button>

//                   </div>

//                   {/* ITEM TOTAL */}

//                   <p
//                     className="
//                       text-[#7B6252]

//                       text-[10px]
//                       sm:text-sm

//                       mt-2
//                       sm:mt-3
//                     "
//                   >
//                     Item total:{" "}
//                     <span
//                       className="
//                         font-semibold
//                         text-[#2B1408]
//                       "
//                     >
//                       ₹{item.price * item.quantity}
//                     </span>
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>

//           {/* ========================================
//               ORDER SUMMARY
//           ========================================= */}

//           <div
//             className="
//               bg-white

//               rounded-[20px]
//               sm:rounded-[28px]

//               p-3.5
//               sm:p-6
//               md:p-8

//               shadow-[0_6px_25px_rgba(91,51,20,0.07)]

//               border
//               border-[#E7D3B8]

//               h-fit

//               lg:sticky
//               lg:top-24
//             "
//           >

//             <h2
//               className="
//                 text-xl
//                 sm:text-3xl

//                 font-bold

//                 text-[#2B1408]

//                 mb-3
//                 sm:mb-8
//               "
//             >
//               Order Summary
//             </h2>

//             {/* TOTAL ITEMS */}

//             <div
//               className="
//                 flex
//                 justify-between
//                 items-center

//                 text-xs
//                 sm:text-base

//                 mb-3
//                 sm:mb-4
//               "
//             >
//               <span className="text-[#7B6252]">
//                 Total Items
//               </span>

//               <span
//                 className="
//                   font-semibold
//                   text-[#2B1408]
//                 "
//               >
//                 {totalItems}
//               </span>
//             </div>

//             {/* SUBTOTAL */}

//             <div
//               className="
//                 flex
//                 justify-between
//                 items-center

//                 text-xs
//                 sm:text-base

//                 pb-4
//                 sm:pb-5

//                 mb-4
//                 sm:mb-5

//                 border-b
//                 border-[#E7D3B8]
//               "
//             >
//               <span className="text-[#7B6252]">
//                 Subtotal
//               </span>

//               <span
//                 className="
//                   font-semibold
//                   text-[#2B1408]
//                 "
//               >
//                 ₹{totalPrice}
//               </span>
//             </div>

//             {/* TOTAL PRICE */}

//             <div
//               className="
//                 flex
//                 justify-between
//                 items-center

//                 mb-4
//                 sm:mb-6
//               "
//             >
//               <span
//                 className="
//                   text-base
//                   sm:text-xl

//                   font-bold

//                   text-[#2B1408]
//                 "
//               >
//                 Total Price
//               </span>

//               <span
//                 className="
//                   text-lg
//                   sm:text-2xl

//                   font-bold

//                   text-[#9B4D0D]
//                 "
//               >
//                 ₹{totalPrice}
//               </span>
//             </div>

//             {/* CHECKOUT */}

//             <Link
//               to="/checkout"
//               className="block"
//             >
//               <button
//                 className="
//                   w-full

//                   bg-[#9B4D0D]

//                   hover:bg-[#7A3A05]

//                   text-white

//                   py-3
//                   sm:py-4

//                   rounded-full

//                   text-sm
//                   sm:text-lg

//                   font-semibold

//                   flex
//                   items-center
//                   justify-center

//                   gap-2

//                   shadow-md

//                   hover:shadow-lg

//                   transition-all
//                   duration-300
//                 "
//               >
//                 Proceed To Checkout

//                 <ArrowRight
//                   size={17}
//                   className="sm:w-5 sm:h-5"
//                 />
//               </button>
//             </Link>

//             {/* CONTINUE SHOPPING */}

//             <Link
//               to="/products"
//               className="
//                 block

//                 text-center

//                 text-[#9B4D0D]

//                 text-xs
//                 sm:text-base

//                 font-medium

//                 mt-3
//                 sm:mt-4

//                 hover:underline
//               "
//             >
//               Continue Shopping
//             </Link>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Cart;


import React, { useContext } from "react";

import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // ==========================================
  // TOTAL ITEMS
  // ==========================================

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // ==========================================
  // TOTAL PRICE
  // ==========================================

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ==========================================
  // EMPTY CART
  // ==========================================

  if (cartItems.length === 0) {
    return (
      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#F5F3F0]
          px-4
          sm:px-6
          py-10
        "
      >
        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-[28px]
            p-8
            sm:p-12
            text-center
            shadow-[0_8px_30px_rgba(91,51,20,0.08)]
            border
            border-[#E7D3B8]
          "
        >
          <div
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              mx-auto
              rounded-full
              bg-[#EFE2C8]
              text-[#9B4D0D]
              flex
              items-center
              justify-center
              mb-5
            "
          >
            <ShoppingBag
              size={32}
              className="sm:w-10 sm:h-10"
            />
          </div>

          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#2B1408]
            "
          >
            Your Cart Is Empty
          </h1>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              leading-relaxed
              text-[#7B6252]
            "
          >
            Looks like you haven't added anything
            to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block"
          >
            <button
              className="
                mt-6
                px-7
                sm:px-8
                py-3
                rounded-full
                bg-[#9B4D0D]
                hover:bg-[#7A3A05]
                text-white
                text-sm
                sm:text-base
                font-semibold
                shadow-md
                transition-all
                duration-300
              "
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        min-h-screen
        bg-[#F5F3F0]

        px-3
        sm:px-6
        md:px-10
        lg:px-12

        pt-6
        sm:pt-10
        md:pt-16

        pb-10
        sm:pb-12
        md:pb-16
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div
          className="
            mb-5
            sm:mb-8
            md:mb-10
          "
        >
          <p
            className="
              text-[#9B4D0D]
              uppercase
              tracking-[2.5px]
              sm:tracking-[3px]
              text-[10px]
              sm:text-sm
              font-semibold
            "
          >
            Your Shopping Bag
          </p>

          <h1
            className="
              mt-1
              sm:mt-2

              text-[26px]
              sm:text-4xl
              md:text-5xl

              font-bold
              leading-tight

              text-[#2B1408]
            "
          >
            Shopping Cart
          </h1>

          <p
            className="
              mt-1
              sm:mt-2

              text-xs
              sm:text-base

              text-[#7B6252]
            "
          >
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"}{" "}
            in your cart
          </p>
        </div>

        {/* =====================================================
            MAIN CART LAYOUT
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3

            gap-4
            sm:gap-7
            lg:gap-10
          "
        >

          {/* ===================================================
              CART PRODUCTS
          ==================================================== */}

          <div
            className="
              lg:col-span-2

              space-y-4
              sm:space-y-5
            "
          >

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="
                  bg-white

                  rounded-[20px]
                  sm:rounded-[28px]

                  border
                  border-[#E7D3B8]

                  shadow-[0_5px_20px_rgba(91,51,20,0.06)]

                  overflow-hidden

                  p-3
                  sm:p-5
                  md:p-6
                "
              >

                {/* =================================================
                    PRODUCT IMAGE AREA
                ================================================== */}

                <Link
                  to={`/product/${item._id}`}
                  className="
                    block
                    w-full

                    h-[195px]
                    sm:h-52
                    md:h-56

                    overflow-hidden

                    rounded-[15px]
                    sm:rounded-[20px]

                    bg-[#EFE2C8]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full

                      object-contain

                      object-center

                      transition-transform
                      duration-300

                      hover:scale-[1.03]
                    "
                  />
                </Link>

                {/* =================================================
                    PRODUCT INFORMATION
                ================================================== */}

                <div
                  className="
                    pt-3
                    sm:pt-5
                  "
                >

                  {/* PRODUCT NAME */}

                  <Link
                    to={`/product/${item._id}`}
                  >
                    <h2
                      className="
                        text-[17px]
                        sm:text-2xl
                        md:text-3xl

                        font-bold
                        leading-tight

                        text-[#2B1408]

                        hover:text-[#9B4D0D]

                        transition-colors

                        line-clamp-2
                      "
                    >
                      {item.name}
                    </h2>
                  </Link>

                  {/* CATEGORY */}

                  <p
                    className="
                      mt-1

                      text-[11px]
                      sm:text-sm

                      text-[#7B6252]
                    "
                  >
                    {item.category}
                  </p>

                  {/* PRICE + ITEM TOTAL */}

                  <div
                    className="
                      mt-2
                      sm:mt-3

                      flex
                      items-center
                      justify-between
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
                      ₹{item.price}
                    </p>

                    <p
                      className="
                        text-[10px]
                        sm:text-sm

                        text-[#7B6252]
                      "
                    >
                      Total:{" "}
                      <span
                        className="
                          font-semibold
                          text-[#2B1408]
                        "
                      >
                        ₹{item.price * item.quantity}
                      </span>
                    </p>
                  </div>

                  {/* =================================================
                      QUANTITY + DELETE
                  ================================================== */}

                  <div
                    className="
                      mt-4
                      sm:mt-5

                      pt-3
                      sm:pt-4

                      border-t
                      border-[#EFE2C8]

                      flex
                      items-center
                      justify-between
                    "
                  >

                    {/* QUANTITY */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        sm:gap-3
                      "
                    >

                      {/* MINUS */}

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item._id)
                        }
                        aria-label="Decrease quantity"
                        className="
                          w-9
                          h-9

                          sm:w-10
                          sm:h-10

                          rounded-full

                          bg-[#EFE2C8]

                          hover:bg-[#E3D0AF]

                          text-[#2B1408]

                          flex
                          items-center
                          justify-center

                          active:scale-95

                          transition
                        "
                      >
                        <Minus
                          size={15}
                          className="sm:w-[17px] sm:h-[17px]"
                        />
                      </button>

                      {/* NUMBER */}

                      <span
                        className="
                          w-7

                          text-center

                          text-sm
                          sm:text-base

                          font-semibold

                          text-[#2B1408]
                        "
                      >
                        {item.quantity}
                      </span>

                      {/* PLUS */}

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item._id)
                        }
                        aria-label="Increase quantity"
                        className="
                          w-9
                          h-9

                          sm:w-10
                          sm:h-10

                          rounded-full

                          bg-[#EFE2C8]

                          hover:bg-[#E3D0AF]

                          text-[#2B1408]

                          flex
                          items-center
                          justify-center

                          active:scale-95

                          transition
                        "
                      >
                        <Plus
                          size={15}
                          className="sm:w-[17px] sm:h-[17px]"
                        />
                      </button>

                    </div>

                    {/* DELETE */}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      aria-label={`Remove ${item.name} from cart`}
                      className="
                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-full

                        bg-red-50

                        text-red-500

                        hover:bg-red-100
                        hover:text-red-700

                        flex
                        items-center
                        justify-center

                        active:scale-95

                        transition
                      "
                    >
                      <Trash2
                        size={16}
                        className="sm:w-5 sm:h-5"
                      />
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* =====================================================
              ORDER SUMMARY
          ====================================================== */}

          <div
            className="
              bg-white

              rounded-[20px]
              sm:rounded-[28px]

              border
              border-[#E7D3B8]

              shadow-[0_6px_25px_rgba(91,51,20,0.07)]

              p-4
              sm:p-6
              md:p-8

              h-fit

              lg:sticky
              lg:top-24
            "
          >

            {/* SUMMARY TITLE */}

            <h2
              className="
                text-xl
                sm:text-2xl
                md:text-3xl

                font-bold

                text-[#2B1408]

                mb-5
                sm:mb-7
              "
            >
              Order Summary
            </h2>

            {/* TOTAL ITEMS */}

            <div
              className="
                flex
                items-center
                justify-between

                text-sm
                sm:text-base

                mb-4
              "
            >
              <span className="text-[#7B6252]">
                Total Items
              </span>

              <span
                className="
                  font-semibold
                  text-[#2B1408]
                "
              >
                {totalItems}
              </span>
            </div>

            {/* SUBTOTAL */}

            <div
              className="
                flex
                items-center
                justify-between

                text-sm
                sm:text-base

                pb-4
                sm:pb-5

                border-b
                border-[#E7D3B8]
              "
            >
              <span className="text-[#7B6252]">
                Subtotal
              </span>

              <span
                className="
                  font-semibold
                  text-[#2B1408]
                "
              >
                ₹{totalPrice}
              </span>
            </div>

            {/* TOTAL PRICE */}

            <div
              className="
                flex
                items-center
                justify-between

                mt-4
                sm:mt-5

                mb-5
                sm:mb-6
              "
            >
              <span
                className="
                  text-base
                  sm:text-xl

                  font-bold

                  text-[#2B1408]
                "
              >
                Total Price
              </span>

              <span
                className="
                  text-xl
                  sm:text-2xl

                  font-bold

                  text-[#9B4D0D]
                "
              >
                ₹{totalPrice}
              </span>
            </div>

            {/* CHECKOUT */}

            <Link
              to="/checkout"
              className="block"
            >
              <button
                className="
                  w-full

                  min-h-[50px]
                  sm:min-h-[54px]

                  px-4

                  rounded-full

                  bg-[#9B4D0D]

                  hover:bg-[#7A3A05]

                  text-white

                  text-sm
                  sm:text-base

                  font-semibold

                  flex
                  items-center
                  justify-center

                  gap-2

                  shadow-md

                  hover:shadow-lg

                  active:scale-[0.99]

                  transition-all
                  duration-300
                "
              >
                Proceed To Checkout

                <ArrowRight
                  size={17}
                  className="sm:w-5 sm:h-5"
                />
              </button>
            </Link>

            {/* CONTINUE SHOPPING */}

            <Link
              to="/products"
              className="
                block

                mt-4

                text-center

                text-xs
                sm:text-sm

                font-semibold

                text-[#9B4D0D]

                hover:underline
              "
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cart;