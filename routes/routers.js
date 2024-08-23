const express = require('express');
const router = express.Router();
const  User  = require('../models/usermodels');
const {signup,login}=require('../controllers/controllers')

 
router.post('/signup',signup);
router.post('/login',login)

module.exports = { router }