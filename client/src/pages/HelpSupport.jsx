// import React from 'react'

// function HelpSupport() {

//   return (

//     <div className="min-h-screen bg-[#F7F3EE] px-6 md:px-16 py-16">

//       <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

//         <h1 className="text-4xl font-bold text-[#2B1408] mb-8">

//           Help & Support

//         </h1>

//         <div className="space-y-6 text-gray-700 leading-relaxed">

//           <p>

//             Need help with your order or account?

//           </p>

//           <p>

//             Contact our support team anytime.

//           </p>

//           <p>

//             📧 support@farmhills.com

//           </p>

//           <p>

//             📞 +91 7076704574

//           </p>

//           <p>

//             We typically respond within 24 hours.

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default HelpSupport;



import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MessageCircle,
  Package,
  CreditCard,
  Truck,
  ArrowRight,
} from "lucide-react";

function HelpSupport() {
  const supportTopics = [
    {
      icon: <Package size={24} />,
      title: "Order Help",
      description:
        "Need help with your order, cancellation, or order status?",
    },
    {
      icon: <Truck size={24} />,
      title: "Delivery Support",
      description:
        "Questions about delivery, shipping, or your package?",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Help",
      description:
        "Having trouble with online payment or payment status?",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "General Support",
      description:
        "Have another question? Our support team is happy to help.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-10
        lg:px-12

        py-10
        sm:py-14
        md:py-20
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <p
            className="
              uppercase
              tracking-[3px]
              sm:tracking-[5px]

              text-[#9B4D0D]

              text-xs
              sm:text-sm

              font-semibold
            "
          >
            Customer Care
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              text-[#2B1408]

              mt-3
            "
          >
            Help & Support
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base
              md:text-lg

              leading-7

              mt-4

              px-2
            "
          >
            Need help with your order or account?
            Our FarmHills support team is here to help.
          </p>

        </div>

        {/* =================================================
            SUPPORT TOPICS
        ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-4
            sm:gap-5
            lg:gap-6

            mb-8
            sm:mb-10
          "
        >

          {supportTopics.map((item, index) => (
            <div
              key={index}
              className="
                bg-white

                rounded-2xl
                sm:rounded-3xl

                p-5
                sm:p-6

                shadow-md

                border
                border-[#E7D3B8]

                hover:-translate-y-1

                hover:shadow-xl

                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-[#EFE2C8]

                  text-[#9B4D0D]

                  flex
                  items-center
                  justify-center

                  mb-4
                "
              >
                {item.icon}
              </div>

              <h2
                className="
                  text-lg
                  sm:text-xl

                  font-bold

                  text-[#2B1408]
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  text-[#7B6252]

                  text-sm

                  leading-6

                  mt-2
                "
              >
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* =================================================
            CONTACT SUPPORT
        ================================================= */}

        <div
          className="
            bg-[#2B1408]

            rounded-[26px]
            sm:rounded-[32px]

            p-6
            sm:p-8
            md:p-10
            lg:p-12

            text-white

            shadow-xl

            relative

            overflow-hidden
          "
        >

          {/* BACKGROUND DECORATION */}

          <div
            className="
              absolute

              -top-24
              -right-24

              w-64
              h-64

              rounded-full

              bg-[#9B4D0D]

              opacity-30

              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
            "
          >

            {/* TOP */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>

                <p
                  className="
                    uppercase
                    tracking-[3px]

                    text-[#F4D03F]

                    text-xs
                    sm:text-sm

                    font-semibold
                  "
                >
                  We're Here For You
                </p>

                <h2
                  className="
                    text-2xl
                    sm:text-3xl

                    font-bold

                    mt-2
                  "
                >
                  Contact Our Support Team
                </h2>

                <p
                  className="
                    text-gray-300

                    text-sm
                    sm:text-base

                    leading-6

                    mt-3

                    max-w-xl
                  "
                >
                  Tell us what you need help with and
                  we'll do our best to assist you.
                </p>

              </div>

              <div
                className="
                  hidden
                  md:flex

                  w-16
                  h-16

                  rounded-full

                  bg-[#9B4D0D]

                  items-center
                  justify-center

                  flex-shrink-0
                "
              >
                <MessageCircle size={30} />
              </div>

            </div>

            {/* CONTACT OPTIONS */}

            <div
              className="
                grid

                grid-cols-1
                sm:grid-cols-2

                gap-4

                mt-8
              "
            >

              {/* EMAIL */}

              <a
                href="mailto:farmhills25@gmail.com"
                className="
                  flex
                  items-center
                  gap-4

                  p-4

                  rounded-2xl

                  bg-white/10

                  border
                  border-white/10

                  hover:bg-white/15

                  transition
                "
              >

                <div
                  className="
                    w-11
                    h-11

                    rounded-full

                    bg-[#F4D03F]

                    text-[#2B1408]

                    flex
                    items-center
                    justify-center

                    flex-shrink-0
                  "
                >
                  <FaEnvelope />
                </div>

                <div className="min-w-0">

                  <p className="text-xs text-gray-400">
                    Email Support
                  </p>

                  <p
                    className="
                      text-sm
                      sm:text-base

                      font-semibold

                      break-all

                      mt-1
                    "
                  >
                    farmhills25@gmail.com
                  </p>

                </div>

              </a>

              {/* PHONE */}

              <a
                href="tel:+919131824144"
                className="
                  flex
                  items-center
                  gap-4

                  p-4

                  rounded-2xl

                  bg-white/10

                  border
                  border-white/10

                  hover:bg-white/15

                  transition
                "
              >

                <div
                  className="
                    w-11
                    h-11

                    rounded-full

                    bg-[#F4D03F]

                    text-[#2B1408]

                    flex
                    items-center
                    justify-center

                    flex-shrink-0
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Phone Support
                  </p>

                  <p
                    className="
                      text-sm
                      sm:text-base

                      font-semibold

                      mt-1
                    "
                  >
                    +91 9131824144
                  </p>

                </div>

              </a>

            </div>

            {/* RESPONSE TIME */}

            <div
              className="
                mt-6

                pt-6

                border-t
                border-white/10

                flex
                flex-col
                sm:flex-row

                sm:items-center
                sm:justify-between

                gap-3
              "
            >

              <p
                className="
                  text-gray-300

                  text-sm
                "
              >
                🕐 We typically respond within 24 hours.
              </p>

              <a
                href="https://wa.me/919131824144"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  bg-[#25D366]

                  hover:bg-[#1ebe5d]

                  text-white

                  px-5
                  py-3

                  rounded-full

                  text-sm

                  font-semibold

                  transition

                  w-full
                  sm:w-auto
                "
              >
                <FaWhatsapp />

                WhatsApp Us

                <ArrowRight size={16} />

              </a>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <div className="text-center mt-8">

          <p
            className="
              text-[#7B6252]

              text-xs
              sm:text-sm
            "
          >
            Thank you for choosing FarmHills Premium Dry Fruits.
          </p>

        </div>

      </div>
    </section>
  );
}

export default HelpSupport;