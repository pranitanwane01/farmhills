import React from "react";

import { Link } from "react-router-dom";

import {
  CheckCircle,
  ShoppingBag,
  Truck,
} from "lucide-react";

const OrderSuccess = () => {

  return (

    <section className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl p-10 md:p-14 text-center">

        {/* SUCCESS ICON */}
        <div className="flex justify-center">

          <div className="bg-green-100 p-6 rounded-full">

            <CheckCircle
              size={80}
              className="text-green-600"
            />

          </div>

        </div>

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2B1408] mt-8">

          Order Placed Successfully

        </h1>

        {/* MESSAGE */}
        <p className="text-[#7B6252] text-lg mt-5 leading-relaxed">

          Thank you for shopping with us.
          Your order has been placed successfully
          and will be processed shortly.

        </p>

        {/* DELIVERY BOX */}
        <div className="bg-[#F5F3F0] rounded-3xl p-6 mt-10 flex items-center gap-5 text-left">

          <div className="bg-white p-4 rounded-2xl shadow">

            <Truck
              size={36}
              className="text-[#9B4D0D]"
            />

          </div>

          <div>

            <h3 className="text-xl font-bold text-[#2B1408]">

              Estimated Delivery

            </h3>

            <p className="text-[#7B6252] mt-1">

              Your order will arrive within
              3-5 business days.

            </p>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 mt-12">

          {/* CONTINUE SHOPPING */}
          <Link
            to="/products"
            className="flex-1"
          >

            <button className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-2xl text-lg font-bold transition duration-300 flex items-center justify-center gap-3">

              <ShoppingBag size={22} />

              Continue Shopping

            </button>

          </Link>

          {/* GO HOME */}
          <Link
            to="/"
            className="flex-1"
          >

            <button className="w-full border-2 border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white py-4 rounded-2xl text-lg font-bold transition duration-300">

              Go To Home

            </button>

          </Link>

        </div>

      </div>

    </section>

  );
};

export default OrderSuccess;