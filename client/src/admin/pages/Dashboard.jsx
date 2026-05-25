

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import axios from "axios";

const Dashboard = () => {

  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

 const { data } =
  await axios.get(
    `${import.meta.env.VITE_API_URL}/api/admin/stats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

          setStats(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }
      };

    fetchStats();

  }, []);

  if (loading) {

    return (

      <h1 className="text-2xl font-bold">
        Loading...
      </h1>

    );
  }

  const dashboardStats = [
    {
      title: "Total Products",
      value:
        stats.totalProducts,
      icon: <FaBox />,
    },

    {
      title: "Total Orders",
      value:
        stats.totalOrders,
      icon:
        <FaShoppingCart />,
    },

    {
      title: "Total Users",
      value:
        stats.totalUsers,
      icon: <FaUsers />,
    },

    {
      title: "Revenue",
      value:
        `₹${stats.totalRevenue}`,
      icon:
        <FaRupeeSign />,
    },
  ];

  return (

    <div className="p-2">

      {/* HEADING */}
      <h1 className="text-3xl font-bold mb-8">

        Dashboard

      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {dashboardStats.map(
          (item, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-sm">

                    {item.title}

                  </p>

                  <h2 className="text-2xl font-bold mt-2">

                    {item.value}

                  </h2>

                </div>

                <div className="text-4xl text-yellow-500">

                  {item.icon}

                </div>

              </div>

            </div>
          )
        )}

      </div>

      {/* LOW STOCK */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6">

          Low Stock Products

        </h2>

        {stats.lowStockProducts
          ?.length === 0 ? (

          <p>
            No low stock products
          </p>

        ) : (

          <div className="space-y-4">

            {stats.lowStockProducts.map(
              (product) => (

                <div
                  key={product._id}
                  className="flex justify-between border-b pb-3"
                >

                  <p className="font-medium">

                    {product.name}

                  </p>

                  <p className="text-red-500 font-bold">

                    {product.stock}
                    {" "}
                    Left

                  </p>

                </div>
              )
            )}

          </div>
        )}

      </div>

      {/* RECENT ORDERS */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6">

          Recent Orders

        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b">

                <th className="py-3 font-semibold">

                  Customer

                </th>

                <th className="py-3 font-semibold">

                  Amount

                </th>

                <th className="py-3 font-semibold">

                  Status

                </th>

              </tr>

            </thead>

            <tbody>

              {stats.recentOrders.map(
                (order) => (

                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">

                      {order.customerName}

                    </td>

                    <td>

                      ₹
                      {order.totalAmount}

                    </td>

                    <td
                      className={`font-medium ${
                        order.orderStatus ===
                        "Delivered"

                          ? "text-green-600"

                          : order.orderStatus ===
                            "Pending"

                          ? "text-yellow-600"

                          : "text-blue-600"
                      }`}
                    >

                      {order.orderStatus}

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;