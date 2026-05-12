import React from 'react'

function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-xl p-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-3">
        {name}
      </h2>

      <p className="text-green-700 font-semibold">
        ₹{price}
      </p>

      <button className="bg-amber-700 text-white px-4 py-2 rounded mt-3">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard