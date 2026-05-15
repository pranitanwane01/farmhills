import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: 120,
      icon: <FaBox />,
    },
    {
      title: "Total Orders",
      value: 45,
      icon: <FaShoppingCart />,
    },
    {
      title: "Total Users",
      value: 18,
      icon: <FaUsers />,
    },
    {
      title: "Revenue",
      value: "₹55,000",
      icon: <FaRupeeSign />,
    },
  ];

  return (
    <div className="p-2">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (
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
        ))}

      </div>

      {/* Recent Orders Section */}
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

              <tr className="border-b hover:bg-gray-50">

                <td className="py-4">
                  Rahul Sharma
                </td>

                <td>
                  ₹1200
                </td>

                <td className="text-green-600 font-medium">
                  Delivered
                </td>

              </tr>

              <tr className="border-b hover:bg-gray-50">

                <td className="py-4">
                  Aman Verma
                </td>

                <td>
                  ₹850
                </td>

                <td className="text-yellow-600 font-medium">
                  Pending
                </td>

              </tr>

              <tr className="border-b hover:bg-gray-50">

                <td className="py-4">
                  Sneha Patel
                </td>

                <td>
                  ₹2200
                </td>

                <td className="text-blue-600 font-medium">
                  Shipped
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;