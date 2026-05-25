

import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  // DEFAULT WEIGHT
  const [selectedWeight, setSelectedWeight] =
    useState("250g");

  // DYNAMIC PRICE
  const prices = {
    "250g": product.price,
    "500g": product.price * 2,
    "1kg": product.price * 4,
  };

  return (

    <Link to={`/product/${product._id || product.id}`}>

      <div className="relative border rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white group cursor-pointer overflow-hidden">

        {/* DISCOUNT BADGE */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">

          20% OFF

        </div>

        {/* PRODUCT IMAGE */}
        <div className="overflow-hidden rounded-2xl bg-[#F5F3F0]">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        {/* PRODUCT CONTENT */}
        <div className="mt-5">

          {/* CATEGORY */}
          <p className="text-sm uppercase tracking-widest text-[#9B4D0D] font-semibold">

            {product.category}

          </p>

          {/* NAME */}
          <h2 className="text-2xl font-bold text-[#2B1408] mt-2">

            {product.name}

          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#7B6252] mt-2 line-clamp-2 text-sm">

            {product.description}

          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-3">

            <span className="text-yellow-500 text-lg">
              ⭐
            </span>

            <span className="font-medium text-gray-700">
              4.8 Rating
            </span>

          </div>

          {/* WEIGHT SELECTOR */}
          <div className="flex gap-2 mt-4">

            {["250g", "500g", "1kg"].map((weight) => (

              <button
                key={weight}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedWeight(weight);
                }}
                className={`px-3 py-1 rounded-full border text-sm font-medium transition ${
                  selectedWeight === weight
                    ? "bg-[#9B4D0D] text-white border-[#9B4D0D]"
                    : "bg-white text-[#9B4D0D] border-[#9B4D0D]"
                }`}
              >

                {weight}

              </button>
            ))}

          </div>

          {/* STOCK */}
          <p className="text-green-600 text-sm font-medium mt-3">

            ✔ In Stock

          </p>

          {/* PRICE + BUTTON */}
          <div className="mt-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 line-through text-sm">

                  ₹{prices[selectedWeight] + 50}

                </p>

                <p className="text-3xl font-bold text-[#9B4D0D]">

                  ₹{prices[selectedWeight]}

                </p>

              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={(e) => {

                e.preventDefault();

                addToCart({
                  ...product,
                  selectedWeight,
                  price:
                    prices[selectedWeight],
                });

              }}
              className="w-full mt-5 bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-3 rounded-2xl font-semibold text-lg transition duration-300"
            >

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default ProductCard;