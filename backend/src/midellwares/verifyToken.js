const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const verifyToken = (req, res, next) => {
    const bearerHeader = req.header('authorization')
    const token = bearerHeader.split(' ')[1]
    if(typeof token === undefined){
        res.status(403).send("FORBIDDEN")
    }else if(typeof token !== undefined){
        jwt.verify(token,'secretKey',(err)=>{
            if(err){
                return res.status(403).send("FORBIDDEN")
            }
            next()
        })
    }
}
module.exports = {
    verifyToken
}