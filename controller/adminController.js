var adminModel=require('../model/adminModel');

exports.addAdmin=(req,res)=>{
    const admin=new adminModel(req.body)
admin.save().then(function(result){
    console.log(result)
    res.send("amin data has been added")
}).catch(function(e){
    res.send(e)
    console.log(e)
})
}

exports.getAdmin=(req,res)=>{
    adminModel.find().then(function(admindata){
        res.send(admindata)

    }).catch(function(e){
        res.send(e)

        
    })
}

exports.deleteAdmin=(req,res)=>{
    adminModel.findByIdAndDelete(req.params._id).then(function(){
        res.send("deleted")
    }).catch(function(){
        res.send(e)
    });
    

}

exports.updateAdmin=(req,res)=>{
    adminModel.findByIdAndDelete(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
