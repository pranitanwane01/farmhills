import React from "react";
import heroImage from "../assets/hero.png";
function HeroSection() {
  return (
    <section className="bg-[#F7F3EE] w-full px-6 md:px-12 py-10 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}

        <div>
          {/* Small Heading */}
          <p className="text-[#C28B2C] uppercase tracking-[6px] text-sm md:text-base font-semibold mb-6">
            ✦ Premium Quality
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B1408]">
            Nourish With
            <br />
            <span className="text-[#9B4D0D]">Nature's Finest</span>
            <br />
            Dry Fruits
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-2xl text-[#7B6252] leading-relaxed max-w-xl">
            Handpicked from the world's finest farms. Pure, wholesome, and
            delivered fresh to your door.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <button className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              Shop Now
            </button>

            <button className="border-2 border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300">
              Our Story
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="bg-[#EFE2C8] rounded-none lg:rounded-tl-[120px] lg:rounded-br-[120px] p-10 md:p-16 flex flex-col items-center justify-center min-h-[500px] shadow-xl relative">
          {/* Circle Background */}
          <div className="w-72 h-72 bg-gradient-to-b from-[#C98C4B] to-[#9B4D0D] rounded-full flex items-center justify-center shadow-2xl">
            <img
              src={heroImage}
              alt="Dry Fruits"
              className="w-64 h-64 object-cover rounded-full drop-shadow-2xl"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-semibold text-[#7B6252]">
              Premium Mixed Collection
            </h2>

            <p className="text-[#C28B2C] text-2xl mt-4 font-medium">
              Starting ₹299 / 250g
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURES */}

      <div className="bg-[#9B4D0D] mt-16 rounded-xl px-6 md:px-12 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <h3 className="text-xl font-bold">🚚 Free Delivery</h3>

            <p className="text-sm mt-1 text-gray-200">Above ₹499</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">✦ 100% Natural</h3>

            <p className="text-sm mt-1 text-gray-200">Organic Products</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">📦 Fresh Packs</h3>

            <p className="text-sm mt-1 text-gray-200">Sealed Packaging</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">⭐ 4.9 Rating</h3>

            <p className="text-sm mt-1 text-gray-200">Trusted Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
