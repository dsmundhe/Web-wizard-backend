const User = require('../models/usermodels')
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newData = User({
            name,
            email,
            password
        });
        const user = User.findOne({ email });
        if (user) {
            res.json({ msg: "User already exist....." })
        }
        console.log(name, email);
        await newData.save();
        res.json({ msg: 'Sing up successful....' })
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
module.exports = { signup, login }