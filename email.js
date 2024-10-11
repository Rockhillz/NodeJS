const nodemailer = require("nodemailer");
// console.log(nodemailer)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'izuchi.alaneme@gmail.com',
        pass: 'fjzp fspn cprx wwqu'
    }
});

const mailOptions = {
    from: 'izuchi.alaneme@gmail.com',
    to: 'izuchukwualaneme@gmail.com, husseinimudiking@gmail.com, belloayoola20@gmail.com',
    subject: 'Sending Email using Node.js From IzuCodes',
    text: 'It was not easy at first. But finally found my APP PASSWORD. So This is my Mail using Node Js 😍😍👌!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});