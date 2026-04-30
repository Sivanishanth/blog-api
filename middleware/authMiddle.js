const jwt = require('jsonwebtoken')

const protect = (req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        return res.json({message : "No such Token"})
    }

    const decoded = jwt.verify(token,'secretkey')
    req.user = decoded
    next() 
}

module.exports = protect