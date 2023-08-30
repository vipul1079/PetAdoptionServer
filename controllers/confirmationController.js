const Confirmation = require("../models/Confirmation");
const sendAdoptConfirmation = require("../mail/sendAdoptConfirmation");
exports.create = async (req,res) =>{
  const {firstName, email, phone } = req.body;
  try{
      const created = await Confirmation.create({
          firstName,
          email,
          phone
      })
      sendAdoptConfirmation({firstName,email,phone});
      res.json({message:"Adoption Confirmation",created})
  }catch (error) {
      console.log(error);
      res.status(400).json(error);

  }
};
