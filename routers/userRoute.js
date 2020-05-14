const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.post('/user',userController.addUser)
router.get('/user',userController.getUser)
router.delete('/user/:_id',userController.deleteUser)
router.put('/user/:_id',userController.updateUser)
module.exports=router
