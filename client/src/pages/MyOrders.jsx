// import React, {
//   useEffect,
//   useState,
// } from "react";

// import axios from "axios";

// function MyOrders() {

//   const [orders, setOrders] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   // FETCH ORDERS
//   useEffect(() => {

//     const fetchOrders =
//       async () => {

//         try {

//           const token =
//             localStorage.getItem(
//               "token"
//             );

//           const { data } =
//             await axios.get(
//               `${import.meta.env.VITE_API_URL}/api/orders/my-orders`,
//               {
//                 headers: {
//                   Authorization:
//                     `Bearer ${token}`,
//                 },
//               }
//             );

//           setOrders(data);

//           setLoading(false);

//         } catch (error) {

//           console.log(error);

//           setLoading(false);

//         }
//       };

//     fetchOrders();

//   }, []);

//   // LOADING
//   if (loading) {

//     return (

//       <div className="min-h-screen flex items-center justify-center">

//         <h1 className="text-3xl font-bold">
//           Loading...
//         </h1>

//       </div>

//     );
//   }

//   return (

//     <section className="min-h-screen bg-[#F5F3F0] px-6 md:px-12 py-16">

//       <div className="max-w-6xl mx-auto">

//         {/* TITLE */}
//         <h1 className="text-5xl font-bold text-[#2B1408] mb-12">

//           My Orders

//         </h1>

//         {/* NO ORDERS */}
//         {orders.length === 0 && (

//           <div className="bg-white p-10 rounded-3xl shadow text-center">

//             <h2 className="text-3xl font-bold text-[#2B1408]">

//               No Orders Found

//             </h2>

//           </div>

//         )}

//         {/* ORDERS */}
//         <div className="space-y-8">

//           {orders.map((order) => (

//             <div
//               key={order._id}
//               className="bg-white rounded-3xl shadow-lg p-8"
//             >

//               {/* TOP */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

//                 <div>

//                   <h2 className="text-2xl font-bold text-[#2B1408]">

//                     Order ID:
//                   </h2>

//                   <p className="text-gray-600 break-all">

//                     {order._id}

//                   </p>

//                 </div>

//                 <div className="flex flex-col gap-2">

//                   <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">

//                     {order.orderStatus}

//                   </span>

//                   <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

//                     {order.paymentStatus}

//                   </span>

//                 </div>

//               </div>

//               {/* PRODUCTS */}
//               <div className="space-y-6">

//                 {order.products.map(
//                   (item, index) => (

//                     <div
//                       key={index}
//                       className="flex items-center gap-6 border-b pb-6"
//                     >

//                       {/* IMAGE */}
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-24 h-24 object-cover rounded-2xl"
//                       />

//                       {/* INFO */}
//                       <div className="flex-1">

//                         <h3 className="text-2xl font-bold text-[#2B1408]">

//                           {item.name}

//                         </h3>

//                         <p className="text-gray-600 mt-2">

//                           Quantity:
//                           {" "}
//                           {item.quantity}

//                         </p>

//                         <p className="text-[#9B4D0D] text-xl font-bold mt-2">

//                           ₹{item.price}

//                         </p>

//                       </div>

//                     </div>

//                   )
//                 )}

//               </div>

//               {/* TOTAL */}
//               <div className="flex justify-between items-center mt-8">

//                 <h2 className="text-3xl font-bold text-[#2B1408]">

//                   Total

//                 </h2>

//                 <h2 className="text-3xl font-bold text-[#9B4D0D]">

//                   ₹{order.totalAmount}

//                 </h2>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default MyOrders;



import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Package,
  CheckCircle,
  CreditCard,
  CalendarDays,
  MapPin,
  RefreshCw,
} from "lucide-react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  // =====================================================
  // FETCH ORDERS
  // =====================================================

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/orders/my-orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setOrders(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <section
        className="
          min-h-screen
          bg-[#F5F3F0]

          flex
          items-center
          justify-center

          px-4
        "
      >
        <div className="text-center">

          <div
            className="
              w-12
              h-12

              border-4
              border-[#E7D3B8]
              border-t-[#9B4D0D]

              rounded-full

              animate-spin

              mx-auto
            "
          />

          <p
            className="
              text-[#7B6252]

              mt-4

              text-sm
              sm:text-base
            "
          >
            Loading your orders...
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      className="
        min-h-screen

        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-10
        lg:px-12

        py-10
        sm:py-14
        md:py-16
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="mb-8 sm:mb-10">

          <p
            className="
              uppercase

              tracking-[3px]

              text-[#9B4D0D]

              text-xs
              sm:text-sm

              font-semibold
            "
          >
            Your Purchases
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              text-[#2B1408]

              mt-2
            "
          >
            My Orders
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base

              mt-2
            "
          >
            Track and view your FarmHills orders.
          </p>

        </div>

        {/* =================================================
            NO ORDERS
        ================================================= */}

        {orders.length === 0 && (
          <div
            className="
              bg-white

              border
              border-[#E7D3B8]

              rounded-[26px]
              sm:rounded-[32px]

              shadow-lg

              p-8
              sm:p-12

              text-center
            "
          >

            <div
              className="
                w-16
                h-16

                mx-auto

                rounded-full

                bg-[#EFE2C8]

                text-[#9B4D0D]

                flex
                items-center
                justify-center
              "
            >
              <Package size={30} />
            </div>

            <h2
              className="
                text-2xl
                sm:text-3xl

                font-bold

                text-[#2B1408]

                mt-5
              "
            >
              No Orders Found
            </h2>

            <p
              className="
                text-[#7B6252]

                text-sm
                sm:text-base

                mt-2
              "
            >
              You haven't placed any orders yet.
            </p>

          </div>
        )}

        {/* =================================================
            ORDERS
        ================================================= */}

        <div className="space-y-6 sm:space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="
                bg-white

                rounded-[24px]
                sm:rounded-[30px]

                border
                border-[#E7D3B8]

                shadow-[0_8px_30px_rgba(91,51,20,0.08)]

                overflow-hidden
              "
            >

              {/* =================================================
                  ORDER HEADER
              ================================================= */}

              <div
                className="
                  bg-[#FFFCF8]

                  px-5
                  sm:px-7
                  md:px-8

                  py-5
                  sm:py-6

                  border-b
                  border-[#E7D3B8]
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row

                    sm:items-center
                    sm:justify-between

                    gap-4
                  "
                >

                  {/* ORDER ID */}

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Package
                        size={19}
                        className="text-[#9B4D0D]"
                      />

                      <h2
                        className="
                          text-base
                          sm:text-lg

                          font-bold

                          text-[#2B1408]
                        "
                      >
                        Order
                      </h2>
                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm

                        text-[#7B6252]

                        mt-1

                        break-all
                      "
                    >
                      #{order._id}
                    </p>

                  </div>

                  {/* STATUS */}

                  <div
                    className="
                      flex
                      flex-wrap

                      gap-2
                    "
                  >

                    <span
                      className="
                        bg-[#FFF3D6]

                        text-[#9B4D0D]

                        px-3
                        py-1.5

                        rounded-full

                        text-xs
                        sm:text-sm

                        font-semibold
                      "
                    >
                      {order.orderStatus}
                    </span>

                    <span
                      className="
                        bg-green-100

                        text-green-700

                        px-3
                        py-1.5

                        rounded-full

                        text-xs
                        sm:text-sm

                        font-semibold

                        flex
                        items-center
                        gap-1
                      "
                    >
                      <CheckCircle size={14} />

                      {order.paymentStatus}
                    </span>

                  </div>

                </div>

              </div>

              {/* =================================================
                  PRODUCTS
              ================================================= */}

              <div
                className="
                  px-5
                  sm:px-7
                  md:px-8

                  py-5
                  sm:py-6
                "
              >

                <div className="space-y-4">

                  {order.products.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="
                          flex

                          gap-4

                          pb-4

                          border-b
                          border-[#EEE4D8]

                          last:border-b-0
                          last:pb-0
                        "
                      >

                        {/* IMAGE */}

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-20
                            h-20

                            sm:w-24
                            sm:h-24

                            object-cover

                            rounded-xl
                            sm:rounded-2xl

                            bg-[#F5F3F0]

                            flex-shrink-0
                          "
                        />

                        {/* PRODUCT INFO */}

                        <div className="flex-1 min-w-0">

                          <h3
                            className="
                              text-base
                              sm:text-lg
                              md:text-xl

                              font-bold

                              text-[#2B1408]

                              line-clamp-2
                            "
                          >
                            {item.name}
                          </h3>

                          <p
                            className="
                              text-[#7B6252]

                              text-xs
                              sm:text-sm

                              mt-1
                            "
                          >
                            Quantity: {item.quantity}
                          </p>

                          <p
                            className="
                              text-[#9B4D0D]

                              text-base
                              sm:text-lg

                              font-bold

                              mt-2
                            "
                          >
                            ₹{item.price}
                          </p>

                        </div>

                      </div>
                    ),
                  )}

                </div>

                {/* =================================================
                    ORDER DETAILS
                ================================================= */}

                <div
                  className="
                    grid

                    grid-cols-1
                    sm:grid-cols-2

                    gap-3

                    mt-6
                  "
                >

                  {/* PAYMENT */}

                  <div
                    className="
                      bg-[#F7F3EE]

                      rounded-xl

                      p-3
                      sm:p-4

                      flex
                      items-center

                      gap-3
                    "
                  >

                    <CreditCard
                      size={20}
                      className="text-[#9B4D0D]"
                    />

                    <div>

                      <p
                        className="
                          text-xs

                          text-[#7B6252]
                        "
                      >
                        Payment Method
                      </p>

                      <p
                        className="
                          text-sm

                          font-semibold

                          text-[#2B1408]

                          mt-0.5
                        "
                      >
                        {order.paymentMethod}
                      </p>

                    </div>

                  </div>

                  {/* DATE */}

                  <div
                    className="
                      bg-[#F7F3EE]

                      rounded-xl

                      p-3
                      sm:p-4

                      flex
                      items-center

                      gap-3
                    "
                  >

                    <CalendarDays
                      size={20}
                      className="text-[#9B4D0D]"
                    />

                    <div>

                      <p
                        className="
                          text-xs

                          text-[#7B6252]
                        "
                      >
                        Order Date
                      </p>

                      <p
                        className="
                          text-sm

                          font-semibold

                          text-[#2B1408]

                          mt-0.5
                        "
                      >
                        {new Date(
                          order.createdAt,
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    TOTAL
                ================================================= */}

                <div
                  className="
                    mt-6

                    pt-5

                    border-t
                    border-[#E7D3B8]

                    flex
                    items-center
                    justify-between

                    gap-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        sm:text-sm

                        text-[#7B6252]
                      "
                    >
                      Total Amount
                    </p>

                    <h2
                      className="
                        text-2xl
                        sm:text-3xl

                        font-bold

                        text-[#9B4D0D]

                        mt-1
                      "
                    >
                      ₹{order.totalAmount}
                    </h2>

                  </div>

                  <div
                    className="
                      hidden
                      sm:flex

                      items-center
                      gap-2

                      text-sm

                      text-green-600

                      font-medium
                    "
                  >
                    <CheckCircle size={17} />

                    Order Placed
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default MyOrders;