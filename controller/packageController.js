var packageModel=require('../model/packageModel');

exports.addPackage=(req,res)=>{

    req.files.map(function(items){
        const packagedata={
            image:items.filename,
            package_name:req.body.package_name,
            description:req.body.description,
            price:req.body.price
        }


    const package=new packageModel(packagedata)
    package.save().then(function(){
 
    res.send("Package data has been added")
}).catch(function(e){
    res.send(e)
})
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
    packageModel.findByIdAndUpdate(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
