var userModel=require('../model/userModel');

exports.addUser=(req,res)=>{
    const user=new userModel(req.body)
user.save().then(function(result){
    console.log(result)
    res.send("user data has been added")
}).catch(function(e){
    res.send(e)
    console.log(e)
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
    userModel.findByIdAndDelete(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
