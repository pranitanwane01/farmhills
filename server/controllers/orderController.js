const Order = require("../models/Order");


// CREATE ORDER
const createOrder = async (req, res) => {

  try {

    const order = await Order.create(req.body);

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ALL ORDERS
const getOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        orderStatus: req.body.orderStatus,
      },
      {
        new: true,
      }
    );

    if (!order) {

      return res.status(404).json({
        message: "Order not found",
      });

    }

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};