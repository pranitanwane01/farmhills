// import axios from "axios";
// import React, { useState, useContext } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import { AuthContext } from "../context/AuthContext";

// function Login() {
//   const navigate = useNavigate();

//   const { login } = useContext(AuthContext);

//   // FORM STATE

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // HANDLE INPUT CHANGE

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,

//       [e.target.name]: e.target.value,
//     });
//   };

//   // HANDLE LOGIN

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post(
//        `${import.meta.env.VITE_API_URL}/api/auth/login`,
//         formData,
//       );

//       // LOGIN USER
//       login(data);

//       // SAVE TOKEN
//       localStorage.setItem("token", data.token);

//       // REDIRECT
//       navigate("/");
//     } catch (error) {
//       console.log(error);

//       alert(error.response?.data?.message || "Login Failed");
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">
//       <div className="bg-white w-full max-w-md rounded-[30px] shadow-xl p-10">
//         {/* TITLE */}

//         <h1 className="text-4xl font-bold text-center text-[#2B1408] mb-3">
//           Welcome Back
//         </h1>

//         <p className="text-center text-[#7B6252] mb-8">
//           Login to continue shopping
//         </p>

//         {/* FORM */}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* EMAIL */}

//           <div>
//             <label className="block mb-2 font-medium text-[#2B1408]">
//               Email Address
//             </label>

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
//             />
//           </div>

//           {/* PASSWORD */}

//           <div>
//             <label className="block mb-2 font-medium text-[#2B1408]">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter password"
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
//             />
//           </div>

//           {/* BUTTON */}

//           <button
//             type="submit"
//             className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-xl text-lg font-semibold transition"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <button
//             type="button"
//             onClick={() => navigate("/forgot-password")}
//             className="text-yellow-600 hover:underline"
//           >
//             Forgot Password?
//           </button>
//         </div>

//         {/* REGISTER LINK */}

//         <p className="text-center mt-8 text-[#7B6252]">
//           Don't have an account?
//           <Link to="/register" className="text-[#9B4D0D] font-semibold ml-2">
//             Register
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Login;




import axios from "axios";
import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
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
  // HANDLE LOGIN
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData,
      );

      // LOGIN USER
      login(data);

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // REDIRECT
      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Login Failed",
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
            LOGIN CARD
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
              LOGO / ICON
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
              <Lock
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
              Welcome To FarmHills
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
              Welcome Back
            </h1>

            <p
              className="
                text-[#7B6252]

                text-sm
                sm:text-base

                mt-3
              "
            >
              Login to continue shopping
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

              <div className="flex items-center justify-between mb-2">

                <label
                  htmlFor="password"
                  className="
                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Password
                </label>

              </div>

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
                  autoComplete="current-password"
                  placeholder="Enter your password"
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

                {/* SHOW / HIDE PASSWORD */}

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
                FORGOT PASSWORD
            ================================================= */}

            <div className="flex justify-end">

              <button
                type="button"
                onClick={() =>
                  navigate("/forgot-password")
                }
                className="
                  text-sm

                  font-semibold

                  text-[#9B4D0D]

                  hover:text-[#7A3A05]

                  hover:underline

                  transition
                "
              >
                Forgot Password?
              </button>

            </div>

            {/* =================================================
                LOGIN BUTTON
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

                  Logging in...
                </>
              ) : (
                <>
                  Login

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

            Secure login with FarmHills

          </div>

          {/* =================================================
              REGISTER
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
              Don't have an account?

              <Link
                to="/register"
                className="
                  text-[#9B4D0D]

                  font-semibold

                  ml-2

                  hover:text-[#7A3A05]

                  transition
                "
              >
                Create Account
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

export default Login;
