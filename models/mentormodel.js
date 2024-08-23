const mongoose = require('mongoose');

const mentorModel = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true,
        uniquie: true
    },
    password: {
        type: String,
        
    },
    field: {
        type: String,
         
    }
})
const Mentor = mongoose.model('mentor', mentorModel);
module.exports = Mentor