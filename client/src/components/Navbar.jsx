import React from "react";
import logo from "../assets/farmhillss.png";

import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

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
            {/* Left Side */}
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

            {/* Right Side */}
           
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
        className={`w-full  bg-[#F7F3EE] px-6 md:px-12 py-5 shadow-sm z-50 transition-all duration-300

        ${isScrolled ? "fixed top-0 left-0" : "relative"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          {/* <h1 className="text-3xl font-bold text-[#9B4D0D] tracking-wide">
            NutriRoots
          </h1> */}
          <div className="flex items-center gap-3">

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

</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-[20px] font-medium text-[#7B6252]">
            <li className="hover:text-[#9B4D0D] cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-[#9B4D0D] cursor-pointer transition">
              Shop
            </li>

            <li className="hover:text-[#9B4D0D] cursor-pointer transition">
              About
            </li>

            <li className="hover:text-[#9B4D0D] cursor-pointer transition">
              Contact
            </li>
          </ul>

          {/* Cart Button */}
          <button className="hidden md:flex items-center gap-2 bg-[#9B4D0D] text-white px-7 py-3 rounded-full text-lg font-semibold hover:bg-[#7f3f08] transition">
            <ShoppingCart size={20} />
            Cart
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#9B4D0D]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-5 text-lg font-medium text-[#7B6252]">
            <p className="hover:text-[#9B4D0D] cursor-pointer">Home</p>

            <p className="hover:text-[#9B4D0D] cursor-pointer">Shop</p>

            <p className="hover:text-[#9B4D0D] cursor-pointer">About</p>

            <p className="hover:text-[#9B4D0D] cursor-pointer">Contact</p>

            <button className="flex items-center justify-center gap-2 bg-[#9B4D0D] text-white px-6 py-3 rounded-full font-semibold">
              <ShoppingCart size={20} />
              Cart
            </button>
          </div>
        )}
      </nav>

      {/* SPACE FIX */}

      {isScrolled && <div className="h-[90px]"></div>}
    </>
  );
}

export default Navbar;
