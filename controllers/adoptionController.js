const Adoption = require('../models/Adpotion');

exports.getAll = async (req,res) => {
    
    try{
        const adoptions = await Adoption.find();
        
        res.json(adoptions);
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
}

exports.getOne = async (req,res) => {
    
    try{
        const { id } = req.params;
        const adoption = await Adoption.findById(id);

        res.json(adoption);
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
}

exports.create = async (req,res) =>{
    const {firstName, lastName, email, address, phone, pet } = req.body;
    
    try{
        const created = await Adoption.create({
            firstName,
            lastName,
            email,
            address,
            phone,
            pet
        })
        res.json({message:"Adoption created",created})
    }catch (error) {
        console.log(error);
        res.status(400).json(error);

    }
}


exports.update = async (req,res) =>{
    const { id } = req.params;
    const {firstName, lastName, email, address, phone, pet } = req.body;
    
    try{
        const updated = await Adoption.findByIdAndUpdate(id,{
            firstName,
            lastName,
            email,
            address,
            phone,
            pet
        },{new:true})
        res.json({message:"Adoption updated",updated})
    }catch (error) {
        console.log(error);
        res.status(400).json(error);

    }
}


exports.delete = async (req,res) => {
    
    try{
        const { id } = req.params;
        const deleted = await Adoption.findByIdAndRemove(id);

        res.json({message:"deleted",deleted});
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
}