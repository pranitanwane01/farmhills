import React, { useEffect, useState } from "react";

import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH ORDERS
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setOrders(data);

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/orders/${id}`,
        {
          orderStatus: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOrders(orders.map((order) => (order._id === id ? data : order)));

      alert("Order Status Updated");
    } catch (error) {
      console.log(error);
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Loading Orders...</h1>
      </div>
    );
  }

  return (
    <div>
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10">Orders Management</h1>

      {/* NO ORDERS */}
      {orders.length === 0 && (
        <div className="bg-white p-10 rounded-3xl shadow text-center">
          <h2 className="text-3xl font-bold">No Orders Found</h2>
        </div>
      )}

      {/* ORDERS */}
      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-3xl shadow-lg p-8">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold">{order.customerName}</h2>

                <p className="text-gray-600 mt-2">{order.customerPhone}</p>

                <p className="text-gray-600 mt-2">{order.shippingAddress}</p>
              </div>

              {/* STATUS */}
              <div className="flex flex-col gap-4">
                {/* PAYMENT */}
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold text-center">
                  Payment: {order.paymentStatus}
                </span>

                {/* STATUS SELECT */}
                <select
                  value={order.orderStatus}
                  onChange={(e) => updateStatus(order._id, e.target.value)}
                  className="border p-3 rounded-xl"
                >
                  <option value="Processing">Processing</option>

                  <option value="Shipped">Shipped</option>

                  <option value="Delivered">Delivered</option>

                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="space-y-6">
              {order.products.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 border-b pb-6"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{item.name}</h3>

                    <p className="text-gray-600 mt-2">
                      Quantity: {item.quantity}
                    </p>

                    <p className="text-yellow-600 text-xl font-bold mt-2">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-3xl font-bold">Total Amount</h2>

              <h2 className="text-3xl font-bold text-yellow-600">
                ₹{order.totalAmount}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
