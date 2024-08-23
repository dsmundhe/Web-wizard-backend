const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniquie: true
    },
    password: {
        type: String,
        
    },
    data: {
        type: [],
    }
    ,
    mobile: {
        type: String,
       
    },
    field:{
        type:String,
        
    }
}, {
    timestamps: true
})
const User = mongoose.model('user', UserModel);
module.exports = User;