// import React from 'react'

// function ReturnPolicy() {

//   return (

//     <div className="min-h-screen bg-[#F7F3EE] px-6 md:px-16 py-16">

//       <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

//         <h1 className="text-4xl font-bold text-[#2B1408] mb-8">

//           Return Policy

//         </h1>

//         <div className="space-y-6 text-gray-700 leading-relaxed">

//           <p>

//             FarmHills ensures premium quality products.

//           </p>

//           <p>

//             If you receive damaged or incorrect products,
//             you may request a return within 3 days
//             of delivery.

//           </p>

//           <p>

//             Products must remain unopened and unused.

//           </p>

//           <p>

//             Refunds are processed after product inspection.

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ReturnPolicy;

import React from "react";

import {
  RotateCcw,
  PackageCheck,
  Clock3,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

function ReturnPolicy() {
  return (
    <section
      className="
        min-h-screen
        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-12
        lg:px-16

        py-10
        sm:py-14
        md:py-20
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <div
          className="
            bg-white

            rounded-[26px]
            sm:rounded-[32px]

            shadow-[0_10px_40px_rgba(91,51,20,0.10)]

            border
            border-[#E7D3B8]

            overflow-hidden
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              bg-gradient-to-br
              from-[#2B1408]
              via-[#4A2511]
              to-[#9B4D0D]

              px-6
              sm:px-8
              md:px-12

              py-8
              sm:py-10
              md:py-12

              text-white
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16

                  rounded-full

                  bg-white/10

                  border
                  border-white/20

                  flex
                  items-center
                  justify-center

                  flex-shrink-0
                "
              >
                <RotateCcw
                  size={28}
                  className="sm:w-8 sm:h-8"
                />
              </div>

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
                  FarmHills Policy
                </p>

                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl

                    font-bold

                    mt-1
                  "
                >
                  Return Policy
                </h1>

              </div>

            </div>

            <p
              className="
                text-white/80

                text-sm
                sm:text-base

                leading-6

                mt-6

                max-w-3xl
              "
            >
              We want you to receive your FarmHills
              products in perfect condition. Please
              review our return guidelines below.
            </p>

          </div>

          {/* =================================================
              POLICY CONTENT
          ================================================= */}

          <div
            className="
              px-6
              sm:px-8
              md:px-12

              py-8
              sm:py-10
              md:py-12
            "
          >

            {/* =================================================
                INTRO
            ================================================= */}

            <div
              className="
                bg-[#F7F3EE]

                rounded-2xl

                p-5
                sm:p-6

                border
                border-[#E7D3B8]
              "
            >

              <div className="flex gap-3 items-start">

                <ShieldCheck
                  size={22}
                  className="
                    text-[#9B4D0D]

                    flex-shrink-0

                    mt-0.5
                  "
                />

                <p
                  className="
                    text-[#7B6252]

                    text-sm
                    sm:text-base

                    leading-7
                  "
                >
                  FarmHills ensures premium quality
                  products and carefully checks products
                  before they are dispatched.
                </p>

              </div>

            </div>

            {/* =================================================
                POLICY POINTS
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              {/* RETURN WINDOW */}

              <div
                className="
                  bg-[#FFFCF8]

                  border
                  border-[#E7D3B8]

                  rounded-2xl

                  p-5
                  sm:p-6

                  hover:shadow-lg

                  transition
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
                  <Clock3 size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  3-Day Return Window
                </h2>

                <p
                  className="
                    text-[#7B6252]

                    text-sm
                    sm:text-base

                    leading-7

                    mt-3
                  "
                >
                  If you receive a damaged or incorrect
                  product, you may request a return within
                  3 days of delivery.
                </p>

              </div>

              {/* PRODUCT CONDITION */}

              <div
                className="
                  bg-[#FFFCF8]

                  border
                  border-[#E7D3B8]

                  rounded-2xl

                  p-5
                  sm:p-6

                  hover:shadow-lg

                  transition
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
                  <PackageCheck size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Product Condition
                </h2>

                <p
                  className="
                    text-[#7B6252]

                    text-sm
                    sm:text-base

                    leading-7

                    mt-3
                  "
                >
                  Products must remain unopened and unused
                  to qualify for a return.
                </p>

              </div>

              {/* DAMAGED / INCORRECT */}

              <div
                className="
                  bg-[#FFFCF8]

                  border
                  border-[#E7D3B8]

                  rounded-2xl

                  p-5
                  sm:p-6

                  hover:shadow-lg

                  transition
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
                  <AlertCircle size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Damaged or Incorrect Items
                </h2>

                <p
                  className="
                    text-[#7B6252]

                    text-sm
                    sm:text-base

                    leading-7

                    mt-3
                  "
                >
                  Returns are applicable when you receive a
                  damaged or incorrect product.
                </p>

              </div>

              {/* REFUND */}

              <div
                className="
                  bg-[#FFFCF8]

                  border
                  border-[#E7D3B8]

                  rounded-2xl

                  p-5
                  sm:p-6

                  hover:shadow-lg

                  transition
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
                  <ShieldCheck size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Refund Process
                </h2>

                <p
                  className="
                    text-[#7B6252]

                    text-sm
                    sm:text-base

                    leading-7

                    mt-3
                  "
                >
                  Refunds are processed after the returned
                  product has been inspected.
                </p>

              </div>

            </div>

            {/* =================================================
                IMPORTANT NOTE
            ================================================= */}

            <div
              className="
                mt-8

                border-l-4
                border-[#9B4D0D]

                bg-[#F7F3EE]

                rounded-r-xl

                p-5
                sm:p-6
              "
            >

              <h3
                className="
                  text-lg

                  font-bold

                  text-[#2B1408]

                  mb-2
                "
              >
                Important
              </h3>

              <p
                className="
                  text-[#7B6252]

                  text-sm
                  sm:text-base

                  leading-7
                "
              >
                Please make sure the product remains
                unopened and unused if you need to request
                a return.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReturnPolicy;