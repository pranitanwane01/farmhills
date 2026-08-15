
// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaArrowUp,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";

// function Footer() {

//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {

//     setOpenSection(
//       openSection === section ? null : section
//     );
//   };

//   const scrollToTop = () => {

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//   };

//   return (

//     <footer className="relative overflow-hidden text-white bg-gradient-to-br from-[#2B1408] via-[#4A2511] to-[#9B4D0D]">

//       {/* BACKGROUND DESIGN */}

//       <div className="absolute inset-0 opacity-10">

//         <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>

//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>

//       </div>

//       {/* MAIN FOOTER */}

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//         {/* LOGO SECTION */}

//         <div>

//           <h2 className="text-3xl font-bold text-[#F4D03F]">

//             FarmHills

//           </h2>

//           <p className="mt-4 text-gray-300 leading-relaxed text-base">

//             Premium quality dry fruits sourced
//             from trusted farms across India.

//           </p>

//           {/* SOCIAL ICONS */}

//           <div className="flex gap-3 mt-6">

//             <a
//               href="https://www.facebook.com/share/19Sx5DdkKj/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
//             >

//               <FaFacebookF />

//             </a>

//             <a
//               href="https://www.instagram.com/farmh_ills?igsh=NXc5eDJzMG85ZDI0"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
//             >

//               <FaInstagram />

//             </a>

//             <a
//               href="https://www.threads.com/@farmh_ills"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
//             >

//               <FaTwitter />

//             </a>

//             <a
//               href="https://www.linkedin.com/company/farmhills/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
//             >

//               <FaLinkedinIn />

//             </a>

//           </div>

//         </div>

//         {/* QUICK LINKS */}

//         <div>

//           <button
//             onClick={() => toggleSection("quick")}
//             className="w-full flex items-center justify-between text-xl font-bold mb-4"
//           >

//             Quick Links

//             <span className="lg:hidden">

//               {openSection === "quick"
//                 ? <FaChevronUp />
//                 : <FaChevronDown />}

//             </span>

//           </button>

//           <ul className={`space-y-2 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
//             openSection === "quick"
//               ? "max-h-96"
//               : "max-h-0 lg:max-h-96"
//           }`}>

//             <li>

//               <Link
//                 to="/"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Home

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/products"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Shop

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/about"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 About Us

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/contact"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Contact

//               </Link>

//             </li>

//           </ul>

//         </div>

//         {/* ACCOUNT INFO */}

//         <div>

//           <button
//             onClick={() => toggleSection("account")}
//             className="w-full flex items-center justify-between text-xl font-bold mb-4"
//           >

//             Account Info

//             <span className="lg:hidden">

//               {openSection === "account"
//                 ? <FaChevronUp />
//                 : <FaChevronDown />}

//             </span>

//           </button>

//           <ul className={`space-y-2 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
//             openSection === "account"
//               ? "max-h-[500px]"
//               : "max-h-0 lg:max-h-[500px]"
//           }`}>

//             <li>

//               <Link
//                 to="/login"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Login

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/register"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Register

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/privacy-policy"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Privacy Policy

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/return-policy"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Return Policy

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/help-support"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Help & Support

//               </Link>

//             </li>

//             <li>

//               <Link
//                 to="/terms-conditions"
//                 className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
//               >

//                 Terms & Conditions

//               </Link>

//             </li>

//           </ul>

//         </div>

//         {/* CONTACT DETAILS */}

//         <div>

//           <button
//             onClick={() => toggleSection("contact")}
//             className="w-full flex items-center justify-between text-xl font-bold mb-4"
//           >

//             Contact Details

//             <span className="lg:hidden">

//               {openSection === "contact"
//                 ? <FaChevronUp />
//                 : <FaChevronDown />}

//             </span>

//           </button>

//           <div className={`space-y-4 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
//             openSection === "contact"
//               ? "max-h-96"
//               : "max-h-0 lg:max-h-96"
//           }`}>

//             {/* ADDRESS */}

//             <div className="flex gap-3 items-start">

//               <div className="text-[#F4D03F] text-xl mt-1">

//                 <FaMapMarkerAlt />

//               </div>

//               <p>

//                 FarmHills Premium Dry Fruits,
//                 India

//               </p>

//             </div>

//             {/* EMAIL */}

//             <div className="flex gap-3 items-center">

//               <div className="text-[#F4D03F] text-xl">

//                 <FaEnvelope />

//               </div>

//               <p>

//                 farmhills25@gmail.com

//               </p>

//             </div>

//             {/* PHONE */}

//             <div className="flex gap-3 items-center">

//               <div className="text-[#F4D03F] text-xl">

//                 <FaPhoneAlt />

//               </div>

//               <p>

//                 +919131824144 
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* COPYRIGHT */}

//       <div className="relative z-10 border-t border-white/10">

//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

//           <p className="text-gray-300 text-sm text-center md:text-left">

//             © 2026 FarmHills Premium Dry Fruits.
//             All Rights Reserved.

//           </p>

//           {/* PAYMENT METHODS */}

//           <div className="flex gap-4 text-sm font-bold text-[#F4D03F]">

//             <span>
//               VISA
//             </span>

//             <span>
//               PayPal
//             </span>

//             <span>
//               Stripe
//             </span>

//           </div>

//         </div>

//       </div>

//       {/* SCROLL TO TOP */}

//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 w-15 h-12 rounded-full bg-[#F4D03F] text-[#2B1408] flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 z-50"
//       >

//         <FaArrowUp />

//       </button>

//     </footer>
//   );
// }

// export default Footer;



import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  // ==========================================
  // TOGGLE MOBILE SECTIONS
  // ==========================================

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section,
    );
  };

  // ==========================================
  // SCROLL TO TOP
  // ==========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        text-white

        bg-gradient-to-br
        from-[#241006]
        via-[#4A2511]
        to-[#8F470D]
      "
    >

      {/* ==========================================
          SUBTLE BACKGROUND
      =========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.06]
        "
      >
        <div
          className="
            absolute
            -top-20
            -left-20
            w-56
            h-56
            rounded-full
            bg-[#F4D03F]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            w-56
            h-56
            rounded-full
            bg-[#F4D03F]
            blur-3xl
          "
        />
      </div>

      {/* ==========================================
          MAIN FOOTER
      =========================================== */}

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          md:px-12

          py-10
          sm:py-12
          md:py-16

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4

          gap-5
          sm:gap-7
          lg:gap-10
        "
      >

        {/* ========================================
            BRAND
        ========================================= */}

        <div
          className="
            pb-5
            sm:pb-6
            lg:pb-0
          "
        >

          {/* LOGO */}

          <div className="flex items-center gap-2">

            <div
              className="
                w-9
                h-9

                sm:w-10
                sm:h-10

                rounded-xl

                bg-[#F4D03F]

                text-[#2B1408]

                flex
                items-center
                justify-center

                font-bold
                text-lg
                sm:text-xl
              "
            >
              F
            </div>

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-[#F4D03F]
              "
            >
              FarmHills
            </h2>

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              sm:mt-4

              text-gray-300

              text-xs
              sm:text-sm
              md:text-base

              leading-relaxed

              max-w-sm
            "
          >
            Premium quality dry fruits sourced from
            trusted farms and delivered fresh to your
            doorstep.
          </p>

          {/* SOCIAL ICONS */}

          <div
            className="
              flex
              gap-2.5
              sm:gap-3
              mt-5
              sm:mt-6
            "
          >

            <a
              href="https://www.facebook.com/share/19Sx5DdkKj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-sm
                sm:text-base

                hover:bg-[#F4D03F]
                hover:text-[#2B1408]

                transition-all
                duration-300
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/farmh_ills?igsh=NXc5eDJzMG85ZDI0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-sm
                sm:text-base

                hover:bg-[#F4D03F]
                hover:text-[#2B1408]

                transition-all
                duration-300
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.threads.com/@farmh_ills"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-sm
                sm:text-base

                hover:bg-[#F4D03F]
                hover:text-[#2B1408]

                transition-all
                duration-300
              "
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/farmhills/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-sm
                sm:text-base

                hover:bg-[#F4D03F]
                hover:text-[#2B1408]

                transition-all
                duration-300
              "
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* ========================================
            QUICK LINKS
        ========================================= */}

        <div>

          <button
            type="button"
            onClick={() => toggleSection("quick")}
            className="
              w-full

              flex
              items-center
              justify-between

              text-left

              text-base
              sm:text-lg

              font-bold

              py-3
              lg:py-0

              border-b
              border-white/10
              lg:border-0

              lg:mb-5
            "
          >
            <span>Quick Links</span>

            <span className="lg:hidden text-sm">
              {openSection === "quick" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </button>

          <ul
            className={`
              space-y-2.5
              sm:space-y-3

              text-gray-300

              text-xs
              sm:text-sm

              overflow-hidden

              transition-all
              duration-300

              ${
                openSection === "quick"
                  ? "max-h-96 pt-3"
                  : "max-h-0 lg:max-h-96 lg:pt-0"
              }
            `}
          >

            <li>
              <Link
                to="/"
                className="
                  hover:text-[#F4D03F]
                  transition
                "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="
                  hover:text-[#F4D03F]
                  transition
                "
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="
                  hover:text-[#F4D03F]
                  transition
                "
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="
                  hover:text-[#F4D03F]
                  transition
                "
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* ========================================
            ACCOUNT
        ========================================= */}

        <div>

          <button
            type="button"
            onClick={() => toggleSection("account")}
            className="
              w-full

              flex
              items-center
              justify-between

              text-left

              text-base
              sm:text-lg

              font-bold

              py-3
              lg:py-0

              border-b
              border-white/10
              lg:border-0

              lg:mb-5
            "
          >
            <span>Account Info</span>

            <span className="lg:hidden text-sm">
              {openSection === "account" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </button>

          <ul
            className={`
              space-y-2.5
              sm:space-y-3

              text-gray-300

              text-xs
              sm:text-sm

              overflow-hidden

              transition-all
              duration-300

              ${
                openSection === "account"
                  ? "max-h-[500px] pt-3"
                  : "max-h-0 lg:max-h-[500px] lg:pt-0"
              }
            `}
          >

            <li>
              <Link
                to="/login"
                className="hover:text-[#F4D03F] transition"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="hover:text-[#F4D03F] transition"
              >
                Register
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#F4D03F] transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/return-policy"
                className="hover:text-[#F4D03F] transition"
              >
                Return Policy
              </Link>
            </li>

            <li>
              <Link
                to="/help-support"
                className="hover:text-[#F4D03F] transition"
              >
                Help & Support
              </Link>
            </li>

            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-[#F4D03F] transition"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </div>

        {/* ========================================
            CONTACT
        ========================================= */}

        <div>

          <button
            type="button"
            onClick={() => toggleSection("contact")}
            className="
              w-full

              flex
              items-center
              justify-between

              text-left

              text-base
              sm:text-lg

              font-bold

              py-3
              lg:py-0

              border-b
              border-white/10
              lg:border-0

              lg:mb-5
            "
          >
            <span>Contact Details</span>

            <span className="lg:hidden text-sm">
              {openSection === "contact" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </button>

          <div
            className={`
              space-y-3
              sm:space-y-4

              text-gray-300

              text-xs
              sm:text-sm

              overflow-hidden

              transition-all
              duration-300

              ${
                openSection === "contact"
                  ? "max-h-96 pt-3"
                  : "max-h-0 lg:max-h-96 lg:pt-0"
              }
            `}
          >

            {/* ADDRESS */}

            <div className="flex gap-3 items-start">

              <FaMapMarkerAlt
                className="
                  text-[#F4D03F]
                  mt-0.5
                  flex-shrink-0
                "
              />

              <p>
                FarmHills Premium Dry Fruits,
                India
              </p>

            </div>

            {/* EMAIL */}

            <div className="flex gap-3 items-center">

              <FaEnvelope
                className="
                  text-[#F4D03F]
                  flex-shrink-0
                "
              />

              <a
                href="mailto:farmhills25@gmail.com"
                className="hover:text-[#F4D03F] transition"
              >
                farmhills25@gmail.com
              </a>

            </div>

            {/* PHONE */}

            <div className="flex gap-3 items-center">

              <FaPhoneAlt
                className="
                  text-[#F4D03F]
                  flex-shrink-0
                "
              />

              <a
                href="tel:+919131824144"
                className="hover:text-[#F4D03F] transition"
              >
                +91 91318 24144
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* ==========================================
          COPYRIGHT
      =========================================== */}

      <div
        className="
          relative
          z-10

          border-t
          border-white/10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6
            md:px-12

            py-4
            sm:py-5

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-3
          "
        >

          <p
            className="
              text-gray-300

              text-[10px]
              sm:text-xs
              md:text-sm

              text-center
              md:text-left
            "
          >
            © 2026 FarmHills Premium Dry Fruits.
            All Rights Reserved.
          </p>

          {/* PAYMENT METHODS */}

          <div
            className="
              flex
              items-center
              gap-3

              text-[9px]
              sm:text-xs

              font-bold

              text-[#F4D03F]
            "
          >
            <span>VISA</span>
            <span>PayPal</span>
            <span>Stripe</span>
          </div>

        </div>
      </div>

      {/* ==========================================
          SCROLL TO TOP
      =========================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed

          bottom-4
          right-4

          sm:bottom-6
          sm:right-6

          w-10
          h-10

          sm:w-11
          sm:h-11

          rounded-full

          bg-[#F4D03F]
          text-[#2B1408]

          flex
          items-center
          justify-center

          shadow-xl

          hover:scale-110

          transition-all
          duration-300

          z-50
        "
      >
        <FaArrowUp size={14} />
      </button>

    </footer>
  );
}

export default Footer;