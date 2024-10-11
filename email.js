const nodemailer = require("nodemailer");
// console.log(nodemailer)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'izuchi.alaneme@gmail.com',
        pass: '4961 995'
    }
});

const mailOptions = {
    from: 'izuchi.alaneme@gmail.com',
    to: 'izuchukwualaneme@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});