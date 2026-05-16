const express = require("express");

const router = express.Router();



const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const {
  createPaymentOrder,
} = require(
  "../controllers/paymentController"
);

router.post(
  "/create-order",
  protect,
  createPaymentOrder
);

module.exports = router;