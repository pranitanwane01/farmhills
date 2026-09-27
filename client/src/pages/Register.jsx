



import axios from "axios";
import React, {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { AuthContext } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // HANDLE REGISTER
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
      );

      // =================================================
      // LOGIN USER AFTER SUCCESSFUL REGISTRATION
      // =================================================

      login(data);

      // =================================================
      // SAVE TOKEN
      // =================================================

      localStorage.setItem(
        "token",
        data.token,
      );

      // =================================================
      // REDIRECT
      // =================================================

      navigate("/");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed",
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

        {/* =================================================
            REGISTER CARD
        ================================================= */}

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

          {/* =================================================
              ICON
          ================================================= */}

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
              <User
                size={30}
                className="sm:w-9 sm:h-9"
              />
            </div>

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

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
              Join FarmHills
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
              Create Account
            </h1>

            <p
              className="
                text-[#7B6252]

                text-sm
                sm:text-base

                mt-3
              "
            >
              Join our premium dry fruits store
            </p>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              mt-7
              sm:mt-8

              space-y-5
            "
          >

            {/* =================================================
                NAME
            ================================================= */}

            <div>

              <label
                htmlFor="name"
                className="
                  block

                  mb-2

                  text-sm

                  font-semibold

                  text-[#2B1408]
                "
              >
                Full Name
              </label>

              <div className="relative">

                <User
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
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="
                    w-full

                    pl-11
                    pr-4

                    py-3.5
                    sm:py-4

                    rounded-xl

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    text-sm
                    sm:text-base

                    text-[#2B1408]

                    outline-none

                    focus:border-[#9B4D0D]

                    focus:ring-2
                    focus:ring-[#9B4D0D]/10

                    transition
                  "
                />

              </div>

            </div>

            {/* =================================================
                EMAIL
            ================================================= */}

            <div>

              <label
                htmlFor="email"
                className="
                  block

                  mb-2

                  text-sm

                  font-semibold

                  text-[#2B1408]
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="
                    w-full

                    pl-11
                    pr-4

                    py-3.5
                    sm:py-4

                    rounded-xl

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    text-sm
                    sm:text-base

                    text-[#2B1408]

                    outline-none

                    focus:border-[#9B4D0D]

                    focus:ring-2
                    focus:ring-[#9B4D0D]/10

                    transition
                  "
                />

              </div>

            </div>

            {/* =================================================
                PASSWORD
            ================================================= */}

            <div>

              <label
                htmlFor="password"
                className="
                  block

                  mb-2

                  text-sm

                  font-semibold

                  text-[#2B1408]
                "
              >
                Password
              </label>

              <div className="relative">

                <Lock
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
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="
                    w-full

                    pl-11
                    pr-12

                    py-3.5
                    sm:py-4

                    rounded-xl

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    text-sm
                    sm:text-base

                    text-[#2B1408]

                    outline-none

                    focus:border-[#9B4D0D]

                    focus:ring-2
                    focus:ring-[#9B4D0D]/10

                    transition
                  "
                />

                {/* SHOW / HIDE */}

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword,
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute

                    right-3

                    top-1/2

                    -translate-y-1/2

                    p-2

                    text-[#7B6252]

                    hover:text-[#9B4D0D]

                    transition
                  "
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* =================================================
                REGISTER BUTTON
            ================================================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full

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

                  Creating Account...
                </>
              ) : (
                <>
                  Create Account

                  <ArrowRight size={19} />
                </>
              )}

            </button>

          </form>

          {/* =================================================
              SECURITY MESSAGE
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              mt-6

              text-xs
              sm:text-sm

              text-[#7B6252]
            "
          >

            <ShieldCheck
              size={17}
              className="text-[#9B4D0D]"
            />

            Your information is secure

          </div>

          {/* =================================================
              LOGIN LINK
          ================================================= */}

          <div
            className="
              border-t
              border-[#E7D3B8]

              mt-6
              pt-6

              text-center
            "
          >

            <p
              className="
                text-sm

                text-[#7B6252]
              "
            >
              Already have an account?

              <Link
                to="/login"
                className="
                  text-[#9B4D0D]

                  font-semibold

                  ml-2

                  hover:text-[#7A3A05]

                  transition
                "
              >
                Login
              </Link>

            </p>

          </div>

        </div>

        {/* =================================================
            BACK TO HOME
        ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/")}
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
          ← Back to Home
        </button>

      </div>
    </section>
  );
}

export default Register;