
// import React, {
//   useState,
//   useContext,
//   useEffect,
// } from "react";

// import {
//   useParams,
//   Link,
//   useNavigate,
// } from "react-router-dom";

// import Footer from "../components/Footer";

// import axios from "axios";

// import { CartContext } from "../context/CartContext";

// import {
//   Star,
//   ShoppingCart,
//   Truck,
//   ShieldCheck,
//   Zap,
//   BadgeCheck,
// } from "lucide-react";

// function ProductDetails() {

//   const { id } = useParams();

//   const navigate = useNavigate();

//   const { addToCart } =
//     useContext(CartContext);

//   // PRODUCT STATE
//   const [product, setProduct] =
//     useState(null);

//   // RELATED PRODUCTS
//   const [relatedProducts, setRelatedProducts] =
//     useState([]);

//   // QUANTITY
//   const [quantity, setQuantity] =
//     useState(1);

//   // SELECTED WEIGHT
//   const [selectedWeight, setSelectedWeight] =
//     useState("250g");

//   // FETCH PRODUCT
//   useEffect(() => {

//     const fetchProduct = async () => {

//       try {

//         // SINGLE PRODUCT
//       const { data } = await axios.get(
//   `${import.meta.env.VITE_API_URL}/api/products/${id}`
// );

//         setProduct(data);

//         // ALL PRODUCTS
//        await axios.get(
//   `${import.meta.env.VITE_API_URL}/api/products`
// );

//         // RELATED PRODUCTS
//         const filteredProducts =
//           productsRes.data.filter(
//             (item) =>
//               item._id !== data._id
//           );

//         setRelatedProducts(
//           filteredProducts.slice(0, 3)
//         );

//       } catch (error) {

//         console.log(error);

//       }
//     };

//     fetchProduct();

//     setSelectedWeight("250g");

//     setQuantity(1);

//   }, [id]);

//   // LOADING
//   if (!product) {

//     return (

//       <div className="min-h-screen flex items-center justify-center">

//         <h1 className="text-3xl font-bold">

//           Loading...

//         </h1>

//       </div>

//     );
//   }

//   // WEIGHT PRICES
//   const weightPrices = {

//     "250g": product.price,

//     "500g": product.price * 2,

//     "1kg": product.price * 4,

//   };

//   // CURRENT PRICE
//   const currentPrice =
//     weightPrices[selectedWeight];

//   // TOTAL PRICE
//   const totalPrice =
//     currentPrice * quantity;

//   // INCREASE QUANTITY
//   const increaseQuantity = () => {

//     setQuantity(quantity + 1);

//   };

//   // DECREASE QUANTITY
//   const decreaseQuantity = () => {

//     if (quantity > 1) {

//       setQuantity(quantity - 1);

//     }
//   };

//   // BUY NOW
//   const handleBuyNow = () => {

//     addToCart({
//       ...product,
//       quantity,
//       selectedWeight,
//       price: currentPrice,
//     });

//     navigate("/cart");

//   };

//   return (
//     <>

//       <section className="w-full bg-[#F5F3F0] min-h-screen px-6 md:px-12 py-16">

//         <div className="max-w-7xl mx-auto">

//           {/* PRODUCT SECTION */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT IMAGE */}
//             <div className="relative bg-gradient-to-br from-[#EFE2C8] to-[#F8F4EC] rounded-[40px] p-10 shadow-2xl overflow-hidden">

//               {/* BADGE */}
//               <div className="absolute top-6 left-6 bg-[#9B4D0D] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">

//                 <BadgeCheck size={18} />

//                 Premium Quality

//               </div>

//               {/* IMAGE */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full rounded-[30px] object-cover hover:scale-110 transition duration-700"
//               />

//             </div>

//             {/* RIGHT CONTENT */}
//             <div>

//               {/* CATEGORY */}
//               <p className="uppercase tracking-[4px] text-[#9B4D0D] font-semibold text-sm">

//                 {product.category}

//               </p>

//               {/* NAME */}
//               <h1 className="text-5xl md:text-6xl font-bold text-[#2B1408] mt-4 leading-tight">

//                 {product.name}

//               </h1>

//               {/* RATING */}
//               <div className="flex items-center gap-3 mt-6">

//                 <div className="flex items-center gap-1">

//                   <Star
//                     size={22}
//                     className="fill-yellow-400 text-yellow-400"
//                   />

//                   <span className="text-lg font-semibold text-[#2B1408]">

//                     4.8

//                   </span>

//                 </div>

//                 <p className="text-[#7B6252]">

//                   (120 Reviews)

//                 </p>

//               </div>

//               {/* PRICE */}
//               <div className="mt-8 flex items-center gap-5 flex-wrap">

//                 <h2 className="text-5xl font-bold text-[#9B4D0D]">

//                   ₹{totalPrice}

//                 </h2>

//                 <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

//                   In Stock

//                 </span>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[#7B6252] text-lg leading-relaxed mt-8">

//                 {product.description}

//               </p>

//               {/* WEIGHT OPTIONS */}
//               <div className="mt-10">

//                 <p className="text-[#2B1408] font-semibold text-xl mb-5">

//                   Select Weight

//                 </p>

//                 <div className="flex flex-wrap gap-5">

//                   {Object.keys(weightPrices).map(
//                     (weight) => (

//                       <button
//                         key={weight}
//                         onClick={() =>
//                           setSelectedWeight(weight)
//                         }
//                         className={`px-8 py-4 rounded-2xl border-2 font-bold text-lg transition duration-300 shadow-md

//                         ${
//                           selectedWeight === weight
//                             ? "bg-[#9B4D0D] text-white border-[#9B4D0D]"
//                             : "bg-white border-[#9B4D0D] text-[#9B4D0D]"
//                         }
//                         `}
//                       >

//                         {weight}

//                       </button>

//                     )
//                   )}

//                 </div>

//               </div>

//               {/* QUANTITY */}
//               <div className="mt-10">

//                 <p className="text-[#2B1408] font-semibold text-lg mb-4">

//                   Quantity

//                 </p>

//                 <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-md w-fit">

//                   <button
//                     onClick={decreaseQuantity}
//                     className="px-5 py-3 text-2xl hover:bg-gray-100"
//                   >

//                     -

//                   </button>

//                   <span className="px-6 text-lg font-semibold">

//                     {quantity}

//                   </span>

//                   <button
//                     onClick={increaseQuantity}
//                     className="px-5 py-3 text-2xl hover:bg-gray-100"
//                   >

//                     +

//                   </button>

//                 </div>

//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-col sm:flex-row gap-5 mt-12">

//                 {/* ADD TO CART */}
//                 <button
//                   onClick={() =>
//                     addToCart({
//                       ...product,
//                       quantity,
//                       selectedWeight,
//                       price: currentPrice,
//                     })
//                   }
//                   className="flex-1 flex items-center justify-center gap-3 bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-10 py-5 rounded-2xl text-lg font-bold transition"
//                 >

//                   <ShoppingCart size={24} />

//                   Add To Cart

//                 </button>

//                 {/* BUY NOW */}
//                 <button
//                   onClick={handleBuyNow}
//                   className="flex-1 flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-2xl text-lg font-bold transition"
//                 >

//                   <Zap size={24} />

//                   Buy Now

//                 </button>

//               </div>

//             </div>

//           </div>

//           {/* RELATED PRODUCTS */}
//           <div className="mt-24">

//             <h2 className="text-4xl font-bold text-[#2B1408] mb-10">

//               Related Products

//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//               {relatedProducts.map((item) => (

//                 <Link
//                   key={item._id}
//                   to={`/product/${item._id}`}
//                 >

//                   <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group">

//                     <div className="overflow-hidden bg-[#EFE2C8]">

//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
//                       />

//                     </div>

//                     <div className="p-6">

//                       <h3 className="text-2xl font-semibold text-[#2B1408]">

//                         {item.name}

//                       </h3>

//                       <p className="text-[#9B4D0D] text-3xl font-bold mt-4">

//                         ₹{item.price}

//                       </p>

//                     </div>

//                   </div>

//                 </Link>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//     </>
//   );
// }

// export default ProductDetails;


import React, {
  useState,
  useContext,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

import { CartContext } from "../context/CartContext";

import {
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  BadgeCheck,
  Plus,
  Minus,
} from "lucide-react";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  // =====================================================
  // PRODUCT STATE
  // =====================================================

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  // =====================================================
  // QUANTITY
  // =====================================================

  const [quantity, setQuantity] = useState(1);

  // =====================================================
  // SELECTED WEIGHT
  // =====================================================

  const [selectedWeight, setSelectedWeight] =
    useState("250g");

  // =====================================================
  // FETCH PRODUCT
  // =====================================================

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );

        setProduct(data);

        // RESET OPTIONS WHEN PRODUCT CHANGES
        setSelectedWeight("250g");
        setQuantity(1);
      } catch (error) {
        console.error(
          "Product Fetch Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center">
        <div className="text-center">

          <div
            className="
              w-10
              h-10
              border-4
              border-[#E7D3B8]
              border-t-[#9B4D0D]
              rounded-full
              animate-spin
              mx-auto
            "
          />

          <p className="mt-4 text-[#7B6252]">
            Loading product...
          </p>

        </div>
      </div>
    );
  }

  // =====================================================
  // PRODUCT NOT FOUND
  // =====================================================

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-[#2B1408]">
            Product Not Found
          </h1>

          <button
            onClick={() => navigate("/products")}
            className="
              mt-6
              bg-[#9B4D0D]
              hover:bg-[#7A3A05]
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              transition
            "
          >
            Back To Products
          </button>

        </div>

      </div>
    );
  }

  // =====================================================
  // WEIGHT PRICES
  // =====================================================

  const weightPrices = {
    "250g": product.price,
    "500g": product.price * 2,
    "1kg": product.price * 4,
  };

  // =====================================================
  // CURRENT PRICE
  // =====================================================

  const currentPrice =
    weightPrices[selectedWeight];

  // =====================================================
  // TOTAL PRICE
  // =====================================================

  const totalPrice =
    currentPrice * quantity;

  // =====================================================
  // INCREASE QUANTITY
  // =====================================================

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // =====================================================
  // DECREASE QUANTITY
  // =====================================================

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  };

  // =====================================================
  // ADD TO CART
  // =====================================================

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedWeight,
      price: currentPrice,
    });
  };

  // =====================================================
  // BUY NOW
  // =====================================================

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity,
      selectedWeight,
      price: currentPrice,
    });

    navigate("/cart");
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <section
      className="
        w-full
        min-h-screen
        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-12

        py-8
        sm:py-12
        md:py-16
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* =================================================
            PRODUCT SECTION
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-8
            sm:gap-10
            md:gap-16

            items-start
          "
        >

          {/* =================================================
              PRODUCT IMAGE
          ================================================= */}

          <div
            className="
              relative

              bg-gradient-to-br
              from-[#EFE2C8]
              to-[#F8F4EC]

              rounded-[28px]
              sm:rounded-[35px]
              md:rounded-[40px]

              p-4
              sm:p-6
              md:p-10

              shadow-xl
              md:shadow-2xl

              overflow-hidden
            "
          >

            {/* PREMIUM BADGE */}

            <div
              className="
                absolute
                top-4
                left-4

                sm:top-6
                sm:left-6

                bg-[#9B4D0D]

                text-white

                px-3
                sm:px-5

                py-2

                rounded-full

                flex
                items-center
                gap-2

                shadow-lg

                text-xs
                sm:text-sm

                font-semibold

                z-10
              "
            >

              <BadgeCheck size={17} />

              <span>
                Premium Quality
              </span>

            </div>

            {/* IMAGE */}

            <div
              className="
                rounded-[22px]
                sm:rounded-[28px]
                md:rounded-[30px]

                overflow-hidden
              "
            >

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full

                  h-[320px]
                  sm:h-[420px]
                  md:h-[520px]

                  object-cover

                  transition-transform
                  duration-700

                  hover:scale-105
                "
              />

            </div>

          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <div className="w-full">

            {/* CATEGORY */}

            <p
              className="
                uppercase
                tracking-[3px]
                sm:tracking-[4px]

                text-[#9B4D0D]

                font-semibold

                text-xs
                sm:text-sm
              "
            >
              {product.category}
            </p>

            {/* PRODUCT NAME */}

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-bold

                text-[#2B1408]

                mt-3
                sm:mt-4

                leading-tight
              "
            >
              {product.name}
            </h1>

            {/* RATING */}

            <div
              className="
                flex
                items-center
                gap-2
                sm:gap-3

                mt-4
                sm:mt-6
              "
            >

              <div className="flex items-center gap-1">

                <Star
                  size={20}
                  className="
                    fill-yellow-400
                    text-yellow-400
                  "
                />

                <span
                  className="
                    text-base
                    sm:text-lg
                    font-semibold
                    text-[#2B1408]
                  "
                >
                  4.8
                </span>

              </div>

              <p className="text-[#7B6252] text-sm sm:text-base">
                (120 Reviews)
              </p>

            </div>

            {/* PRICE */}

            <div
              className="
                mt-6
                sm:mt-8

                flex
                items-center
                gap-3
                sm:gap-5

                flex-wrap
              "
            >

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl

                  font-bold

                  text-[#9B4D0D]
                "
              >
                ₹{totalPrice}
              </h2>

              <span
                className="
                  bg-green-100
                  text-green-700

                  px-4
                  py-2

                  rounded-full

                  text-sm

                  font-semibold
                "
              >
                In Stock
              </span>

            </div>

            {/* DESCRIPTION */}

            <p
              className="
                text-[#7B6252]

                text-base
                sm:text-lg

                leading-7
                sm:leading-relaxed

                mt-6
                sm:mt-8
              "
            >
              {product.description}
            </p>

            {/* =================================================
                WEIGHT
            ================================================= */}

            <div className="mt-7 sm:mt-10">

              <p
                className="
                  text-[#2B1408]
                  font-semibold
                  text-lg
                  sm:text-xl
                  mb-4
                "
              >
                Select Weight
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">

                {Object.keys(weightPrices).map(
                  (weight) => (
                    <button
                      key={weight}
                      type="button"
                      onClick={() =>
                        setSelectedWeight(weight)
                      }
                      className={`
                        px-5
                        sm:px-7

                        py-3
                        sm:py-4

                        rounded-xl
                        sm:rounded-2xl

                        border-2

                        font-bold

                        text-sm
                        sm:text-lg

                        transition-all

                        shadow-md

                        ${
                          selectedWeight === weight
                            ? "bg-[#9B4D0D] text-white border-[#9B4D0D]"
                            : "bg-white border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#F7F3EE]"
                        }
                      `}
                    >
                      {weight}
                    </button>
                  )
                )}

              </div>

            </div>

            {/* =================================================
                QUANTITY
            ================================================= */}

            <div className="mt-7 sm:mt-10">

              <p
                className="
                  text-[#2B1408]
                  font-semibold
                  text-lg
                  mb-4
                "
              >
                Quantity
              </p>

              <div
                className="
                  flex
                  items-center

                  border
                  border-[#DCC8AD]

                  rounded-full

                  overflow-hidden

                  bg-white

                  shadow-md

                  w-fit
                "
              >

                {/* DECREASE */}

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="
                    w-12
                    h-12

                    flex
                    items-center
                    justify-center

                    hover:bg-[#F5F3F0]

                    transition
                  "
                >
                  <Minus size={19} />
                </button>

                {/* QUANTITY */}

                <span
                  className="
                    min-w-[45px]

                    text-center

                    text-lg

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  {quantity}
                </span>

                {/* INCREASE */}

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="
                    w-12
                    h-12

                    flex
                    items-center
                    justify-center

                    hover:bg-[#F5F3F0]

                    transition
                  "
                >
                  <Plus size={19} />
                </button>

              </div>

            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2

                gap-3
                sm:gap-5

                mt-8
                sm:mt-12
              "
            >

              {/* ADD TO CART */}

              <button
                type="button"
                onClick={handleAddToCart}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  bg-[#9B4D0D]
                  hover:bg-[#7A3A05]

                  text-white

                  px-6
                  sm:px-10

                  py-4
                  sm:py-5

                  rounded-xl
                  sm:rounded-2xl

                  text-base
                  sm:text-lg

                  font-bold

                  transition

                  active:scale-95
                "
              >

                <ShoppingCart size={22} />

                Add To Cart

              </button>

              {/* BUY NOW */}

              <button
                type="button"
                onClick={handleBuyNow}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  bg-[#2B1408]
                  hover:bg-black

                  text-white

                  px-6
                  sm:px-10

                  py-4
                  sm:py-5

                  rounded-xl
                  sm:rounded-2xl

                  text-base
                  sm:text-lg

                  font-bold

                  transition

                  active:scale-95
                "
              >

                <Zap size={22} />

                Buy Now

              </button>

            </div>

            {/* =================================================
                TRUST FEATURES
            ================================================= */}

            <div
              className="
                grid
                grid-cols-3

                gap-2
                sm:gap-4

                mt-8
                sm:mt-10
              "
            >

              {/* PREMIUM */}

              <div
                className="
                  bg-white
                  rounded-xl
                  sm:rounded-2xl

                  p-3
                  sm:p-4

                  text-center

                  shadow-sm

                  border
                  border-[#EFE2C8]
                "
              >

                <BadgeCheck
                  size={22}
                  className="mx-auto text-[#9B4D0D]"
                />

                <p
                  className="
                    text-[10px]
                    sm:text-xs

                    font-semibold

                    text-[#2B1408]

                    mt-2
                  "
                >
                  Premium
                </p>

              </div>

              {/* DELIVERY */}

              <div
                className="
                  bg-white
                  rounded-xl
                  sm:rounded-2xl

                  p-3
                  sm:p-4

                  text-center

                  shadow-sm

                  border
                  border-[#EFE2C8]
                "
              >

                <Truck
                  size={22}
                  className="mx-auto text-[#9B4D0D]"
                />

                <p
                  className="
                    text-[10px]
                    sm:text-xs

                    font-semibold

                    text-[#2B1408]

                    mt-2
                  "
                >
                  Fast Delivery
                </p>

              </div>

              {/* SECURE */}

              <div
                className="
                  bg-white
                  rounded-xl
                  sm:rounded-2xl

                  p-3
                  sm:p-4

                  text-center

                  shadow-sm

                  border
                  border-[#EFE2C8]
                "
              >

                <ShieldCheck
                  size={22}
                  className="mx-auto text-[#9B4D0D]"
                />

                <p
                  className="
                    text-[10px]
                    sm:text-xs

                    font-semibold

                    text-[#2B1408]

                    mt-2
                  "
                >
                  Secure
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;