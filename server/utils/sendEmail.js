const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "FarmHills <noreply@farmhills.in>",
      to: [to],
      subject,
      text,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);

    return data;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw error;
  }
};

module.exports = sendEmail;