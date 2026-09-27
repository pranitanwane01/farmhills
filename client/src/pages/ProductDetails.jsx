

import React, { useState, useContext, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

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
  // SELECTED IMAGE
  // =====================================================

  const [selectedImage, setSelectedImage] = useState("");

  // =====================================================
  // QUANTITY
  // =====================================================

  const [quantity, setQuantity] = useState(1);

  // =====================================================
  // SELECTED WEIGHT
  // =====================================================

  const [selectedWeight, setSelectedWeight] = useState("250g");

  // =====================================================
  // FETCH PRODUCT
  // =====================================================

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        );

        setProduct(data);

        // Get all product images
        const productImages =
          data.images?.length > 0
            ? data.images
            : data.image
              ? [data.image]
              : [];

        // First image is selected by default
        setSelectedImage(productImages[0] || "");

        // Reset options when product changes
        setSelectedWeight("250g");
        setQuantity(1);
      } catch (error) {
        console.error("Product Fetch Error:", error);
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

          <p className="mt-4 text-[#7B6252]">Loading product...</p>
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
  // PRODUCT IMAGES
  // =====================================================

  const productImages =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

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

  const currentPrice = weightPrices[selectedWeight];

  // =====================================================
  // TOTAL PRICE
  // =====================================================

  const totalPrice = currentPrice * quantity;

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
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
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
              PRODUCT IMAGE GALLERY
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

              <span>Premium Quality</span>
            </div>

            {/* MAIN IMAGE */}

            <div
              className="
                rounded-[22px]
                sm:rounded-[28px]
                md:rounded-[30px]
                overflow-hidden
                bg-white
                flex
                items-center
                justify-center
              "
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="
                    w-full
                    h-[320px]
                    sm:h-[420px]
                    md:h-[520px]
                    object-contain
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                />
              ) : (
                <div
                  className="
                    w-full
                    h-[320px]
                    sm:h-[420px]
                    md:h-[520px]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                  "
                >
                  No Image
                </div>
              )}
            </div>

            {/* =================================================
                IMAGE THUMBNAILS
            ================================================= */}

            {productImages.length > 1 && (
              <div
                className="
                  mt-4
                  sm:mt-6
                  flex
                  gap-3
                  sm:gap-4
                  overflow-x-auto
                  pb-2
                  scrollbar-thin
                "
              >
                {productImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`
                        flex-shrink-0
                        rounded-xl
                        sm:rounded-2xl
                        overflow-hidden
                        bg-white
                        border-2
                        transition-all
                        duration-300
                        ${
                          selectedImage === image
                            ? "border-[#9B4D0D] ring-2 ring-[#9B4D0D]/20 scale-105"
                            : "border-transparent hover:border-[#DCC8AD]"
                        }
                      `}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="
                          w-20
                          h-20
                          sm:w-24
                          sm:h-24
                          md:w-28
                          md:h-28
                          object-contain
                          bg-white
                        "
                    />
                  </button>
                ))}
              </div>
            )}
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
                {Object.keys(weightPrices).map((weight) => (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
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
                ))}
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
                <BadgeCheck size={22} className="mx-auto text-[#9B4D0D]" />

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
                <Truck size={22} className="mx-auto text-[#9B4D0D]" />

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
                <ShieldCheck size={22} className="mx-auto text-[#9B4D0D]" />

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
