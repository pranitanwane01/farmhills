import React, {
  useState,
  useContext,
  useEffect,
} from "react";

import {
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

import {
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  BadgeCheck,
} from "lucide-react";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } =
    useContext(CartContext);

  // QUANTITY

  const [quantity, setQuantity] =
    useState(1);

  // SELECTED WEIGHT

  const [selectedWeight, setSelectedWeight] =
    useState("250g");

  // FIND PRODUCT

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // PRODUCT NOT FOUND

  if (!product) {

    return (

      <h1 className="text-4xl font-bold text-center mt-20">

        Product Not Found

      </h1>

    );

  }

  // RESET WHEN PRODUCT CHANGES

  useEffect(() => {

    setSelectedWeight("250g");

    setQuantity(1);

  }, [id]);

  // RELATED PRODUCTS

  const relatedProducts =
    products.filter(
      (item) =>
        item.id !== product.id
    );

  // WEIGHT PRICES

  const weightPrices = {

    "250g": product.price,

    "500g": product.price * 2,

    "1kg": product.price * 4,

  };

  // CURRENT PRICE

  const currentPrice =
    weightPrices[selectedWeight];

  // TOTAL PRICE

  const totalPrice =
    currentPrice * quantity;

  // INCREASE QUANTITY

  const increaseQuantity = () => {

    setQuantity(quantity + 1);

  };

  // DECREASE QUANTITY

  const decreaseQuantity = () => {

    if (quantity > 1) {

      setQuantity(quantity - 1);

    }

  };

  // BUY NOW

  const handleBuyNow = () => {

    addToCart({

      ...product,

      quantity,

      selectedWeight,

      price: currentPrice,

    });

    navigate("/cart");

  };

  return (
    <>

      <section className="w-full bg-[#F5F3F0] min-h-screen px-6 md:px-12 py-16">

        <div className="max-w-7xl mx-auto">

          {/* PRODUCT SECTION */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}

            <div className="relative bg-gradient-to-br from-[#EFE2C8] to-[#F8F4EC] rounded-[40px] p-10 shadow-2xl overflow-hidden">

              {/* BADGE */}

              <div className="absolute top-6 left-6 bg-[#9B4D0D] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">

                <BadgeCheck size={18} />

                Premium Quality

              </div>

              {/* IMAGE */}

              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-[30px] object-cover hover:scale-110 transition duration-700"
              />

            </div>

            {/* RIGHT CONTENT */}

            <div>

              {/* CATEGORY */}

              <p className="uppercase tracking-[4px] text-[#9B4D0D] font-semibold text-sm">

                {product.category}

              </p>

              {/* NAME */}

              <h1 className="text-5xl md:text-6xl font-bold text-[#2B1408] mt-4 leading-tight">

                {product.name}

              </h1>

              {/* RATING */}

              <div className="flex items-center gap-3 mt-6">

                <div className="flex items-center gap-1">

                  <Star
                    size={22}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-lg font-semibold text-[#2B1408]">

                    {product.rating}

                  </span>

                </div>

                <p className="text-[#7B6252]">

                  ({product.reviews || 120} Reviews)

                </p>

              </div>

              {/* PRICE */}

              <div className="mt-8 flex items-center gap-5 flex-wrap">

                <h2 className="text-5xl font-bold text-[#9B4D0D]">

                  ₹{totalPrice}

                </h2>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

                  In Stock

                </span>

              </div>

              {/* DESCRIPTION */}

              <p className="text-[#7B6252] text-lg leading-relaxed mt-8">

                {product.description}

              </p>

              {/* WEIGHT OPTIONS */}

              <div className="mt-10">

                <p className="text-[#2B1408] font-semibold text-xl mb-5">

                  Select Weight

                </p>

                <div className="flex flex-wrap gap-5">

                  {Object.keys(weightPrices).map(
                    (weight) => (

                      <button
                        key={weight}
                        onClick={() =>
                          setSelectedWeight(weight)
                        }
                        className={`px-8 py-4 rounded-2xl border-2 font-bold text-lg transition duration-300 shadow-md

                        ${
                          selectedWeight ===
                          weight
                            ? "bg-[#9B4D0D] text-white border-[#9B4D0D] scale-105"
                            : "bg-white border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white"
                        }
                        `}
                      >

                        {weight}

                      </button>

                    )
                  )}

                </div>

              </div>

              {/* QUANTITY */}

              <div className="mt-10">

                <p className="text-[#2B1408] font-semibold text-lg mb-4">

                  Quantity

                </p>

                <div className="flex items-center gap-5">

                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-md">

                    {/* DECREASE */}

                    <button
                      onClick={decreaseQuantity}
                      className="px-5 py-3 text-2xl hover:bg-gray-100 transition"
                    >

                      -

                    </button>

                    {/* QUANTITY */}

                    <span className="px-6 text-lg font-semibold">

                      {quantity}

                    </span>

                    {/* INCREASE */}

                    <button
                      onClick={increaseQuantity}
                      className="px-5 py-3 text-2xl hover:bg-gray-100 transition"
                    >

                      +

                    </button>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-5 mt-12">

                {/* ADD TO CART */}

                <button
                  onClick={() =>
                    addToCart({

                      ...product,

                      quantity,

                      selectedWeight,

                      price: currentPrice,

                    })
                  }
                  className="flex-1 flex items-center justify-center gap-3 bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-10 py-5 rounded-2xl text-lg font-bold transition duration-300 shadow-xl hover:scale-105"
                >

                  <ShoppingCart size={24} />

                  Add To Cart

                </button>

                {/* BUY NOW */}

                <button
                  onClick={handleBuyNow}
                  className="flex-1 flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-2xl text-lg font-bold transition duration-300 shadow-xl hover:scale-105"
                >

                  <Zap size={24} />

                  Buy Now

                </button>

              </div>

              {/* FEATURES */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">

                <div className="flex items-center gap-5 bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition">

                  <div className="bg-[#F5F3F0] p-4 rounded-2xl">

                    <Truck className="text-[#9B4D0D]" />

                  </div>

                  <div>

                    <p className="font-bold text-[#2B1408] text-lg">

                      Free Delivery

                    </p>

                    <p className="text-[#7B6252]">

                      On orders above ₹999

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-1 transition">

                  <div className="bg-[#F5F3F0] p-4 rounded-2xl">

                    <ShieldCheck className="text-[#9B4D0D]" />

                  </div>

                  <div>

                    <p className="font-bold text-[#2B1408] text-lg">

                      Quality Assured

                    </p>

                    <p className="text-[#7B6252]">

                      100% premium products

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RELATED PRODUCTS */}

          <div className="mt-24">

            <h2 className="text-4xl font-bold text-[#2B1408] mb-10">

              Related Products

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {relatedProducts.map((item) => (

                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                >

                  <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group">

                    <div className="overflow-hidden bg-[#EFE2C8]">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
                      />

                    </div>

                    <div className="p-6">

                      <h3 className="text-2xl font-semibold text-[#2B1408]">

                        {item.name}

                      </h3>

                      <p className="text-[#9B4D0D] text-3xl font-bold mt-4">

                        ₹{item.price}

                      </p>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;