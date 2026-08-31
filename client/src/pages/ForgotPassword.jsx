import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // =====================================================
  // SEND OTP
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const userEmail = email.trim().toLowerCase();

    if (!userEmail) {
      alert("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        {
          email: userEmail,
        }
      );

      // SAVE EMAIL FOR RESET PASSWORD PAGE
      localStorage.setItem(
        "resetPasswordEmail",
        userEmail
      );

      alert(data.message);

      // GO TO RESET PASSWORD PAGE
      navigate("/reset-password");

    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
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
        px-4
        sm:px-6
        md:px-10
        py-10
        sm:py-14
        md:py-20
        flex
        items-center
        justify-center
      "
    >
      <div className="w-full max-w-md">

        {/* CARD */}
        <div
          className="
            bg-white
            rounded-[26px]
            sm:rounded-[32px]
            p-6
            sm:p-8
            md:p-10
            shadow-[0_10px_40px_rgba(91,51,20,0.10)]
            border
            border-[#E7D3B8]
          "
        >

          {/* ICON */}
          <div className="flex justify-center mb-6">

            <div
              className="
                w-16
                h-16
                sm:w-20
                sm:h-20
                rounded-full
                bg-[#EFE2C8]
                text-[#9B4D0D]
                flex
                items-center
                justify-center
              "
            >
              <Mail
                size={32}
                className="sm:w-9 sm:h-9"
              />
            </div>

          </div>

          {/* HEADING */}
          <div className="text-center">

            <p
              className="
                uppercase
                tracking-[3px]
                text-[#9B4D0D]
                text-xs
                font-semibold
              "
            >
              Account Recovery
            </p>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-[#2B1408]
                mt-2
              "
            >
              Forgot Password?
            </h1>

            <p
              className="
                text-[#7B6252]
                text-sm
                sm:text-base
                leading-6
                mt-3
              "
            >
              Enter your registered email address
              and we'll send you an OTP to reset
              your password.
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 sm:mt-8"
          >

            {/* EMAIL */}
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
                size={19}
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
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
                className="
                  w-full
                  border
                  border-[#DCC8AD]
                  bg-[#FFFCF8]
                  pl-11
                  pr-4
                  py-3.5
                  sm:py-4
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-[#2B1408]
                  outline-none
                  focus:border-[#9B4D0D]
                  focus:ring-2
                  focus:ring-[#9B4D0D]/10
                  transition
                "
                required
              />

            </div>

            {/* SEND OTP BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                mt-5
                bg-[#9B4D0D]
                hover:bg-[#7A3A05]
                disabled:bg-[#BFA28B]
                disabled:cursor-not-allowed
                text-white
                py-3.5
                sm:py-4
                rounded-xl
                text-base
                sm:text-lg
                font-semibold
                shadow-lg
                hover:shadow-xl
                transition-all
                flex
                items-center
                justify-center
                gap-2
              "
            >

              {loading ? (
                <>
                  <span
                    className="
                      w-5
                      h-5
                      border-2
                      border-white/40
                      border-t-white
                      rounded-full
                      animate-spin
                    "
                  />

                  Sending OTP...
                </>
              ) : (
                <>
                  Send OTP

                  <ArrowRight size={19} />
                </>
              )}

            </button>

          </form>

          {/* SECURITY NOTE */}
          <div
            className="
              mt-6
              p-4
              rounded-xl
              bg-[#F7F3EE]
              flex
              gap-3
              items-start
            "
          >

            <ShieldCheck
              size={20}
              className="
                text-[#9B4D0D]
                flex-shrink-0
                mt-0.5
              "
            />

            <p
              className="
                text-xs
                sm:text-sm
                text-[#7B6252]
                leading-5
              "
            >
              Your account information is kept
              secure. Never share your OTP or
              password with anyone.
            </p>

          </div>

        </div>

        {/* BACK TO LOGIN */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="
            block
            mx-auto
            mt-6
            text-sm
            font-semibold
            text-[#9B4D0D]
            hover:text-[#7A3A05]
            transition
          "
        >
          ← Back to Login
        </button>

      </div>
    </section>
  );
};

export default ForgotPassword;