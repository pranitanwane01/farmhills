import React from "react";
import { Link } from "react-router-dom";

// Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import AllProducts from "../pages/AllProducts";

function Footer() {
  return (
    <footer className="bg-[#2B1408] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO SECTION */}

        <div>
          <h2 className="text-4xl font-bold text-[#C28B2C]">FarmHills</h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Premium dry fruits sourced from the world's finest farms. Freshness
            and quality delivered to your doorstep.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition"><Link to="/">Home</Link></li>

            <li className="hover:text-white cursor-pointer transition"><Link to="/products">Shop</Link></li>

            <li className="hover:text-white cursor-pointer transition">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:text-white cursor-pointer transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}

        <div>
          <h3 className="text-2xl font-semibold mb-5">Categories</h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/products">Almonds </Link>
            </li>

            <li>
              <Link to="/products"> Cashews </Link>
            </li>

            <li>
              <Link to="/products"> Walnuts </Link>
            </li>

            <li>
              <Link to="/products"> Pista </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}

        <div>
          <h3 className="text-2xl font-semibold mb-5">Follow Us</h3>

          <div className="flex gap-4">
            {/* FACEBOOK */}

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#9B4D0D] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaFacebookF />
              </div>
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#9B4D0D] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaInstagram />
              </div>
            </a>

            {/* TWITTER */}

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#9B4D0D] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaTwitter />
              </div>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/farmhills/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#9B4D0D] flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}

      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400">
        © 2026 FarmHills. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
