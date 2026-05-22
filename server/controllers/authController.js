const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// REGISTER
const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK USER
    const userExists =
      await User.findOne({
        email,
      });

    if (userExists) {

      return res.status(400).json({
        message:
          "User already exists",
      });

    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password:
        hashedPassword,
    });

    // TOKEN
    const token =
      jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

// LOGIN
const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // FIND USER
    const user =
      await User.findOne({
        email,
      });

    if (
      user &&
      (await bcrypt.compare(
        password,
        user.password
      ))
    ) {

      // TOKEN
      const token =
        jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn:
              "30d",
          }
        );

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin:
          user.isAdmin,
        token,
      });

    } else {

      res.status(401).json({
        message:
          "Invalid email or password",
      });

    }

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

const forgotPassword = async (
  req,
  res
) => {

  try {

    const user =
      await User.findOne({
        email: req.body.email,
      });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    res.json({
      message:
        "Reset link sent successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
};