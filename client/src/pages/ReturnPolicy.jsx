import React from 'react'

function ReturnPolicy() {

  return (

    <div className="min-h-screen bg-[#F7F3EE] px-6 md:px-16 py-16">

      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold text-[#2B1408] mb-8">

          Return Policy

        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>

            FarmHills ensures premium quality products.

          </p>

          <p>

            If you receive damaged or incorrect products,
            you may request a return within 3 days
            of delivery.

          </p>

          <p>

            Products must remain unopened and unused.

          </p>

          <p>

            Refunds are processed after product inspection.

          </p>

        </div>

      </div>

    </div>
  );
}

export default ReturnPolicy;