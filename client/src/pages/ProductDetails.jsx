import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
} from "lucide-react";

function ProductDetails() {

  const product = {
    name: "Premium Almonds",
    price: "499",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: 124,
    description:
      "Premium quality California almonds packed with protein, healthy fats and essential nutrients. Freshly packed for maximum crunch and taste.",
    weight: "500g",
    category: "Dry Fruits",
  };

  const relatedProducts = [

    {
      name: "Organic Cashews",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
      price: "699",
    },

    {
      name: "Natural Pistachios",
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=800&auto=format&fit=crop",
      price: "899",
    },

    {
      name: "Golden Raisins",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop",
      price: "299",
    },

  ];

  return (
<>
<Navbar/>
    <section className="w-full bg-[#F5F3F0] min-h-screen px-6 md:px-12 py-16">

      <div className="max-w-7xl mx-auto">

        {/* PRODUCT SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="bg-[#EFE2C8] rounded-[40px] p-10 shadow-xl">

            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-[30px] object-cover hover:scale-105 transition duration-500"
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

                ({product.reviews} Reviews)

              </p>

            </div>

            {/* PRICE */}

            <h2 className="text-5xl font-bold text-[#9B4D0D] mt-8">

              ₹{product.price}

            </h2>

            {/* DESCRIPTION */}

            <p className="text-[#7B6252] text-lg leading-relaxed mt-8">

              {product.description}

            </p>

            {/* WEIGHT */}

            <div className="mt-8">

              <p className="text-[#2B1408] font-semibold text-lg mb-3">

                Weight

              </p>

              <button className="border-2 border-[#9B4D0D] text-[#9B4D0D] px-6 py-3 rounded-full font-medium hover:bg-[#9B4D0D] hover:text-white transition">

                {product.weight}

              </button>

            </div>

            {/* QUANTITY */}

            <div className="mt-10">

              <p className="text-[#2B1408] font-semibold text-lg mb-4">

                Quantity

              </p>

              <div className="flex items-center gap-5">

                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">

                  <button className="px-5 py-3 text-2xl hover:bg-gray-100">

                    -

                  </button>

                  <span className="px-6 text-lg font-semibold">

                    1

                  </span>

                  <button className="px-5 py-3 text-2xl hover:bg-gray-100">

                    +

                  </button>

                </div>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <button className="flex items-center justify-center gap-3 bg-[#9B4D0D] hover:bg-[#7A3A05] text-white px-10 py-5 rounded-full text-lg font-semibold transition duration-300 shadow-lg">

                <ShoppingCart size={22} />

                Add To Cart

              </button>

              <button className="flex items-center justify-center gap-3 border-2 border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white px-10 py-5 rounded-full text-lg font-semibold transition duration-300">

                <Heart size={22} />

                Wishlist

              </button>

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md">

                <Truck className="text-[#9B4D0D]" />

                <p className="font-medium text-[#2B1408]">

                  Free Delivery

                </p>

              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md">

                <ShieldCheck className="text-[#9B4D0D]" />

                <p className="font-medium text-[#2B1408]">

                  Quality Assured

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* REVIEWS */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-[#2B1408] mb-10">

            Customer Reviews

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-[30px] shadow-lg">

              <div className="flex items-center gap-2">

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

              </div>

              <p className="text-[#7B6252] leading-relaxed mt-5">

                Excellent quality almonds. Very fresh and crunchy.
                Packaging was premium and delivery was fast.

              </p>

              <h4 className="mt-5 font-semibold text-[#2B1408]">

                — Rahul Sharma

              </h4>

            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-lg">

              <div className="flex items-center gap-2">

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

                <Star className="fill-yellow-400 text-yellow-400" />

              </div>

              <p className="text-[#7B6252] leading-relaxed mt-5">

                One of the best dry fruit products I have ordered online.
                Highly recommended.

              </p>

              <h4 className="mt-5 font-semibold text-[#2B1408]">

                — Priya Verma

              </h4>

            </div>

          </div>

        </div>

        {/* RELATED PRODUCTS */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-[#2B1408] mb-10">

            Related Products

          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {relatedProducts.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
              >

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

            ))}

          </div>

        </div>

      </div>

    </section>
    <Footer/>
    </>
  );
}

export default ProductDetails;