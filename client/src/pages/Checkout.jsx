import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  // Dummy Cart Products
  const cartProducts = [
    {
      _id: "1",
      name: "Premium Almonds",
      quantity: 2,
      price: 850,
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510",
    },
  ];

  // Total Amount
  const totalAmount = cartProducts.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  // Form State
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    shippingAddress: "",
    paymentMethod: "COD",
  });

  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Place Order
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const orderData = {
        ...formData,
        products: cartProducts,
        totalAmount,
      };

      await axios.post(
        "http://localhost:8000/api/orders",
        orderData
      );

      alert("Order Placed Successfully");

      navigate("/order-success");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Checkout Form */}
        <div className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Shipping Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>

              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* Phone */}
            <div>

              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* Address */}
            <div>

              <label className="block mb-2 font-medium">
                Shipping Address
              </label>

              <textarea
                rows="5"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                placeholder="Enter shipping address"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* Payment */}
            <div>

              <label className="block mb-2 font-medium">
                Payment Method
              </label>

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl outline-none"
              >

                <option value="COD">
                  Cash On Delivery
                </option>

                <option value="Online">
                  Online Payment
                </option>

              </select>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow h-fit">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cartProducts.map((item) => (

              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    ₹{item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Total */}
          <div className="mt-6 border-t pt-6">

            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span>
                ₹{totalAmount}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;