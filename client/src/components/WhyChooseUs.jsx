// import React from 'react'

// import {
//   Leaf,
//   ShieldCheck,
//   Truck,
//   BadgeCheck,
// } from "lucide-react";

// function WhyChooseUs() {

//   const features = [

//     {
//       icon: <Leaf size={45} />,
//       title: "100% Natural",
//       desc:
//         "Premium quality dry fruits sourced directly from trusted farms.",
//     },

//     {
//       icon: <ShieldCheck size={45} />,
//       title: "Quality Assured",
//       desc:
//         "Every product goes through strict quality and freshness checks.",
//     },

//     {
//       icon: <Truck size={45} />,
//       title: "Fast Delivery",
//       desc:
//         "Quick and secure delivery to your doorstep across India.",
//     },

//     {
//       icon: <BadgeCheck size={45} />,
//       title: "Trusted Brand",
//       desc:
//         "Loved by thousands of happy customers for premium dry fruits.",
//     },

//   ];

//   return (

//     <section className="w-full bg-[#F5F3F0] py-20 px-6 md:px-12">

//       <div className="max-w-7xl mx-auto">

//         {/* TOP */}

//         <div className="text-center mb-16">

//           <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold text-sm">

//             Why Customers Love Us

//           </p>

//           <h2 className="text-4xl md:text-6xl font-bold text-[#2B1408] mt-5">

//             Why Choose FarmHills

//           </h2>

//           <p className="max-w-3xl mx-auto text-[#7B6252] text-lg md:text-xl mt-6 leading-relaxed">

//             We provide premium dry fruits with unmatched freshness,
//             quality and taste for a healthier lifestyle.

//           </p>

//         </div>

//         {/* FEATURES */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {features.map((item, index) => (

//             <div
//               key={index}
//               className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 transition duration-300 group text-center"
//             >

//               {/* ICON */}

//               <div className="w-24 h-24 mx-auto rounded-full bg-[#EFE2C8] flex items-center justify-center text-[#9B4D0D] group-hover:scale-110 transition duration-300">

//                 {item.icon}

//               </div>

//               {/* TITLE */}

//               <h3 className="text-3xl font-semibold text-[#2B1408] mt-8">

//                 {item.title}

//               </h3>

//               {/* DESC */}

//               <p className="text-[#7B6252] mt-5 leading-relaxed">

//                 {item.desc}

//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default WhyChooseUs;


import React from "react";

import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf />,
      title: "100% Natural",
      desc:
        "Premium quality dry fruits sourced directly from trusted farms.",
    },

    {
      icon: <ShieldCheck />,
      title: "Quality Assured",
      desc:
        "Every product goes through strict quality and freshness checks.",
    },

    {
      icon: <Truck />,
      title: "Fast Delivery",
      desc:
        "Quick and secure delivery to your doorstep across India.",
    },

    {
      icon: <BadgeCheck />,
      title: "Trusted Brand",
      desc:
        "Loved by thousands of happy customers for premium dry fruits.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#F5F1EA]
        px-4
        sm:px-6
        md:px-12
        py-14
        sm:py-16
        md:py-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            text-center
            mb-9
            sm:mb-12
            md:mb-16
          "
        >

          {/* SMALL LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mb-3
            "
          >
            <span
              className="
                w-7
                sm:w-10
                h-[2px]
                bg-[#C28B2C]
              "
            />

            <p
              className="
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                text-[9px]
                sm:text-xs
                font-bold
                text-[#9B4D0D]
              "
            >
              Why Customers Love Us
            </p>

            <span
              className="
                w-7
                sm:w-10
                h-[2px]
                bg-[#C28B2C]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              text-[#2B1408]
              mt-3
              sm:mt-4
            "
          >
            Why Choose{" "}
            <span className="text-[#9B4D0D]">
              FarmHills?
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              md:text-xl
              text-[#7B6252]
              mt-3
              sm:mt-5
              leading-relaxed
            "
          >
            We provide premium dry fruits with unmatched
            freshness, quality and taste for a healthier
            lifestyle.
          </p>
        </div>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            sm:gap-5
            lg:gap-7
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative

                bg-[#FFF9F0]

                rounded-[24px]
                sm:rounded-[30px]

                p-4
                sm:p-6
                md:p-8

                text-center

                border
                border-[#E7D3B8]

                shadow-[0_8px_30px_rgba(91,51,20,0.07)]

                hover:border-[#C28B2C]

                hover:shadow-[0_18px_45px_rgba(91,51,20,0.13)]

                hover:-translate-y-2

                transition-all
                duration-500
              "
            >

              {/* =================================================
                  TOP DECORATION
              ================================================== */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2

                  w-12
                  sm:w-16

                  h-1

                  bg-[#C28B2C]

                  rounded-b-full
                "
              />

              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className="
                  w-14
                  h-14

                  sm:w-18
                  sm:h-18

                  md:w-20
                  md:h-20

                  mx-auto

                  rounded-full

                  bg-[#EFE2C8]

                  flex
                  items-center
                  justify-center

                  text-[#9B4D0D]

                  group-hover:bg-[#9B4D0D]
                  group-hover:text-white

                  group-hover:scale-110

                  transition-all
                  duration-300
                "
              >
                {React.cloneElement(item.icon, {
                  size: 27,
                  strokeWidth: 1.8,
                  className:
                    "sm:w-8 sm:h-8 md:w-9 md:h-9",
                })}
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <h3
                className="
                  text-base
                  sm:text-xl
                  md:text-2xl

                  font-bold

                  text-[#2B1408]

                  mt-4
                  sm:mt-6

                  leading-tight
                "
              >
                {item.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  text-[#7B6252]

                  mt-2
                  sm:mt-3

                  leading-relaxed
                "
              >
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM TRUST MESSAGE
        ====================================================== */}

        <div
          className="
            mt-8
            sm:mt-10
            md:mt-14

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              sm:gap-3

              bg-[#EFE2C8]

              px-4
              sm:px-6

              py-2.5
              sm:py-3

              rounded-full

              border
              border-[#DFC8A7]

              text-[#7A3A05]

              text-[10px]
              sm:text-sm

              font-semibold
            "
          >
            <BadgeCheck
              size={16}
              className="sm:w-5 sm:h-5"
            />

            Premium Quality • Freshly Packed • Delivered
            With Care
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;