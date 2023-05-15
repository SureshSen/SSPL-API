const nodemailer = require('nodemailer');
const sendMail = () => {
    console.log("inside sendmail function")

    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"xyz",
            pass:"1123"
        }
    });
    //sending credentials

    let mailDetails = {
        from: "suresh.sen@sculptsoft.com",
        to: "kumaarsuresh057@gmail.com",
        subject: "Test mail using cron job email",
        text: "Node js cron job email. Testing for learning."
    }

    mailTransporter.sendMail(mailDetails, (error, data) => {
        console.log("inside mail transpoter sendmail");
        if(error)
        console.log("Error occure:",error);
        else
        console.log("Email sent success",data);
    });

}
module.exports = sendMail;