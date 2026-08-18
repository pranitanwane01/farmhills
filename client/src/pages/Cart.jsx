// import React, { useContext } from "react";

// import { Trash2, Plus, Minus } from "lucide-react";

// import { Link } from "react-router-dom";

// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
//     useContext(CartContext);

//   // TOTAL ITEMS
//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   // TOTAL PRICE
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   );

//   // EMPTY CART
//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F5F3F0]">
//         <h1 className="text-4xl font-bold text-[#2B1408]">
//           Your Cart Is Empty
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-[#F5F3F0] px-6 md:px-12 py-16">
//       <div className="max-w-7xl mx-auto">
//         {/* TITLE */}
//         <h1 className="text-5xl font-bold text-[#2B1408] mb-12">
//           Shopping Cart
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* CART ITEMS */}
//           <div className="lg:col-span-2 space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-3xl p-6 shadow-lg flex flex-col md:flex-row gap-6"
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full md:w-44 h-44 object-cover rounded-2xl"
//                 />

//                 {/* CONTENT */}
//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold text-[#2B1408]">
//                     {item.name}
//                   </h2>

//                   <p className="text-[#7B6252] mt-2">{item.category}</p>

//                   <h3 className="text-3xl font-bold text-[#9B4D0D] mt-4">
//                     ₹{item.price}
//                   </h3>

//                   {/* QUANTITY */}
//                   <div className="flex items-center gap-4 mt-6">
//                     {/* DECREASE */}
//                     <button
//                       onClick={() => decreaseQuantity(item._id)}
//                       className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
//                     >
//                       <Minus size={18} />
//                     </button>

//                     {/* QUANTITY */}
//                     <span className="text-xl font-semibold">
//                       {item.quantity}
//                     </span>

//                     {/* INCREASE */}
//                     <button
//                       onClick={() => increaseQuantity(item._id)}
//                       className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
//                     >
//                       <Plus size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* REMOVE */}
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <Trash2 size={28} />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* ORDER SUMMARY */}
//           <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">
//             <h2 className="text-3xl font-bold text-[#2B1408] mb-8">
//               Order Summary
//             </h2>

//             {/* TOTAL ITEMS */}
//             <div className="flex justify-between text-xl mb-5">
//               <span>Total Items</span>

//               <span>{totalItems}</span>
//             </div>

//             {/* TOTAL PRICE */}
//             <div className="flex justify-between text-2xl font-bold text-[#9B4D0D] mb-10">
//               <span>Total Price</span>

//               <span>₹{totalPrice}</span>
//             </div>

//             {/* CHECKOUT BUTTON */}
//             <Link to="/checkout">
//               <button className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-full text-xl font-semibold transition duration-300">
//                 Proceed To Checkout
//               </button>
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
    0,
  );

  // ==========================================
  // TOTAL PRICE
  // ==========================================

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0,
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
        "
      >
        <div
          className="
            text-center

            bg-white

            rounded-[28px]

            p-8
            sm:p-12

            shadow-lg

            border
            border-[#E7D3B8]

            max-w-md
            w-full
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

              flex
              items-center
              justify-center

              text-[#9B4D0D]

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
              text-[#7B6252]

              text-sm
              sm:text-base

              mt-3
            "
          >
            Looks like you haven't added anything
            to your cart yet.
          </p>

          <Link to="/products">
            <button
              className="
                mt-6

                px-6
                sm:px-8

                py-3

                rounded-full

                bg-[#9B4D0D]

                hover:bg-[#7A3A05]

                text-white

                text-sm
                sm:text-base

                font-semibold

                transition
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

        px-4
        sm:px-6
        md:px-10
        lg:px-12

        py-10
        sm:py-14
        md:py-16
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            TITLE
        =========================================== */}

        <div className="mb-8 sm:mb-10">

          <p
            className="
              text-[#9B4D0D]

              uppercase

              tracking-[3px]

              text-xs
              sm:text-sm

              font-semibold
            "
          >
            Your Shopping Bag
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              text-[#2B1408]

              mt-2
            "
          >
            Shopping Cart
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base

              mt-2
            "
          >
            {totalItems}{" "}
            {totalItems === 1
              ? "item"
              : "items"}{" "}
            in your cart
          </p>

        </div>

        {/* ==========================================
            MAIN LAYOUT
        =========================================== */}

        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-3

            gap-6
            md:gap-8
            lg:gap-10
          "
        >

          {/* ========================================
              CART ITEMS
          ========================================= */}

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

                  rounded-[22px]
                  sm:rounded-[28px]

                  p-4
                  sm:p-5
                  md:p-6

                  shadow-[0_6px_25px_rgba(91,51,20,0.07)]

                  border
                  border-[#E7D3B8]

                  flex
                  flex-col
                  sm:flex-row

                  gap-4
                  sm:gap-5
                  md:gap-6
                "
              >

                {/* ==================================
                    IMAGE
                =================================== */}

                <Link
                  to={`/product/${item._id}`}
                  className="
                    flex-shrink-0
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full

                      sm:w-36
                      md:w-40

                      h-40
                      sm:h-36
                      md:h-40

                      object-cover

                      rounded-[18px]
                      sm:rounded-[20px]

                      bg-[#EFE2C8]

                      transition-transform
                      duration-300

                      hover:scale-[1.03]
                    "
                  />
                </Link>

                {/* ==================================
                    CONTENT
                =================================== */}

                <div className="flex-1 min-w-0">

                  {/* NAME */}

                  <Link
                    to={`/product/${item._id}`}
                  >
                    <h2
                      className="
                        text-xl
                        sm:text-2xl
                        md:text-3xl

                        font-bold

                        text-[#2B1408]

                        leading-tight

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
                      text-[#7B6252]

                      text-xs
                      sm:text-sm

                      mt-1.5
                    "
                  >
                    {item.category}
                  </p>

                  {/* PRICE */}

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl

                      font-bold

                      text-[#9B4D0D]

                      mt-3
                    "
                  >
                    ₹{item.price}
                  </h3>

                  {/* =================================
                      QUANTITY
                  ================================== */}

                  <div
                    className="
                      flex
                      items-center

                      gap-3
                      sm:gap-4

                      mt-4
                    "
                  >

                    {/* DECREASE */}

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                      className="
                        w-8
                        h-8

                        sm:w-9
                        sm:h-9

                        rounded-full

                        bg-[#EFE2C8]

                        hover:bg-[#E3D0AF]

                        text-[#2B1408]

                        flex
                        items-center
                        justify-center

                        transition
                      "
                    >
                      <Minus
                        size={15}
                        className="sm:w-[17px]"
                      />
                    </button>

                    {/* QUANTITY */}

                    <span
                      className="
                        min-w-[24px]

                        text-center

                        text-base
                        sm:text-lg

                        font-semibold

                        text-[#2B1408]
                      "
                    >
                      {item.quantity}
                    </span>

                    {/* INCREASE */}

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                      className="
                        w-8
                        h-8

                        sm:w-9
                        sm:h-9

                        rounded-full

                        bg-[#EFE2C8]

                        hover:bg-[#E3D0AF]

                        text-[#2B1408]

                        flex
                        items-center
                        justify-center

                        transition
                      "
                    >
                      <Plus
                        size={15}
                        className="sm:w-[17px]"
                      />
                    </button>

                  </div>

                  {/* ITEM TOTAL */}

                  <p
                    className="
                      text-[#7B6252]

                      text-xs
                      sm:text-sm

                      mt-3
                    "
                  >
                    Item total:{" "}
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

                {/* ==================================
                    REMOVE
                =================================== */}

                <div
                  className="
                    flex

                    justify-end

                    sm:items-start
                  "
                >

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

                      transition
                    "
                  >
                    <Trash2
                      size={18}
                      className="sm:w-5 sm:h-5"
                    />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* ========================================
              ORDER SUMMARY
          ========================================= */}

          <div
            className="
              bg-white

              rounded-[24px]
              sm:rounded-[28px]

              p-5
              sm:p-6
              md:p-8

              shadow-[0_8px_30px_rgba(91,51,20,0.08)]

              border
              border-[#E7D3B8]

              h-fit

              lg:sticky
              lg:top-24
            "
          >

            <h2
              className="
                text-2xl
                sm:text-3xl

                font-bold

                text-[#2B1408]

                mb-6
                sm:mb-8
              "
            >
              Order Summary
            </h2>

            {/* TOTAL ITEMS */}

            <div
              className="
                flex
                justify-between
                items-center

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
                justify-between
                items-center

                text-sm
                sm:text-base

                pb-5
                mb-5

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
                justify-between
                items-center

                mb-6
              "
            >
              <span
                className="
                  text-lg
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

                  bg-[#9B4D0D]

                  hover:bg-[#7A3A05]

                  text-white

                  py-3
                  sm:py-4

                  rounded-full

                  text-base
                  sm:text-lg

                  font-semibold

                  flex
                  items-center
                  justify-center

                  gap-2

                  shadow-md

                  hover:shadow-lg

                  transition-all
                  duration-300
                "
              >
                Proceed To Checkout

                <ArrowRight
                  size={19}
                  className="sm:w-5 sm:h-5"
                />
              </button>
            </Link>

            {/* CONTINUE SHOPPING */}

            <Link
              to="/products"
              className="
                block

                text-center

                text-[#9B4D0D]

                text-sm
                sm:text-base

                font-medium

                mt-4

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