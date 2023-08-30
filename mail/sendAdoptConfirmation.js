const path=require('path')
const ejs = require('ejs')
const transporter=require('../mail/transporter')
const sendAdoptConfirmation= async ({firstName,email,phone}) =>{
    const templatePath=path.join(__dirname,"../views/AdoptConfirm.ejs");

    const data = await ejs.renderFile(templatePath,{
        firstName,phone
    });

    const mainOptions = {
        from: '"BuddyForEveryBuddy" vipulsharma1079@gmail.com',
        to:email,
        subject:'Adoption Requested',
        html:data
    }

    await transporter.sendMail(mainOptions).then(()=>console.log('done'));

}

module.exports = sendAdoptConfirmation;