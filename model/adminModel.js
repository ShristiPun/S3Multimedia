const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//jsonwebtoken used for 

const Admin=mongoose.model('Admin',{
    user_name: {
        type: String,
        trim:true

},

    //trim used for 

    password: {
        type: String,
        trim:true
    },
    email: {
        type: String,
        trim:true
    },
    dob: {
        type: String,
        trim:true
    },

    gender: {
        type: String,
        trim:true
    },
    address: {
        type: String,
        trim:true
    },

    phone_number: {
        type: String,
        trim:true

    },
    image: {
        type: String,
        trim:true
    },
    tokens: [{
        token: {
            type: String
        }
    }]

})






module.exports= Admin

