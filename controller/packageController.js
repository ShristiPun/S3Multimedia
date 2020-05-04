var packageModel=require('../model/packageModel');

exports.addPackage=(req,res)=>{
    const package=new packageModel(req.body)
    package.save().then(function(result){
    console.log(result)
    res.send("Package data has been added")
}).catch(function(e){
    res.send(e)
    console.log(e)
})
}

exports.getPackage=(req,res)=>{
    packageModel.find().then(function(packagedata){
        res.send(packagedata)

    }).catch(function(e){
        res.send(e)

        
    })
}

exports.deletePackage=(req,res)=>{
    packageModel.findByIdAndDelete(req.params._id).then(function(){
        res.send("deleted")
    }).catch(function(){
        res.send(e)
    });
    

}

exports.updatePackage=(req,res)=>{
    packageModel.findByIdAndDelete(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
