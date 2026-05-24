import React from 'react'

import { useEffect, useState } from "react";

import bannerone from "../assets/bannerone.webp";
import bannertwo from "../assets/bannertwo.webp";
import bannerthree from "../assets/bannerthree.webp";
import bannerfour from "../assets/bannerfour.webp";

function OfferBenner() {

  const slides = [

    {
      title: "Premium Almond Collection",
      subtitle: "Flat 25% OFF",
      desc:
        "Healthy, crunchy and naturally rich almonds directly from premium farms.",
      image:
        bannerone,
    },

    {
      title: "Luxury Gift Packs",
      subtitle: "Festival Special",
      desc:
        "Elegant dry fruit gift boxes for family, friends and corporate gifting.",
      image:
        bannertwo,
    },

    {
      title: "Organic Cashews",
      subtitle: "Buy 2 Get 1 Free",
      desc:
        "Premium quality cashews with rich taste and natural freshness.",
      image:
        bannerthree,
    },

    {
      title: "Healthy Snacking",
      subtitle: "Starting ₹299",
      desc:
        "Daily nutrition with the finest dry fruits and nuts collection.",
      image:
        bannerfour,
    },

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="w-full bg-[#F5F3F0] py-6 px-1 md:px-1">

      <div className="max-w-7xl mx-auto">

        {/* SLIDER */}

        <div
          className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700"
        >

          {/* BACKGROUND IMAGE */}

          <img
            src={slides[current].image}
            alt=""
            className="absolute w-full h-full object-cover scale-110"
          />

          {/* DARK OVERLAY */}

          {/* <div className="absolute inset-0 bg-black/45"></div> */}

          {/* GLASS EFFECT */}

          <div className="absolute inset-0 backdrop-blur-[0px]"></div>

          {/* CONTENT */}

          {/* <div className="relative z-10 h-full flex items-center px-8 md:px-20">

            <div className="max-w-2xl text-white">

              <p className="uppercase tracking-[5px] text-yellow-300 font-semibold text-sm">

                Exclusive Offer

              </p>

              <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-6">

                {slides[current].title}

              </h2>

              <h3 className="text-3xl md:text-5xl font-semibold text-[#F5C97A] mt-5">

                {slides[current].subtitle}

              </h3>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-8 max-w-xl">

                {slides[current].desc}

              </p> */}

              {/* button */}

              {/* <div className="flex flex-col sm:flex-row gap-5 mt-10">

                <button className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">

                  Shop Now

                </button>

                <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">

                  View Offers

                </button>

              </div> */}

            {/* </div> */}

          {/* </div> */}

          {/* DOTS */}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">

            {slides.map((_, index) => (

              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-10 h-3 bg-white"
                    : "w-3 h-3 bg-white/50"
                }`}
              ></div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfferBenner;