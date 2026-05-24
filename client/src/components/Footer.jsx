
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

  const toggleSection = (section) => {

    setOpenSection(
      openSection === section ? null : section
    );
  };

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-[#2B1408] via-[#4A2511] to-[#9B4D0D]">

      {/* BACKGROUND DESIGN */}

      <div className="absolute inset-0 opacity-10">

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>

      </div>

      {/* MAIN FOOTER */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* LOGO SECTION */}

        <div>

          <h2 className="text-3xl font-bold text-[#F4D03F]">

            FarmHills

          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed text-base">

            Premium quality dry fruits sourced
            from trusted farms across India.

          </p>

          {/* SOCIAL ICONS */}

          <div className="flex gap-3 mt-6">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
            >

              <FaFacebookF />

            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
            >

              <FaInstagram />

            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
            >

              <FaTwitter />

            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#F4D03F] hover:text-[#2B1408] transition duration-300"
            >

              <FaLinkedinIn />

            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div>

          <button
            onClick={() => toggleSection("quick")}
            className="w-full flex items-center justify-between text-xl font-bold mb-4"
          >

            Quick Links

            <span className="lg:hidden">

              {openSection === "quick"
                ? <FaChevronUp />
                : <FaChevronDown />}

            </span>

          </button>

          <ul className={`space-y-2 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
            openSection === "quick"
              ? "max-h-96"
              : "max-h-0 lg:max-h-96"
          }`}>

            <li>

              <Link
                to="/"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Home

              </Link>

            </li>

            <li>

              <Link
                to="/products"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Shop

              </Link>

            </li>

            <li>

              <Link
                to="/about"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                About Us

              </Link>

            </li>

            <li>

              <Link
                to="/contact"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Contact

              </Link>

            </li>

          </ul>

        </div>

        {/* ACCOUNT INFO */}

        <div>

          <button
            onClick={() => toggleSection("account")}
            className="w-full flex items-center justify-between text-xl font-bold mb-4"
          >

            Account Info

            <span className="lg:hidden">

              {openSection === "account"
                ? <FaChevronUp />
                : <FaChevronDown />}

            </span>

          </button>

          <ul className={`space-y-2 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
            openSection === "account"
              ? "max-h-[500px]"
              : "max-h-0 lg:max-h-[500px]"
          }`}>

            <li>

              <Link
                to="/login"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Login

              </Link>

            </li>

            <li>

              <Link
                to="/register"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Register

              </Link>

            </li>

            <li>

              <Link
                to="/privacy-policy"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Privacy Policy

              </Link>

            </li>

            <li>

              <Link
                to="/return-policy"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Return Policy

              </Link>

            </li>

            <li>

              <Link
                to="/help-support"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Help & Support

              </Link>

            </li>

            <li>

              <Link
                to="/terms-conditions"
                className="hover:text-[#F4D03F] transition hover:translate-x-1 inline-block"
              >

                Terms & Conditions

              </Link>

            </li>

          </ul>

        </div>

        {/* CONTACT DETAILS */}

        <div>

          <button
            onClick={() => toggleSection("contact")}
            className="w-full flex items-center justify-between text-xl font-bold mb-4"
          >

            Contact Details

            <span className="lg:hidden">

              {openSection === "contact"
                ? <FaChevronUp />
                : <FaChevronDown />}

            </span>

          </button>

          <div className={`space-y-4 text-gray-300 text-base overflow-hidden transition-all duration-300 ${
            openSection === "contact"
              ? "max-h-96"
              : "max-h-0 lg:max-h-96"
          }`}>

            {/* ADDRESS */}

            <div className="flex gap-3 items-start">

              <div className="text-[#F4D03F] text-xl mt-1">

                <FaMapMarkerAlt />

              </div>

              <p>

                FarmHills Premium Dry Fruits,
                India

              </p>

            </div>

            {/* EMAIL */}

            <div className="flex gap-3 items-center">

              <div className="text-[#F4D03F] text-xl">

                <FaEnvelope />

              </div>

              <p>

                support@farmhills.com

              </p>

            </div>

            {/* PHONE */}

            <div className="flex gap-3 items-center">

              <div className="text-[#F4D03F] text-xl">

                <FaPhoneAlt />

              </div>

              <p>

                +91 7076704574

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-gray-300 text-sm text-center md:text-left">

            © 2026 FarmHills Premium Dry Fruits.
            All Rights Reserved.

          </p>

          {/* PAYMENT METHODS */}

          <div className="flex gap-4 text-sm font-bold text-[#F4D03F]">

            <span>
              VISA
            </span>

            <span>
              PayPal
            </span>

            <span>
              Stripe
            </span>

          </div>

        </div>

      </div>

      {/* SCROLL TO TOP */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-15 h-12 rounded-full bg-[#F4D03F] text-[#2B1408] flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 z-50"
      >

        <FaArrowUp />

      </button>

    </footer>
  );
}

export default Footer;