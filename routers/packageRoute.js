const express=require('express');
const router=express.Router();
const packageController=require('../controller/packageController');
const upload=require('../middleware/uploadfile')


router.post('/package',upload,packageController.addPackage)
router.get('/package',packageController.getPackage)
router.delete('/package/:_id',packageController.deletePackage)
router.put('/package/:_id',packageController.updatePackage)
module.exports=router

