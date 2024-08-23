const express = require('express');
const router = express.Router();
const  User  = require('../models/usermodels');
const {signup,login,addData}=require('../controllers/controllers')

 
router.post('/signup',signup);
router.post('/login',login);
router.post('/add',addData);

module.exports = { router }