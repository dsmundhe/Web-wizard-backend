const User = require('../models/usermodels');
const Mentor = require('../models/mentormodel');
const signup = async (req, res) => {
    try {
        const { name, email, password, mobile, data, field } = req.body
        const newData = User({
            name,
            email,
            password,
            mobile,
            data,
            field
        });
        const user = await User.findOne({ email });
        if (user) {
            res.json({ msg: "User already exist.....", result: false })
        }
        else if (!user) {
            await newData.save();
            res.json({ msg: 'Sing up successful....', result: true })
        }
    } catch (error) {
        res.send(error.message)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isMatch = await User.findOne({ email, password });
        console.log(isMatch)
        if (isMatch) {
            res.json({ msg: "Login successful..." });
        }
        else if (!isMatch) {
            res.json({ msg: 'Check email and password...' })
        }
        else {
            res.json({ msg: 'Connection refused...' })
        }
    } catch (error) {
        res.json({ msg: error.message });
    }
}
const addData = async (req, res) => {
    try {
        const { email, password, data } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            await user.updateOne({ $push: { data: data } });
            res.json({ msg: 'Data added....' })
        }
        else if (!user) {
            res.json({ msg: 'User not found' })
        }

    } catch (error) {
        res.json({ msg: error.message })
    }
}
const mentorsignup = async (req, res) => {
    try {
        const { name, email, password, phone, field } = req.body;
        const user = await Mentor.findOne({ email });
        const newData = await Mentor({
            email,
            password,
            phone,
            field,
            name
        })
        if (user) {

            res.json({ msg: 'Mentor already exist' });
        }
        else if (!user) {
            await newData.save();
            res.json({ msg: "Singup Successful..." })
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
}
const mentorlogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Mentor.findOne({ email, password });
        if (user) {
            res.json({ msg: 'Login successful....', result: true });
        }
        else if (!user) {
            res.json({ msg: "Check email and password.....", result: false })
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
}
const getUsers = async (req, res) => {
    try {
        const data = await User.find();

        res.json({ data });
    } catch (error) {
        res.json({ msg: error.message })
    }
}
module.exports = { signup, login, addData, mentorsignup, mentorlogin, getUsers }