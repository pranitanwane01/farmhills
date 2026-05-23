// import React, { useState } from "react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
// } from "lucide-react";

// function Contact() {

//   const [formData, setFormData] = useState({

//     name: "",
//     email: "",
//     subject: "",
//     message: "",

//   });

//   // HANDLE INPUT CHANGE

//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]: e.target.value,

//     });

//   };

//   // HANDLE SUBMIT

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     alert("Message Sent Successfully!");

//     setFormData({

//       name: "",
//       email: "",
//       subject: "",
//       message: "",

//     });

//   };

//   return (
//     <>
  

//       {/* HERO SECTION */}

//       <section className="bg-[#F5F3F0] px-6 md:px-12 py-20">

//         <div className="max-w-7xl mx-auto text-center">

//           <p className="uppercase tracking-[5px] text-[#9B4D0D] font-semibold">

//             Contact Us

//           </p>

//           <h1 className="text-5xl md:text-6xl font-bold text-[#2B1408] mt-4">

//             We’d Love To Hear From You

//           </h1>

//           <p className="text-[#7B6252] text-lg mt-6 max-w-3xl mx-auto leading-8">

//             Have questions about our products, orders, or services?
//             Feel free to contact our team anytime.

//           </p>

//         </div>

//       </section>

//       {/* CONTACT SECTION */}

//       <section className="bg-white px-6 md:px-12 py-20">

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

//           {/* LEFT SIDE */}

//           <div>

//             <h2 className="text-4xl font-bold text-[#2B1408] mb-10">

//               Get In Touch

//             </h2>

//             {/* CONTACT INFO */}

//             <div className="space-y-8">

//               {/* PHONE */}

//               <div className="flex items-start gap-5">

//                 <div className="w-16 h-16 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center">

//                   <Phone size={28} />

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-semibold text-[#2B1408]">

//                     Phone Number

//                   </h3>

//                   <p className="text-[#7B6252] mt-2 text-lg">

//                     +91 7067504574

//                   </p>

//                 </div>

//               </div>

//               {/* EMAIL */}

//               <div className="flex items-start gap-5">

//                 <div className="w-16 h-16 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center">

//                   <Mail size={28} />

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-semibold text-[#2B1408]">

//                     Email Address

//                   </h3>

//                   <p className="text-[#7B6252] mt-2 text-lg">

//                     support@farmhills.com

//                   </p>

//                 </div>

//               </div>

//               {/* ADDRESS */}

//               <div className="flex items-start gap-5">

//                 <div className="w-16 h-16 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center">

//                   <MapPin size={28} />

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-semibold text-[#2B1408]">

//                     Office Address

//                   </h3>

//                   <p className="text-[#7B6252] mt-2 text-lg leading-7">

//                     FarmHills Store,
//                     <br />
//                     Bhopal, Madhya Pradesh,
//                     India

//                   </p>

//                 </div>

//               </div>

//               {/* TIMING */}

//               <div className="flex items-start gap-5">

//                 <div className="w-16 h-16 bg-[#9B4D0D] text-white rounded-full flex items-center justify-center">

//                   <Clock size={28} />

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-semibold text-[#2B1408]">

//                     Working Hours

//                   </h3>

//                   <p className="text-[#7B6252] mt-2 text-lg leading-7">

//                     Monday - Saturday
//                     <br />
//                     9:00 AM - 8:00 PM

//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE FORM */}

//           <div className="bg-[#F5F3F0] rounded-[40px] p-10 shadow-xl">

//             <h2 className="text-4xl font-bold text-[#2B1408] mb-8">

//               Send Message

//             </h2>

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* NAME */}

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
//               />

//               {/* EMAIL */}

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
//               />

//               {/* SUBJECT */}

//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D]"
//               />

//               {/* MESSAGE */}

//               <textarea
//                 name="message"
//                 rows="6"
//                 placeholder="Write your message..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#9B4D0D] resize-none"
//               ></textarea>

//               {/* BUTTON */}

//               <button
//                 type="submit"
//                 className="w-full bg-[#9B4D0D] hover:bg-[#7A3A05] text-white py-4 rounded-xl text-lg font-semibold transition"
//               >

//                 Send Message

//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//     </>
//   );
// }

// export default Contact;

import {
  useState,
} from "react";

import axios from "axios";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const { data } =
          await axios.post(

            "http://localhost:8000/api/contact",

            formData
          );

        alert(data.message);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      } catch (error) {

        alert(

          error.response?.data?.message ||

          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }
    };

  return (

    <div className="min-h-screen bg-gray-100 py-16 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h1 className="text-4xl font-bold mb-6">

            Contact Us

          </h1>

          <p className="text-gray-600 mb-10">

            Have questions about FarmHills products?
            Feel free to contact us anytime.

          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">

              <FaPhoneAlt className="text-yellow-500 text-2xl" />

              <div>

                <h3 className="font-semibold">

                  Phone

                </h3>

                <p>
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <FaEnvelope className="text-yellow-500 text-2xl" />

              <div>

                <h3 className="font-semibold">

                  Email

                </h3>

                <p>
                  support@farmhills.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />

              <div>

                <h3 className="font-semibold">

                  Address

                </h3>

                <p>
                  Gwalior, Madhya Pradesh, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold mb-8">

            Send Message

          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl text-lg font-semibold"
            >

              {loading
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;