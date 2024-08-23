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
        required: true,
    },
    data: {
        type: [],
    }
    ,
    mobile: {
        type: String,
        required: true
    },
    field:{
        type:String,
        required:true,
    }
}, {
    timestamps: true
})
const User = mongoose.model('user', UserModel);
module.exports = User;