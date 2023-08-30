const express= require('express');
const adoptionController=require('../controllers/adoptionController')

const router= express.Router();

//create
router.post('/create',adoptionController.create);

//get one
router.get('/get/:id',adoptionController.getOne);

// get
router.get('/all',adoptionController.getAll);

//update
router.put('/update/:id',adoptionController.update);

//delete
router.delete('/delete/:id',adoptionController.delete);


module.exports = router;