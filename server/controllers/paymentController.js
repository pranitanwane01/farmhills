const Razorpay = require("razorpay");

const razorpay =
  new Razorpay({
    key_id:
      process.env
        .RAZORPAY_KEY_ID,

    key_secret:
      process.env
        .RAZORPAY_KEY_SECRET,
  });

// CREATE ORDER
const createPaymentOrder =
  async (req, res) => {

    try {

      const options = {
        amount:
          req.body.amount * 100,
        currency: "INR",
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json(order);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

module.exports = {
  createPaymentOrder,
};