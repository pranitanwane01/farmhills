


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