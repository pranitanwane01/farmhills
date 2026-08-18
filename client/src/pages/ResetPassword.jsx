




import React, { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import {
  LockKeyhole,
  Mail,
  ShieldCheck,
  Eye,
  EyeOff,
  KeyRound,
} from "lucide-react";

import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // HANDLE RESET PASSWORD
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.otp.length < 4) {
      toast.error("Please enter a valid OTP.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        formData
      );

      toast.success(
        data.message || "Password reset successfully."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-5 sm:px-6 py-12">

      <div className="w-full max-w-md">

        {/* =========================================
            CARD
        ========================================== */}

        <div className="bg-white rounded-[30px] sm:rounded-[35px] shadow-2xl p-7 sm:p-10">

          {/* =========================================
              ICON
          ========================================== */}

          <div className="flex justify-center mb-6">

            <div className="
              w-20
              h-20
              rounded-full
              bg-[#EFE2C8]
              text-[#9B4D0D]
              flex
              items-center
              justify-center
            ">

              <ShieldCheck size={40} />

            </div>

          </div>

          {/* =========================================
              TITLE
          ========================================== */}

          <h1 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-center
            text-[#2B1408]
          ">
            Reset Password
          </h1>

          <p className="
            text-center
            text-[#7B6252]
            mt-3
            leading-relaxed
          ">
            Enter the OTP sent to your email and
            create a new password.
          </p>

          {/* =========================================
              FORM
          ========================================== */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* EMAIL */}

            <div>

              <label className="
                block
                text-sm
                font-semibold
                text-[#2B1408]
                mb-2
              ">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#9B4D0D]
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    outline-none
                    text-[#2B1408]
                    focus:border-[#9B4D0D]
                    focus:ring-2
                    focus:ring-[#9B4D0D]/10
                    transition
                  "
                />

              </div>

            </div>

            {/* OTP */}

            <div>

              <label className="
                block
                text-sm
                font-semibold
                text-[#2B1408]
                mb-2
              ">
                OTP
              </label>

              <div className="relative">

                <KeyRound
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#9B4D0D]
                  "
                />

                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  maxLength={6}
                  inputMode="numeric"
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    outline-none
                    tracking-[4px]
                    font-semibold
                    text-[#2B1408]
                    focus:border-[#9B4D0D]
                    focus:ring-2
                    focus:ring-[#9B4D0D]/10
                    transition
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block
                text-sm
                font-semibold
                text-[#2B1408]
                mb-2
              ">
                New Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#9B4D0D]
                  "
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create new password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="
                    w-full
                    pl-12
                    pr-12
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    outline-none
                    text-[#2B1408]
                    focus:border-[#9B4D0D]
                    focus:ring-2
                    focus:ring-[#9B4D0D]/10
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-[#9B4D0D]
                    transition
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}

                </button>

              </div>

              <p className="
                text-xs
                text-gray-500
                mt-2
              ">
                Password must be at least 6 characters.
              </p>

            </div>

            {/* RESET BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#9B4D0D]
                hover:bg-[#7A3A05]
                disabled:bg-[#B98B68]
                disabled:cursor-not-allowed
                text-white
                py-4
                rounded-xl
                text-lg
                font-semibold
                transition
                duration-300
                shadow-lg
                hover:shadow-xl
              "
            >

              {loading
                ? "Resetting Password..."
                : "Reset Password"}

            </button>

          </form>

          {/* =========================================
              LOGIN LINK
          ========================================== */}

          <div className="
            text-center
            mt-7
            pt-6
            border-t
            border-gray-100
          ">

            <p className="text-[#7B6252]">

              Remember your password?

              <Link
                to="/login"
                className="
                  ml-2
                  text-[#9B4D0D]
                  font-semibold
                  hover:underline
                "
              >
                Login
              </Link>

            </p>

          </div>

        </div>

        {/* =========================================
            SECURITY MESSAGE
        ========================================== */}

        <div className="
          flex
          items-center
          justify-center
          gap-2
          mt-5
          text-sm
          text-[#7B6252]
        ">

          <ShieldCheck
            size={17}
            className="text-[#9B4D0D]"
          />

          <span>
            Your account information is secure.
          </span>

        </div>

      </div>

    </section>
  );
};

export default ResetPassword;