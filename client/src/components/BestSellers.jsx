import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ShoppingCart, Star } from "lucide-react";

import axios from "axios";

import { CartContext } from "../context/CartContext";

import toast from "react-hot-toast";

function BestSellers() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );

        // FILTER ONLY BEST SELLERS
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
              key={item._id}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
            >
              {/* CLICKABLE PRODUCT AREA */}
              <Link to={`/product/${item._id}`}>
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

                    <span className="text-[#7B6252] font-medium">4.8</span>
                  </div>

                  {/* NAME */}
                  <h3 className="text-2xl font-semibold text-[#2B1408]">
                    {item.name}
                  </h3>

                  {/* CATEGORY */}
                  <p className="text-[#7B6252] mt-2">{item.category}</p>
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
                  onClick={() => {
                    addToCart(item);
                    toast.success("Item added to cart. Check your cart.");
                  }}
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
