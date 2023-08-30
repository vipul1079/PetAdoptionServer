const path=require('path')
const ejs = require('ejs')
const transporter=require('../mail/transporter')
const sendContactUs= async ({firstName,email,message}) =>{
    const templatePath=path.join(__dirname,"../views/ContactUs.ejs");

    const data = await ejs.renderFile(templatePath,{
        firstName,email,message
    });

    const mainOptions = {
        from: '"BuddyForEveryBuddy" vipulsharma1079@gmail.com',
        to:'vipulsharma1079@gmail.com',
        subject:'Contact Us Form',
        html:data
    }

    await transporter.sendMail(mainOptions).then(()=>console.log('done'));

}

module.exports = sendContactUs;