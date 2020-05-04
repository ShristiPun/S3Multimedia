const express=require('express');
const router=express.Router();
const packageController=require('../controller/packageController');

router.post('/package',packageController.addPackage)
router.get('/package',packageController.getPackage)
router.delete('/package',packageController.deletePackage)
router.put('/package',packageController.updatePackage)
module.exports=router

