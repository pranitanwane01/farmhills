// import React, { useContext, useState, useEffect } from "react";

// import { Link } from "react-router-dom";

// import { ShoppingCart, Star } from "lucide-react";

// import axios from "axios";

// import Footer from "../components/Footer";

// import { CartContext } from "../context/CartContext";

// function AllProducts() {
//   const { addToCart } = useContext(CartContext);

//   // PRODUCTS STATE
//   const [products, setProducts] = useState([]);

//   // SEARCH STATE
//   const [searchTerm, setSearchTerm] = useState("");

//   // CATEGORY STATE
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/products`,
//         );

//         setProducts(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // FILTER PRODUCTS
//   const filteredProducts = products.filter((item) => {
//     const matchesSearch = item.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" || item.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <>
//       <section className="w-full bg-[#F5F3F0] min-h-screen py-16 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           {/* HEADING */}
//           <div className="mb-12">
//             <p className="text-[#9B4D0D] uppercase tracking-[4px] font-semibold text-sm">
//               Our Collection
//             </p>

//             <h1 className="text-5xl font-bold text-[#2B1408] mt-2">
//               All Products
//             </h1>
//           </div>

//           {/* SEARCH BAR */}
//           <div className="mb-8">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full md:w-[400px] px-6 py-4 rounded-full border border-gray-300 outline-none focus:border-[#9B4D0D]"
//             />
//           </div>

//           {/* CATEGORY FILTERS */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <button
//               onClick={() => setSelectedCategory("All")}
//               className={`px-6 py-3 rounded-full border transition

//               ${
//                 selectedCategory === "All"
//                   ? "bg-[#9B4D0D] text-white"
//                   : "bg-white text-[#9B4D0D]"
//               }
//               `}
//             >
//               All
//             </button>

//             <button
//               onClick={() => setSelectedCategory("Dry Fruits")}
//               className={`px-6 py-3 rounded-full border transition

//               ${
//                 selectedCategory === "Dry Fruits"
//                   ? "bg-[#9B4D0D] text-white"
//                   : "bg-white text-[#9B4D0D]"
//               }
//               `}
//             >
//               Dry Fruits
//             </button>

//             <button
//               onClick={() => setSelectedCategory("Premium")}
//               className={`px-6 py-3 rounded-full border transition

//               ${
//                 selectedCategory === "Premium"
//                   ? "bg-[#9B4D0D] text-white"
//                   : "bg-white text-[#9B4D0D]"
//               }
//               `}
//             >
//               Premium
//             </button>
//           </div>

//           {/* PRODUCTS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {filteredProducts.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
//               >
//                 {/* CLICKABLE PRODUCT AREA */}
//                 <Link to={`/product/${item._id}`}>
//                   {/* IMAGE */}
//                   <div className="overflow-hidden bg-[#EFE2C8]">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-6">
//                     {/* RATING */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <Star
//                         size={18}
//                         className="fill-yellow-400 text-yellow-400"
//                       />

//                       <span className="text-[#7B6252] font-medium">4.8</span>
//                     </div>

//                     {/* NAME */}
//                     <h3 className="text-2xl font-semibold text-[#2B1408]">
//                       {item.name}
//                     </h3>

//                     {/* CATEGORY */}
//                     <p className="text-[#7B6252] mt-2">{item.category}</p>
//                   </div>
//                 </Link>

//                 {/* PRICE + CART BUTTON */}
//                 <div className="flex items-center justify-between px-6 pb-6">
//                   {/* PRICE */}
//                   <p className="text-[#9B4D0D] text-3xl font-bold">
//                     ₹{item.price}
//                   </p>

//                   {/* ADD TO CART BUTTON */}
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white p-4 rounded-full transition"
//                   >
//                     <ShoppingCart size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AllProducts;



import React, { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  ShoppingCart,
  Star,
  Search,
} from "lucide-react";

import axios from "axios";

import { CartContext } from "../context/CartContext";

import toast from "react-hot-toast";

function AllProducts() {
  const { addToCart } = useContext(CartContext);

  // ==========================================
  // PRODUCTS STATE
  // ==========================================

  const [products, setProducts] = useState([]);

  // ==========================================
  // SEARCH STATE
  // ==========================================

  const [searchTerm, setSearchTerm] = useState("");

  // ==========================================
  // CATEGORY STATE
  // ==========================================

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // ==========================================
  // FETCH PRODUCTS
  // ==========================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  // ==========================================
  // FILTER PRODUCTS
  // ==========================================

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ==========================================
  // CATEGORY LIST
  // ==========================================

  const categories = [
    "All",
    "Dry Fruits",
    "Premium",
  ];

  return (
    <section
      className="
        w-full
        bg-[#F5F3F0]

        min-h-screen

        py-10
        sm:py-14
        md:py-20

        px-4
        sm:px-6
        md:px-10
        lg:px-12

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            HEADER
        =========================================== */}

        <div
          className="
            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          <p
            className="
              text-[#9B4D0D]

              uppercase

              tracking-[3px]
              sm:tracking-[4px]

              font-semibold

              text-xs
              sm:text-sm

              text-center
              md:text-left
            "
          >
            Our Collection
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl

              font-bold

              text-[#2B1408]

              mt-2

              text-center
              md:text-left
            "
          >
            All Products
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base
              md:text-lg

              mt-3

              max-w-2xl

              leading-relaxed

              text-center
              md:text-left
            "
          >
            Explore our premium collection of fresh,
            carefully selected dry fruits.
          </p>
        </div>

        {/* ==========================================
            SEARCH + FILTER AREA
        =========================================== */}

        <div
          className="
            mb-8
            sm:mb-10

            bg-white

            rounded-2xl
            sm:rounded-3xl

            p-4
            sm:p-5
            md:p-6

            shadow-sm

            border
            border-[#E7D3B8]
          "
        >

          {/* SEARCH */}

          <div className="relative w-full md:max-w-lg">

            <Search
              size={20}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2

                text-[#9B4D0D]
              "
            />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full

                pl-12
                pr-5

                py-3
                sm:py-4

                rounded-full

                border
                border-[#E7D3B8]

                bg-[#FFF9F0]

                text-[#2B1408]

                placeholder:text-[#9A8878]

                outline-none

                focus:border-[#9B4D0D]

                focus:ring-2
                focus:ring-[#9B4D0D]/10

                transition
              "
            />

          </div>

          {/* CATEGORY FILTERS */}

          <div
            className="
              flex

              gap-2
              sm:gap-3

              mt-4

              overflow-x-auto

              scrollbar-hide

              pb-1
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`
                  flex-shrink-0

                  px-5
                  sm:px-6

                  py-2.5
                  sm:py-3

                  rounded-full

                  border

                  text-sm
                  sm:text-base

                  font-medium

                  transition-all
                  duration-300

                  ${
                    selectedCategory === category
                      ? "bg-[#9B4D0D] text-white border-[#9B4D0D] shadow-md"
                      : "bg-white text-[#9B4D0D] border-[#E7D3B8] hover:bg-[#FFF4E5]"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* ==========================================
            PRODUCT COUNT
        =========================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-5
            sm:mb-7
          "
        >

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base
            "
          >
            Showing{" "}
            <span className="font-semibold text-[#2B1408]">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

        </div>

        {/* ==========================================
            PRODUCTS
        =========================================== */}

        {filteredProducts.length > 0 ? (

          <div
            className="
              grid

              grid-cols-2

              md:grid-cols-3

              xl:grid-cols-4

              gap-3
              sm:gap-5
              md:gap-6
              lg:gap-7
            "
          >

            {filteredProducts.map((item) => (

              <div
                key={item._id}
                className="
                  group
                  relative

                  bg-[#FFF9F0]

                  rounded-[20px]
                  sm:rounded-[26px]
                  md:rounded-[30px]

                  overflow-hidden

                  border
                  border-[#E7D3B8]

                  shadow-[0_6px_25px_rgba(91,51,20,0.07)]

                  hover:border-[#C28B2C]

                  hover:shadow-[0_18px_45px_rgba(91,51,20,0.14)]

                  hover:-translate-y-1
                  md:hover:-translate-y-2

                  transition-all
                  duration-500
                "
              >

                {/* ========================================
                    IMAGE
                ========================================= */}

                <Link
                  to={`/product/${item._id}`}
                >

                  <div
                    className="
                      relative

                      bg-gradient-to-br
                      from-[#F5E8D2]
                      via-[#EFE0C5]
                      to-[#E6CFAE]

                      h-[150px]
                      sm:h-[210px]
                      md:h-[240px]
                      lg:h-[260px]

                      overflow-hidden
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        h-full

                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-[1.08]
                      "
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-[#5B3215]/10
                        via-transparent
                        to-white/10

                        pointer-events-none
                      "
                    />

                  </div>

                </Link>

                {/* ========================================
                    CONTENT
                ========================================= */}

                <div
                  className="
                    px-3
                    sm:px-5

                    pt-3
                    sm:pt-5

                    pb-4
                    sm:pb-5
                  "
                >

                  {/* CATEGORY */}

                  <p
                    className="
                      uppercase

                      tracking-[1px]
                      sm:tracking-[1.5px]

                      text-[8px]
                      sm:text-[10px]

                      font-semibold

                      text-[#B77A24]

                      mb-1
                    "
                  >
                    {item.category}
                  </p>

                  {/* NAME */}

                  <Link
                    to={`/product/${item._id}`}
                  >

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        md:text-xl

                        font-bold

                        text-[#2B1408]

                        leading-tight

                        line-clamp-1

                        hover:text-[#9B4D0D]

                        transition-colors
                      "
                    >
                      {item.name}
                    </h3>

                  </Link>

                  {/* RATING */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1

                      mt-2
                    "
                  >

                    <div className="flex gap-[1px]">

                      {[1, 2, 3, 4, 5].map(
                        (star) => (
                          <Star
                            key={star}
                            size={12}
                            className="
                              sm:w-[14px]
                              sm:h-[14px]

                              fill-[#E9A72E]
                              text-[#E9A72E]
                            "
                          />
                        ),
                      )}

                    </div>

                    <span
                      className="
                        text-[9px]
                        sm:text-xs

                        text-[#8A7566]

                        font-medium
                      "
                    >
                      4.8
                    </span>

                  </div>

                  {/* ========================================
                      PRICE + CART
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      mt-3
                      sm:mt-5
                    "
                  >

                    {/* PRICE */}

                    <div
                      className="
                        inline-flex
                        items-baseline

                        gap-1
                      "
                    >

                      <span
                        className="
                          text-lg
                          sm:text-xl
                          md:text-2xl

                          font-bold

                          text-[#9B4D0D]
                        "
                      >
                        ₹{item.price}
                      </span>

                      <span
                        className="
                          text-[8px]
                          sm:text-xs

                          text-[#8A7566]
                        "
                      >
                        / 250g
                      </span>

                    </div>

                    {/* CART BUTTON */}

                    <button
                      type="button"
                      onClick={() => {
                        addToCart(item);

                        toast.success(
                          "Item added to cart. Check your cart.",
                        );
                      }}
                      aria-label={`Add ${item.name} to cart`}
                      className="
                        w-9
                        h-9

                        sm:w-11
                        sm:h-11

                        rounded-full

                        bg-[#9B4D0D]

                        text-white

                        flex
                        items-center
                        justify-center

                        shadow-md

                        hover:bg-[#7A3A05]

                        hover:scale-110

                        active:scale-95

                        transition-all
                        duration-300
                      "
                    >

                      <ShoppingCart
                        size={16}
                        className="
                          sm:w-5
                          sm:h-5
                        "
                      />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* ==========================================
              NO PRODUCTS
          =========================================== */

          <div
            className="
              min-h-[300px]

              flex
              flex-col
              items-center
              justify-center

              bg-white

              rounded-3xl

              border
              border-[#E7D3B8]

              text-center

              px-6
            "
          >

            <div
              className="
                w-16
                h-16

                rounded-full

                bg-[#EFE2C8]

                flex
                items-center
                justify-center

                mb-4
              "
            >
              <ShoppingCart
                size={28}
                className="text-[#9B4D0D]"
              />
            </div>

            <h2
              className="
                text-xl
                sm:text-2xl

                font-bold

                text-[#2B1408]
              "
            >
              No Products Found
            </h2>

            <p
              className="
                text-[#7B6252]

                text-sm
                sm:text-base

                mt-2
              "
            >
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="
                mt-5

                px-6
                py-3

                rounded-full

                bg-[#9B4D0D]

                text-white

                text-sm
                sm:text-base

                font-semibold

                hover:bg-[#7A3A05]

                transition
              "
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>
    </section>
  );
}

export default AllProducts;
