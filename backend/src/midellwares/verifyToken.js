const jwt= require('jsonwebtoken')
const verifyToken =  (req,res,next)=>{
    const bearerHeader = req.headers['authorization']
    const token = bearerHeader.split(' ')[1]
    if(typeof  token  !=='undefined') return res.status(403).send("FORBIDDEN")
    jwt.verify(token,'secretKey',(err,user)=>{
        if(err) return res.status(403).send("FORBIDDEN")
        req.user = user
        next()
    })
}
module.exports = {
    verifyToken
}