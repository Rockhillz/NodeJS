const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
// cors
const cors = require("cors");
app.use(cors());

require('dotenv').config();

app.post("/api/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Or other SMTP service
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "izuchukwualaneme@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error: " + error);
      res.status(500).json({ success: false, message: "Failed to send email. Try again later." });
    } else {
      res.status(200).json({ success: true, message: "Message sent successfully!" });
      
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
