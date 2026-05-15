import React from 'react'

const OrderSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="bg-white p-10 rounded-2xl shadow text-center">

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully
        </h1>

        <p className="text-gray-600">
          Thank you for your purchase.
        </p>

      </div>

    </div>
  );
};

export default OrderSuccess;