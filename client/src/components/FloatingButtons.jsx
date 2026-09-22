

// import {
//   FaWhatsapp,
//   FaPhoneAlt,
// } from "react-icons/fa";

// const FloatingButtons = () => {
//   return (
//     <div
//       className="
//         fixed
//         bottom-20
//         right-3

//         sm:bottom-22
//         sm:right-5

//         md:bottom-24
//         md:right-6

//         flex
//         flex-col
//         gap-2
//         sm:gap-3

//         z-50
//       "
//     >
//       {/* ==========================================
//           WHATSAPP
//       =========================================== */}

//       <a
//         href="https://wa.me/919131824144"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Contact FarmHills on WhatsApp"
//         className="
//           w-11
//           h-11

//           sm:w-12
//           sm:h-12

//           md:w-14
//           md:h-14

//           rounded-full

//           bg-[#25D366]
//           hover:bg-[#1ebe5d]

//           text-white

//           flex
//           items-center
//           justify-center

//           text-xl
//           sm:text-2xl

//           shadow-xl

//           transition-all
//           duration-300

//           hover:scale-110

//           active:scale-95
//         "
//       >
//         <FaWhatsapp />
//       </a>

//       {/* ==========================================
//           CALL
//       =========================================== */}

//       {/*
//       <a
//         href="tel:+919131824144"
//         aria-label="Call FarmHills"
//         className="
//           w-11
//           h-11

//           sm:w-12
//           sm:h-12

//           md:w-14
//           md:h-14

//           rounded-full

//           bg-[#9B4D0D]
//           hover:bg-[#7A3A05]

//           text-white

//           flex
//           items-center
//           justify-center

//           text-lg
//           sm:text-xl

//           shadow-xl

//           transition-all
//           duration-300

//           hover:scale-110

//           active:scale-95
//         "
//       >
//         <FaPhoneAlt />
//       </a>
//       */}
//     </div>
//   );
// };

// export default FloatingButtons;



// import { FaWhatsapp } from "react-icons/fa";

// const FloatingButtons = () => {
//   return (
//     <div
//       className="
//         fixed

//         bottom-20
//         right-3

//         sm:bottom-22
//         sm:right-4

//         md:bottom-24
//         md:right-6

//         z-50
//       "
//     >
//       {/* ==========================================
//           WHATSAPP BUTTON
//       =========================================== */}

//       <a
//         href="https://wa.me/919131824144"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Contact FarmHills on WhatsApp"
//         className="
//           flex
//           items-center
//           justify-center

//           w-11
//           h-11

//           sm:w-12
//           sm:h-12

//           md:w-14
//           md:h-14

//           rounded-full

//           bg-[#25D366]

//           text-white

//           text-xl
//           sm:text-2xl
//           md:text-[27px]

//           shadow-[0_6px_20px_rgba(37,211,102,0.35)]

//           transition-all
//           duration-300

//           hover:bg-[#1ebe5d]

//           hover:scale-110

//           active:scale-95
//         "
//       >
//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;

// import React, { useEffect, useState } from "react";





// import { ArrowUp } from "lucide-react";

// function FloatingButton() {
//   const [showButton, setShowButton] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // ==========================================
//       // AT TOP
//       // ==========================================

//       if (currentScrollY <= 10) {
//         setShowButton(false);
//         setLastScrollY(currentScrollY);
//         return;
//       }

//       // ==========================================
//       // SCROLLING UP
//       // ==========================================

//       if (currentScrollY < lastScrollY) {
//         setShowButton(true);
//       }

//       // ==========================================
//       // SCROLLING DOWN
//       // ==========================================

//       if (currentScrollY > lastScrollY) {
//         setShowButton(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//     };
//   }, [lastScrollY]);

//   // ==========================================
//   // SCROLL TO TOP
//   // ==========================================

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // ==========================================
//   // DON'T RENDER UNTIL NEEDED
//   // ==========================================

//   if (!showButton) {
//     return null;
//   }

//   return (
//     <button
//       type="button"
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       className="
//         fixed

//         right-4
//         sm:right-6

//         bottom-[82px]
//         sm:bottom-6

//         w-11
//         h-11

//         sm:w-12
//         sm:h-12

//         rounded-full

//         bg-[#9B4D0D]

//         text-white

//         flex
//         items-center
//         justify-center

//         shadow-[0_8px_25px_rgba(91,51,20,0.25)]

//         border
//         border-white/30

//         z-[90]

//         hover:bg-[#7A3A05]

//         hover:scale-105

//         active:scale-95

//         transition-all
//         duration-300
//       "
//     >
//       <ArrowUp
//         size={20}
//         strokeWidth={2.5}
//       />
//     </button>
//   );
// }

// export default FloatingButton;




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