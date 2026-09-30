// import { Link } from "react-router-dom";
// import React from "react";
// import {
//   FaTachometerAlt,
//   FaBox,
//   FaShoppingCart,
//   FaUsers,
// } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-black text-white p-5">

//       <h1 className="text-2xl font-bold mb-10">
//         DryFruit Admin
//       </h1>

//       <div className="flex flex-col gap-6">

//         <Link
//           to="/admin/dashboard"
//           className="flex items-center gap-3 hover:text-yellow-400"
//         >
//           <FaTachometerAlt />
//           Dashboard
//         </Link>

//         <Link
//           to="/admin/products"
//           className="flex items-center gap-3 hover:text-yellow-400"
//         >
//           <FaBox />
//           Products
//         </Link>

//         <Link
//           to="/admin/orders"
//           className="flex items-center gap-3 hover:text-yellow-400"
//         >
//           <FaShoppingCart />
//           Orders
//         </Link>

//         <Link
//           to="/admin/users"
//           className="flex items-center gap-3 hover:text-yellow-400"
//         >
//           <FaUsers />
//           Users
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* =====================================================
          MOBILE TOP BAR
      ====================================================== */}

      <div
        className="
          md:hidden

          fixed
          top-0
          left-0
          right-0

          h-16

          bg-black
          text-white

          flex
          items-center
          justify-between

          px-4

          z-[100]
        "
      >
        {/* HAMBURGER */}

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="
            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-lg

            hover:bg-gray-800

            transition
          "
          aria-label="Open admin menu"
        >
          <FaBars size={21} />
        </button>

        {/* TITLE */}

        <h1
          className="
            text-lg
            font-bold
          "
        >
          DryFruit Admin
        </h1>

        {/* SPACER */}

        <div className="w-10" />
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      {mobileOpen && (
        <div
          className="
            md:hidden

            fixed
            inset-0

            bg-black/60

            z-[110]
          "
          onClick={closeMobileMenu}
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          top-0
          bottom-0
          left-0

          z-[120]

          w-64

          bg-black
          text-white

          p-5

          transform
          transition-transform
          duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:relative
          md:translate-x-0

          md:flex
          md:flex-col

          md:min-h-screen
          md:h-screen

          shrink-0
        `}
      >
        {/* =====================================================
            SIDEBAR HEADER
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-10
          "
        >
          <h1
            className="
              text-2xl
              font-bold
            "
          >
            DryFruit Admin
          </h1>

          {/* MOBILE CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeMobileMenu}
            className="
              md:hidden

              w-9
              h-9

              flex
              items-center
              justify-center

              rounded-lg

              hover:bg-gray-800

              transition
            "
            aria-label="Close admin menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <nav
          className="
            flex
            flex-col
            gap-3
          "
        >
          {/* DASHBOARD */}

          <Link
            to="/admin/dashboard"
            onClick={closeMobileMenu}
            className={`
              flex
              items-center
              gap-3

              px-3
              py-3

              rounded-lg

              transition

              ${
                isActive("/admin/dashboard")
                  ? "bg-yellow-500 text-black font-semibold"
                  : "hover:bg-gray-800 hover:text-yellow-400"
              }
            `}
          >
            <FaTachometerAlt />

            <span>
              Dashboard
            </span>
          </Link>

          {/* PRODUCTS */}

          <Link
            to="/admin/products"
            onClick={closeMobileMenu}
            className={`
              flex
              items-center
              gap-3

              px-3
              py-3

              rounded-lg

              transition

              ${
                isActive("/admin/products")
                  ? "bg-yellow-500 text-black font-semibold"
                  : "hover:bg-gray-800 hover:text-yellow-400"
              }
            `}
          >
            <FaBox />

            <span>
              Products
            </span>
          </Link>

          {/* ORDERS */}

          <Link
            to="/admin/orders"
            onClick={closeMobileMenu}
            className={`
              flex
              items-center
              gap-3

              px-3
              py-3

              rounded-lg

              transition

              ${
                isActive("/admin/orders")
                  ? "bg-yellow-500 text-black font-semibold"
                  : "hover:bg-gray-800 hover:text-yellow-400"
              }
            `}
          >
            <FaShoppingCart />

            <span>
              Orders
            </span>
          </Link>

          {/* USERS */}

          <Link
            to="/admin/users"
            onClick={closeMobileMenu}
            className={`
              flex
              items-center
              gap-3

              px-3
              py-3

              rounded-lg

              transition

              ${
                isActive("/admin/users")
                  ? "bg-yellow-500 text-black font-semibold"
                  : "hover:bg-gray-800 hover:text-yellow-400"
              }
            `}
          >
            <FaUsers />

            <span>
              Users
            </span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;