// import React from "react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import {
//   Leaf,
//   ShieldCheck,
//   Truck,
//   HeartHandshake,
// } from "lucide-react";

// function About() {

//   return (
//     <>
      

//       {/* HERO SECTION */}

//       <section className="w-full bg-[#F5F3F0] px-6 md:px-12 py-20">

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}

//           <div>

//             <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold mb-4">

//               About FarmHills

//             </p>

//             <h1 className="text-5xl md:text-6xl font-bold text-[#2B1408] leading-tight">

//               Healthy Dry Fruits
//               <br />
//               For Every Family

//             </h1>

//             <p className="text-[#7B6252] text-lg leading-8 mt-8">

//               FarmHills is committed to delivering premium quality dry fruits
//               sourced directly from trusted farms. Our mission is to provide
//               healthy, fresh, and nutritious products that bring wellness to
//               every home.

//             </p>

//             <p className="text-[#7B6252] text-lg leading-8 mt-6">

//               We focus on quality, freshness, and customer satisfaction while
//               ensuring every product is carefully selected and hygienically
//               packed.

//             </p>

//           </div>

//           {/* RIGHT IMAGE */}

//           <div>

//             <img
//               src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop"
//               alt="Dry Fruits"
//               className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl"
//             />

//           </div>

//         </div>

//       </section>

//       {/* FEATURES SECTION */}

//       <section className="bg-white px-6 md:px-12 py-20">

//         <div className="max-w-7xl mx-auto">

//           {/* HEADING */}

//           <div className="text-center mb-16">

//             <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold">

//               Why Choose Us

//             </p>

//             <h2 className="text-5xl font-bold text-[#2B1408] mt-4">

//               Premium Quality Experience

//             </h2>

//           </div>

//           {/* FEATURES */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//             {/* FEATURE 1 */}

//             <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

//               <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

//                 <Leaf size={36} />

//               </div>

//               <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

//                 Natural Products

//               </h3>

//               <p className="text-[#7B6252] leading-7">

//                 100% natural and fresh dry fruits directly sourced from farms.

//               </p>

//             </div>

//             {/* FEATURE 2 */}

//             <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

//               <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

//                 <ShieldCheck size={36} />

//               </div>

//               <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

//                 Quality Assurance

//               </h3>

//               <p className="text-[#7B6252] leading-7">

//                 Every product is carefully tested for freshness and quality.

//               </p>

//             </div>

//             {/* FEATURE 3 */}

//             <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

//               <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

//                 <Truck size={36} />

//               </div>

//               <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

//                 Fast Delivery

//               </h3>

//               <p className="text-[#7B6252] leading-7">

//                 Quick and secure delivery to your doorstep across India.

//               </p>

//             </div>

//             {/* FEATURE 4 */}

//             <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

//               <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

//                 <HeartHandshake size={36} />

//               </div>

//               <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

//                 Customer Trust

//               </h3>

//               <p className="text-[#7B6252] leading-7">

//                 Thousands of happy customers trust our products and service.

//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* OUR STORY */}

//       <section className="bg-[#F5F3F0] px-6 md:px-12 py-20">

//         <div className="max-w-5xl mx-auto text-center">

//           <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold">

//             Our Story

//           </p>

//           <h2 className="text-5xl font-bold text-[#2B1408] mt-4 mb-8">

//             Bringing Nature Closer To You

//           </h2>

//           <p className="text-[#7B6252] text-lg leading-9">

//             FarmHills started with a simple vision — to provide healthy and
//             premium dry fruits to families at affordable prices. We believe
//             nutrition should never be compromised, and our goal is to build a
//             trusted brand focused on quality, freshness, and wellness.

//           </p>

//         </div>

//       </section>

//     </>
//   );
// }

// export default About;




import React from "react";

import {
  Leaf,
  ShieldCheck,
  Truck,
  HeartHandshake,
} from "lucide-react";

function About() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          w-full
          bg-[#F5F3F0]

          px-4
          sm:px-6
          md:px-10
          lg:px-12

          py-12
          sm:py-16
          md:py-20

          overflow-hidden
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto

            grid
            grid-cols-1
            lg:grid-cols-2

            gap-10
            md:gap-14
            lg:gap-16

            items-center
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="text-center lg:text-left">

            <p
              className="
                uppercase

                tracking-[3px]
                sm:tracking-[5px]

                text-[#9B4D0D]

                font-semibold

                text-xs
                sm:text-sm

                mb-3
                sm:mb-4
              "
            >
              About FarmHills
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl

                font-bold

                text-[#2B1408]

                leading-[1.1]
              "
            >
              Healthy Dry Fruits
              <br />

              <span className="text-[#9B4D0D]">
                For Every Family
              </span>
            </h1>

            <p
              className="
                text-[#7B6252]

                text-base
                sm:text-lg
                md:text-xl

                leading-7
                md:leading-8

                mt-6
                md:mt-8

                max-w-2xl

                mx-auto
                lg:mx-0
              "
            >
              FarmHills is committed to delivering premium
              quality dry fruits sourced directly from trusted
              farms. Our mission is to provide healthy, fresh,
              and nutritious products that bring wellness to
              every home.
            </p>

            <p
              className="
                text-[#7B6252]

                text-base
                sm:text-lg
                md:text-xl

                leading-7
                md:leading-8

                mt-5
                md:mt-6

                max-w-2xl

                mx-auto
                lg:mx-0
              "
            >
              We focus on quality, freshness, and customer
              satisfaction while ensuring every product is
              carefully selected and hygienically packed.
            </p>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="
              w-full

              max-w-xl
              lg:max-w-none

              mx-auto
            "
          >

            <div
              className="
                relative

                overflow-hidden

                rounded-[28px]
                sm:rounded-[35px]
                md:rounded-[40px]

                shadow-2xl

                group
              "
            >

              <img
                src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop"
                alt="FarmHills Premium Dry Fruits"
                className="
                  w-full

                  h-[350px]
                  sm:h-[450px]
                  md:h-[520px]
                  lg:h-[600px]

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#2B1408]/25
                  via-transparent
                  to-white/5

                  pointer-events-none
                "
              />

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES SECTION
      ====================================================== */}

      <section
        className="
          bg-white

          px-4
          sm:px-6
          md:px-10
          lg:px-12

          py-14
          sm:py-16
          md:py-20
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}

          <div
            className="
              text-center

              mb-10
              sm:mb-12
              md:mb-16
            "
          >

            <p
              className="
                uppercase

                tracking-[3px]
                sm:tracking-[5px]

                text-[#9B4D0D]

                font-semibold

                text-xs
                sm:text-sm
              "
            >
              Why Choose Us
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl

                font-bold

                text-[#2B1408]

                mt-3
                sm:mt-4
              "
            >
              Premium Quality Experience
            </h2>

            <p
              className="
                text-[#7B6252]

                text-sm
                sm:text-base
                md:text-lg

                max-w-2xl

                mx-auto

                mt-4
              "
            >
              Quality, freshness and care in every pack we
              deliver.
            </p>

          </div>

          {/* FEATURES */}

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4

              gap-5
              md:gap-7
              lg:gap-8
            "
          >

            {/* FEATURE 1 */}

            <FeatureCard
              icon={<Leaf size={32} />}
              title="Natural Products"
              desc="100% natural and fresh dry fruits directly sourced from farms."
            />

            {/* FEATURE 2 */}

            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Quality Assurance"
              desc="Every product is carefully tested for freshness and quality."
            />

            {/* FEATURE 3 */}

            <FeatureCard
              icon={<Truck size={32} />}
              title="Fast Delivery"
              desc="Quick and secure delivery to your doorstep across India."
            />

            {/* FEATURE 4 */}

            <FeatureCard
              icon={<HeartHandshake size={32} />}
              title="Customer Trust"
              desc="Thousands of happy customers trust our products and service."
            />

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section
        className="
          bg-[#F5F3F0]

          px-4
          sm:px-6
          md:px-10
          lg:px-12

          py-14
          sm:py-16
          md:py-20
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto

            text-center
          "
        >

          <p
            className="
              uppercase

              tracking-[3px]
              sm:tracking-[5px]

              text-[#9B4D0D]

              font-semibold

              text-xs
              sm:text-sm
            "
          >
            Our Story
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              text-[#2B1408]

              mt-3
              sm:mt-4

              mb-6
              sm:mb-8
            "
          >
            Bringing Nature Closer To You
          </h2>

          <p
            className="
              text-[#7B6252]

              text-base
              sm:text-lg
              md:text-xl

              leading-7
              sm:leading-8
              md:leading-9
            "
          >
            FarmHills started with a simple vision — to provide
            healthy and premium dry fruits to families at
            affordable prices. We believe nutrition should
            never be compromised, and our goal is to build a
            trusted brand focused on quality, freshness, and
            wellness.
          </p>

        </div>
      </section>
    </>
  );
}

// ==========================================================
// FEATURE CARD
// ==========================================================

function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div
      className="
        bg-[#F5F3F0]

        rounded-[24px]
        sm:rounded-[28px]
        md:rounded-[30px]

        p-6
        sm:p-8
        md:p-9
        lg:p-10

        text-center

        border
        border-transparent

        hover:border-[#E7D3B8]

        shadow-[0_8px_25px_rgba(91,51,20,0.06)]

        hover:shadow-[0_15px_35px_rgba(91,51,20,0.12)]

        hover:-translate-y-2

        transition-all
        duration-300
      "
    >

      {/* ICON */}

      <div
        className="
          w-16
          h-16

          sm:w-20
          sm:h-20

          bg-[#9B4D0D]

          text-white

          rounded-full

          flex
          items-center
          justify-center

          mx-auto

          mb-5
          sm:mb-6
        "
      >
        {icon}
      </div>

      {/* TITLE */}

      <h3
        className="
          text-xl
          sm:text-2xl

          font-bold

          text-[#2B1408]

          mb-3
          sm:mb-4
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          text-[#7B6252]

          text-sm
          sm:text-base

          leading-6
          sm:leading-7
        "
      >
        {desc}
      </p>

    </div>
  );
}

export default About;