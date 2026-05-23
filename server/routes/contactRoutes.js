const express =
  require("express");

const router =
  express.Router();

const sendEmail =
  require("../utils/sendEmail");

router.post(
  "/",
  async (req, res) => {

    try {

      const {
        name,
        email,
        subject,
        message,
      } = req.body;

      // SEND EMAIL TO ADMIN
      await sendEmail(

        process.env.EMAIL_USER,

        `New Contact Message: ${subject}`,

        `
Name: ${name}

Email: ${email}

Message:
${message}
        `
      );

      res.json({
        message:
          "Message sent successfully",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports =
  router;