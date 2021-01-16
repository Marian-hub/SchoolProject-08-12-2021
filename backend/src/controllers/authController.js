const
    User = require('../models/User'),
    cookieParser = require('cookie-parser'),
    jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    console.log(req.body)
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

exports.login = (req, res) => {
    console.log("tryingto login")
    const { name, role } = req.body
    const userExists = User.findOne({ name: name }, (err, document) => {
        if (document === null) { return res.status(404).send("user NOT FOUND") }
        //need jwt sign in
        jwt.sign({ name: name, role: role }, "secretKey", (err, token) => {
            console.log(token)
            res.cookie('jwtToken',token,{httpOnly:true})
            res.cookie("token", token, { httpOnly: true })
            return res.status(200).send("YOU LOGGED IN")
        })
    })
}