
// const express =
//   require("express");

// const router =
//   express.Router();

// const {
//   createPaymentOrder,
//   verifyPayment,
// } = require(
//   "../controllers/paymentController"
// );

// router.post(
//   "/create-order",
//   createPaymentOrder
// );

// router.post(
//   "/verify-payment",
//   verifyPayment
// );

// module.exports = router;


const express = require("express");

const router = express.Router();

const {
  createPaymentOrder,
  verifyPayment,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

// Create Razorpay order
router.post(
  "/create-order",
  protect,
  createPaymentOrder
);

// Verify Razorpay payment
router.post(
  "/verify-payment",
  protect,
  verifyPayment
);

module.exports = router;