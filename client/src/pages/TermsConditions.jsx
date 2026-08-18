// import React from 'react'

// function TermsConditions() {

//   return (

//     <div className="min-h-screen bg-[#F7F3EE] px-6 md:px-16 py-16">

//       <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

//         <h1 className="text-4xl font-bold text-[#2B1408] mb-8">

//           Terms & Conditions

//         </h1>

//         <div className="space-y-6 text-gray-700 leading-relaxed">

//           <p>

//             By using FarmHills, you agree to comply
//             with our terms and conditions.

//           </p>

//           <p>

//             All products and prices are subject to change
//             without notice.

//           </p>

//           <p>

//             Unauthorized use of this website may result
//             in legal action.

//           </p>

//           <p>

//             FarmHills reserves the right to cancel orders
//             in suspicious situations.

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default TermsConditions;



import React from "react";

import {
  FileText,
  ShieldCheck,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

function TermsConditions() {
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
                <FileText
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
                  Terms & Conditions
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
              Please read these terms carefully before
              using the FarmHills website and purchasing
              our products.
            </p>

          </div>

          {/* =================================================
              CONTENT
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
                INTRODUCTION
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
                  By using FarmHills, you agree to
                  comply with our terms and conditions.
                </p>

              </div>

            </div>

            {/* =================================================
                TERMS
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              {/* PRODUCT & PRICE */}

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
                  <RefreshCw size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Products & Prices
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
                  All products and prices are subject
                  to change without notice.
                </p>

              </div>

              {/* WEBSITE USE */}

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
                  <FileText size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Website Usage
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
                  Unauthorized use of this website may
                  result in legal action.
                </p>

              </div>

              {/* ORDER CANCELLATION */}

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
                  <AlertTriangle size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Order Cancellation
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
                  FarmHills reserves the right to cancel
                  orders in suspicious situations.
                </p>

              </div>

              {/* AGREEMENT */}

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
                  <CheckCircle size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  User Agreement
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
                  By continuing to use FarmHills, you
                  acknowledge and agree to these terms.
                </p>

              </div>

            </div>

            {/* =================================================
                IMPORTANT NOTICE
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
                Please review these terms before using
                the FarmHills website or placing an order.
                Continued use of the website indicates
                acceptance of these terms.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TermsConditions;