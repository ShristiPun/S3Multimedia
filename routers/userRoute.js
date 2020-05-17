const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');
const upload=require('../middleware/uploadfile');

router.post('/user',upload,userController.addUser)
router.get('/user',userController.getUser)
router.delete('/user/:_id',userController.deleteUser)
router.put('/user/:_id',userController.updateUser)
module.exports=router
