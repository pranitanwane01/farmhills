import React from 'react'

import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

function WhyChooseUs() {

  const features = [

    {
      icon: <Leaf size={45} />,
      title: "100% Natural",
      desc:
        "Premium quality dry fruits sourced directly from trusted farms.",
    },

    {
      icon: <ShieldCheck size={45} />,
      title: "Quality Assured",
      desc:
        "Every product goes through strict quality and freshness checks.",
    },

    {
      icon: <Truck size={45} />,
      title: "Fast Delivery",
      desc:
        "Quick and secure delivery to your doorstep across India.",
    },

    {
      icon: <BadgeCheck size={45} />,
      title: "Trusted Brand",
      desc:
        "Loved by thousands of happy customers for premium dry fruits.",
    },

  ];

  return (

    <section className="w-full bg-[#F5F3F0] py-20 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold text-sm">

            Why Customers Love Us

          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2B1408] mt-5">

            Why Choose FarmHills

          </h2>

          <p className="max-w-3xl mx-auto text-[#7B6252] text-lg md:text-xl mt-6 leading-relaxed">

            We provide premium dry fruits with unmatched freshness,
            quality and taste for a healthier lifestyle.

          </p>

        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 transition duration-300 group text-center"
            >

              {/* ICON */}

              <div className="w-24 h-24 mx-auto rounded-full bg-[#EFE2C8] flex items-center justify-center text-[#9B4D0D] group-hover:scale-110 transition duration-300">

                {item.icon}

              </div>

              {/* TITLE */}

              <h3 className="text-3xl font-semibold text-[#2B1408] mt-8">

                {item.title}

              </h3>

              {/* DESC */}

              <p className="text-[#7B6252] mt-5 leading-relaxed">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;