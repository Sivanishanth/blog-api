require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const { use } = require('react')

// function for Register
const register = async (req, res) => {
    try {
        let { name, email, password } = req.body

        //Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All Field Required"
            })
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Weak Password less than 6 characters...!"
            })
        }

        //Email Validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invaild Email Format..!"
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        await user.save()
        res.status(201).json({ message: 'User Registered' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


// function for login 
const login = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password Required..."
            })
        }
        const userLogin = await User.findOne({ email: email })
        if (!userLogin) {
            res.status(401).json({ message: "Invalid Credentials" })
            return
        }

        //password  checking

        const isMatch = await bcrypt.compare(password, userLogin.password)
        if (!isMatch) {
            res.status(401).json({ message: "Password Invalid" })
            return
        }

        //token generating

        console.log(process.env.JWT_KEY)
        const token = jwt.sign(
            { userId: userLogin._id },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        )
        res.json({ token })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = { register, login }