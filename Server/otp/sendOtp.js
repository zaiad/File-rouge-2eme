const nodemailer = require("nodemailer");
require('dotenv').config();

const sendOtp = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // replace with your email service provider
      auth: {
        user: process.env.EMAIL, // replace with your email address
        pass: process.env.PASSWORD, // replace with your email password
      },
    });
    const mailOptions = {
      from: `"WELCOME TO APPLE STORE 👻" <${process.env.EMAIL}>`, // replace with your email address
      to: email, // recipient's email address
      subject: "Verification Code",
      text: `Your verification code is ${otp}.`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = sendOtp;
