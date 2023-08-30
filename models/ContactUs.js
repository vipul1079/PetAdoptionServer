const mongoose=require('mongoose');

const ContactUsSchema = new mongoose.Schema(
    {
        firstName:  {
            type:String,
            reuqire:true,
        },
        email: {
            type: String,
            require: true,
        },
        message: {
            type: String,
            require: true,
        },
    },
    {
        timestamps:true
    }

);

module.exports = ContactUs = mongoose.model('ContactUs',ContactUsSchema);