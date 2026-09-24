
import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import { Link } from "react-router-dom";

import logo from "../assets/farmhillss.png";

import {
  ShoppingBag,
  Menu,
  X,
  Search,
  Heart,
  CircleUserRound,
  Home,
  Grid2X2,
  Package,
} from "lucide-react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  // =====================================================
  // TOTAL CART ITEMS
  // =====================================================

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =====================================================
  // SCROLL
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE PROFILE DROPDOWN WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(
          ".profile-dropdown-container"
        )
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =====================================================
  // MOBILE BODY BOTTOM PADDING
  // =====================================================

  useEffect(() => {
    const updateBottomPadding = () => {
      if (window.innerWidth < 768) {
        document.body.style.paddingBottom = "68px";
      } else {
        document.body.style.paddingBottom = "0px";
      }
    };

    updateBottomPadding();

    window.addEventListener(
      "resize",
      updateBottomPadding
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateBottomPadding
      );

      document.body.style.paddingBottom = "0px";
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav
        className={`
          w-full
          bg-[#EFE2C8]

          shadow-sm

          z-[100]

          transition-all
          duration-300

          ${
            isScrolled
              ? "fixed top-0 left-0 shadow-lg"
              : "relative"
          }
        `}
      >
        {/* ===================================================
            MOBILE HEADER
        ==================================================== */}

        <div
          className="
            md:hidden

            h-[68px]

            px-4

            flex
            items-center
            justify-between

            relative
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* MENU */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              className="
                w-9
                h-9

                flex
                items-center
                justify-center

                text-[#9B4D0D]

                rounded-full

                hover:bg-[#E6D6B8]

                transition
              "
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            {/* SEARCH */}

            <Link
              to="/products"
              onClick={closeMobileMenu}
              aria-label="Search products"
              className="
                w-9
                h-9

                flex
                items-center
                justify-center

                text-[#9B4D0D]

                rounded-full

                hover:bg-[#E6D6B8]

                transition
              "
            >
              <Search size={22} />
            </Link>
          </div>

          {/* =================================================
              CENTER LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              absolute
              left-1/2
              -translate-x-1/2

              top-1/2
              -translate-y-1/2

              flex
              flex-col
              items-center
              justify-center
            "
          >
            <img
              src={logo}
              alt="FarmHills"
              className="
                w-[42px]
                h-[42px]

                object-contain

                rounded-full
              "
            />

            <span
              className="
                text-[9px]

                font-bold

                text-[#9B4D0D]

                leading-none

                mt-[1px]
              "
            >
              FarmHills
            </span>
          </Link>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* WISHLIST */}

            {/* <button
              type="button"
              aria-label="Wishlist"
              className="
                w-9
                h-9

                flex
                items-center
                justify-center

                text-[#9B4D0D]

                rounded-full

                hover:bg-[#E6D6B8]

                transition
              "
            >
              <Heart
                size={22}
                strokeWidth={1.8}
              />
            </button> */}

            {/* CART */}

            <Link
              to="/cart"
              onClick={closeMobileMenu}
              aria-label="Shopping cart"
              className="
                relative

                w-9
                h-9

                flex
                items-center
                justify-center

                text-[#9B4D0D]

                rounded-full

                hover:bg-[#E6D6B8]

                transition
              "
            >
              <ShoppingBag
                size={22}
                strokeWidth={1.9}
              />

              {totalItems > 0 && (
                <span
                  className="
                    absolute

                    -top-1
                    -right-1

                    w-[17px]
                    h-[17px]

                    rounded-full

                    bg-[#9B4D0D]

                    text-white

                    text-[9px]

                    font-bold

                    flex
                    items-center
                    justify-center
                  "
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ===================================================
            DESKTOP NAVBAR
        ==================================================== */}

        <div
          className="
            hidden
            md:flex

            px-4
            sm:px-6
            md:px-12

            py-3
            sm:py-4
            md:py-5
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              w-full

              flex
              items-center
              justify-between
            "
          >
            {/* =================================================
                DESKTOP LOGO
            ================================================== */}

            <Link
              to="/"
              className="
                flex
                items-center
                gap-2
                sm:gap-3
              "
            >
              <div
                className="
                  w-11
                  h-11

                  sm:w-14
                  sm:h-14

                  md:w-16
                  md:h-16

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

              <div>
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
                    text-[8px]
                    sm:text-[10px]
                    md:text-sm

                    tracking-[2px]
                    sm:tracking-[3px]
                    md:tracking-[4px]

                    text-[#7B6252]

                    mt-1
                  "
                >
                  PREMIUM DRY FRUITS
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP LINKS
            ================================================== */}

            <ul
              className="
                flex

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
                  className="
                    hover:text-[#9B4D0D]
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
                    hover:text-[#9B4D0D]
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
                    hover:text-[#9B4D0D]
                    transition
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    hover:text-[#9B4D0D]
                    transition
                  "
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* =================================================
                DESKTOP RIGHT
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-4
                lg:gap-5
              "
            >
              {/* PROFILE */}

              {user ? (
                <div className="relative profile-dropdown-container">
                  <button
                    type="button"
                    onClick={() =>
                      setProfileOpen(!profileOpen)
                    }
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
                    <div
                      className="
                        w-8
                        h-8

                        lg:w-9
                        lg:h-9

                        rounded-full

                        bg-[#dfcab8]

                        text-white

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <CircleUserRound
                        size={21}
                      />
                    </div>
                  </button>

                  {/* PROFILE DROPDOWN */}

                  {profileOpen && (
                    <div
                      className="
                        absolute
                        right-0
                        mt-4

                        w-72

                        bg-white

                        rounded-3xl

                        shadow-2xl

                        border
                        border-gray-100

                        overflow-hidden

                        z-[200]
                      "
                    >
                      <div
                        className="
                          bg-[#F7F3EE]

                          p-5

                          border-b
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-4
                          "
                        >
                          <div
                            className="
                              w-12
                              h-12

                              rounded-full

                              bg-gradient-to-br
                              from-[#9B4D0D]
                              to-[#C28B2C]

                              text-white

                              flex
                              items-center
                              justify-center
                            "
                          >
                            <CircleUserRound
                              size={26}
                            />
                          </div>

                          <div className="min-w-0">
                            <h3
                              className="
                                font-bold
                                text-[#2B1408]
                                text-lg
                                truncate
                              "
                            >
                              {user.name}
                            </h3>

                            <p
                              className="
                                text-sm
                                text-gray-500
                                truncate
                              "
                            >
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <Link
                          to="/my-orders"
                          onClick={() =>
                            setProfileOpen(false)
                          }
                          className="
                            flex
                            items-center
                            gap-3

                            px-6
                            py-4

                            hover:bg-[#F7F3EE]

                            text-[#2B1408]

                            transition
                          "
                        >
                          <Package
                            size={20}
                            className="text-[#9B4D0D]"
                          />

                          My Orders
                        </Link>

                        <Link
                          to="/contact"
                          onClick={() =>
                            setProfileOpen(false)
                          }
                          className="
                            px-6
                            py-4

                            hover:bg-[#F7F3EE]

                            text-[#2B1408]

                            transition
                          "
                        >
                          Help & Support
                        </Link>

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="
                            text-left

                            px-6
                            py-4

                            hover:bg-red-50

                            text-red-500

                            font-semibold

                            transition
                          "
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    lg:gap-4
                  "
                >
                  <Link
                    to="/login"
                    className="
                      text-[#9B4D0D]
                      font-medium
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="
                      bg-[#9B4D0D]

                      text-white

                      px-4
                      lg:px-5

                      py-2

                      rounded-full

                      shadow-md
                    "
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* DESKTOP CART */}

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

                {totalItems > 0 && (
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
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE MENU OVERLAY
        ==================================================== */}

        {menuOpen && (
          <>
            {/* BACKDROP */}

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="
                md:hidden

                fixed

                inset-0

                top-[68px]

                bg-black/20

                z-[-1]
              "
            />

            {/* MENU PANEL */}

            <div
              className="
                md:hidden

                absolute

                top-full

                left-3
                right-3

                mt-2

                bg-white

                rounded-2xl

                border
                border-[#E7D3B8]

                shadow-[0_12px_35px_rgba(43,20,8,0.15)]

                overflow-hidden

                z-[150]
              "
            >
              {/* LINKS */}

              <div className="p-3">

                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-[#2B1408]

                    text-sm

                    font-medium

                    hover:bg-[#F7F3EE]

                    transition
                  "
                >
                  Home

                  <span className="text-[#9B4D0D]">
                    →
                  </span>
                </Link>

                <Link
                  to="/products"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-[#2B1408]

                    text-sm

                    font-medium

                    hover:bg-[#F7F3EE]

                    transition
                  "
                >
                  Shop

                  <span className="text-[#9B4D0D]">
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-[#2B1408]

                    text-sm

                    font-medium

                    hover:bg-[#F7F3EE]

                    transition
                  "
                >
                  About

                  <span className="text-[#9B4D0D]">
                    →
                  </span>
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-[#2B1408]

                    text-sm

                    font-medium

                    hover:bg-[#F7F3EE]

                    transition
                  "
                >
                  Contact

                  <span className="text-[#9B4D0D]">
                    →
                  </span>
                </Link>
              </div>

              {/* ACCOUNT SECTION */}

              <div
                className="
                  border-t
                  border-[#EFE2C8]

                  px-4
                  py-3
                "
              >
                {user ? (
                  <>
                    <div
                      className="
                        flex
                        items-center
                        gap-3

                        mb-3
                      "
                    >
                      <div
                        className="
                          w-9
                          h-9

                          rounded-full

                          bg-gradient-to-br
                          from-[#9B4D0D]
                          to-[#C28B2C]

                          text-white

                          flex
                          items-center
                          justify-center

                          shrink-0
                        "
                      >
                        <CircleUserRound
                          size={19}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[10px]
                            text-[#7B6252]
                          "
                        >
                          Welcome
                        </p>

                        <p
                          className="
                            text-sm
                            font-semibold
                            text-[#2B1408]

                            truncate
                          "
                        >
                          {user.name}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-2
                      "
                    >
                      <Link
                        to="/my-orders"
                        onClick={closeMobileMenu}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2

                          h-10

                          rounded-xl

                          border
                          border-[#E7D3B8]

                          text-[#9B4D0D]

                          text-xs

                          font-semibold

                          hover:bg-[#F7F3EE]

                          transition
                        "
                      >
                        <Package size={15} />
                        My Orders
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="
                          h-10

                          rounded-xl

                          bg-[#9B4D0D]

                          text-white

                          text-xs

                          font-semibold

                          hover:bg-[#7A3A05]

                          transition
                        "
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-2
                    "
                  >
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="
                        h-10

                        flex
                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-[#E7D3B8]

                        text-[#9B4D0D]

                        text-xs

                        font-semibold
                      "
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      onClick={closeMobileMenu}
                      className="
                        h-10

                        flex
                        items-center
                        justify-center

                        rounded-xl

                        bg-[#9B4D0D]

                        text-white

                        text-xs

                        font-semibold
                      "
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>

      {/* =====================================================
          SPACE WHEN NAVBAR BECOMES FIXED
      ====================================================== */}

      {isScrolled && (
        <div
          className="
            h-[68px]
            md:h-[90px]
          "
        />
      )}

      {/* =====================================================
          MOBILE FIXED BOTTOM NAVBAR
      ====================================================== */}

      <div
        className="
          md:hidden

          fixed
          bottom-0
          left-0
          right-0

          z-[100]

          bg-white

          border-t
          border-[#E8DCCF]

          shadow-[0_-4px_15px_rgba(0,0,0,0.08)]
        "
      >
        <div
          className="
            grid
            grid-cols-4

            h-[68px]
          "
        >
          {/* HOME */}

          <Link
            to="/"
            className="
              flex
              flex-col
              items-center
              justify-center

              gap-1

              text-[#7B6252]

              hover:text-[#9B4D0D]

              transition
            "
          >
            <Home size={21} />

            <span
              className="
                text-[11px]
                font-medium
              "
            >
              Home
            </span>
          </Link>

          {/* CATEGORIES */}

          <Link
            to="/products"
            className="
              flex
              flex-col
              items-center
              justify-center

              gap-1

              text-[#7B6252]

              hover:text-[#9B4D0D]

              transition
            "
          >
            <Grid2X2 size={21} />

            <span
              className="
                text-[11px]
                font-medium
              "
            >
              Categories
            </span>
          </Link>

          {/* ACCOUNT */}

          <Link
            to={user ? "/my-orders" : "/login"}
            className="
              flex
              flex-col
              items-center
              justify-center

              gap-1

              text-[#7B6252]

              hover:text-[#9B4D0D]

              transition
            "
          >
            <CircleUserRound size={21} />

            <span
              className="
                text-[11px]
                font-medium
              "
            >
              Account
            </span>
          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="
              relative

              flex
              flex-col
              items-center
              justify-center

              gap-1

              text-[#7B6252]

              hover:text-[#9B4D0D]

              transition
            "
          >
            <div className="relative">
              <ShoppingBag size={21} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute

                    -top-2
                    -right-2

                    bg-[#9B4D0D]

                    text-white

                    w-[17px]
                    h-[17px]

                    rounded-full

                    text-[9px]

                    font-bold

                    flex
                    items-center
                    justify-center
                  "
                >
                  {totalItems}
                </span>
              )}
            </div>

            <span
              className="
                text-[11px]
                font-medium
              "
            >
              Cart
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;