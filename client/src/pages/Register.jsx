import React, {
  useState,
  useContext,
} from "react";

import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Register() {

  const navigate = useNavigate();

  const { register } =
    useContext(AuthContext);

  // FORM STATE

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",

    });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // HANDLE SUBMIT

  const handleSubmit = (e) => {

    e.preventDefault();

    // SAVE USER

    register(formData);

    // REDIRECT

    navigate("/");

  };

  return (

    <section className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-[30px] shadow-xl p-10">

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center text-[#2B1408] mb-3">

          Create Account

        </h1>

        <p className="text-center text-[#7B6252] mb-8">

          Join our premium dry fruits store

        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}

          <div>

            <label className="block mb-2 font-medium text-[#2B1408]">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
            />

          </div>

          {/* EMAIL */}

          <div>

            <label className="block mb-2 font-medium text-[#2B1408]">

              Email Address

            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="block mb-2 font-medium text-[#2B1408]">

              Password

            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-xl text-lg font-semibold transition"
          >

            Create Account

          </button>

        </form>

        {/* LOGIN LINK */}

        <p className="text-center mt-8 text-[#7B6252]">

          Already have an account?

          <Link
            to="/login"
            className="text-[#9B4D0D] font-semibold ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </section>

  );
}

export default Register;