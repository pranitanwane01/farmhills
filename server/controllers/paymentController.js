

// const Razorpay = require("razorpay");

// const crypto = require("crypto");

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,

//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // CREATE ORDER
// const createPaymentOrder = async (req, res) => {
//   try {
//     const options = {
//       amount: req.body.amount * 100,

//       currency: "INR",
//     };

//     const order = await razorpay.orders.create(options);

//     res.json(order);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // VERIFY PAYMENT
// const verifyPayment = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//       req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body.toString())
//       .digest("hex");

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//       res.json({
//         success: true,
//         message: "Payment Verified",
//       });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "Invalid Signature",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createPaymentOrder,
//   verifyPayment,
// };



const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ==========================================
// CREATE RAZORPAY ORDER
// ==========================================
const createPaymentOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment amount",
      });
    }

    const amountInPaise = Math.round(Number(amount) * 100);

    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `farmhills_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay create order error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// VERIFY RAZORPAY PAYMENT
// ==========================================
const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing Razorpay payment details",
      });
    }

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body)
      .digest("hex");

    // Timing-safe comparison
    const isAuthentic =
      expectedSignature.length === razorpay_signature.length &&
      crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(razorpay_signature)
      );

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Razorpay verification error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPaymentOrder,
  verifyPayment,
};