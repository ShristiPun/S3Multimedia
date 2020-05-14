var photographytypesModel=require('../model/photographytypesModel');

exports.addPhotographytypes=(req,res)=>{
    req.files.map(function(items){
        const photographytypesdata={
            image:items.filename,
            type_name:req.body.type_name,
            description:req.body.description,
            price:req.body.price

        }

  
    const photographytypes=new photographytypesModel(photographytypesdata)
    photographytypes.save().then(function(){
    //console.log(result)
    res.send("photographytypes data has been added")
}).catch(function(e){
    res.send(e)
    //console.log(e)
})
})
}
//req store value of form and url
//res send the message in the browser
exports.getPhotographytypes=(req,res)=>{
    photographytypesModel.find().then(function(photographytypesdata){
        res.send(photographytypesdata)

    }).catch(function(e){
        res.send(e)

        
    })
}

exports.deletePhotographytypes=(req,res)=>{
    photographytypesModel.findByIdAndDelete(req.params._id).then(function(){
        res.send("deleted")
    }).catch(function(){
        res.send(e)
    });
    

}

exports.updatePhotographytypes=(req,res)=>{
    photographytypesModel.findByIdAndUpdate(req.params._id,req.body).then(function(){
        res.send("updated")

}).catch(function(e){
        res.send(e)
    })
}
