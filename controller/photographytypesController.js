var photographytypesModel=require('../model/photographytypesModel');

exports.addPhotographytypes=(req,res)=>{
    const photographytypes=new photographytypesModel(req.body)
    photographytypes.save().then(function(result){
    console.log(result)
    res.send("photographytypes data has been added")
}).catch(function(e){
    res.send(e)
    console.log(e)
})
}

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
