const nodemailer = require('nodemailer');
const sendMail = async () => {
    console.log("inside sendmail function")

    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "websitesspl@gmail.com",
            pass: "clpxvwdjoywiixvh"
        }
    });
    //sending credentials

    let mailDetails = {
        from: "websitesspl@gmail.com",
        to: "suresh.sen@sculptsoft.com",
        subject: "Test mail using cron job email",
        text: "Node js cron job email. Testing for learning."
    }

    const res = await mailTransporter.sendMail(mailDetails, (error, data) => {
        console.log("inside mail transpoter sendmail");
        if (error) console.log("Error occure:", error);

        else
            console.log("Email sent success", data);
    });

    return res;
};
module.exports = sendMail;
