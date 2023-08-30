const ContactUs = require("../models/ContactUs");
const sendContactUs = require("../mail/sendContactUs");
exports.create = async (req,res) =>{
  const {firstName, email, message } = req.body;
  try{
      const created = await ContactUs.create({
          firstName,
          email,
          message
      })
      sendContactUs({firstName,email,message});
      res.json({message:"Contact Us Confirmation",created})
  }catch (error) {
      console.log(error);
      res.status(400).json(error);

  }
};
