

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import offer5 from "../assets/offer5.png";

function HeroSection() {
  const offers = [
    offer1,
    offer2,
    offer3,
    offer4,
    offer5,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ==============================
  // NEXT SLIDE
  // ==============================

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % offers.length
    );
  };

  // ==============================
  // PREVIOUS SLIDE
  // ==============================

  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + offers.length) % offers.length
    );
  };

  // ==============================
  // AUTO SLIDE
  // ==============================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % offers.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="w-full bg-[#F7F3EE] overflow-hidden">

      {/* =====================================================
          MOBILE HERO
      ====================================================== */}

      <div className="md:hidden w-full">

        <div
          className="
            relative
            w-full
            h-[255px]
            sm:h-[300px]
            overflow-hidden
            bg-[#EFE2C8]
          "
        >

          {/* =================================================
              HERO IMAGE
          ================================================= */}

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
              object-center
              transition-all
              duration-700
            "
          />

          {/* =================================================
              DARK / WARM GRADIENT
              Helps text remain readable
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#2B1408]/75
              via-[#2B1408]/25
              to-transparent
            "
          />

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div
            className="
              absolute
              left-5
              sm:left-7
              top-1/2
              -translate-y-1/2
              z-10
              w-[58%]
              sm:w-[55%]
            "
          >

            {/* SMALL LABEL */}

            <p
              className="
                text-[#F4D8A8]
                uppercase
                tracking-[2px]
                text-[9px]
                sm:text-[11px]
                font-semibold
                mb-2
              "
            >
              Premium Dry Fruits
            </p>

            {/* MAIN HEADING */}

            <h1
              className="
                text-white
                text-[25px]
                sm:text-[32px]
                font-bold
                leading-[1.08]
                drop-shadow-md
              "
            >
              Goodness
              <br />
              in Every Bite
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-2
                text-white/90
                text-[10px]
                sm:text-xs
                leading-relaxed
              "
            >
              Pure • Natural • Healthy
            </p>

            {/* SHOP BUTTON */}

            <Link
              to="/products"
              className="
                inline-flex
                items-center
                gap-1.5

                mt-4

                bg-[#9B4D0D]
                hover:bg-[#7A3A05]

                text-white

                px-4
                sm:px-5

                py-2
                sm:py-2.5

                rounded-full

                text-[11px]
                sm:text-xs

                font-semibold

                shadow-lg

                transition
              "
            >
              Shop Now

              <ArrowRight size={14} />
            </Link>
          </div>

          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous offer"
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2

              z-20

              w-7
              h-7

              rounded-full

              bg-white/50

              flex
              items-center
              justify-center

              text-[#9B4D0D]

              shadow-md

              active:scale-95
            "
          >
            <ChevronLeft size={17} />
          </button>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next offer"
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2

              z-20

              w-7
              h-7

              rounded-full

              bg-white/50

              flex
              items-center
              justify-center

              text-[#9B4D0D]

              shadow-md

              active:scale-95
            "
          >
            <ChevronRight size={17} />
          </button>

          {/* =================================================
              SLIDER DOTS
          ================================================= */}

          <div
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              z-20

              flex
              items-center
              gap-1.5
            "
          >
            {offers.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to offer ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    currentSlide === index
                      ? "w-6 bg-[#9B4D0D]"
                      : "w-2 bg-white"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP HERO
      ====================================================== */}

      <div
        className="
          hidden
          md:block
          w-full
          px-6
          md:px-12
          py-10
          md:py-20
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            gap-6
            lg:gap-1
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            <p
              className="
                text-[#C28B2C]
                uppercase
                tracking-[5px]
                md:tracking-[6px]
                text-sm
                md:text-base
                font-semibold
                mb-5
                md:mb-6
              "
            >
              ✦ Premium Quality
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-[1.08]
                text-[#2B1408]
              "
            >
              Nourish With

              <br />

              <span className="text-[#9B4D0D]">
                Nature's Finest
              </span>

              <br />

              Dry Fruits
            </h1>

            <p
              className="
                mt-6
                md:mt-8
                text-lg
                md:text-2xl
                text-[#7B6252]
                leading-relaxed
                max-w-xl
              "
            >
              Handpicked from the world's finest farms.
              Pure, wholesome, and delivered fresh to your
              door.
            </p>

            <div
              className="
                flex
                gap-5
                mt-8
                md:mt-10
              "
            >

              <Link to="/products">
                <button
                  className="
                    bg-[#9B4D0D]
                    hover:bg-[#7A3A05]
                    text-white
                    px-8
                    md:px-10
                    py-3.5
                    md:py-4
                    rounded-full
                    text-base
                    md:text-lg
                    font-semibold
                    transition
                    duration-300
                    shadow-lg
                  "
                >
                  Shop Now
                </button>
              </Link>

              <Link to="/about">
                <button
                  className="
                    border-2
                    border-[#9B4D0D]
                    text-[#9B4D0D]
                    hover:bg-[#9B4D0D]
                    hover:text-white
                    px-8
                    md:px-10
                    py-3.5
                    md:py-4
                    rounded-full
                    text-base
                    md:text-lg
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

          {/* RIGHT IMAGE */}

          <div
            className="
              relative
              w-full
              h-[400px]
              lg:h-[500px]
              overflow-hidden
              bg-[#EFE2C8]
              rounded-tl-[100px]
              rounded-br-[100px]
              shadow-xl
            "
          >

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

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous offer"
              className="
                absolute
                left-6
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
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

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next offer"
              className="
                absolute
                right-6
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
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
      </div>

    </section>
  );
}

export default HeroSection;