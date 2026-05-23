const express = require("express");

const router = express.Router();

const { registerUser, loginUser, forgotPassword, resetPassword} = require("../controllers/authController");

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

module.exports = router;
