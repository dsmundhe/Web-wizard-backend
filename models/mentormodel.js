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
        requried: true
    },
    field: {
        type: String,
        requried: true
    }
})
const Mentor = mongoose.model('mentor', mentorModel);
module.exports = Mentor