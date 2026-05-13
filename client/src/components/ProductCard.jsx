import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (

    <Link to={`/product/${product.id}`}>

      <div className="border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300 bg-white group cursor-pointer">

        {/* PRODUCT IMAGE */}

        <div className="overflow-hidden rounded-xl bg-[#F5F3F0]">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

        {/* PRODUCT CONTENT */}

        <div className="mt-5">

          <p className="text-sm uppercase tracking-widest text-[#9B4D0D] font-semibold">

            {product.category}

          </p>

          <h2 className="text-2xl font-bold text-[#2B1408] mt-2">

            {product.name}

          </h2>

          <p className="text-[#7B6252] mt-2 line-clamp-2">

            {product.description}

          </p>

          {/* PRICE */}

          <div className="flex items-center justify-between mt-5">

            <p className="text-3xl font-bold text-[#9B4D0D]">

              ₹{product.price}

            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-5 py-2 rounded-full font-medium transition duration-300"
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