const express=require('express');
const router=express.Router();
const photographytypesController=require('../controller/photographytypesController');
const upload=require('../middleware/uploadfile')


router.post('/photographytypes',upload,photographytypesController.addPhotographytypes)
router.get('/photographytypes',photographytypesController.getPhotographytypes)
router.delete('/photographytypes/:_id',photographytypesController.deletePhotographytypes)
router.put('/photographytypes/:_id',photographytypesController.updatePhotographytypes)
module.exports=router

