

// import {
//   FaBox,
//   FaShoppingCart,
//   FaUsers,
//   FaRupeeSign,
// } from "react-icons/fa";

// import { useEffect, useState } from "react";

// import axios from "axios";

// const Dashboard = () => {

//   const [stats, setStats] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {

//     const fetchStats =
//       async () => {

//         try {

//           const token =
//             localStorage.getItem(
//               "token"
//             );

//  const { data } =
//   await axios.get(
//     `${import.meta.env.VITE_API_URL}/api/admin/stats`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//           setStats(data);

//         } catch (error) {

//           console.log(error);

//         } finally {

//           setLoading(false);

//         }
//       };

//     fetchStats();

//   }, []);

//   if (loading) {

//     return (

//       <h1 className="text-2xl font-bold">
//         Loading...
//       </h1>

//     );
//   }

//   const dashboardStats = [
//     {
//       title: "Total Products",
//       value:
//         stats.totalProducts,
//       icon: <FaBox />,
//     },

//     {
//       title: "Total Orders",
//       value:
//         stats.totalOrders,
//       icon:
//         <FaShoppingCart />,
//     },

//     {
//       title: "Total Users",
//       value:
//         stats.totalUsers,
//       icon: <FaUsers />,
//     },

//     {
//       title: "Revenue",
//       value:
//         `₹${stats.totalRevenue}`,
//       icon:
//         <FaRupeeSign />,
//     },
//   ];

//   return (

//     <div className="p-2">

//       {/* HEADING */}
//       <h1 className="text-3xl font-bold mb-8">

//         Dashboard

//       </h1>

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//         {dashboardStats.map(
//           (item, index) => (

//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
//             >

//               <div className="flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-sm">

//                     {item.title}

//                   </p>

//                   <h2 className="text-2xl font-bold mt-2">

//                     {item.value}

//                   </h2>

//                 </div>

//                 <div className="text-4xl text-yellow-500">

//                   {item.icon}

//                 </div>

//               </div>

//             </div>
//           )
//         )}

//       </div>

//       {/* LOW STOCK */}
//       <div className="mt-10 bg-white p-6 rounded-2xl shadow">

//         <h2 className="text-2xl font-semibold mb-6">

//           Low Stock Products

//         </h2>

//         {stats.lowStockProducts
//           ?.length === 0 ? (

//           <p>
//             No low stock products
//           </p>

//         ) : (

//           <div className="space-y-4">

//             {stats.lowStockProducts.map(
//               (product) => (

//                 <div
//                   key={product._id}
//                   className="flex justify-between border-b pb-3"
//                 >

//                   <p className="font-medium">

//                     {product.name}

//                   </p>

//                   <p className="text-red-500 font-bold">

//                     {product.stock}
//                     {" "}
//                     Left

//                   </p>

//                 </div>
//               )
//             )}

//           </div>
//         )}

//       </div>

//       {/* RECENT ORDERS */}
//       <div className="mt-10 bg-white p-6 rounded-2xl shadow">

//         <h2 className="text-2xl font-semibold mb-6">

//           Recent Orders

//         </h2>

//         <div className="overflow-x-auto">

//           <table className="w-full text-left">

//             <thead>

//               <tr className="border-b">

//                 <th className="py-3 font-semibold">

//                   Customer

//                 </th>

//                 <th className="py-3 font-semibold">

//                   Amount

//                 </th>

//                 <th className="py-3 font-semibold">

//                   Status

//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {stats.recentOrders.map(
//                 (order) => (

//                   <tr
//                     key={order._id}
//                     className="border-b hover:bg-gray-50"
//                   >

//                     <td className="py-4">

//                       {order.customerName}

//                     </td>

//                     <td>

//                       ₹
//                       {order.totalAmount}

//                     </td>

//                     <td
//                       className={`font-medium ${
//                         order.orderStatus ===
//                         "Delivered"

//                           ? "text-green-600"

//                           : order.orderStatus ===
//                             "Pending"

//                           ? "text-yellow-600"

//                           : "text-blue-600"
//                       }`}
//                     >

//                       {order.orderStatus}

//                     </td>

//                   </tr>
//                 )
//               )}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Dashboard;

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FETCH DASHBOARD STATS
  // =====================================================

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="animate-pulse">
          <div className="h-8 w-40 bg-gray-200 rounded mb-6" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-28 sm:h-32 bg-gray-200 rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="p-4 sm:p-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-500">
            Unable to load dashboard data.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // DASHBOARD CARDS
  // =====================================================

  const dashboardStats = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <FaBox />,
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <FaShoppingCart />,
    },
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers />,
    },
    {
      title: "Revenue",
      value: `₹${stats.totalRevenue}`,
      icon: <FaRupeeSign />,
    },
  ];

  return (
    <div className="w-full min-w-0 p-3 sm:p-5 lg:p-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-5 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Overview of your FarmHills store
        </p>
      </div>

      {/* =====================================================
          STAT CARDS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-3
          sm:gap-5
        "
      >
        {dashboardStats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              p-3
              sm:p-5
              lg:p-6

              rounded-2xl

              shadow-sm
              hover:shadow-md

              transition

              min-w-0
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-2
              "
            >
              {/* TEXT */}

              <div className="min-w-0">
                <p
                  className="
                    text-gray-500
                    text-[11px]
                    sm:text-sm
                    leading-tight
                  "
                >
                  {item.title}
                </p>

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl

                    font-bold

                    mt-1
                    sm:mt-2

                    truncate
                  "
                >
                  {item.value}
                </h2>
              </div>

              {/* ICON */}

              <div
                className="
                  shrink-0

                  w-9
                  h-9

                  sm:w-12
                  sm:h-12

                  lg:w-14
                  lg:h-14

                  rounded-full

                  bg-yellow-50

                  text-yellow-500

                  flex
                  items-center
                  justify-center

                  text-lg
                  sm:text-xl
                  lg:text-2xl
                "
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          LOW STOCK
      ====================================================== */}

      <div
        className="
          mt-5
          sm:mt-8
          lg:mt-10

          bg-white

          p-4
          sm:p-6

          rounded-2xl

          shadow-sm

          overflow-hidden
        "
      >
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <h2
            className="
              text-lg
              sm:text-2xl

              font-semibold

              text-gray-900
            "
          >
            Low Stock Products
          </h2>

          <span className="text-xs sm:text-sm text-gray-400">
            Inventory
          </span>
        </div>

        {stats.lowStockProducts?.length === 0 ? (
          <div
            className="
              py-6
              sm:py-8

              text-center

              text-sm
              sm:text-base

              text-gray-500
            "
          >
            No low stock products
          </div>
        ) : (
          <div className="space-y-3">
            {stats.lowStockProducts.map((product) => (
              <div
                key={product._id}
                className="
                  flex
                  items-center
                  justify-between

                  gap-3

                  border-b
                  border-gray-100

                  pb-3

                  last:border-b-0
                  last:pb-0
                "
              >
                <p
                  className="
                    font-medium

                    text-sm
                    sm:text-base

                    truncate
                    min-w-0
                  "
                >
                  {product.name}
                </p>

                <span
                  className="
                    shrink-0

                    bg-red-50
                    text-red-500

                    px-2
                    sm:px-3

                    py-1

                    rounded-full

                    text-xs
                    sm:text-sm

                    font-semibold
                  "
                >
                  {product.stock} Left
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          RECENT ORDERS
      ====================================================== */}

      <div
        className="
          mt-5
          sm:mt-8
          lg:mt-10

          bg-white

          p-4
          sm:p-6

          rounded-2xl

          shadow-sm

          overflow-hidden
        "
      >
        <h2
          className="
            text-lg
            sm:text-2xl

            font-semibold

            text-gray-900

            mb-4
            sm:mb-6
          "
        >
          Recent Orders
        </h2>

        {/* MOBILE HORIZONTAL SCROLL */}

        <div className="w-full overflow-x-auto">
          <table
            className="
              w-full
              min-w-[500px]

              text-left
            "
          >
            <thead>
              <tr className="border-b border-gray-200">
                <th
                  className="
                    py-3
                    pr-4

                    text-xs
                    sm:text-sm

                    font-semibold

                    text-gray-700
                  "
                >
                  Customer
                </th>

                <th
                  className="
                    py-3
                    px-4

                    text-xs
                    sm:text-sm

                    font-semibold

                    text-gray-700
                  "
                >
                  Amount
                </th>

                <th
                  className="
                    py-3
                    pl-4

                    text-xs
                    sm:text-sm

                    font-semibold

                    text-gray-700
                  "
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {stats.recentOrders?.map((order) => (
                <tr
                  key={order._id}
                  className="
                    border-b
                    border-gray-100

                    hover:bg-gray-50

                    transition
                  "
                >
                  {/* CUSTOMER */}

                  <td
                    className="
                      py-3
                      sm:py-4

                      pr-4

                      text-sm
                      sm:text-base

                      font-medium

                      max-w-[180px]

                      truncate
                    "
                  >
                    {order.customerName}
                  </td>

                  {/* AMOUNT */}

                  <td
                    className="
                      py-3
                      sm:py-4

                      px-4

                      text-sm
                      sm:text-base

                      whitespace-nowrap
                    "
                  >
                    ₹{order.totalAmount}
                  </td>

                  {/* STATUS */}

                  <td
                    className={`
                      py-3
                      sm:py-4

                      pl-4

                      text-sm
                      sm:text-base

                      font-medium

                      whitespace-nowrap

                      ${
                        order.orderStatus === "Delivered"
                          ? "text-green-600"
                          : order.orderStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }
                    `}
                  >
                    {order.orderStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {(!stats.recentOrders ||
          stats.recentOrders.length === 0) && (
          <div className="py-8 text-center text-sm text-gray-500">
            No recent orders
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;