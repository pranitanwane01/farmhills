import React from 'react'

import ProductCard from "../components/ProductCard"

function Home() {

  const products = [
    {
      name: "Almonds",
      price: 500,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510"
    },
    {
      name: "Cashews",
      price: 700,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32"
    },
    {
      name: "Pistachio",
      price: 900,
      image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec"
    }
  ]

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Premium Dry Fruits
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}

      </div>
    </div>
  )
}

export default Home