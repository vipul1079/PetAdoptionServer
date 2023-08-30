const express = require('express');
const categoryController=require('../controllers/categoryController')

const router=express.Router();

//get All categories
router.get('/all',categoryController.getAll);

//create new category
router.post('/create',categoryController.create)

//update a category
router.put('/update/:id',categoryController.update)

//delete a category
router.delete('/delete/:id',categoryController.delete)


module.exports= router;