
import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import { Link } from "react-router-dom";

import logo from "../assets/farmhillss.png";

import {
  ShoppingCart,
  Menu,
  X,
  Phone,
  Mail,
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

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const { cartItems } =
    useContext(CartContext);

  const { user, logout } =
    useContext(AuthContext);

  // TOTAL CART ITEMS

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

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

                <p>
                  sajalsahu@gmail.com
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-5 text-lg">

              <a
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
              </a>

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

        ${
          isScrolled
            ? "fixed top-0 left-0"
            : "relative"
        }
        `}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

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

          {/* RIGHT SECTION */}

          <div className="hidden md:flex items-center gap-5">

            {/* AUTH */}

            {user ? (

              <div className="flex items-center gap-4">

                <p className="text-[#9B4D0D] font-semibold">

                  Hello, {user.name}

                </p>

                <button
                  onClick={logout}
                  className="bg-[#9B4D0D] text-white px-5 py-2 rounded-full hover:bg-[#7A3A05] transition"
                >

                  Logout

                </button>

              </div>

            ) : (

              <div className="flex items-center gap-4">

                <Link
                  to="/login"
                  className="text-[#9B4D0D] font-medium"
                >

                  Login

                </Link>

                <Link
                  to="/register"
                  className="bg-[#9B4D0D] text-white px-5 py-2 rounded-full hover:bg-[#7A3A05] transition"
                >

                  Register

                </Link>

              </div>

            )}

            {/* CART */}

            <Link
              to="/cart"
              className="flex items-center gap-2 bg-[#9B4D0D] text-white px-7 py-3 rounded-full text-lg font-semibold hover:bg-[#7f3f08] transition"
            >

              <ShoppingCart size={20} />

              Cart ({totalItems})

            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden text-[#9B4D0D]"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}

          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="md:hidden mt-6 flex flex-col gap-5 text-lg font-medium text-[#7B6252]">

            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
            >

              Home

            </Link>

            <Link
              to="/products"
              onClick={() =>
                setMenuOpen(false)
              }
            >

              Shop

            </Link>

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
            >

              About

            </Link>

            <Link
              to="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >

              Contact

            </Link>

            {/* AUTH MOBILE */}

            {user ? (

              <>

                <p className="text-[#9B4D0D] font-semibold">

                  Hello, {user.name}

                </p>

                <button
                  onClick={logout}
                  className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full"
                >

                  Logout

                </button>

              </>

            ) : (

              <>

                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  Login

                </Link>

                <Link
                  to="/register"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="bg-[#9B4D0D] text-white px-5 py-3 rounded-full text-center"
                >

                  Register

                </Link>

              </>

            )}

            {/* CART */}

            <Link
              to="/cart"
              onClick={() =>
                setMenuOpen(false)
              }
              className="flex items-center justify-center gap-2 bg-[#9B4D0D] text-white px-6 py-3 rounded-full font-semibold"
            >

              <ShoppingCart size={20} />

              Cart ({totalItems})

            </Link>

          </div>

        )}

      </nav>

      {/* SPACE FIX */}

      {isScrolled && (
        <div className="h-[90px]"></div>
      )}
    </>
  );
}

export default Navbar;