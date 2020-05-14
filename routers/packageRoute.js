const express=require('express');
const router=express.Router();
const packageController=require('../controller/packageController');

router.post('/package',packageController.addPackage)
router.get('/package',packageController.getPackage)
router.delete('/package/:_id',packageController.deletePackage)
router.put('/package/:_id',packageController.updatePackage)
module.exports=router

