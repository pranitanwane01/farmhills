import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function MyOrders() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH ORDERS
  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const { data } =
            await axios.get(
              `${import.meta.env.VITE_API_URL}/api/orders/my-orders`,
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
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

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Loading...
        </h1>

      </div>

    );
  }

  return (

    <section className="min-h-screen bg-[#F5F3F0] px-6 md:px-12 py-16">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-[#2B1408] mb-12">

          My Orders

        </h1>

        {/* NO ORDERS */}
        {orders.length === 0 && (

          <div className="bg-white p-10 rounded-3xl shadow text-center">

            <h2 className="text-3xl font-bold text-[#2B1408]">

              No Orders Found

            </h2>

          </div>

        )}

        {/* ORDERS */}
        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>

                  <h2 className="text-2xl font-bold text-[#2B1408]">

                    Order ID:
                  </h2>

                  <p className="text-gray-600 break-all">

                    {order._id}

                  </p>

                </div>

                <div className="flex flex-col gap-2">

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">

                    {order.orderStatus}

                  </span>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                    {order.paymentStatus}

                  </span>

                </div>

              </div>

              {/* PRODUCTS */}
              <div className="space-y-6">

                {order.products.map(
                  (item, index) => (

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

                        <h3 className="text-2xl font-bold text-[#2B1408]">

                          {item.name}

                        </h3>

                        <p className="text-gray-600 mt-2">

                          Quantity:
                          {" "}
                          {item.quantity}

                        </p>

                        <p className="text-[#9B4D0D] text-xl font-bold mt-2">

                          ₹{item.price}

                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

              {/* TOTAL */}
              <div className="flex justify-between items-center mt-8">

                <h2 className="text-3xl font-bold text-[#2B1408]">

                  Total

                </h2>

                <h2 className="text-3xl font-bold text-[#9B4D0D]">

                  ₹{order.totalAmount}

                </h2>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MyOrders;