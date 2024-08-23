const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('Monogo DB connected....')
    }
    catch (error) {
        console.log(error.message);
    }
}
module.exports={dbConnection}