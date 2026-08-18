

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



import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div
      className="
        fixed

        bottom-20
        right-3

        sm:bottom-22
        sm:right-4

        md:bottom-24
        md:right-6

        z-50
      "
    >
      {/* ==========================================
          WHATSAPP BUTTON
      =========================================== */}

      <a
        href="https://wa.me/919131824144"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact FarmHills on WhatsApp"
        className="
          flex
          items-center
          justify-center

          w-11
          h-11

          sm:w-12
          sm:h-12

          md:w-14
          md:h-14

          rounded-full

          bg-[#25D366]

          text-white

          text-xl
          sm:text-2xl
          md:text-[27px]

          shadow-[0_6px_20px_rgba(37,211,102,0.35)]

          transition-all
          duration-300

          hover:bg-[#1ebe5d]

          hover:scale-110

          active:scale-95
        "
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;