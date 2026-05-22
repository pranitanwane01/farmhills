const express = require("express");

const router = express.Router();

const User = require("../models/User");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

// GET ALL USERS
router.get(
  "/",
  protect,
  admin,
  async (req, res) => {
    try {

      const users =
        await User.find().select("-password");

      res.json(users);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  }
);

module.exports = router;