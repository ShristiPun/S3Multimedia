var userModel=require('../model/userModel');

exports.addUser=(req,res)=>{

    req.files.map(function(items){
        const userdata={
            image:items.filename,
            user_name:req.body.user_name,
            email:req.body.email,
            dob:req.body.dob,
            gender:req.body.gender,
            address:req.body.address,
            phone_number:req.body.phone_number,
            password:req.body.password
           

        }

    const user=new userModel(userdata)
user.save().then(function(){
    res.send("user data has been added")
}).catch(function(e){
    res.send(e)
 
})
})
}

exports.getUser=(req,res)=>{
    userModel.find().then(function(userdata){
        res.send(userdata)

    }).catch(function(e){
        res.send(e)

        
    })
}

exports.deleteUser=(req,res)=>{
    userModel.findByIdAndDelete(req.params._id).then(function(){
        res.send("deleted")
    }).catch(function(){
        res.send(e)
    });
    

}

exports.updateUser=(req,res)=>{
    userModel.findByIdAndUpdate(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
