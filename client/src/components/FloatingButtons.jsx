


import React, { useEffect, useState } from "react";

import {
  ArrowUp,
} from "lucide-react";

import {
  FaWhatsapp,
} from "react-icons/fa";

function FloatingButton() {
  const [showScrollButton, setShowScrollButton] =
    useState(false);

  // =====================================================
  // WHATSAPP NUMBER
  // =====================================================

  const whatsappNumber = "917076704574";

  const whatsappMessage =
    "Hello FarmHills, I need help with my order.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // =====================================================
  // SHOW SCROLL BUTTON AFTER SCROLLING
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // SCROLL TO TOP
  // =====================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =================================================
          WHATSAPP BUTTON
      ================================================== */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FarmHills on WhatsApp"
        className="
          fixed

          right-4
          sm:right-6

          bottom-[82px]
          sm:bottom-6

          w-11
          h-11

          sm:w-12
          sm:h-12

          rounded-full

          bg-[#25D366]

          text-white

          flex
          items-center
          justify-center

          shadow-[0_6px_20px_rgba(37,211,102,0.35)]

          z-[90]

          hover:scale-110

          active:scale-95

          transition-all
          duration-300
        "
      >
        <FaWhatsapp
          size={23}
        />
      </a>

      {/* =================================================
          SCROLL TO TOP BUTTON
      ================================================== */}

      {showScrollButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed

            right-4
            sm:right-6

            bottom-[136px]
            sm:bottom-[82px]

            w-11
            h-11

            sm:w-12
            sm:h-12

            rounded-full

            bg-[#9B4D0D]

            text-white

            flex
            items-center
            justify-center

            shadow-[0_6px_20px_rgba(155,77,13,0.30)]

            border
            border-white/20

            z-[90]

            hover:bg-[#7A3A05]

            hover:scale-110

            active:scale-95

            transition-all
            duration-300
          "
        >
          <ArrowUp
            size={21}
            strokeWidth={2.5}
          />
        </button>
      )}
    </>
  );
}

export default FloatingButton;