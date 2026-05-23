import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Leaf,
  ShieldCheck,
  Truck,
  HeartHandshake,
} from "lucide-react";

function About() {

  return (
    <>
      

      {/* HERO SECTION */}

      <section className="w-full bg-[#F5F3F0] px-6 md:px-12 py-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold mb-4">

              About FarmHills

            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#2B1408] leading-tight">

              Healthy Dry Fruits
              <br />
              For Every Family

            </h1>

            <p className="text-[#7B6252] text-lg leading-8 mt-8">

              FarmHills is committed to delivering premium quality dry fruits
              sourced directly from trusted farms. Our mission is to provide
              healthy, fresh, and nutritious products that bring wellness to
              every home.

            </p>

            <p className="text-[#7B6252] text-lg leading-8 mt-6">

              We focus on quality, freshness, and customer satisfaction while
              ensuring every product is carefully selected and hygienically
              packed.

            </p>

          </div>

          {/* RIGHT IMAGE */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop"
              alt="Dry Fruits"
              className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="bg-white px-6 md:px-12 py-20">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold">

              Why Choose Us

            </p>

            <h2 className="text-5xl font-bold text-[#2B1408] mt-4">

              Premium Quality Experience

            </h2>

          </div>

          {/* FEATURES */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* FEATURE 1 */}

            <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

              <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

                <Leaf size={36} />

              </div>

              <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

                Natural Products

              </h3>

              <p className="text-[#7B6252] leading-7">

                100% natural and fresh dry fruits directly sourced from farms.

              </p>

            </div>

            {/* FEATURE 2 */}

            <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

              <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

                <ShieldCheck size={36} />

              </div>

              <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

                Quality Assurance

              </h3>

              <p className="text-[#7B6252] leading-7">

                Every product is carefully tested for freshness and quality.

              </p>

            </div>

            {/* FEATURE 3 */}

            <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

              <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

                <Truck size={36} />

              </div>

              <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

                Fast Delivery

              </h3>

              <p className="text-[#7B6252] leading-7">

                Quick and secure delivery to your doorstep across India.

              </p>

            </div>

            {/* FEATURE 4 */}

            <div className="bg-[#F5F3F0] rounded-[30px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">

              <div className="w-20 h-20 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">

                <HeartHandshake size={36} />

              </div>

              <h3 className="text-2xl font-bold text-[#2B1408] mb-4">

                Customer Trust

              </h3>

              <p className="text-[#7B6252] leading-7">

                Thousands of happy customers trust our products and service.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OUR STORY */}

      <section className="bg-[#F5F3F0] px-6 md:px-12 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold">

            Our Story

          </p>

          <h2 className="text-5xl font-bold text-[#2B1408] mt-4 mb-8">

            Bringing Nature Closer To You

          </h2>

          <p className="text-[#7B6252] text-lg leading-9">

            FarmHills started with a simple vision — to provide healthy and
            premium dry fruits to families at affordable prices. We believe
            nutrition should never be compromised, and our goal is to build a
            trusted brand focused on quality, freshness, and wellness.

          </p>

        </div>

      </section>

    </>
  );
}

export default About;