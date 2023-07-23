"use strict";
require('dotenv').config()
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (message) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // email of the account linked to the SMTP server.
      pass: process.env.SMTP_PASS, // password of the email.
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"James Le-Goff 👻" <james-legoff@hotmail.com>', // sender address. This fills the from section of the email
    to: "jameslegoff92@gmail.com", // list of receivers 
    subject: "Job or Project Offer", // Subject line
    text: message, // plain text body
  }); 

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

// sendEmail().catch(console.error);
module.exports = {
  sendEmail,
}