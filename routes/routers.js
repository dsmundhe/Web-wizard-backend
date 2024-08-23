const express = require('express');
const router = express.Router();
const User = require('../models/usermodels');
const { signup, login, addData, mentorsignup,mentorlogin,getUsers } = require('../controllers/controllers')


router.post('/signup', signup);
router.post('/login', login);
router.post('/add', addData);
router.post('/mentorsignup', mentorsignup);
router.post('/mentorlogin', mentorlogin);
router.get('/getdata',getUsers);

module.exports = { router }