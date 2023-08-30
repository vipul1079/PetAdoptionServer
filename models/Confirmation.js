const mongoose=require('mongoose');

const ConfirmationSchema = new mongoose.Schema(
    {
        firstName:  {
            type:String,
            reuqire:true,
        },
        email: {
            type: String,
            require: true,
        },
        phone: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps:true
    }

);

module.exports = Confirmation = mongoose.model('Confirmation',ConfirmationSchema);