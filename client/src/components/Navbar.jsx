

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
  ChevronDown,
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

  // TOTAL CART ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP HEADER */}

      {!isScrolled && (
        <div className="bg-[#C28B2C] text-white px-6 md:px-12 py-3">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            {/* LEFT */}

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <p>+91-7067504574</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <p>sajalsahu@gmail.com</p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-5 text-lg">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="cursor-pointer hover:text-gray-300 transition" />
              </a> */}

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
              </a>

              <a
                href="https://www.linkedin.com/company/farmhills/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN NAVBAR */}

      <nav
        className={`w-full bg-[#F7F3EE] px-6 md:px-12 py-5 shadow-sm z-50 transition-all duration-300
        ${isScrolled ? "fixed top-0 left-0 shadow-lg" : "relative"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}

          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Farm Hills Logo"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-3xl font-bold text-[#9B4D0D]">
                FarmHills
              </h1>

              <p className="text-sm tracking-[4px] text-[#7B6252]">
                PREMIUM DRY FRUITS
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex gap-12 text-[20px] font-medium text-[#7B6252]">
            <li>
              <Link
                to="/"
                className="hover:text-[#9B4D0D] transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-[#9B4D0D] transition duration-300"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-[#9B4D0D] transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#9B4D0D] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SECTION */}

          <div className="hidden md:flex items-center gap-5">
            {/* AUTH */}

            {user ? (
              <div className="relative">
                {/* PROFILE BUTTON */}

                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#E8DCCF] px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[1px] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center shadow-md">
                    <CircleUserRound size={22} strokeWidth={2.2} />
                  </div>

                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}

                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                    {/* HEADER */}

                    <div className="bg-[#F7F3EE] p-5 border-b">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center shadow-md">
                          <CircleUserRound
                            size={26}
                            strokeWidth={2.2}
                          />
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

                    {/* MENU */}

                    <div className="flex flex-col">
                      <Link
                        to="/my-orders"
                        onClick={() => setProfileOpen(false)}
                        className="px-6 py-4 hover:bg-[#F7F3EE] transition font-medium text-[#2B1408]"
                      >
                        My Orders
                      </Link>

                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="px-6 py-4 hover:bg-[#F7F3EE] transition font-medium text-[#2B1408]"
                      >
                        Account Settings
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setProfileOpen(false)}
                        className="px-6 py-4 hover:bg-[#F7F3EE] transition font-medium text-[#2B1408]"
                      >
                        Help & Support
                      </Link>

                      <button
                        onClick={() => {
                          logout();
                          setProfileOpen(false);
                        }}
                        className="text-left px-6 py-4 hover:bg-red-50 text-red-500 font-semibold transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-[#9B4D0D] font-medium hover:text-[#7A3A05] transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-[#9B4D0D] text-white px-5 py-2 rounded-full hover:bg-[#7A3A05] transition shadow-md"
                >
                  Register
                </Link>
              </div>
            )}

            {/* CART */}

            <Link
              to="/cart"
              className="relative flex items-center gap-3 bg-[#9B4D0D] text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-[#7f3f08] hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag size={26} strokeWidth={2.2} />

              {/* <span className="hidden lg:block">Cart</span> */}

              <span className="absolute -top-2 -right-2 bg-white text-[#9B4D0D] w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden text-[#9B4D0D]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-5 text-lg font-medium text-[#7B6252] bg-white rounded-2xl p-5 shadow-lg">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {/* AUTH MOBILE */}

            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center">
                    <CircleUserRound
                      size={22}
                      strokeWidth={2.2}
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Welcome</p>

                    <p className="font-semibold text-[#2B1408]">
                      {user.name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full text-center shadow-md"
                >
                  Register
                </Link>
              </>
            )}

            {/* CART */}

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              // className="relative flex items-center justify-center gap-2 bg-[#9B4D0D] text-white px-6 py-3 rounded-full font-semibold shadow-md"
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9B4D0D] to-[#C28B2C] text-white flex items-center justify-center"
            >
              <ShoppingBag size={20} strokeWidth={2.2} />

              Cart

              <span className="absolute top-0 right-2 bg-white text-[#9B4D0D] w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shadow">
                {totalItems}
              </span>
            </Link>
          </div>
        )}
      </nav>

      {/* SPACE FIX */}

      {isScrolled && <div className="h-[90px]"></div>}
    </>
  );
}

export default Navbar;