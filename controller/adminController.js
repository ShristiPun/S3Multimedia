var adminModel=require('../model/adminModel');

exports.addAdmin=(req,res)=>{

    req.files.map(function(items){
        const admindata={
            image:items.filename,
            user_name:req.body.user_name,
            email:req.body.email,
            dob:req.body.dob,
            gender:req.body.gender,
            address:req.body.address,
            phone_number:req.body.phone_number,
            password:req.body.password
           

        }

    const admin=new adminModel(admindata)
admin.save().then(function(){
   res.send("admin data has been added")
}).catch(function(e){
    res.send(e)
})
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
    adminModel.findByIdAndUpdate(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
