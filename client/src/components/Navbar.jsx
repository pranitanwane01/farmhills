
// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/farmhillss.png";

// import {
//   ShoppingBag,
//   Menu,
//   X,
//   Phone,
//   Mail,
//   CircleUserRound,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import { CartContext } from "../context/CartContext";
// import { AuthContext } from "../context/AuthContext";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   const { cartItems } = useContext(CartContext);
//   const { user, logout } = useContext(AuthContext);

//   const totalItems = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".profile-dropdown-container")) {
//         setProfileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       {/* ================= TOP BAR ================= */}

//       {!isScrolled && (
//         <div className="bg-[#C28B2C] text-white px-6 md:px-12 py-3">
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

//             <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
//               <div className="flex items-center gap-2">
//                 <Phone size={16} />
//                 <p>+919131824144</p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Mail size={16} />
//                 <p>farmhills25@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-5 text-lg">
//               <a
//                 href="https://www.facebook.com/share/19Sx5DdkKj/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebookF className="hover:text-gray-300 transition" />
//               </a>

//               <a
//                 href="https://www.threads.com/@farmh_ills"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter className="hover:text-gray-300 transition" />
//               </a>

//               <a
//                 href="https://www.instagram.com/farmh_ills?igsh=NXc5eDJzMG85ZDI0"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram className="hover:text-gray-300 transition" />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/farmhills/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn className="hover:text-gray-300 transition" />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= MAIN NAVBAR ================= */}

//       <nav
//         className={`
//           w-full bg-[#EFE2C8] px-6 md:px-12 py-5 shadow-sm z-50
//           transition-all duration-300
//           ${isScrolled ? "fixed top-0 left-0 shadow-lg" : "relative"}
//         `}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between">

//           {/* ================= LOGO ================= */}

//           <Link to="/" className="flex items-center gap-3">

//             {/* Logo wrapper */}
//             <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-[#EFE2C8]">

//               <img
//                 src={logo}
//                 alt="FarmHills Logo"
//                 className="
//                   w-full
//                   h-full
//                   object-contain
//                   scale-[1.08]
//                   mix-blend-multiply
//                 "
//               />

//             </div>

//             <div>
//               <h1 className="text-3xl font-bold text-[#9B4D0D]">
//                 FarmHills
//               </h1>

//               <p className="text-sm tracking-[4px] text-[#7B6252]">
//                 PREMIUM DRY FRUITS
//               </p>
//             </div>
//           </Link>

//           {/* ================= DESKTOP MENU ================= */}

//           <ul className="hidden md:flex gap-12 text-[20px] font-medium text-[#7B6252]">

//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-[#9B4D0D] transition"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/products"
//                 className="hover:text-[#9B4D0D] transition"
//               >
//                 Shop
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 className="hover:text-[#9B4D0D] transition"
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:text-[#9B4D0D] transition"
//               >
//                 Contact
//               </Link>
//             </li>

//           </ul>

//           {/* ================= RIGHT SECTION ================= */}

//           <div className="hidden md:flex items-center gap-5">

//             {/* PROFILE */}

//             {user ? (
//               <div className="relative profile-dropdown-container">

//                 <button
//                   onClick={() => setProfileOpen(!profileOpen)}
//                   className="
//                     flex items-center
//                     bg-gradient-to-br
//                     from-[#9B4D0D]
//                     to-[#C28B2C]
//                     border border-[#E8DCCF]
//                     px-5 py-2
//                     rounded-full
//                     shadow-md
//                     hover:shadow-xl
//                     transition
//                   "
//                 >
//                   <div className="w-9 h-9 rounded-full bg-[#dfcab8] text-white flex items-center justify-center">
//                     <CircleUserRound size={22} />
//                   </div>
//                 </button>

//                 {profileOpen && (
//                   <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50">

//                     <div className="bg-[#F7F3EE] p-5 border-b">

//                       <div className="flex items-center gap-4">

//                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center">
//                           <CircleUserRound size={26} />
//                         </div>

//                         <div>
//                           <h3 className="font-bold text-[#2B1408] text-lg">
//                             {user.name}
//                           </h3>

//                           <p className="text-sm text-gray-500">
//                             {user.email}
//                           </p>
//                         </div>

//                       </div>
//                     </div>

//                     <div className="flex flex-col">

//                       <Link
//                         to="/my-orders"
//                         onClick={() => setProfileOpen(false)}
//                         className="px-6 py-4 hover:bg-[#F7F3EE]"
//                       >
//                         My Orders
//                       </Link>

//                       <Link
//                         to="/contact"
//                         onClick={() => setProfileOpen(false)}
//                         className="px-6 py-4 hover:bg-[#F7F3EE]"
//                       >
//                         Help & Support
//                       </Link>

//                       <button
//                         onClick={() => {
//                           logout();
//                           setProfileOpen(false);
//                         }}
//                         className="text-left px-6 py-4 hover:bg-red-50 text-red-500 font-semibold"
//                       >
//                         Logout
//                       </button>

//                     </div>
//                   </div>
//                 )}

//               </div>
//             ) : (
//               <div className="flex items-center gap-4">

//                 <Link
//                   to="/login"
//                   className="text-[#9B4D0D] font-medium"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   className="bg-[#9B4D0D] text-white px-5 py-2 rounded-full shadow-md"
//                 >
//                   Register
//                 </Link>

//               </div>
//             )}

//             {/* CART */}

//             <Link
//               to="/cart"
//               className="
//                 relative
//                 flex items-center
//                 bg-gradient-to-br
//                 from-[#9B4D0D]
//                 to-[#C28B2C]
//                 text-white
//                 p-4
//                 rounded-full
//                 shadow-lg
//                 hover:scale-105
//                 transition
//               "
//             >
//               <ShoppingBag size={26} />

//               <span className="
//                 absolute
//                 -top-1
//                 -right-1
//                 bg-[#e9c8ae]
//                 text-[#9B4D0D]
//                 w-5
//                 h-5
//                 rounded-full
//                 text-xs
//                 font-bold
//                 flex
//                 items-center
//                 justify-center
//               ">
//                 {totalItems}
//               </span>
//             </Link>

//           </div>

//           {/* ================= MOBILE BUTTON ================= */}

//           <button
//             className="md:hidden text-[#9B4D0D]"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>

//         </div>

//         {/* ================= MOBILE MENU ================= */}

//         {menuOpen && (
//           <div className="md:hidden mt-6 flex flex-col gap-5 text-lg font-medium text-[#7B6252] bg-white rounded-2xl p-5 shadow-lg">

//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>

//             <Link to="/products" onClick={() => setMenuOpen(false)}>
//               Shop
//             </Link>

//             <Link to="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>

//             <Link to="/contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </Link>

//             {user ? (
//               <>
//                 <div className="flex items-center gap-3">

//                   <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center">
//                     <CircleUserRound size={22} />
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">
//                       Welcome
//                     </p>

//                     <p className="font-semibold text-[#2B1408]">
//                       {user.name}
//                     </p>
//                   </div>

//                 </div>

//                 <button
//                   onClick={() => {
//                     logout();
//                     setMenuOpen(false);
//                   }}
//                   className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   onClick={() => setMenuOpen(false)}
//                   className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full text-center"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}

//             <Link
//               to="/cart"
//               onClick={() => setMenuOpen(false)}
//               className="relative flex items-center justify-center gap-2 bg-[#9B4D0D] text-white px-6 py-3 rounded-full font-semibold"
//             >
//               <ShoppingBag size={20} />

//               Cart

//               <span className="absolute top-0 right-2 bg-white text-[#9B4D0D] w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center">
//                 {totalItems}
//               </span>
//             </Link>

//           </div>
//         )}
//       </nav>

//       {isScrolled && <div className="h-[90px]" />}
//     </>
//   );
// }

// export default Navbar;


import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/farmhillss.png";

import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  Mail,
  CircleUserRound,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= SCROLL =================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= PROFILE OUTSIDE CLICK =================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown-container")) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}

      {!isScrolled && (
        <div className="bg-[#C28B2C] text-white px-3 sm:px-6 md:px-12 py-2 sm:py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* CONTACT DETAILS */}

            <div className="flex items-center gap-3 sm:gap-5 md:gap-8 text-[11px] sm:text-sm">

              {/* PHONE */}

              <div className="flex items-center gap-1.5 sm:gap-2">
                <Phone size={13} className="sm:w-4 sm:h-4" />

                <p className="whitespace-nowrap">
                  +919131824144
                </p>
              </div>

              {/* EMAIL */}

              <div className="hidden sm:flex items-center gap-2">
                <Mail size={15} />

                <p className="whitespace-nowrap">
                  farmhills25@gmail.com
                </p>
              </div>
            </div>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-lg">

              <a
                href="https://www.facebook.com/share/19Sx5DdkKj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-gray-300 transition" />
              </a>

              <a
                href="https://www.threads.com/@farmh_ills"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-gray-300 transition" />
              </a>

              <a
                href="https://www.instagram.com/farmh_ills?igsh=NXc5eDJzMG85ZDI0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-gray-300 transition" />
              </a>

              <a
                href="https://www.linkedin.com/company/farmhills/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav
        className={`
          w-full
          bg-[#EFE2C8]
          px-4 sm:px-6 md:px-12
          py-3 sm:py-4 md:py-5
          shadow-sm
          z-50
          transition-all duration-300
          ${isScrolled ? "fixed top-0 left-0 shadow-lg" : "relative"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0"
          >

            {/* LOGO IMAGE */}

            <div
              className="
                w-11 h-11
                sm:w-14 sm:h-14
                md:w-16 md:h-16
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                bg-[#EFE2C8]
                shrink-0
              "
            >
              <img
                src={logo}
                alt="FarmHills Logo"
                className="
                  w-full
                  h-full
                  object-contain
                  scale-[1.08]
                  mix-blend-multiply
                "
              />
            </div>

            {/* BRAND NAME */}

            <div className="min-w-0">
              <h1
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  text-[#9B4D0D]
                  leading-none
                "
              >
                FarmHills
              </h1>

              <p
                className="
                  hidden
                  xs:block
                  sm:block
                  text-[8px]
                  sm:text-[10px]
                  md:text-sm
                  tracking-[2px]
                  sm:tracking-[3px]
                  md:tracking-[4px]
                  text-[#7B6252]
                  mt-1
                  whitespace-nowrap
                "
              >
                PREMIUM DRY FRUITS
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================== */}

          <ul
            className="
              hidden
              md:flex
              gap-8
              lg:gap-12
              text-lg
              lg:text-[20px]
              font-medium
              text-[#7B6252]
            "
          >
            <li>
              <Link
                to="/"
                className="hover:text-[#9B4D0D] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-[#9B4D0D] transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-[#9B4D0D] transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#9B4D0D] transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* =================================================
              DESKTOP RIGHT SECTION
          ================================================== */}

          <div className="hidden md:flex items-center gap-4 lg:gap-5">

            {/* PROFILE */}

            {user ? (
              <div className="relative profile-dropdown-container">

                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="
                    flex
                    items-center
                    bg-gradient-to-br
                    from-[#9B4D0D]
                    to-[#C28B2C]
                    border
                    border-[#E8DCCF]
                    px-4
                    lg:px-5
                    py-2
                    rounded-full
                    shadow-md
                    hover:shadow-xl
                    transition
                  "
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#dfcab8] text-white flex items-center justify-center">
                    <CircleUserRound size={21} />
                  </div>
                </button>

                {/* PROFILE DROPDOWN */}

                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50">

                    <div className="bg-[#F7F3EE] p-5 border-b">
                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center">
                          <CircleUserRound size={26} />
                        </div>

                        <div>
                          <h3 className="font-bold text-[#2B1408] text-lg">
                            {user.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {user.email}
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="flex flex-col">

                      <Link
                        to="/my-orders"
                        onClick={() => setProfileOpen(false)}
                        className="px-6 py-4 hover:bg-[#F7F3EE]"
                      >
                        My Orders
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setProfileOpen(false)}
                        className="px-6 py-4 hover:bg-[#F7F3EE]"
                      >
                        Help & Support
                      </Link>

                      <button
                        onClick={() => {
                          logout();
                          setProfileOpen(false);
                        }}
                        className="text-left px-6 py-4 hover:bg-red-50 text-red-500 font-semibold"
                      >
                        Logout
                      </button>

                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 lg:gap-4">

                <Link
                  to="/login"
                  className="text-[#9B4D0D] font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-[#9B4D0D] text-white px-4 lg:px-5 py-2 rounded-full shadow-md"
                >
                  Register
                </Link>

              </div>
            )}

            {/* CART */}

            <Link
              to="/cart"
              className="
                relative
                flex
                items-center
                bg-gradient-to-br
                from-[#9B4D0D]
                to-[#C28B2C]
                text-white
                p-3
                lg:p-4
                rounded-full
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <ShoppingBag size={23} />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  bg-[#e9c8ae]
                  text-[#9B4D0D]
                  w-5
                  h-5
                  rounded-full
                  text-xs
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                {totalItems}
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            className="
              md:hidden
              text-[#9B4D0D]
              p-1
              shrink-0
            "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        {menuOpen && (
          <div
            className="
              md:hidden
              mt-3
              flex
              flex-col
              gap-3
              text-base
              font-medium
              text-[#7B6252]
              bg-white
              rounded-xl
              p-4
              shadow-lg
              border
              border-[#EFE2C8]
            "
          >

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-1"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="py-1"
            >
              Shop
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-1"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-1"
            >
              Contact
            </Link>

            {/* USER */}

            {user ? (
              <>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">

                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center shrink-0">
                    <CircleUserRound size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">
                      Welcome
                    </p>

                    <p className="font-semibold text-[#2B1408] truncate">
                      {user.name}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="
                    bg-[#9B4D0D]
                    text-white
                    px-4
                    py-2.5
                    rounded-full
                    text-sm
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="py-1"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="
                    bg-[#9B4D0D]
                    text-white
                    px-4
                    py-2.5
                    rounded-full
                    text-center
                    text-sm
                  "
                >
                  Register
                </Link>
              </>
            )}

            {/* MOBILE CART */}

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="
                relative
                flex
                items-center
                justify-center
                gap-2
                bg-[#9B4D0D]
                text-white
                px-5
                py-2.5
                rounded-full
                font-semibold
                text-sm
              "
            >
              <ShoppingBag size={19} />

              Cart

              <span
                className="
                  absolute
                  top-0
                  right-2
                  bg-white
                  text-[#9B4D0D]
                  w-5
                  h-5
                  rounded-full
                  text-xs
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                {totalItems}
              </span>
            </Link>

          </div>
        )}
      </nav>

      {/* =====================================================
          SPACE FOR FIXED NAVBAR AFTER SCROLL
      ====================================================== */}

      {isScrolled && (
        <div className="h-[65px] sm:h-[72px] md:h-[90px]" />
      )}
    </>
  );
}

export default Navbar;