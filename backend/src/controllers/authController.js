const
    User = require('../models/User'),
    jwt = require('jsonwebtoken');

const register = (req, res) => {
    const { name, role } = req.body
    const userExists = User.findOne({ name: name, role: role }, (err, document) => {
        if (err) { console.log(err) }
        if (document === null) {
            try {
                const user = new User({
                    name: name,
                    role: role
                })
                user.save()
                res.status(200).send("User has been created")
            } catch {
                res.status(500).send("User COULD NOT be created")
            }
        } else if (document !== null) {
            return res.status(401).send("User ALREADY exists")
        }
    })



}

const login = (req, res) => {
    console.log("tryingto login")
    const { name, role } = req.body
    console.log(req.body)
    const userExists = User.findOne({ name: name }, (err, document) => {
        if (document === null) { return res.status(404).send("user NOT FOUND") }
        //need jwt sign in
        jwt.sign({ name: name, role: role }, "secretKey", (err, token) => {
            res.cookie('token',token,{httpOnly:false}).send()
        })
    })
}
module.exports = {
    login,
    register
}