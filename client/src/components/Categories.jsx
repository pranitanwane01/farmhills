import React from "react";
import almond from "../assets/almond.png";
import dates from "../assets/dates.png";
import pista from "../assets/pista.png";
import raisin from "../assets/raisin.png";
import walnut from "../assets/walnut.png";
import fig from "../assets/fig.png";
import cashew from "../assets/cashew.png";

function Categories() {
  const categories = [
    {
      name: "Cashew",
      image: cashew,
      bg: "bg-[#67A9B0]",
    },

    {
      name: "Almond",
      image: almond,
      bg: "bg-[#B08B7C]",
    },
    {
      name: "Raisin",
      image: raisin,
      bg: "bg-[#B88757]",
    },

    {
      name: "Walnut",
      image: walnut,
      bg: "bg-[#B06F67]",
    },
    {
      name: "Pista",
      image: pista,
      bg: "bg-[#93C572]",
    },

    {
      name: "Dates",
      image: dates,
      bg: "bg-[#E0713B]",
    },

    {
      name: "Fig",
      image: fig,
      bg: "bg-[#D18CAC]",
    },
  ];

  return (
    <section className="w-full bg-[#F5F3F0] px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} relative min-w-[240px] h-[340px] rounded-[35px] overflow-hidden flex flex-col justify-end p-8 shadow-lg group cursor-pointer transition duration-300`}
            >
              {/* IMAGE */}

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-52 h-52 object-contain transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-8 drop-shadow-2xl"
                />
              </div>

              {/* TEXT */}

              <h3 className="text-white text-4xl font-semibold relative z-10">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
