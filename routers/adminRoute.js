const express=require('express');
const router=express.Router();
const adminController=require('../controller/adminController');

router.post('/admin',adminController.addAdmin)
router.get('/admin',adminController.getAdmin)
router.delete('/admin/:_id',adminController.deleteAdmin)
router.put('/admin/:_id',adminController.updateAdmin)
module.exports=router

