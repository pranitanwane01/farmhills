// import React from "react";
// import heroImage from "../assets/hero.png";
// import { Link } from "react-router-dom";
// function HeroSection() {
//   return (
//     <section className="bg-[#F7F3EE] w-full px-6 md:px-12 py-10 md:py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}

//         <div>
//           {/* Small Heading */}
//           <p className="text-[#C28B2C] uppercase tracking-[6px] text-sm md:text-base font-semibold mb-6">
//             ✦ Premium Quality
//           </p>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B1408]">
//             Nourish With
//             <br />
//             <span className="text-[#9B4D0D]">Nature's Finest</span>
//             <br />
//             Dry Fruits
//           </h1>

//           {/* Description */}
//           <p className="mt-8 text-lg md:text-2xl text-[#7B6252] leading-relaxed max-w-xl">
//             Handpicked from the world's finest farms. Pure, wholesome, and
//             delivered fresh to your door.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-5 mt-10">
//             <Link to="/products">
//               <button className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
//                 Shop Now
//               </button>
//             </Link>

//             <Link to="/about">
//               <button className="border-2 border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300">
//                 Our Story
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}

//         <div className="bg-[#EFE2C8] rounded-none lg:rounded-tl-[120px] lg:rounded-br-[120px] p-10 md:p-16 flex flex-col items-center justify-center min-h-[500px] shadow-xl relative">
//           {/* Circle Background */}
//           <div className="w-72 h-72 bg-gradient-to-b from-[#C98C4B] to-[#9B4D0D] rounded-full flex items-center justify-center shadow-2xl">
//             <img
//               src={heroImage}
//               alt="Dry Fruits"
//               className="w-64 h-64 object-cover rounded-full drop-shadow-2xl"
//             />
//           </div>

//           {/* Product Info */}
//           <div className="mt-10 text-center">
//             <h2 className="text-3xl font-semibold text-[#7B6252]">
//               Premium Mixed Collection
//             </h2>

//             <p className="text-[#C28B2C] text-2xl mt-4 font-medium">
//               Starting ₹199 / 250g
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM FEATURES */}

//       <div className="bg-[#9B4D0D] mt-16 rounded-xl px-6 md:px-12 py-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
//           <div>
//             <h3 className="text-xl font-bold">🚚 Free Delivery</h3>

//             <p className="text-sm mt-1 text-gray-200">Above ₹499</p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">✦ 100% Natural</h3>

//             <p className="text-sm mt-1 text-gray-200">Organic Products</p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">📦 Fresh Packs</h3>

//             <p className="text-sm mt-1 text-gray-200">Sealed Packaging</p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">⭐ 4.9 Rating</h3>

//             <p className="text-sm mt-1 text-gray-200">Trusted Customers</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../assets/offer1.png";
// import offer2 from "../assets/offer2.png";
// import offer3 from "../assets/offer3.png";
// import offer4 from "../assets/offer4.png";
// import offer5 from "../assets/offer5.png";

// function HeroSection() {
//   const offers = [
//     offer1,
//     offer2,
//     offer3,
//     offer4,
//     offer5,
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // ============================
//   // AUTO SLIDE
//   // ============================

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         return (prev + 1) % offers.length;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [offers.length]);

//   // ============================
//   // NEXT
//   // ============================

//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       return (prev + 1) % offers.length;
//     });
//   };

//   // ============================
//   // PREVIOUS
//   // ============================

//   const previousSlide = () => {
//     setCurrentSlide((prev) => {
//       return (prev - 1 + offers.length) % offers.length;
//     });
//   };

//   return (
//     <section className="bg-[#F7F3EE] w-full px-6 md:px-12 py-10 md:py-20 overflow-hidden">

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

//         {/* =====================================================
//             LEFT SIDE - PERMANENT CONTENT
//         ====================================================== */}

//         <div>

//           {/* PREMIUM QUALITY */}

//           <p className="text-[#C28B2C] uppercase tracking-[6px] text-sm md:text-base font-semibold mb-6">
//             ✦ Premium Quality
//           </p>

//           {/* MAIN HEADING */}

//           <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B1408]">

//             Nourish With

//             <br />

//             <span className="text-[#9B4D0D]">
//               Nature's Finest
//             </span>

//             <br />

//             Dry Fruits

//           </h1>

//           {/* DESCRIPTION */}

//           <p className="mt-8 text-lg md:text-2xl text-[#7B6252] leading-relaxed max-w-xl">
//             Handpicked from the world's finest farms. Pure, wholesome, and
//             delivered fresh to your door.
//           </p>

//           {/* BUTTONS */}

//           <div className="flex flex-col sm:flex-row gap-5 mt-10">

//             <Link to="/products">
//               <button
//                 type="button"
//                 className="
//                   bg-[#9B4D0D]
//                   hover:bg-[#7A3A05]
//                   text-white
//                   px-10
//                   py-4
//                   rounded-full
//                   text-lg
//                   font-semibold
//                   transition
//                   duration-300
//                   shadow-lg
//                   w-full
//                   sm:w-auto
//                 "
//               >
//                 Shop Now
//               </button>
//             </Link>

//             <Link to="/about">
//               <button
//                 type="button"
//                 className="
//                   border-2
//                   border-[#9B4D0D]
//                   text-[#9B4D0D]
//                   hover:bg-[#9B4D0D]
//                   hover:text-white
//                   px-10
//                   py-4
//                   rounded-full
//                   text-lg
//                   font-semibold
//                   transition
//                   duration-300
//                   w-full
//                   sm:w-auto
//                 "
//               >
//                 Our Story
//               </button>
//             </Link>

//           </div>

//         </div>

//         {/* =====================================================
//             RIGHT SIDE - OFFER IMAGE SLIDER
//         ====================================================== */}


//         <div className="relative w-full">

//           {/* SLIDER */}

//           <div
//             className="
//               relative
//               w-full
//               overflow-hidden
//               rounded-[35px]
//               shadow-xl
//               bg-[#EFE2C8]
//               aspect-[16/10]
//             "
//           >

//             {/* IMAGES */}

//             {offers.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`FarmHills Offer ${index + 1}`}
//                 className={`
//                   absolute
//                   inset-0
//                   w-full
//                   h-full
//                   object-cover
//                   transition-all
//                   duration-700
//                   ease-in-out
//                   ${
//                     currentSlide === index
//                       ? "opacity-100 scale-100"
//                       : "opacity-0 scale-105"
//                   }
//                 `}
//               />
//             ))} 
            

//             {/* =================================================
//                 PREVIOUS BUTTON
//             ================================================== */}

//             <button
//               type="button"
//               onClick={previousSlide}
//               aria-label="Previous offer"
//               className="
//                 absolute
//                 left-4
//                 md:left-6
//                 top-1/2
//                 -translate-y-1/2
//                 z-20
//                 w-11
//                 h-11
//                 md:w-14
//                 md:h-14
//                 rounded-full
//                 bg-white
//                 text-[#7B6252]
//                 shadow-xl
//                 flex
//                 items-center
//                 justify-center
//                 hover:bg-[#9B4D0D]
//                 hover:text-white
//                 transition
//                 duration-300
//               "
//             >
//               <ChevronLeft
//                 size={28}
//               />
//             </button>

//             {/* =================================================
//                 NEXT BUTTON
//             ================================================== */}

//             <button
//               type="button"
//               onClick={nextSlide}
//               aria-label="Next offer"
//               className="
//                 absolute
//                 right-4
//                 md:right-6
//                 top-1/2
//                 -translate-y-1/2
//                 z-20
//                 w-11
//                 h-11
//                 md:w-14
//                 md:h-14
//                 rounded-full
//                 bg-white
//                 text-[#7B6252]
//                 shadow-xl
//                 flex
//                 items-center
//                 justify-center
//                 hover:bg-[#9B4D0D]
//                 hover:text-white
//                 transition
//                 duration-300
//               "
//             >
//               <ChevronRight
//                 size={28}
//               />
//             </button>

//             {/* =================================================
//                 SLIDER DOTS
//             ================================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-5
//                 left-0
//                 right-0
//                 z-20
//                 flex
//                 justify-center
//                 items-center
//                 gap-3
//               "
//             >

//               {offers.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   onClick={() => setCurrentSlide(index)}
//                   aria-label={`Show offer ${index + 1}`}
//                   className={`
//                     rounded-full
//                     transition-all
//                     duration-300
//                     ${
//                       currentSlide === index
//                         ? "w-8 h-3 bg-[#9B4D0D]"
//                         : "w-3 h-3 bg-white/80 hover:bg-white"
//                     }
//                   `}
//                 />
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* =====================================================
//           BOTTOM FEATURES
//       ====================================================== */}

//       <div className="bg-[#9B4D0D] mt-16 rounded-xl px-6 md:px-12 py-6">

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">

//           <div>
//             <h3 className="text-xl font-bold">
//               🚚 Free Delivery
//             </h3>

//             <p className="text-sm mt-1 text-gray-200">
//               Above ₹499
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">
//               ✦ 100% Natural
//             </h3>

//             <p className="text-sm mt-1 text-gray-200">
//               Organic Products
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">
//               📦 Fresh Packs
//             </h3>

//             <p className="text-sm mt-1 text-gray-200">
//               Sealed Packaging
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">
//               ⭐ 4.9 Rating
//             </h3>

//             <p className="text-sm mt-1 text-gray-200">
//               Trusted Customers
//             </p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import offer5 from "../assets/offer5.png";

function HeroSection() {
  // ==============================
  // OFFER IMAGES
  // ==============================
  const offers = [
    offer1,
    offer2,
    offer3,
    offer4,
    offer5,
  ];

  // ==============================
  // CURRENT SLIDE
  // ==============================
  const [currentSlide, setCurrentSlide] = useState(0);

  // ==============================
  // NEXT SLIDE
  // ==============================
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  // ==============================
  // PREVIOUS SLIDE
  // ==============================
  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + offers.length) % offers.length
    );
  };

  // ==============================
  // AUTO SLIDE
  // Changes every 4 seconds
  // ==============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="bg-[#F7F3EE] w-full px-6 md:px-12 py-10 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">

        {/* ===================================================== */}
        {/* LEFT CONTENT */}
        {/* ===================================================== */}

        <div>
          {/* Small Heading */}
          <p className="text-[#C28B2C] uppercase tracking-[6px] text-sm md:text-base font-semibold mb-6">
            ✦ Premium Quality
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B1408]">
            Nourish With
            <br />

            <span className="text-[#9B4D0D]">
              Nature's Finest
            </span>

            <br />

            Dry Fruits
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-2xl text-[#7B6252] leading-relaxed max-w-xl">
            Handpicked from the world's finest farms. Pure,
            wholesome, and delivered fresh to your door.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            {/* SHOP NOW */}
            <Link to="/products">
              <button
                className="
                  bg-[#9B4D0D]
                  hover:bg-[#7A3A05]
                  text-white
                  px-10
                  py-4
                  rounded-full
                  text-lg
                  font-semibold
                  transition
                  duration-300
                  shadow-lg
                "
              >
                Shop Now
              </button>
            </Link>

            {/* OUR STORY */}
            <Link to="/about">
              <button
                className="
                  border-2
                  border-[#9B4D0D]
                  text-[#9B4D0D]
                  hover:bg-[#9B4D0D]
                  hover:text-white
                  px-10
                  py-4
                  rounded-full
                  text-lg
                  font-semibold
                  transition
                  duration-300
                "
              >
                Our Story
              </button>
            </Link>

          </div>
        </div>

        {/* ===================================================== */}
        {/* RIGHT OFFER SLIDER */}
        {/* SAME SHAPE / SIZE AS YOUR ORIGINAL DESIGN */}
        {/* ===================================================== */}

     {/* RIGHT OFFER SLIDER */}
<div
  className="
    relative
    min-h-[500px]
    overflow-hidden
    bg-[#EFE2C8]
    border-amber-800
    rounded-none
    lg:rounded-tl-[100px]
    lg:rounded-br-[100px]
    
    shadow-xl
  "
>
  {/* OFFER IMAGE - FULL SIZE */}
  <img
    key={currentSlide}
    src={offers[currentSlide]}
    alt={`FarmHills Offer ${currentSlide + 1}`}
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      transition-opacity
      duration-700
    "
  />

  {/* LEFT ARROW */}
  <button
    type="button"
    onClick={previousSlide}
    aria-label="Previous offer"
    className="
      absolute
      left-4
      md:left-6
      top-1/2
      -translate-y-1/2
      z-20
      w-11
      h-11
      md:w-12
      md:h-12
      rounded-full
      bg-white
      shadow-lg
      flex
      items-center
      justify-center
      text-[#7A3A05]
      hover:bg-[#9B4D0D]
      hover:text-white
      transition
    "
  >
    <ChevronLeft size={24} />
  </button>

  {/* RIGHT ARROW */}
  <button
    type="button"
    onClick={nextSlide}
    aria-label="Next offer"
    className="
      absolute
      right-4
      md:right-6
      top-1/2
      -translate-y-1/2
      z-20
      w-11
      h-11
      md:w-12
      md:h-12
      rounded-full
      bg-white
      shadow-lg
      flex
      items-center
      justify-center
      text-[#7A3A05]
      hover:bg-[#9B4D0D]
      hover:text-white
      transition
    "
  >
    <ChevronRight size={24} />
  </button>

  {/* DOTS */}
  <div
    className="
      absolute
      bottom-5
      left-1/2
      -translate-x-1/2
      z-20
      flex
      items-center
      gap-2
    "
  >
    {offers.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to offer ${index + 1}`}
        className={`
          rounded-full
          transition-all
          duration-300
          ${
            currentSlide === index
              ? "w-8 h-3 bg-[#9B4D0D]"
              : "w-3 h-3 bg-white"
          }
        `}
      />
    ))}
  </div>
</div>
      </div>

      {/* ===================================================== */}
      {/* BOTTOM FEATURES */}
      {/* ===================================================== */}



      <div className="bg-[#9B4D0D] mt-16 rounded-xl px-6 md:px-12 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">

          {/* FREE DELIVERY */}
          <div>
            <h3 className="text-xl font-bold">
              🚚 Free Delivery
            </h3>

            <p className="text-sm mt-1 text-gray-200">
              Above ₹499
            </p>
          </div>

          {/* NATURAL */}
          <div>
            <h3 className="text-xl font-bold">
              ✦ 100% Natural
            </h3>

            <p className="text-sm mt-1 text-gray-200">
              Organic Products
            </p>
          </div>

          {/* FRESH PACKS */}
          <div>
            <h3 className="text-xl font-bold">
              📦 Fresh Packs
            </h3>

            <p className="text-sm mt-1 text-gray-200">
              Sealed Packaging
            </p>
          </div>

          {/* RATING */}
          <div>
            <h3 className="text-xl font-bold">
              ⭐ 4.9 Rating
            </h3>

            <p className="text-sm mt-1 text-gray-200">
              Trusted Customers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;