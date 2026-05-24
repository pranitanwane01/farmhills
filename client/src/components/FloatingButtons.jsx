import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const FloatingButtons = () => {

  return (

    <div className="fixed bottom-22 right-6 flex flex-col gap-4 z-50">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917067504574"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl transition transform hover:scale-110"
      >

        <FaWhatsapp />

      </a>

      {/* CALL */}
      {/* <a
        href="tel:+917067504574"
        className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg text-2xl transition transform hover:scale-110"
      >

        <FaPhoneAlt />

      </a> */}

    </div>
  );
};

export default FloatingButtons;