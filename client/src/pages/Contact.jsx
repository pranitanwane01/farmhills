
import { useState } from "react";

import axios from "axios";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
      );

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="text-gray-600 mb-10">
            Have questions about FarmHills products? Feel free to contact us
            anytime.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Phone</h3>

                <p>+91 7067504574</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Email</h3>

                <p>support@farmhills.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />

              <div>
                <h3 className="font-semibold">Address</h3>

                <p>Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
