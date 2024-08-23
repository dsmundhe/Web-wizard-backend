const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 6000;
const { router } = require('./routes/routers');
const { dbConnection } = require('./config/db');
const cors = require('cors');

// CORS connections
app.use(cors());

// DB connection
dbConnection();

// Middleware to parse JSON
app.use(express.json());

// Uncomment the route if you want to use it
app.use('/data', router);

 

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}...`);
});
