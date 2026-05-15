import { useEffect, useState } from "react";

import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  // Fetch Orders
  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:8000/api/orders"
        );

        setOrders(data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchOrders();

  }, []);

  // Update Order Status
  const updateStatus = async (id, status) => {

    try {

      const { data } = await axios.put(
        `http://localhost:8000/api/orders/${id}`,
        {
          orderStatus: status,
        }
      );

      setOrders(
        orders.map((order) =>
          order._id === id
            ? data
            : order
        )
      );

      alert("Order Status Updated");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Orders
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-gray-100">

            <tr>

              <th className="py-4 px-4">
                Customer
              </th>

              <th className="py-4 px-4">
                Phone
              </th>

              <th className="py-4 px-4">
                Amount
              </th>

              <th className="py-4 px-4">
                Payment
              </th>

              <th className="py-4 px-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b hover:bg-gray-50"
              >

                {/* Customer */}
                <td className="py-4 px-4">
                  {order.customerName}
                </td>

                {/* Phone */}
                <td className="py-4 px-4">
                  {order.customerPhone}
                </td>

                {/* Amount */}
                <td className="py-4 px-4">
                  ₹{order.totalAmount}
                </td>

                {/* Payment Status */}
                <td className="py-4 px-4">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                    {order.paymentStatus}

                  </span>

                </td>

                {/* Order Status */}
                <td className="py-4 px-4">

                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      updateStatus(
                        order._id,
                        e.target.value
                      )
                    }
                    className="border p-2 rounded-lg outline-none"
                  >

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Orders;