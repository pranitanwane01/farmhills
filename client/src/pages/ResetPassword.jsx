import { useState, useEffect } from "react";

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

  // =====================================================
  // GET EMAIL FROM FORGOT PASSWORD PAGE
  // =====================================================

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // =====================================================
  // LOAD SAVED EMAIL
  // =====================================================

  useEffect(() => {
    const savedEmail = localStorage.getItem(
      "resetPasswordEmail"
    );

    if (savedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: savedEmail,
      }));
    }
  }, []);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // OTP ONLY ALLOWS NUMBERS
    if (name === "otp") {
      const numericValue = value
        .replace(/\D/g, "")
        .slice(0, 6);

      setFormData((prev) => ({
        ...prev,
        otp: numericValue,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // HANDLE RESET PASSWORD
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const email = formData.email.trim().toLowerCase();
    const otp = formData.otp.trim();
    const password = formData.password;

    // CHECK EMAIL
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    // CHECK OTP
    if (!/^\d{6}$/.test(otp)) {
      toast.error("Please enter the 6-digit OTP.");
      return;
    }

    // CHECK PASSWORD
    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      // =================================================
      // SEND RESET REQUEST
      // =================================================

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        {
          email,
          otp,
          password,
        }
      );

      toast.success(
        data.message ||
          "Password reset successfully."
      );

      // REMOVE SAVED EMAIL
      localStorage.removeItem(
        "resetPasswordEmail"
      );

      // GO TO LOGIN
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.error(
        "Reset Password Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Unable to reset password. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-[#F5F3F0]
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        py-12
      "
    >
      <div className="w-full max-w-md">

        {/* CARD */}

        <div
          className="
            bg-white
            rounded-[30px]
            sm:rounded-[35px]
            shadow-2xl
            p-7
            sm:p-10
          "
        >

          {/* ICON */}

          <div className="flex justify-center mb-6">

            <div
              className="
                w-20
                h-20
                rounded-full
                bg-[#EFE2C8]
                text-[#9B4D0D]
                flex
                items-center
                justify-center
              "
            >
              <ShieldCheck size={40} />
            </div>

          </div>

          {/* TITLE */}

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-center
              text-[#2B1408]
            "
          >
            Reset Password
          </h1>

          <p
            className="
              text-center
              text-[#7B6252]
              mt-3
              leading-relaxed
            "
          >
            Enter the OTP sent to your email and
            create a new password.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* EMAIL */}

            <div>

              <label
                htmlFor="email"
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2B1408]
                  mb-2
                "
              >
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
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
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

              <label
                htmlFor="otp"
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2B1408]
                  mb-2
                "
              >
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
                  id="otp"
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="one-time-code"
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
                    tracking-[5px]
                    font-semibold
                    text-[#2B1408]
                    focus:border-[#9B4D0D]
                    focus:ring-2
                    focus:ring-[#9B4D0D]/10
                    transition
                  "
                />

              </div>

              <p
                className="
                  text-xs
                  text-gray-500
                  mt-2
                "
              >
                Enter the 6-digit OTP sent to your email.
              </p>

            </div>

            {/* PASSWORD */}

            <div>

              <label
                htmlFor="password"
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2B1408]
                  mb-2
                "
              >
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
                  id="password"
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
                  autoComplete="new-password"
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
                    setShowPassword(
                      !showPassword
                    )
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

              <p
                className="
                  text-xs
                  text-gray-500
                  mt-2
                "
              >
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

          {/* LOGIN LINK */}

          <div
            className="
              text-center
              mt-7
              pt-6
              border-t
              border-gray-100
            "
          >

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

        {/* SECURITY MESSAGE */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-5
            text-sm
            text-[#7B6252]
          "
        >

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