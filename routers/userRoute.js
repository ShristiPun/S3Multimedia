const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.post('/user',userController.addUser)
router.get('/user',userController.getUser)
router.delete('/user',userController.deleteUser)
router.put('/user',userController.updateUser)
module.exports=router
