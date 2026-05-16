// import { useState, useContext } from "react";

// import axios from "axios";

// import { useNavigate } from "react-router-dom";

// import { CartContext } from "../context/CartContext";

// const Checkout = () => {
//   const navigate = useNavigate();

//   const { cartItems, clearCart } = useContext(CartContext);

//   // TOTAL AMOUNT
//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   );

//   // FORM STATE
//   const [formData, setFormData] = useState({
//     customerName: "",
//     customerPhone: "",
//     shippingAddress: "",
//     paymentMethod: "COD",
//   });

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // PLACE ORDER
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     // ORDER DATA
//   //     const orderData = {
//   //       ...formData,

//   //       products: cartItems.map((item) => ({
//   //         productId: item._id,
//   //         name: item.name,
//   //         quantity: item.quantity,
//   //         price: item.price,
//   //         image: item.image,
//   //       })),

//   //       totalAmount,
//   //     };

//   //     // GET TOKEN
//   //     const token = localStorage.getItem("token");

//   //     // CREATE ORDER
//   //     await axios.post("http://localhost:8000/api/orders", orderData, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     // CLEAR CART
//   //     clearCart();

//   //     alert("Order Placed Successfully");

//   //     navigate("/order-success");
//   //   } catch (error) {
//   //     console.log(error);

//   //     alert(error.response?.data?.message || "Something went wrong");
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // TOKEN
//       const token = localStorage.getItem("token");

//       // ORDER DATA
//       const orderData = {
//         ...formData,

//         products: cartItems.map((item) => ({
//           productId: item._id,
//           name: item.name,
//           quantity: item.quantity,
//           price: item.price,
//           image: item.image,
//         })),

//         totalAmount,
//       };

//       // CASH ON DELIVERY
//       if (formData.paymentMethod === "COD") {
//         await axios.post("http://localhost:8000/api/orders", orderData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         clearCart();

//         alert("Order Placed Successfully");

//         navigate("/order-success");

//         return;
//       }

//       // ONLINE PAYMENT
//       const { data } = await axios.post(
//         "http://localhost:8000/api/payment/create-order",
//         {
//           amount: totalAmount,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       const options = {
//         key: "rzp_test_SpxD091lN1bCJf",

//         amount: data.amount,

//         currency: data.currency,

//         name: "Farm Hills",

//         description: "Order Payment",

//         order_id: data.id,

//         handler: async function (response) {
//           // SAVE ORDER
//           await axios.post(
//             "http://localhost:8000/api/orders",
//             {
//               ...orderData,
//               paymentStatus: "Paid",
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             },
//           );

//           clearCart();

//           alert("Payment Successful");

//           navigate("/order-success");
//         },

//         theme: {
//           color: "#9B4D0D",
//         },
//       };

//       if (!window.Razorpay) {
//         alert("Razorpay SDK failed to load");

//         return;
//       }

//       const razorpay = new window.Razorpay(options);

//       razorpay.open();
//     } catch (error) {
//       console.log(error);

//       alert(error.response?.data?.message || "Payment Failed");
//     }
//   };
//   // EMPTY CART
//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Your Cart Is Empty</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* CHECKOUT FORM */}
//         <div className="bg-white p-8 rounded-2xl shadow">
//           <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* NAME */}
//             <div>
//               <label className="block mb-2 font-medium">Full Name</label>

//               <input
//                 type="text"
//                 name="customerName"
//                 value={formData.customerName}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full border p-3 rounded-xl outline-none"
//                 required
//               />
//             </div>

//             {/* PHONE */}
//             <div>
//               <label className="block mb-2 font-medium">Phone Number</label>

//               <input
//                 type="text"
//                 name="customerPhone"
//                 value={formData.customerPhone}
//                 onChange={handleChange}
//                 placeholder="Enter phone number"
//                 className="w-full border p-3 rounded-xl outline-none"
//                 required
//               />
//             </div>

//             {/* ADDRESS */}
//             <div>
//               <label className="block mb-2 font-medium">Shipping Address</label>

//               <textarea
//                 rows="5"
//                 name="shippingAddress"
//                 value={formData.shippingAddress}
//                 onChange={handleChange}
//                 placeholder="Enter shipping address"
//                 className="w-full border p-3 rounded-xl outline-none"
//                 required
//               />
//             </div>

//             {/* PAYMENT */}
//             <div>
//               <label className="block mb-2 font-medium">Payment Method</label>

//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded-xl outline-none"
//               >
//                 <option value="COD">Cash On Delivery</option>

//                 <option value="Online">Online Payment</option>
//               </select>
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg"
//             >
//               Place Order
//             </button>
//           </form>
//         </div>

//         {/* ORDER SUMMARY */}
//         <div className="bg-white p-8 rounded-2xl shadow h-fit">
//           <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

//           <div className="space-y-5">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center gap-4 border-b pb-4"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />

//                 <div className="flex-1">
//                   <h3 className="font-semibold">{item.name}</h3>

//                   <p>Quantity: {item.quantity}</p>

//                   <p>₹{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TOTAL */}
//           <div className="mt-6 border-t pt-6">
//             <div className="flex justify-between text-xl font-bold">
//               <span>Total</span>

//               <span>₹{totalAmount}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import { useState, useContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Checkout = () => {

  const navigate = useNavigate();

  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  // TOTAL AMOUNT
  const totalAmount =
    cartItems.reduce(

      (acc, item) =>

        acc +
        item.price *
          item.quantity,

      0
    );

  // FORM STATE
  const [formData, setFormData] =
    useState({
      customerName: "",
      customerPhone: "",
      shippingAddress: "",
      paymentMethod: "COD",
    });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // PLACE ORDER
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        // GET USER
        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        // GET TOKEN
        const token =
          user?.token;

        if (!token) {

          alert(
            "Please login first"
          );

          navigate("/login");

          return;
        }

        // ORDER DATA
        const orderData = {
          ...formData,

          products:
            cartItems.map(
              (item) => ({
                productId:
                  item._id,

                name:
                  item.name,

                quantity:
                  item.quantity,

                price:
                  item.price,

                image:
                  item.image,
              })
            ),

          totalAmount,
        };

        // CASH ON DELIVERY
        if (
          formData.paymentMethod ===
          "COD"
        ) {

          await axios.post(
            "http://localhost:8000/api/orders",

            orderData,

            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          clearCart();

          alert(
            "Order Placed Successfully"
          );

          navigate(
            "/order-success"
          );

          return;
        }

        // ONLINE PAYMENT
        const { data } =
          await axios.post(

            "http://localhost:8000/api/payment/create-order",

            {
              amount:
                totalAmount,
            },

            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const options = {

          key:
            "rzp_test_SpxD091lN1bCJf",

          amount:
            data.amount,

          currency:
            data.currency,

          name:
            "Farm Hills",

          description:
            "Order Payment",

          order_id:
            data.id,

          handler:
            async function (
              response
            ) {

              // SAVE ORDER
              await axios.post(

                "http://localhost:8000/api/orders",

                {
                  ...orderData,

                  paymentStatus:
                    "Paid",
                },

                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              clearCart();

              alert(
                "Payment Successful"
              );

              navigate(
                "/order-success"
              );
            },

          theme: {
            color:
              "#9B4D0D",
          },
        };

        // CHECK RAZORPAY
        if (
          !window.Razorpay
        ) {

          alert(
            "Razorpay SDK failed to load"
          );

          return;
        }

        const razorpay =
          new window.Razorpay(
            options
          );

        razorpay.open();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Payment Failed"
        );
      }
    };

  // EMPTY CART
  if (
    cartItems.length === 0
  ) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Your Cart Is Empty
        </h1>

      </div>
    );
  }

  return (

    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* CHECKOUT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Shipping Details
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-5"
          >

            {/* NAME */}
            <div>

              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="customerName"
                value={
                  formData.customerName
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your name"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="customerPhone"
                value={
                  formData.customerPhone
                }
                onChange={
                  handleChange
                }
                placeholder="Enter phone number"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* ADDRESS */}
            <div>

              <label className="block mb-2 font-medium">
                Shipping Address
              </label>

              <textarea
                rows="5"
                name="shippingAddress"
                value={
                  formData.shippingAddress
                }
                onChange={
                  handleChange
                }
                placeholder="Enter shipping address"
                className="w-full border p-3 rounded-xl outline-none"
                required
              />

            </div>

            {/* PAYMENT */}
            <div>

              <label className="block mb-2 font-medium">
                Payment Method
              </label>

              <select
                name="paymentMethod"
                value={
                  formData.paymentMethod
                }
                onChange={
                  handleChange
                }
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

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow h-fit">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cartItems.map(
              (item) => (

                <div
                  key={item._id}
                  className="flex items-center gap-4 border-b pb-4"
                >

                  <img
                    src={
                      item.image
                    }
                    alt={
                      item.name
                    }
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p>
                      Quantity:
                      {" "}
                      {
                        item.quantity
                      }
                    </p>

                    <p>
                      ₹
                      {
                        item.price
                      }
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

          {/* TOTAL */}
          <div className="mt-6 border-t pt-6">

            <div className="flex justify-between text-xl font-bold">

              <span>
                Total
              </span>

              <span>
                ₹
                {
                  totalAmount
                }
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;