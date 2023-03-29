const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function main(method, user) {
  const token = jwt.sign({ email: user.email }, process.env.SECRET);
  let subject = "";
  let html = "";
  if (method == "register") {
    subject = "Verify your email";
    html = `<div style='height: 150px; width: 100%;'>
                    <h3>Hi dear ${user.name}!</h3>
                    <p>
                        <div>
                            welcome to <span style='font-weight: bold;'>APPLE STORE</span>,
                            Click in the button below  to verify your email <br>
                            <a href="http://localhost:${process.env.PORT}/api/auth/verify-email/${token}" style="background-color: #f59e0b; border: none; color: white; padding: 10px 15px; margin-top: 10px; border-radius: 6px; text-align: center; text-decoration: none;display: inline-block;">
                            verify </a>
                        </div>
                    </p>

                </div>`;
  }
  if (method == "forgotPassword") {
    subject = "Forgot Password";
    html = `<div style='height: 150px; width: 100%;'>
                        <h3>Hi dear ${user.name}!</h3>
                        <p>
                            <div>
                                welcome to <span style='font-weight: bold;'>APPLE STORE</span>,
                                Click in the button below  to verify your email <br>
                                <a href="http//localhost:${process.env.PORT}/api/auth/verify-forgot-password/${token}" style="background-color: #f59e0b; border: none; color: white; padding: 10px 15px; margin-top: 10px; border-radius: 6px; text-align: center; text-decoration: none;display: inline-block;">
                                verify </a>
                            </div>
                        </p>

                    </div>`;
  }

  if (method == "addLivreur") {
    subject = " Account created";
    html = `<div>
                <h3>Hello ${user.name}<h3>
                <div>
                  <div>Congratulation you just joined our deliver</div> 
                  <div>List you can find your password bellow</div>
                  <div>Your email: <strong>${user.email}</strong></div>
                  <div>Password:<strong>${user.password}</strong></div>
                  <div>Click the button bellow to access to login page</div>
                  <a href="#" style="background-color: #f59e0b; border: none;color: white;padding: 15px 32px; text-align: center; text-decoration: none;display: inline-block;">
                    Log here
                  </a>
                </div>
                `;
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = {
    from: `"APPLE STORE 👻" <${process.env.EMAIL}>`, // sender address
    to: user.email, // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  };

  transporter.sendMail(info);

  console.log("Message sent");
}

module.exports = { main };
