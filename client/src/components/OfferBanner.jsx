// import React from 'react'

// import { useEffect, useState } from "react";

// import bannerone from "../assets/bannerone.webp";
// import bannertwo from "../assets/bannertwo.webp";
// import bannerthree from "../assets/bannerthree.webp";
// import bannerfour from "../assets/bannerfour.webp";

// function OfferBenner() {

//   const slides = [

//     {
//       title: "Premium Almond Collection",
//       subtitle: "Flat 25% OFF",
//       desc:
//         "Healthy, crunchy and naturally rich almonds directly from premium farms.",
//       image:
//         bannerone,
//     },

//     {
//       title: "Luxury Gift Packs",
//       subtitle: "Festival Special",
//       desc:
//         "Elegant dry fruit gift boxes for family, friends and corporate gifting.",
//       image:
//         bannertwo,
//     },

//     {
//       title: "Organic Cashews",
//       subtitle: "Buy 2 Get 1 Free",
//       desc:
//         "Premium quality cashews with rich taste and natural freshness.",
//       image:
//         bannerthree,
//     },

//     {
//       title: "Healthy Snacking",
//       subtitle: "Starting ₹299",
//       desc:
//         "Daily nutrition with the finest dry fruits and nuts collection.",
//       image:
//         bannerfour,
//     },

//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setCurrent((prev) =>
//         prev === slides.length - 1 ? 0 : prev + 1
//       );

//     }, 3000);

//     return () => clearInterval(interval);

//   }, []);

//   return (

//     <section className="w-full bg-[#F5F3F0] py-6 px-1 md:px-1">

//       <div className="max-w-7xl mx-auto">

//         {/* SLIDER */}

//         <div
//           className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700"
//         >

//           {/* BACKGROUND IMAGE */}

//           <img
//             src={slides[current].image}
//             alt=""
//             className="absolute w-full h-full object-cover scale-110"
//           />

//           {/* DARK OVERLAY */}

//           {/* <div className="absolute inset-0 bg-black/45"></div> */}

//           {/* GLASS EFFECT */}

//           <div className="absolute inset-0 backdrop-blur-[0px]"></div>

//           {/* CONTENT */}

//           {/* <div className="relative z-10 h-full flex items-center px-8 md:px-20">

//             <div className="max-w-2xl text-white">

//               <p className="uppercase tracking-[5px] text-yellow-300 font-semibold text-sm">

//                 Exclusive Offer

//               </p>

//               <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-6">

//                 {slides[current].title}

//               </h2>

//               <h3 className="text-3xl md:text-5xl font-semibold text-[#F5C97A] mt-5">

//                 {slides[current].subtitle}

//               </h3>

//               <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-8 max-w-xl">

//                 {slides[current].desc}

//               </p> */}

//               {/* button */}

//               {/* <div className="flex flex-col sm:flex-row gap-5 mt-10">

//                 <button className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">

//                   Shop Now

//                 </button>

//                 <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">

//                   View Offers

//                 </button>

//               </div> */}

//             {/* </div> */}

//           {/* </div> */}

//           {/* DOTS */}

//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">

//             {slides.map((_, index) => (

//               <div
//                 key={index}
//                 className={`transition-all duration-300 rounded-full ${
//                   current === index
//                     ? "w-10 h-3 bg-white"
//                     : "w-3 h-3 bg-white/50"
//                 }`}
//               ></div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default OfferBenner;


import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import bannerone from "../assets/bannerone.webp";
import bannertwo from "../assets/bannertwo.webp";
import bannerthree from "../assets/bannerthree.webp";
import bannerfour from "../assets/bannerfour.webp";

function OfferBenner() {
  const slides = [
    {
      title: "Premium Almond Collection",
      subtitle: "Flat 25% OFF",
      desc: "Healthy, crunchy and naturally rich almonds directly from premium farms.",
      image: bannerone,
    },

    {
      title: "Luxury Gift Packs",
      subtitle: "Festival Special",
      desc: "Elegant dry fruit gift boxes for family, friends and corporate gifting.",
      image: bannertwo,
    },

    {
      title: "Organic Cashews",
      subtitle: "Buy 2 Get 1 Free",
      desc: "Premium quality cashews with rich taste and natural freshness.",
      image: bannerthree,
    },

    {
      title: "Healthy Snacking",
      subtitle: "Starting ₹299",
      desc: "Daily nutrition with the finest dry fruits and nuts collection.",
      image: bannerfour,
    },
  ];

  const [current, setCurrent] = useState(0);

  // ==========================================
  // NEXT SLIDE
  // ==========================================

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1,
    );
  };

  // ==========================================
  // PREVIOUS SLIDE
  // ==========================================

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1,
    );
  };

  // ==========================================
  // AUTO SLIDE
  // ==========================================

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full
        bg-[#F5F3F0]
        px-3
        sm:px-5
        md:px-12
        py-8
        sm:py-10
        md:py-16
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            SLIDER
        =========================================== */}

        <div
          className="
            relative
            w-full

            h-[300px]
            sm:h-[380px]
            md:h-[480px]
            lg:h-[550px]

            rounded-[24px]
            sm:rounded-[32px]
            md:rounded-[40px]

            overflow-hidden

            shadow-2xl

            group
          "
        >

          {/* ========================================
              BACKGROUND IMAGE
          ========================================= */}

          <img
            key={current}
            src={slides[current].image}
            alt={slides[current].title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              scale-100
              group-hover:scale-[1.02]
            "
          />

          {/* ========================================
              DARK GRADIENT
          ========================================= */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-black/70
              via-black/35
              to-black/5
            "
          />

          {/* ========================================
              CONTENT
          ========================================= */}

          <div
            className="
              relative
              z-10
              h-full

              flex
              items-center

              px-6
              sm:px-10
              md:px-16
              lg:px-20
            "
          >
            <div
              className="
                max-w-2xl
                text-white
                pr-10
                sm:pr-14
              "
            >

              {/* SMALL LABEL */}

              <p
                className="
                  uppercase
                  tracking-[2px]
                  sm:tracking-[4px]

                  text-[9px]
                  sm:text-xs
                  md:text-sm

                  text-[#F5C97A]

                  font-semibold
                  mb-2
                  sm:mb-4
                "
              >
                ✦ Exclusive Offer
              </p>

              {/* TITLE */}

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-bold

                  leading-tight
                "
              >
                {slides[current].title}
              </h2>

              {/* SUBTITLE */}

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl

                  font-semibold

                  text-[#F5C97A]

                  mt-2
                  sm:mt-4
                "
              >
                {slides[current].subtitle}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  lg:text-lg

                  text-gray-200

                  leading-relaxed

                  mt-3
                  sm:mt-5

                  max-w-lg

                  line-clamp-2
                  sm:line-clamp-3
                "
              >
                {slides[current].desc}
              </p>

              {/* ====================================
                  BUTTONS
              ===================================== */}

              <div
                className="
                  flex
                  flex-row

                  gap-2
                  sm:gap-4

                  mt-5
                  sm:mt-7
                  md:mt-9
                "
              >

                {/* SHOP NOW */}

                <Link to="/products">
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-1.5
                      sm:gap-2

                      bg-[#9B4D0D]
                      hover:bg-[#7A3A05]

                      text-white

                      px-4
                      sm:px-6
                      md:px-8

                      py-2
                      sm:py-3
                      md:py-3.5

                      rounded-full

                      text-xs
                      sm:text-sm
                      md:text-base

                      font-semibold

                      shadow-lg

                      transition-all
                      duration-300

                      hover:scale-105
                    "
                  >
                    Shop Now

                    <ArrowRight
                      size={15}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  </button>
                </Link>

                {/* VIEW OFFERS */}

                <Link to="/products">
                  <button
                    type="button"
                    className="
                      border
                      sm:border-2

                      border-white

                      text-white

                      hover:bg-white
                      hover:text-[#2B1408]

                      px-4
                      sm:px-6
                      md:px-8

                      py-2
                      sm:py-3
                      md:py-3.5

                      rounded-full

                      text-xs
                      sm:text-sm
                      md:text-base

                      font-semibold

                      transition-all
                      duration-300
                    "
                  >
                    View Offers
                  </button>
                </Link>

              </div>
            </div>
          </div>

          {/* ========================================
              LEFT ARROW
          ========================================= */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous offer"
            className="
              absolute

              left-2
              sm:left-4
              md:left-6

              top-1/2
              -translate-y-1/2

              z-20

              w-8
              h-8

              sm:w-10
              sm:h-10

              md:w-12
              md:h-12

              rounded-full

              bg-white/90
              hover:bg-[#9B4D0D]

              text-[#7A3A05]
              hover:text-white

              flex
              items-center
              justify-center

              shadow-lg

              transition-all
              duration-300

              hover:scale-110
            "
          >
            <ChevronLeft
              size={18}
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </button>

          {/* ========================================
              RIGHT ARROW
          ========================================= */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next offer"
            className="
              absolute

              right-2
              sm:right-4
              md:right-6

              top-1/2
              -translate-y-1/2

              z-20

              w-8
              h-8

              sm:w-10
              sm:h-10

              md:w-12
              md:h-12

              rounded-full

              bg-white/90
              hover:bg-[#9B4D0D]

              text-[#7A3A05]
              hover:text-white

              flex
              items-center
              justify-center

              shadow-lg

              transition-all
              duration-300

              hover:scale-110
            "
          >
            <ChevronRight
              size={18}
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </button>

          {/* ========================================
              DOTS
          ========================================= */}

          <div
            className="
              absolute

              bottom-4
              sm:bottom-6
              md:bottom-8

              left-1/2
              -translate-x-1/2

              z-20

              flex
              items-center

              gap-1.5
              sm:gap-2
            "
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to offer ${index + 1}`}
                className={`
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    current === index
                      ? "w-7 sm:w-9 h-2.5 sm:h-3 bg-white"
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferBenner;