// import React from 'react'

// function PrivacyPolicy() {

//   return (

//     <div className="min-h-screen bg-[#F7F3EE] px-6 md:px-16 py-16">

//       <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

//         <h1 className="text-4xl font-bold text-[#2B1408] mb-8">

//           Privacy Policy

//         </h1>

//         <div className="space-y-6 text-gray-700 leading-relaxed">

//           <p>

//             At FarmHills, we value your privacy and are committed
//             to protecting your personal information.

//           </p>

//           <p>

//             We collect customer information such as name,
//             email, phone number, and address only for
//             order processing and customer support.

//           </p>

//           <p>

//             Your payment information is processed securely
//             and is never stored on our servers.

//           </p>

//           <p>

//             We do not sell or share your personal information
//             with third parties.

//           </p>

//           <p>

//             By using FarmHills, you agree to our privacy policy.

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default PrivacyPolicy;


import React from "react";

import {
  ShieldCheck,
  UserRound,
  CreditCard,
  LockKeyhole,
  Share2,
  CheckCircle,
} from "lucide-react";

function PrivacyPolicy() {
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
                <ShieldCheck
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
                  Privacy Policy
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
              We respect your privacy and are committed
              to protecting your personal information.
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
                  At FarmHills, we value your privacy and
                  are committed to protecting your personal
                  information.
                </p>

              </div>

            </div>

            {/* =================================================
                PRIVACY SECTIONS
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              {/* PERSONAL INFORMATION */}

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
                  <UserRound size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Personal Information
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
                  We collect customer information such as
                  name, email, phone number, and address only
                  for order processing and customer support.
                </p>

              </div>

              {/* PAYMENT INFORMATION */}

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
                  <CreditCard size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Payment Information
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
                  Your payment information is processed
                  securely and is never stored on our
                  servers.
                </p>

              </div>

              {/* DATA SECURITY */}

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
                  <LockKeyhole size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Data Security
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
                  We are committed to protecting your
                  personal information and handling it
                  responsibly.
                </p>

              </div>

              {/* THIRD PARTIES */}

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
                  <Share2 size={23} />
                </div>

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-[#2B1408]
                  "
                >
                  Your Information
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
                  We do not sell or share your personal
                  information with third parties.
                </p>

              </div>

            </div>

            {/* =================================================
                AGREEMENT
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

              <div className="flex gap-3 items-start">

                <CheckCircle
                  size={21}
                  className="
                    text-[#9B4D0D]

                    flex-shrink-0

                    mt-1
                  "
                />

                <div>

                  <h3
                    className="
                      text-lg

                      font-bold

                      text-[#2B1408]

                      mb-2
                    "
                  >
                    Your Agreement
                  </h3>

                  <p
                    className="
                      text-[#7B6252]

                      text-sm
                      sm:text-base

                      leading-7
                    "
                  >
                    By using FarmHills, you agree to our
                    privacy policy.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;