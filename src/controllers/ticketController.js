const jwt = require('jsonwebtoken')
//storaing the token given by the server in cookies
exports.getTicket = (req, res) => {
    jwt.sign(req.token,'secretKey',(err,authData)=>{
        if(err){
            return res.status(403).send("FORBIDDEN")
        }
        res.status(200).send("WELCOME")
    })
}