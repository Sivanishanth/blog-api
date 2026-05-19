const cors = require('cors')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const blogRouters = require('./routes/blog')

const app = express()
app.use(cors({
    origin : "*" ,
    credentials : true
}))
app.use(express.json())
app.use('/auth',auth)
app.use('/blog',blogRouters)

mongoose.connect(process.env.MONGO_DB_URL)
.then(()=> console.log('connected database...'))
.catch(err =>{
    console.log(err)
})

app.listen(process.env.PORT ,()=>{
    console.log('Server running on port 5000')
})