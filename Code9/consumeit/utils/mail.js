


function sendMail(recName,subject,message){
  const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    const authObject = require("./config");
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: authObject.userid,
        pass:authObject.password
    }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: authObject.userid, // sender address
        to: recName, // list of receivers
        subject: subject, // Subject line

        html: message // html body
    };

  function done(error, info){

      if(error){
        console.log("Can't Send Email....");
      }
      else{
        console.log("Mail Send...");
      }

  }
    transporter.sendMail(mailOptions, done);
});
}
module.exports = sendMail;
