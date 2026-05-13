import React, { useContext } from "react";

import {
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // TOTAL PRICE

  const totalPrice = cartItems.reduce(

    (total, item) =>
      total + item.price * item.quantity,

    0
  );

  // EMPTY CART

  if (cartItems.length === 0) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#F5F3F0]">

        <h1 className="text-4xl font-bold text-[#2B1408]">

          Your Cart Is Empty

        </h1>

      </div>

    );
  }

  return (

    <section className="min-h-screen bg-[#F5F3F0] px-6 md:px-12 py-16">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <h1 className="text-5xl font-bold text-[#2B1408] mb-12">

          Shopping Cart

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* CART ITEMS */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-lg flex flex-col md:flex-row gap-6"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-44 h-44 object-cover rounded-2xl"
                />

                {/* CONTENT */}

                <div className="flex-1">

                  <h2 className="text-3xl font-bold text-[#2B1408]">

                    {item.name}

                  </h2>

                  <p className="text-[#7B6252] mt-2">

                    {item.category}

                  </p>

                  <h3 className="text-3xl font-bold text-[#9B4D0D] mt-4">

                    ₹{item.price}

                  </h3>

                  {/* QUANTITY */}

                  <div className="flex items-center gap-4 mt-6">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    >

                      <Minus size={18} />

                    </button>

                    <span className="text-xl font-semibold">

                      {item.quantity}

                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    >

                      <Plus size={18} />

                    </button>

                  </div>

                </div>

                {/* REMOVE */}

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-red-500 hover:text-red-700"
                >

                  <Trash2 size={28} />

                </button>

              </div>

            ))}

          </div>

          {/* ORDER SUMMARY */}

          <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">

            <h2 className="text-3xl font-bold text-[#2B1408] mb-8">

              Order Summary

            </h2>

            <div className="flex justify-between text-xl mb-5">

              <span>Total Items</span>

              <span>{cartItems.length}</span>

            </div>

            <div className="flex justify-between text-2xl font-bold text-[#9B4D0D] mb-10">

              <span>Total Price</span>

              <span>₹{totalPrice}</span>

            </div>

            <button className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-full text-xl font-semibold transition duration-300">

              Proceed To Checkout

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Cart;