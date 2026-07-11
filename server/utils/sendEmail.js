// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",

//     auth: {
//       user: process.env.EMAIL_USER,

//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,

//     to,

//     subject,

//     text,
//   });
// };

// module.exports = sendEmail;


const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    console.log("EMAIL USER:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    console.log("✅ Email Sent");
  } catch (err) {
    console.error("❌ MAIL ERROR:", err);
    throw err;
  }
};

module.exports = sendEmail;