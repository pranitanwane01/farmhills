const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
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
      message: error.message,
    });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (
      user &&
      (await bcrypt.compare(password, user.password))
    ) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      });
    } else {
      res.status(401).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("Forgot Password Request:", email);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.resetOtp = otp;
    user.resetOtpExpire =
      Date.now() + 10 * 60 * 1000;

    await user.save();

    console.log("OTP saved for:", user.email);

    await sendEmail(
      user.email,
      "FarmHills - Password Reset OTP",
      `Hello ${user.name},

Your FarmHills password reset OTP is:

${otp}

This OTP is valid for 10 minutes.

If you did not request a password reset, please ignore this email.

Regards,
FarmHills Team`
    );

    console.log(
      "OTP email sent to:",
      user.email
    );

    return res.status(200).json({
      message: "OTP sent to your email",
    });
  } catch (error) {
    console.error(
      "Forgot Password Error:",
      error
    );

    return res.status(500).json({
      message: "Failed to send OTP",
    });
  }
};

// RESET PASSWORD
const resetPassword = async (req, res) => {
  try {
    const {
      email,
      otp,
      password,
    } = req.body;

    const user = await User.findOne({
      email,
      resetOtp: otp,
      resetOtpExpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired OTP",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.resetOtp = undefined;
    user.resetOtpExpire = undefined;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    console.error(
      "Reset Password Error:",
      error
    );

    return res.status(500).json({
      message: "Failed to reset password",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
};