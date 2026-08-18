// import React from "react";

// import { Link } from "react-router-dom";

// import {
//   CheckCircle,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";

// const OrderSuccess = () => {

//   return (

//     <section className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">

//       <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl p-10 md:p-14 text-center">

//         {/* SUCCESS ICON */}
//         <div className="flex justify-center">

//           <div className="bg-green-100 p-6 rounded-full">

//             <CheckCircle
//               size={80}
//               className="text-green-600"
//             />

//           </div>

//         </div>

//         {/* HEADING */}
//         <h1 className="text-4xl md:text-5xl font-bold text-[#2B1408] mt-8">

//           Order Placed Successfully

//         </h1>

//         {/* MESSAGE */}
//         <p className="text-[#7B6252] text-lg mt-5 leading-relaxed">

//           Thank you for shopping with us.
//           Your order has been placed successfully
//           and will be processed shortly.

//         </p>

//         {/* DELIVERY BOX */}
//         <div className="bg-[#F5F3F0] rounded-3xl p-6 mt-10 flex items-center gap-5 text-left">

//           <div className="bg-white p-4 rounded-2xl shadow">

//             <Truck
//               size={36}
//               className="text-[#9B4D0D]"
//             />

//           </div>

//           <div>

//             <h3 className="text-xl font-bold text-[#2B1408]">

//               Estimated Delivery

//             </h3>

//             <p className="text-[#7B6252] mt-1">

//               Your order will arrive within
//               3-5 business days.

//             </p>

//           </div>

//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-col sm:flex-row gap-5 mt-12">

//           {/* CONTINUE SHOPPING */}
//           <Link
//             to="/products"
//             className="flex-1"
//           >

//             <button className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-2xl text-lg font-bold transition duration-300 flex items-center justify-center gap-3">

//               <ShoppingBag size={22} />

//               Continue Shopping

//             </button>

//           </Link>

//           {/* GO HOME */}
//           <Link
//             to="/"
//             className="flex-1"
//           >

//             <button className="w-full border-2 border-[#9B4D0D] text-[#9B4D0D] hover:bg-[#9B4D0D] hover:text-white py-4 rounded-2xl text-lg font-bold transition duration-300">

//               Go To Home

//             </button>

//           </Link>

//         </div>

//       </div>

//     </section>

//   );
// };

// export default OrderSuccess;


import React from "react";

import { Link } from "react-router-dom";

import {
  CheckCircle,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";

const OrderSuccess = () => {
  return (
    <section
      className="
        min-h-screen

        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-10

        py-10
        sm:py-14
        md:py-20

        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-2xl

          bg-white

          rounded-[28px]
          sm:rounded-[36px]

          shadow-[0_15px_50px_rgba(91,51,20,0.12)]

          border
          border-[#E7D3B8]

          px-5
          sm:px-8
          md:px-12

          py-8
          sm:py-10
          md:py-12

          text-center
        "
      >

        {/* =================================================
            SUCCESS ICON
        ================================================= */}

        <div className="flex justify-center">

          <div
            className="
              w-20
              h-20

              sm:w-24
              sm:h-24

              rounded-full

              bg-[#E9F7EC]

              flex
              items-center
              justify-center

              shadow-inner
            "
          >
            <CheckCircle
              size={52}
              className="
                text-green-600

                sm:w-16
                sm:h-16
              "
            />
          </div>

        </div>

        {/* =================================================
            SUCCESS LABEL
        ================================================= */}

        <p
          className="
            uppercase

            tracking-[3px]

            text-[#9B4D0D]

            text-xs
            sm:text-sm

            font-semibold

            mt-7
          "
        >
          Thank You
        </p>

        {/* =================================================
            HEADING
        ================================================= */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold

            text-[#2B1408]

            mt-2

            leading-tight
          "
        >
          Order Placed
          <br className="sm:hidden" />
          {" "}Successfully!
        </h1>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <p
          className="
            text-[#7B6252]

            text-sm
            sm:text-base
            md:text-lg

            leading-7

            mt-5

            max-w-xl

            mx-auto
          "
        >
          Thank you for shopping with FarmHills.
          Your order has been placed successfully
          and will be processed shortly.
        </p>

        {/* =================================================
            DELIVERY INFORMATION
        ================================================= */}

        <div
          className="
            bg-[#F7F3EE]

            border
            border-[#E7D3B8]

            rounded-2xl

            p-4
            sm:p-5
            md:p-6

            mt-8

            flex
            items-center

            gap-4

            text-left
          "
        >

          {/* ICON */}

          <div
            className="
              w-12
              h-12

              sm:w-14
              sm:h-14

              rounded-xl

              bg-white

              shadow-sm

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >
            <Truck
              size={25}
              className="text-[#9B4D0D]"
            />
          </div>

          {/* TEXT */}

          <div>

            <h3
              className="
                text-base
                sm:text-lg
                md:text-xl

                font-bold

                text-[#2B1408]
              "
            >
              Estimated Delivery
            </h3>

            <p
              className="
                text-[#7B6252]

                text-xs
                sm:text-sm
                md:text-base

                mt-1

                leading-5
              "
            >
              Your order will arrive within
              3–5 business days.
            </p>

          </div>

        </div>

        {/* =================================================
            ORDER STATUS
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center

            gap-2

            mt-6

            text-sm

            text-[#7B6252]
          "
        >

          <CheckCircle
            size={17}
            className="text-green-600"
          />

          Your order is being processed

        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            gap-3
            sm:gap-4

            mt-8
            sm:mt-10
          "
        >

          {/* CONTINUE SHOPPING */}

          <Link
            to="/products"
            className="flex-1"
          >

            <button
              className="
                w-full

                bg-[#9B4D0D]

                hover:bg-[#7A3A05]

                text-white

                py-3.5
                sm:py-4

                rounded-xl
                sm:rounded-2xl

                text-sm
                sm:text-base
                md:text-lg

                font-semibold

                shadow-lg

                hover:shadow-xl

                transition-all

                flex
                items-center
                justify-center

                gap-2
              "
            >

              <ShoppingBag size={20} />

              Continue Shopping

              <ArrowRight size={18} />

            </button>

          </Link>

          {/* GO HOME */}

          <Link
            to="/"
            className="flex-1"
          >

            <button
              className="
                w-full

                border-2
                border-[#9B4D0D]

                text-[#9B4D0D]

                hover:bg-[#9B4D0D]

                hover:text-white

                py-3.5
                sm:py-4

                rounded-xl
                sm:rounded-2xl

                text-sm
                sm:text-base
                md:text-lg

                font-semibold

                transition-all
              "
            >
              Go To Home
            </button>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default OrderSuccess;