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

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },

    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = async (to, subject, text) => {
    await transporter.verify();
    console.log("SMTP Connected");

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    });
};

module.exports = sendEmail;