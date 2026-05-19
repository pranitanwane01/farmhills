

const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
  getMyOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

// AUTH MIDDLEWARE
const { protect, admin } = require("../middleware/authMiddleware");

// CREATE ORDER
router.post("/", protect, createOrder);

// USER ORDERS
router.get("/my-orders", protect, getMyOrders);

// ADMIN GET ALL ORDERS
router.get("/", protect, admin, getOrders);

// ADMIN UPDATE ORDER STATUS
router.put("/:id", protect, admin, updateOrderStatus);

module.exports = router;
