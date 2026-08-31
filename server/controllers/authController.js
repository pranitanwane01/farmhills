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

    // GENERATE 6-DIGIT OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // SAVE OTP + EXPIRY
    user.resetOtp = otp;
    user.resetOtpExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    console.log("OTP saved for:", user.email);

    // SEND OTP TO USER'S EMAIL
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

    console.log("OTP email sent to:", user.email);

    return res.status(200).json({
      message: "OTP sent to your email",
    });

  } catch (error) {
    console.error("Forgot Password Error:", error);

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

    // FIND USER + VALID OTP + CHECK EXPIRY
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

    // HASH NEW PASSWORD
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    user.password = hashedPassword;

    // REMOVE OTP AFTER SUCCESSFUL RESET
    user.resetOtp = undefined;
    user.resetOtpExpire = undefined;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });

  } catch (error) {
    console.error("Reset Password Error:", error);

    return res.status(500).json({
      message: "Failed to reset password",
    });
  }
};