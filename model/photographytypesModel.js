const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//jsonwebtoken used for 

const PhotographyTypes=mongoose.model('PhotographyTypes',{
    type_name: {
        type: String,
        trim:true

},

    //trim used for 

    description: {
        type: String,
        trim:true
    },
    price: {
        type: String,
        trim:true
    },
    image: {
        type: String,
        trim:true
    }
    
})






module.exports= PhotographyTypes

