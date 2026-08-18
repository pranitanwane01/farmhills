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
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // GET USER
//       const user = JSON.parse(localStorage.getItem("user"));

//       // GET TOKEN
//       const token = user?.token;

//       if (!token) {
//         alert("Please login first");

//         navigate("/login");

//         return;
//       }

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
//         await axios.post(
//           `${import.meta.env.VITE_API_URL}/api/orders`,

//           orderData,

//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         clearCart();

//         alert("Order Placed Successfully");

//         navigate("/order-success");

//         return;
//       }

//       // ONLINE PAYMENT
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/payment/create-order`,

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
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,

//         amount: data.amount,

//         currency: data.currency,

//         name: "Farm Hills",

//         description: "Order Payment",

//         order_id: data.id,

  
//         handler:
//         async function(response) {
//           try {
//             // VERIFY PAYMENT
//             const verifyRes = await axios.post(
//               `${import.meta.env.VITE_API_URL}/api/payment/verify-payment`,

//               {
//                 razorpay_order_id: response.razorpay_order_id,

//                 razorpay_payment_id: response.razorpay_payment_id,

//                 razorpay_signature: response.razorpay_signature,
//               },
//             );

//             // IF VERIFIED
//             if (verifyRes.data.success) {
//               console.log("PAYMENT VERIFIED");

//               console.log(orderData);

//               console.log(token);

//               // SAVE ORDER
//               const savedOrder = await axios.post(
//                 `${import.meta.env.VITE_API_URL}/api/orders`,

//                 {
//                   ...orderData,

//                   paymentStatus: "Paid",

//                   paymentId: response.razorpay_payment_id,
//                 },

//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                   },
//                 },
//               );

//               console.log(savedOrder);

//               clearCart();

//               alert("Payment Successful");

//               navigate("/order-success");
//             } else {
//               alert("Payment Verification Failed");
//             }
//           } catch (error) {
//             console.log(error);

//             alert("Payment Failed");
//           }
//         },

//         theme: {
//           color: "#9B4D0D",
//         },
//       };

//       // CHECK RAZORPAY
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





// import { useState, useContext } from "react";

// import axios from "axios";

// import { useNavigate } from "react-router-dom";

// import { CartContext } from "../context/CartContext";

// const Checkout = () => {
//   const navigate = useNavigate();

//   const { cartItems, clearCart } = useContext(CartContext);

//   // ==========================================
//   // TOTAL AMOUNT
//   // ==========================================

//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   );

//   // ==========================================
//   // FORM STATE
//   // ==========================================

//   const [formData, setFormData] = useState({
//     customerName: "",
//     customerPhone: "",
//     shippingAddress: "",
//     paymentMethod: "COD",
//   });

//   // ==========================================
//   // HANDLE INPUT CHANGE
//   // ==========================================

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ==========================================
//   // PLACE ORDER
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // ==========================================
//       // GET LOGGED-IN USER
//       // ==========================================

//       const user = JSON.parse(
//         localStorage.getItem("user"),
//       );

//       const token = user?.token;

//       if (!token) {
//         alert("Please login first");

//         navigate("/login");

//         return;
//       }

//       // ==========================================
//       // ORDER DATA
//       // ==========================================

//       const orderData = {
//         customerName: formData.customerName,

//         customerPhone: formData.customerPhone,

//         shippingAddress: formData.shippingAddress,

//         paymentMethod: formData.paymentMethod,

//         products: cartItems.map((item) => ({
//           productId: item._id,

//           name: item.name,

//           quantity: item.quantity,

//           price: item.price,

//           image: item.image,
//         })),

//         totalAmount: totalAmount,
//       };

//       // ==========================================
//       // CASH ON DELIVERY
//       // ==========================================

//       if (formData.paymentMethod === "COD") {
//         await axios.post(
//           `${import.meta.env.VITE_API_URL}/api/orders`,
//           orderData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         clearCart();

//         alert("Order Placed Successfully");

//         navigate("/order-success");

//         return;
//       }

//       // ==========================================
//       // ONLINE PAYMENT
//       // ==========================================

//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
//         {
//           amount: totalAmount,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       // ==========================================
//       // CHECK BACKEND RESPONSE
//       // ==========================================

//       if (!data.success) {
//         alert(
//           data.message ||
//             "Unable to create Razorpay order",
//         );

//         return;
//       }

//       // ==========================================
//       // RAZORPAY OPTIONS
//       // ==========================================

//       const options = {
//         // Razorpay Key ID from client/.env
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,

//         // Amount returned by Razorpay
//         amount: data.amount,

//         currency: data.currency,

//         name: "FarmHills",

//         description: "FarmHills Order Payment",

//         // Razorpay order ID
//         order_id: data.id,

//         // ========================================
//         // CUSTOMER DETAILS
//         // ========================================

//         prefill: {
//           name: formData.customerName,

//           contact: formData.customerPhone,

//           email: user?.email || "",
//         },

//         // ========================================
//         // PAYMENT SUCCESS
//         // ========================================

//         handler: async function (response) {
//           try {
//             console.log(
//               "Razorpay Response:",
//               response,
//             );

//             // ======================================
//             // VERIFY PAYMENT
//             // ======================================

//             const verifyRes = await axios.post(
//               `${import.meta.env.VITE_API_URL}/api/payment/verify-payment`,

//               {
//                 razorpay_order_id:
//                   response.razorpay_order_id,

//                 razorpay_payment_id:
//                   response.razorpay_payment_id,

//                 razorpay_signature:
//                   response.razorpay_signature,
//               },

//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               },
//             );

//             // ======================================
//             // PAYMENT VERIFIED
//             // ======================================

//             if (verifyRes.data.success) {
//               console.log(
//                 "PAYMENT VERIFIED SUCCESSFULLY",
//               );

//               // ====================================
//               // SAVE ORDER IN DATABASE
//               // ====================================

//               await axios.post(
//                 `${import.meta.env.VITE_API_URL}/api/orders`,

//                 {
//                   ...orderData,

//                   paymentMethod: "Online",

//                   paymentStatus: "Paid",

//                   paymentId:
//                     response.razorpay_payment_id,

//                   razorpayOrderId:
//                     response.razorpay_order_id,
//                 },

//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                   },
//                 },
//               );

//               // ====================================
//               // CLEAR CART
//               // ====================================

//               clearCart();

//               // ====================================
//               // SUCCESS
//               // ====================================

//               alert("Payment Successful!");

//               navigate("/order-success");
//             } else {
//               alert(
//                 "Payment Verification Failed",
//               );
//             }
//           } catch (error) {
//             console.error(
//               "Payment verification error:",
//               error,
//             );

//             alert(
//               error.response?.data?.message ||
//                 "Payment verification failed",
//             );
//           }
//         },

//         // ========================================
//         // PAYMENT FAILED
//         // ========================================

//         theme: {
//           color: "#9B4D0D",
//         },

//         // ========================================
//         // MODAL CLOSED
//         // ========================================

//         modal: {
//           ondismiss: function () {
//             console.log(
//               "Razorpay payment window closed",
//             );
//           },
//         },
//       };

//       // ==========================================
//       // CHECK RAZORPAY SDK
//       // ==========================================

//       if (!window.Razorpay) {
//         alert(
//           "Razorpay SDK failed to load. Please refresh the page.",
//         );

//         return;
//       }

//       // ==========================================
//       // OPEN RAZORPAY
//       // ==========================================

//       const razorpay =
//         new window.Razorpay(options);

//       // ==========================================
//       // PAYMENT FAILED EVENT
//       // ==========================================

//       razorpay.on(
//         "payment.failed",
//         function (response) {
//           console.error(
//             "Payment failed:",
//             response.error,
//           );

//           alert(
//             response.error?.description ||
//               "Payment failed",
//           );
//         },
//       );

//       razorpay.open();
//     } catch (error) {
//       console.error(
//         "Checkout error:",
//         error,
//       );

//       alert(
//         error.response?.data?.message ||
//           "Payment Failed",
//       );
//     }
//   };

//   // ==========================================
//   // EMPTY CART
//   // ==========================================

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">
//           Your Cart Is Empty
//         </h1>
//       </div>
//     );
//   }

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <div className="max-w-6xl mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-8">
//         Checkout
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* ======================================
//             CHECKOUT FORM
//         ====================================== */}

//         <div className="bg-white p-8 rounded-2xl shadow">
//           <h2 className="text-2xl font-semibold mb-6">
//             Shipping Details
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-5"
//           >

//             {/* NAME */}

//             <div>
//               <label className="block mb-2 font-medium">
//                 Full Name
//               </label>

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
//               <label className="block mb-2 font-medium">
//                 Phone Number
//               </label>

//               <input
//                 type="tel"
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
//               <label className="block mb-2 font-medium">
//                 Shipping Address
//               </label>

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
//               <label className="block mb-2 font-medium">
//                 Payment Method
//               </label>

//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded-xl outline-none"
//               >
//                 <option value="COD">
//                   Cash On Delivery
//                 </option>

//                 <option value="Online">
//                   Online Payment
//                 </option>
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

//         {/* ======================================
//             ORDER SUMMARY
//         ====================================== */}

//         <div className="bg-white p-8 rounded-2xl shadow h-fit">

//           <h2 className="text-2xl font-semibold mb-6">
//             Order Summary
//           </h2>

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

//                   <h3 className="font-semibold">
//                     {item.name}
//                   </h3>

//                   <p>
//                     Quantity: {item.quantity}
//                   </p>

//                   <p>
//                     ₹{item.price}
//                   </p>

//                 </div>
//               </div>
//             ))}

//           </div>

//           {/* TOTAL */}

//           <div className="mt-6 border-t pt-6">

//             <div className="flex justify-between text-xl font-bold">

//               <span>
//                 Total
//               </span>

//               <span>
//                 ₹{totalAmount}
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Checkout;



import React, { useState, useContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
  User,
  Phone,
  MapPin,
  CreditCard,
  ShoppingBag,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, clearCart } = useContext(CartContext);

  // =====================================================
  // TOTAL AMOUNT
  // =====================================================

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    shippingAddress: "",
    paymentMethod: "COD",
  });

  // =====================================================
  // LOADING STATE
  // =====================================================

  const [isLoading, setIsLoading] = useState(false);

  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // PLACE ORDER
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    try {
      setIsLoading(true);

      // =================================================
      // GET LOGGED-IN USER
      // =================================================

      const user = JSON.parse(
        localStorage.getItem("user"),
      );

      const token = user?.token;

      if (!token) {
        alert("Please login first");

        navigate("/login");

        return;
      }

      // =================================================
      // BASIC PHONE VALIDATION
      // =================================================

      const phone = formData.customerPhone.replace(
        /\D/g,
        "",
      );

      if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");

        return;
      }

      // =================================================
      // ORDER DATA
      // =================================================

      const orderData = {
        customerName: formData.customerName.trim(),

        customerPhone: phone,

        shippingAddress:
          formData.shippingAddress.trim(),

        paymentMethod: formData.paymentMethod,

        products: cartItems.map((item) => ({
          productId: item._id,

          name: item.name,

          quantity: item.quantity,

          price: item.price,

          image: item.image,
        })),

        totalAmount,
      };

      // =================================================
      // CASH ON DELIVERY
      // =================================================

      if (formData.paymentMethod === "COD") {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/orders`,
          orderData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        clearCart();

        alert("Order Placed Successfully!");

        navigate("/order-success");

        return;
      }

      // =================================================
      // CREATE RAZORPAY ORDER
      // =================================================

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
        {
          amount: totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!data.success) {
        alert(
          data.message ||
            "Unable to create Razorpay order",
        );

        return;
      }

      // =================================================
      // RAZORPAY OPTIONS
      // =================================================

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.amount,

        currency: data.currency,

        name: "FarmHills",

        description: "FarmHills Order Payment",

        order_id: data.id,

        // CUSTOMER DETAILS

        prefill: {
          name: formData.customerName,

          contact: phone,

          email: user?.email || "",
        },

        // =================================================
        // PAYMENT SUCCESS
        // =================================================

        handler: async function (response) {
          try {
            // =============================================
            // VERIFY PAYMENT
            // =============================================

            const verifyRes = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/payment/verify-payment`,
              {
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            // =============================================
            // PAYMENT VERIFIED
            // =============================================

            if (verifyRes.data.success) {
              // ===========================================
              // SAVE ORDER
              // ===========================================

              await axios.post(
                `${import.meta.env.VITE_API_URL}/api/orders`,
                {
                  ...orderData,

                  paymentMethod: "Online",

                  paymentStatus: "Paid",

                  paymentId:
                    response.razorpay_payment_id,

                  razorpayOrderId:
                    response.razorpay_order_id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              );

              // ===========================================
              // CLEAR CART
              // ===========================================

              clearCart();

              alert("Payment Successful!");

              navigate("/order-success");
            } else {
              alert(
                "Payment Verification Failed",
              );
            }
          } catch (error) {
            console.error(
              "Payment verification error:",
              error,
            );

            alert(
              error.response?.data?.message ||
                "Payment verification failed",
            );
          }
        },

        // =================================================
        // RAZORPAY THEME
        // =================================================

        theme: {
          color: "#9B4D0D",
        },

        // =================================================
        // MODAL
        // =================================================

        modal: {
          ondismiss: function () {
            console.log(
              "Razorpay payment window closed",
            );
          },
        },
      };

      // =================================================
      // CHECK RAZORPAY SDK
      // =================================================

      if (!window.Razorpay) {
        alert(
          "Razorpay SDK failed to load. Please refresh the page.",
        );

        return;
      }

      // =================================================
      // OPEN RAZORPAY
      // =================================================

      const razorpay =
        new window.Razorpay(options);

      // =================================================
      // PAYMENT FAILED
      // =================================================

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Payment failed:",
            response.error,
          );

          alert(
            response.error?.description ||
              "Payment failed",
          );
        },
      );

      razorpay.open();
    } catch (error) {
      console.error(
        "Checkout error:",
        error,
      );

      alert(
        error.response?.data?.message ||
          "Payment Failed",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // =====================================================
  // EMPTY CART
  // =====================================================

  if (cartItems.length === 0) {
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
        <div
          className="
            bg-white
            rounded-[28px]
            p-8
            sm:p-12
            text-center
            shadow-lg
            border
            border-[#E7D3B8]
            max-w-md
            w-full
          "
        >
          <ShoppingBag
            size={50}
            className="
              mx-auto
              text-[#9B4D0D]
              mb-5
            "
          />

          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#2B1408]
            "
          >
            Your Cart Is Empty
          </h1>

          <p
            className="
              text-[#7B6252]
              text-sm
              mt-3
            "
          >
            Add some delicious dry fruits before
            proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="
              mt-6
              bg-[#9B4D0D]
              hover:bg-[#7A3A05]
              text-white
              px-7
              py-3
              rounded-full
              font-semibold
              transition
            "
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <section
      className="
        min-h-screen

        bg-[#F5F3F0]

        px-4
        sm:px-6
        md:px-10
        lg:px-12

        py-8
        sm:py-12
        md:py-16
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-7 sm:mb-10">

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="
              flex
              items-center
              gap-2

              text-[#9B4D0D]

              text-sm
              sm:text-base

              font-medium

              hover:gap-3

              transition-all

              mb-5
            "
          >
            <ArrowLeft size={18} />

            Back to Cart
          </button>

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
            FarmHills
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
            Checkout
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base

              mt-2
            "
          >
            Complete your details and place your order.
          </p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-5

            gap-6
            md:gap-8
          "
        >

          {/* =================================================
              SHIPPING FORM
          ================================================= */}

          <div
            className="
              lg:col-span-3

              bg-white

              rounded-[24px]
              sm:rounded-[30px]

              p-5
              sm:p-7
              md:p-9

              shadow-[0_8px_30px_rgba(91,51,20,0.07)]

              border
              border-[#E7D3B8]
            "
          >

            {/* FORM TITLE */}

            <div className="mb-6">

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-[#EFE2C8]

                    text-[#9B4D0D]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin size={20} />
                </div>

                <div>
                  <h2
                    className="
                      text-xl
                      sm:text-2xl

                      font-bold

                      text-[#2B1408]
                    "
                  >
                    Shipping Details
                  </h2>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-[#7B6252]
                    "
                  >
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  NAME
              ================================================= */}

              <div>

                <label
                  className="
                    block
                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#9B4D0D]
                    "
                  />

                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="
                      w-full

                      border
                      border-[#DCC8AD]

                      bg-[#FFFCF8]

                      rounded-xl

                      pl-11
                      pr-4

                      py-3.5

                      text-sm
                      sm:text-base

                      text-[#2B1408]

                      outline-none

                      focus:border-[#9B4D0D]

                      focus:ring-2
                      focus:ring-[#9B4D0D]/10

                      transition
                    "
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <div>

                <label
                  className="
                    block
                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#9B4D0D]
                    "
                  />

                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength="10"
                    className="
                      w-full

                      border
                      border-[#DCC8AD]

                      bg-[#FFFCF8]

                      rounded-xl

                      pl-11
                      pr-4

                      py-3.5

                      text-sm
                      sm:text-base

                      text-[#2B1408]

                      outline-none

                      focus:border-[#9B4D0D]

                      focus:ring-2
                      focus:ring-[#9B4D0D]/10

                      transition
                    "
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div>

                <label
                  className="
                    block
                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Shipping Address
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="
                      absolute
                      left-4
                      top-4
                      text-[#9B4D0D]
                    "
                  />

                  <textarea
                    rows="4"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    placeholder="House/Flat No., Street, Area, City, State, PIN Code"
                    autoComplete="street-address"
                    className="
                      w-full

                      border
                      border-[#DCC8AD]

                      bg-[#FFFCF8]

                      rounded-xl

                      pl-11
                      pr-4
                      py-3.5

                      text-sm
                      sm:text-base

                      text-[#2B1408]

                      outline-none

                      resize-none

                      focus:border-[#9B4D0D]

                      focus:ring-2
                      focus:ring-[#9B4D0D]/10

                      transition
                    "
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  PAYMENT METHOD
              ================================================= */}

              <div>

                <label
                  className="
                    block
                    mb-3

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Payment Method
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {/* COD */}

                  <label
                    className={`
                      cursor-pointer

                      border

                      rounded-2xl

                      p-4

                      transition-all

                      ${
                        formData.paymentMethod === "COD"
                          ? "border-[#9B4D0D] bg-[#FFF7EC] ring-2 ring-[#9B4D0D]/10"
                          : "border-[#DCC8AD] bg-white hover:border-[#9B4D0D]/50"
                      }
                    `}
                  >

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={
                        formData.paymentMethod === "COD"
                      }
                      onChange={handleChange}
                      className="sr-only"
                    />

                    <div className="flex items-center gap-3">

                      <div
                        className={`
                          w-10
                          h-10
                          rounded-full

                          flex
                          items-center
                          justify-center

                          ${
                            formData.paymentMethod ===
                            "COD"
                              ? "bg-[#9B4D0D] text-white"
                              : "bg-[#EFE2C8] text-[#9B4D0D]"
                          }
                        `}
                      >
                        <ShoppingBag size={20} />
                      </div>

                      <div className="flex-1">

                        <p
                          className="
                            font-semibold
                            text-[#2B1408]
                            text-sm
                          "
                        >
                          Cash on Delivery
                        </p>

                        <p
                          className="
                            text-xs
                            text-[#7B6252]
                            mt-0.5
                          "
                        >
                          Pay when your order arrives
                        </p>

                      </div>

                      {formData.paymentMethod ===
                        "COD" && (
                        <CheckCircle2
                          size={20}
                          className="text-[#9B4D0D]"
                        />
                      )}

                    </div>

                  </label>

                  {/* ONLINE */}

                  <label
                    className={`
                      cursor-pointer

                      border

                      rounded-2xl

                      p-4

                      transition-all

                      ${
                        formData.paymentMethod ===
                        "Online"
                          ? "border-[#9B4D0D] bg-[#FFF7EC] ring-2 ring-[#9B4D0D]/10"
                          : "border-[#DCC8AD] bg-white hover:border-[#9B4D0D]/50"
                      }
                    `}
                  >

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Online"
                      checked={
                        formData.paymentMethod ===
                        "Online"
                      }
                      onChange={handleChange}
                      className="sr-only"
                    />

                    <div className="flex items-center gap-3">

                      <div
                        className={`
                          w-10
                          h-10
                          rounded-full

                          flex
                          items-center
                          justify-center

                          ${
                            formData.paymentMethod ===
                            "Online"
                              ? "bg-[#9B4D0D] text-white"
                              : "bg-[#EFE2C8] text-[#9B4D0D]"
                          }
                        `}
                      >
                        <CreditCard size={20} />
                      </div>

                      <div className="flex-1">

                        <p
                          className="
                            font-semibold
                            text-[#2B1408]
                            text-sm
                          "
                        >
                          Online Payment
                        </p>

                        <p
                          className="
                            text-xs
                            text-[#7B6252]
                            mt-0.5
                          "
                        >
                          Secure payment with Razorpay
                        </p>

                      </div>

                      {formData.paymentMethod ===
                        "Online" && (
                        <CheckCircle2
                          size={20}
                          className="text-[#9B4D0D]"
                        />
                      )}

                    </div>

                  </label>

                </div>

              </div>

              {/* =================================================
                  PLACE ORDER BUTTON
              ================================================= */}

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full

                  bg-[#9B4D0D]

                  hover:bg-[#7A3A05]

                  disabled:bg-[#BFA28B]

                  disabled:cursor-not-allowed

                  text-white

                  py-3.5
                  sm:py-4

                  rounded-xl

                  text-base
                  sm:text-lg

                  font-semibold

                  shadow-lg

                  hover:shadow-xl

                  active:scale-[0.99]

                  transition-all

                  flex
                  items-center
                  justify-center

                  gap-2
                "
              >
                {isLoading ? (
                  <>
                    <span
                      className="
                        w-5
                        h-5

                        border-2
                        border-white/40
                        border-t-white

                        rounded-full

                        animate-spin
                      "
                    />

                    Processing...
                  </>
                ) : (
                  <>
                    {formData.paymentMethod === "COD"
                      ? "Place Order"
                      : "Pay Securely"}

                    <CheckCircle2 size={19} />
                  </>
                )}
              </button>

            </form>

            {/* SECURITY NOTE */}

            <div
              className="
                flex
                items-start
                gap-3

                mt-5

                p-3
                sm:p-4

                rounded-xl

                bg-[#F8F4ED]
              "
            >

              <ShieldCheck
                size={20}
                className="
                  text-[#9B4D0D]
                  flex-shrink-0
                "
              />

              <p
                className="
                  text-xs
                  sm:text-sm

                  text-[#7B6252]

                  leading-relaxed
                "
              >
                Your order details are securely processed.
                Online payments are handled through Razorpay.
              </p>

            </div>

          </div>

          {/* =================================================
              ORDER SUMMARY
          ================================================= */}

          <div
            className="
              lg:col-span-2
            "
          >

            <div
              className="
                bg-white

                rounded-[24px]
                sm:rounded-[30px]

                p-5
                sm:p-7
                md:p-8

                shadow-[0_8px_30px_rgba(91,51,20,0.07)]

                border
                border-[#E7D3B8]

                lg:sticky
                lg:top-24
              "
            >

              {/* SUMMARY TITLE */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  mb-6
                "
              >

                <div
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-[#EFE2C8]

                    text-[#9B4D0D]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <ShoppingBag size={20} />
                </div>

                <div>

                  <h2
                    className="
                      text-xl
                      sm:text-2xl

                      font-bold

                      text-[#2B1408]
                    "
                  >
                    Order Summary
                  </h2>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-[#7B6252]
                    "
                  >
                    {cartItems.length}{" "}
                    {cartItems.length === 1
                      ? "product"
                      : "products"}
                  </p>

                </div>

              </div>

              {/* =================================================
                  PRODUCTS
              ================================================= */}

              <div
                className="
                  space-y-4

                  max-h-[400px]

                  overflow-y-auto

                  pr-1
                "
              >

                {cartItems.map((item) => (

                  <div
                    key={item._id}
                    className="
                      flex
                      gap-3

                      pb-4

                      border-b
                      border-[#EEE3D4]
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        flex-shrink-0
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-16
                          h-16

                          sm:w-20
                          sm:h-20

                          object-cover

                          rounded-xl

                          bg-[#EFE2C8]
                        "
                      />

                      <span
                        className="
                          absolute

                          -top-2
                          -right-2

                          min-w-5
                          h-5

                          px-1

                          rounded-full

                          bg-[#9B4D0D]

                          text-white

                          text-[10px]

                          flex
                          items-center
                          justify-center

                          font-bold
                        "
                      >
                        {item.quantity}
                      </span>

                    </div>

                    {/* PRODUCT INFO */}

                    <div className="flex-1 min-w-0">

                      <h3
                        className="
                          font-semibold

                          text-[#2B1408]

                          text-sm
                          sm:text-base

                          line-clamp-2
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="
                          text-xs
                          sm:text-sm

                          text-[#7B6252]

                          mt-1
                        "
                      >
                        ₹{item.price} × {item.quantity}
                      </p>

                    </div>

                    {/* ITEM TOTAL */}

                    <div
                      className="
                        text-right

                        flex-shrink-0
                      "
                    >
                      <p
                        className="
                          font-bold

                          text-[#9B4D0D]

                          text-sm
                          sm:text-base
                        "
                      >
                        ₹{item.price * item.quantity}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

              {/* =================================================
                  TOTAL
              ================================================= */}

              <div className="mt-6">

                <div
                  className="
                    flex
                    justify-between

                    text-sm
                    sm:text-base

                    text-[#7B6252]

                    mb-3
                  "
                >
                  <span>Items</span>

                  <span>
                    {cartItems.reduce(
                      (acc, item) =>
                        acc + item.quantity,
                      0,
                    )}
                  </span>
                </div>

                <div
                  className="
                    flex
                    justify-between

                    items-center

                    pt-4

                    border-t
                    border-[#E7D3B8]
                  "
                >

                  <span
                    className="
                      text-lg
                      sm:text-xl

                      font-bold

                      text-[#2B1408]
                    "
                  >
                    Total
                  </span>

                  <span
                    className="
                      text-2xl
                      sm:text-3xl

                      font-bold

                      text-[#9B4D0D]
                    "
                  >
                    ₹{totalAmount}
                  </span>

                </div>

              </div>

              {/* DELIVERY MESSAGE */}

              <div
                className="
                  mt-5

                  rounded-xl

                  bg-[#F8F4ED]

                  p-3
                  sm:p-4
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      font-medium

                      text-[#2B1408]
                    "
                  >
                    Free delivery on orders above ₹499
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;