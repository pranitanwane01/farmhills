const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const crypto = require("crypto");

const sendEmail = require("../utils/sendEmail");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // CHECK USER
    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // TOKEN
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
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

    // FIND USER
    const user = await User.findOne({
      email,
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // TOKEN
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        },
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


// const forgotPassword = async (req, res) => {
//   try {
//     const user = await User.findOne({
//       email: req.body.email,
//     });

//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     // GENERATE OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     user.resetOtp = otp;

//     user.resetOtpExpire = Date.now() + 10 * 60 * 1000;

//     await user.save();

//     // SEND EMAIL
//     await sendEmail(
//       user.email,

//       "Password Reset OTP",

//       `Your OTP is ${otp}`,
//     );

//     res.json({
//       message: "OTP sent to email",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

const forgotPassword = async (req, res) => {
  try {
    console.log("Forgot Password Request:", req.body.email);

    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOtp = otp;
    user.resetOtpExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    console.log("OTP Saved:", otp);

    await sendEmail(
      user.email,
      "Password Reset OTP",
      `Your OTP is ${otp}`
    );

    console.log("Email Sent Successfully");

    res.json({
      message: "OTP sent to email",
    });

  } catch (error) {
    console.error("Forgot Password Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// const resetPassword = async (req, res) => {

//   try {
//     const user = await User.findOne({
//       resetPasswordToken: req.params.token,

//       resetPasswordExpire: {
//         $gt: Date.now(),
//       },
//     });

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid or expired token",
//       });
//     }

//     user.password = req.body.password;

//     user.resetPasswordToken = undefined;

//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.json({
//       message: "Password reset successful",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({
      email,
      resetOtp: otp,
      resetOtpExpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.resetOtp = undefined;

    user.resetOtpExpire = undefined;

    await user.save();

    res.json({
      message: "Password Reset Successful",
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
  resetPassword,
};
