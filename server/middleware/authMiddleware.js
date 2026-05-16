const jwt = require("jsonwebtoken");

const User = require("../models/User");

const protect = async (
  req,
  res,
  next
) => {

  let token;

  // CHECK TOKEN
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(
      "Bearer"
    )
  ) {

    try {

      // GET TOKEN
      token =
        req.headers.authorization.split(
          " "
        )[1];

      // VERIFY TOKEN
      const decoded =
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

      // GET USER
      req.user =
        await User.findById(
          decoded.id
        ).select("-password");

      next();

    } catch (error) {

      res.status(401).json({
        message:
          "Not authorized",
      });

    }

  }

  if (!token) {

    res.status(401).json({
      message:
        "No token",
    });

  }
};

// ADMIN ONLY
const admin = (
  req,
  res,
  next
) => {

  if (
    req.user &&
    req.user.isAdmin
  ) {

    next();

  } else {

    res.status(401).json({
      message:
        "Admin only",
    });

  }
};

module.exports = {
  protect,
  admin,
};