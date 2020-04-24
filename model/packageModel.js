const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//jsonwebtoken used for 

const Package=mongoose.model('Package',{
    package_name: {
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
    }
})






module.exports= Package

