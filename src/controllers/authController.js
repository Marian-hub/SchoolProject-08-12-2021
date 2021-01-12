const
    User = require('../models/User'),
    cookieParser = require('cookie-parser'),
    jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    console.log(req.body)
    const { name, password, role } = req.body
    const userExists = User.findOne({ name: name }, (err, document) => {
        if (err) { console.log(err) }
        if (document === null) {
            try {
                const user = new User({
                    name: name,
                    password: password,
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
    const { name, password, role } = req.body
    const userExists = User.findOne({ name: name }, (err, document) => {
        if (document === null) { return res.status(404).send("user NOT FOUND") }
        //need jwt sign in
        jwt.sign({ name: name }, "secretKey", (err, token) => {
            console.log('logged IN')
            res.cookie("token", token, { httpOnly: true })
            return res.status(200).send("YOU LOGGED IN")
        })
    })
}