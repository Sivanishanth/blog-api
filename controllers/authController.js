const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const { use } = require('react')

// function for Register
const register = async (req , res)=>{
    const { name , email , password } = req.body
    const hashedPassword = await bcrypt.hash(password,10)

    const user = new User({
        name : name,
        email : email,
        password : hashedPassword
    })
    await user.save()
    res.json({ message : 'User Registered'})
}

// function for login 
const login = async (req , res) =>{
    const { email , password} = req.body
    const userLogin = await User.findOne({email : email})
    if (!userLogin){
        res.json({message: "Invalid Credentials"})
        return  
    }

    //password  checking

    const isMatch = await bcrypt.compare(password , userLogin.password)
    if(!isMatch){
        res.json({message : "Password Invalid"})
        return 
    }

    //token generating

    const token = jwt.sign(
        {userId : userLogin._id},
        'secretkey',
        {expiresIn: '1h'}
    )
    res.json({token})
}

module.exports = {register ,login}