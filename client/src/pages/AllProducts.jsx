import React from 'react'


import {
  ShoppingCart,
  Star,
} from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AllProducts() {

  const products = [

    {
      name: "Premium Almonds",
      price: "499",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "500g",
    },

    {
      name: "Organic Cashews",
      price: "699",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
      rating: "4.8",
      weight: "500g",
    },

    {
      name: "Natural Pistachios",
      price: "899",
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "250g",
    },

    {
      name: "Golden Raisins",
      price: "299",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop",
      rating: "4.7",
      weight: "500g",
    },
    {
      name: "Premium Almonds",
      price: "499",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "500g",
    },

    {
      name: "Organic Cashews",
      price: "699",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
      rating: "4.8",
      weight: "500g",
    },

    {
      name: "Natural Pistachios",
      price: "899",
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "250g",
    },

    {
      name: "Golden Raisins",
      price: "299",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop",
      rating: "4.7",
      weight: "500g",
    },
    {
      name: "Premium Almonds",
      price: "499",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "500g",
    },

    {
      name: "Organic Cashews",
      price: "699",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
      rating: "4.8",
      weight: "500g",
    },

    {
      name: "Natural Pistachios",
      price: "899",
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=800&auto=format&fit=crop",
      rating: "4.9",
      weight: "250g",
    },

    {
      name: "Golden Raisins",
      price: "299",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop",
      rating: "4.7",
      weight: "500g",
    },


  ];

  return (
    <>
  
   <Navbar/>

    <section className="w-full bg-[#F5F3F0] min-h-screen py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="mb-12">

          <p className="text-[#9B4D0D] uppercase tracking-[4px] font-semibold text-sm">
            Our Collection
          </p>

          <h1 className="text-5xl font-bold text-[#2B1408] mt-2">
            All Products
          </h1>

        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
            >

              {/* IMAGE */}

              <div className="overflow-hidden bg-[#EFE2C8]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-center gap-2 mb-3">

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-[#7B6252] font-medium">
                    {item.rating}
                  </span>

                </div>

                <h3 className="text-2xl font-semibold text-[#2B1408]">
                  {item.name}
                </h3>

                <p className="text-[#7B6252] mt-2">
                  Pack Size: {item.weight}
                </p>

                <div className="flex items-center justify-between mt-6">

                  <p className="text-[#9B4D0D] text-3xl font-bold">
                    ₹{item.price}
                  </p>

                  <button className="bg-[#9B4D0D] hover:bg-[#7A3A05] text-white p-4 rounded-full transition">

                    <ShoppingCart size={20} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    <Footer/>
    </>
  );
}

export default AllProducts;