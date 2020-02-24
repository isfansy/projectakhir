const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isfansyahreza@gmail.com",
    pass: "odtshsyjbeyabbjm"
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;
