const nodemailer = require('nodemailer')

// resolveHostname,port,auth-> Controller,pass
const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
        user: "apikey",
        pass: "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"
    }
});

transporter.verify((error,success)=> {
    if(error){
        console.log(error);
    }else {
        console.log(success);
    }
})

module.exports = transporter