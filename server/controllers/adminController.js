const Product = require("../models/Product");

const Order = require("../models/Order");

const User = require("../models/User");

// GET ADMIN DASHBOARD STATS
const getAdminStats = async (req, res) => {
  try {
    // TOTAL PRODUCTS
    const totalProducts = await Product.countDocuments();

    // TOTAL ORDERS
    const totalOrders = await Order.countDocuments();

    // TOTAL USERS
    const totalUsers = await User.countDocuments();

    // TOTAL REVENUE
    const orders = await Order.find();

    const totalRevenue = orders.reduce(
      (acc, item) => acc + item.totalAmount,
      0,
    );

    // LOW STOCK PRODUCTS
    const lowStockProducts = await Product.find({
      stock: {
        $lt: 5,
      },
    });

    // RECENT ORDERS
    const recentOrders = await Order.find()
      .sort({
        createdAt: -1,
      })
      .limit(5);

    // SEND RESPONSE
    res.json({
      totalProducts,
      totalOrders,
      totalUsers,
      totalRevenue,
      lowStockProducts,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAdminStats,
};
