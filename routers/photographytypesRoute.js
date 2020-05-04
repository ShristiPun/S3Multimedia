const express=require('express');
const router=express.Router();
const photographytypesController=require('../controller/photographytypesController');

router.post('/photographytypes',photographytypesController.addPhotographytypes)
router.get('/photographytypes',photographytypesController.getPhotographytypes)
router.delete('/photographytypes',photographytypesController.deletePhotographytypes)
router.put('/photographytypes',photographytypesController.updatePhotographytypes)
module.exports=router

