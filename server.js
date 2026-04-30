const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const blogRouters = require('./routes/blog')

const app = express()

app.use(express.json())
app.use('/auth',auth)
app.use('/blog',blogRouters)

mongoose.connect('mongodb+srv://admin:admin@cluster0.xxnvjca.mongodb.net/?appName=Cluster0')
.then(()=> console.log('connected database...'))
.catch(err =>{
    console.log(err)
})

app.listen(6000 ,()=>{
    console.log('Server running on port 6000')
})