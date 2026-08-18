
// import { useState } from "react";

// import axios from "axios";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/contact`,
//         formData,
//       );

//       alert(data.message);

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//         {/* LEFT SIDE */}
//         <div className="bg-white p-10 rounded-3xl shadow-lg">
//           <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

//           <p className="text-gray-600 mb-10">
//             Have questions about FarmHills products? Feel free to contact us
//             anytime.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <FaPhoneAlt className="text-yellow-500 text-2xl" />

//               <div>
//                 <h3 className="font-semibold">Phone</h3>

//                 <p>+91 9131824144</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <FaEnvelope className="text-yellow-500 text-2xl" />

//               <div>
//                 <h3 className="font-semibold">Email</h3>

//                 <p>farmhills25@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <FaMapMarkerAlt className="text-yellow-500 text-2xl" />

//               <div>
//                 <h3 className="font-semibold">Address</h3>

//                 <p>Bhopal, Madhya Pradesh, India</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-white p-10 rounded-3xl shadow-lg">
//           <h2 className="text-3xl font-bold mb-8">Send Message</h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-xl"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-xl"
//               required
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-xl"
//               required
//             />

//             <textarea
//               rows="5"
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border p-4 rounded-xl"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl text-lg font-semibold"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import { useState } from "react";

import axios from "axios";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
      );

      alert(
        data.message ||
          "Message sent successfully!",
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
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
        lg:px-12

        py-10
        sm:py-14
        md:py-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div
          className="
            text-center

            max-w-3xl

            mx-auto

            mb-10
            sm:mb-14
            md:mb-16
          "
        >
          <p
            className="
              uppercase

              tracking-[3px]
              sm:tracking-[5px]

              text-[#9B4D0D]

              text-xs
              sm:text-sm

              font-semibold
            "
          >
            Get In Touch
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              text-[#2B1408]

              mt-3
            "
          >
            Contact FarmHills
          </h1>

          <p
            className="
              text-[#7B6252]

              text-sm
              sm:text-base
              md:text-lg

              leading-7

              mt-4

              px-2
            "
          >
            Have questions about our premium dry fruits?
            We are always happy to hear from you.
          </p>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-2

            gap-6
            md:gap-8
            lg:gap-10
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              bg-[#2B1408]

              rounded-[26px]
              sm:rounded-[30px]

              p-6
              sm:p-8
              md:p-10
              lg:p-12

              text-white

              shadow-[0_12px_40px_rgba(43,20,8,0.15)]

              relative

              overflow-hidden
            "
          >

            {/* BACKGROUND DECORATION */}

            <div
              className="
                absolute

                -top-20
                -right-20

                w-56
                h-56

                rounded-full

                bg-[#9B4D0D]

                opacity-30

                blur-3xl
              "
            />

            <div
              className="
                absolute

                -bottom-20
                -left-20

                w-56
                h-56

                rounded-full

                bg-[#C28B2C]

                opacity-20

                blur-3xl
              "
            />

            {/* CONTENT */}

            <div className="relative z-10">

              <div
                className="
                  w-14
                  h-14

                  sm:w-16
                  sm:h-16

                  rounded-full

                  bg-[#9B4D0D]

                  flex
                  items-center
                  justify-center

                  mb-6
                "
              >
                <MessageCircle
                  size={28}
                />
              </div>

              <p
                className="
                  uppercase

                  tracking-[3px]

                  text-[#F4D03F]

                  text-xs
                  sm:text-sm

                  font-semibold
                "
              >
                We'd Love To Hear From You
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl

                  font-bold

                  mt-3

                  leading-tight
                "
              >
                Let's Talk About
                <br />

                <span className="text-[#F4D03F]">
                  FarmHills
                </span>
              </h2>

              <p
                className="
                  text-gray-300

                  text-sm
                  sm:text-base

                  leading-7

                  mt-5

                  max-w-lg
                "
              >
                Whether you have a question about our
                products, orders, delivery, or anything
                else, our team is ready to help.
              </p>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  space-y-4

                  mt-8
                "
              >

                {/* PHONE */}

                <a
                  href="tel:+919131824144"
                  className="
                    flex
                    items-center
                    gap-4

                    p-4

                    rounded-2xl

                    bg-white/10

                    border
                    border-white/10

                    hover:bg-white/15

                    transition
                  "
                >

                  <div
                    className="
                      w-11
                      h-11

                      rounded-full

                      bg-[#F4D03F]

                      text-[#2B1408]

                      flex
                      items-center
                      justify-center

                      flex-shrink-0
                    "
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs

                        text-gray-400

                        uppercase

                        tracking-wider
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        mt-1
                      "
                    >
                      +91 9131824144
                    </p>

                  </div>

                </a>

                {/* EMAIL */}

                <a
                  href="mailto:farmhills25@gmail.com"
                  className="
                    flex
                    items-center
                    gap-4

                    p-4

                    rounded-2xl

                    bg-white/10

                    border
                    border-white/10

                    hover:bg-white/15

                    transition
                  "
                >

                  <div
                    className="
                      w-11
                      h-11

                      rounded-full

                      bg-[#F4D03F]

                      text-[#2B1408]

                      flex
                      items-center
                      justify-center

                      flex-shrink-0
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-xs

                        text-gray-400

                        uppercase

                        tracking-wider
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        mt-1

                        break-all
                      "
                    >
                      farmhills25@gmail.com
                    </p>

                  </div>

                </a>

                {/* ADDRESS */}

                <div
                  className="
                    flex
                    items-center
                    gap-4

                    p-4

                    rounded-2xl

                    bg-white/10

                    border
                    border-white/10
                  "
                >

                  <div
                    className="
                      w-11
                      h-11

                      rounded-full

                      bg-[#F4D03F]

                      text-[#2B1408]

                      flex
                      items-center
                      justify-center

                      flex-shrink-0
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs

                        text-gray-400

                        uppercase

                        tracking-wider
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        mt-1
                      "
                    >
                      Bhopal, Madhya Pradesh, India
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

          <div
            className="
              bg-white

              rounded-[26px]
              sm:rounded-[30px]

              p-5
              sm:p-7
              md:p-10
              lg:p-12

              shadow-[0_8px_30px_rgba(91,51,20,0.08)]

              border
              border-[#E7D3B8]
            "
          >

            <div className="mb-6 sm:mb-8">

              <p
                className="
                  uppercase

                  tracking-[3px]

                  text-[#9B4D0D]

                  text-xs

                  font-semibold
                "
              >
                Send Us A Message
              </p>

              <h2
                className="
                  text-2xl
                  sm:text-3xl

                  font-bold

                  text-[#2B1408]

                  mt-2
                "
              >
                How Can We Help?
              </h2>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >

              {/* NAME */}

              <div>

                <label
                  className="
                    block

                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="
                    w-full

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    p-3.5
                    sm:p-4

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

              {/* EMAIL */}

              <div>

                <label
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

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="
                    w-full

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    p-3.5
                    sm:p-4

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

              {/* SUBJECT */}

              <div>

                <label
                  className="
                    block

                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                    w-full

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    p-3.5
                    sm:p-4

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

              {/* MESSAGE */}

              <div>

                <label
                  className="
                    block

                    mb-2

                    text-sm

                    font-semibold

                    text-[#2B1408]
                  "
                >
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full

                    border
                    border-[#DCC8AD]

                    bg-[#FFFCF8]

                    p-3.5
                    sm:p-4

                    rounded-xl

                    text-sm
                    sm:text-base

                    text-[#2B1408]

                    outline-none

                    resize-none

                    focus:border-[#9B4D0D]

                    focus:ring-2
                    focus:ring-[#9B4D0D]/10

                    transition
                  "
                  required
                />

              </div>

              {/* SUBMIT BUTTON */}

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

                  active:scale-[0.99]

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

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send size={18} />
                  </>
                )}

              </button>

            </form>

            {/* BOTTOM NOTE */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2

                mt-5

                text-xs
                sm:text-sm

                text-[#7B6252]
              "
            >
              <span>
                We usually respond as soon as possible.
              </span>

              <ArrowRight
                size={15}
                className="text-[#9B4D0D]"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
