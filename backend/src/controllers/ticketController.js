const
    Ticket = require('../models/Ticket'),
    jwt = require('jsonwebtoken');

const getUserByToken = (req, res) => {
    const usertoken = req.header('authorization')
    if (typeof usertoken === 'undefined') {
        return res.status(403).send("FORBIDDEN")
    }else{
        const token = usertoken.split(' ')[1];
        const user = jwt.verify(token, 'secretKey');
        return user
    }
}
const createTicket = (req, res) => {
    const user = getUserByToken(req, res)
    const { title, timeStarted, timeEnded, technicalCreator, clientAssociated } = req.body

    if (user.role === "technician") {
        try {
            const ticket = new Ticket({
                title: title,
                timeStarted: timeStarted,
                timeEnded: timeEnded,
                technicalCreator: technicalCreator,
                clientAssociated: clientAssociated
            })
            ticket.save()
            return res.status(200).send(ticket)
        } catch {
            return res.status(500).send("Could not create Ticket")
        }
    } else {
        return res.status(403).send("FORBIDDEN")
    }
}
const updateTicket = (req, res) => {
    const { name, ticketState, covalidatedByClient } = req.body
    if (typeof covalidatedByClient !== 'undefined' && typeof ticketState !== 'undefined') {
        if (typeof covalidatedByClient !== 'undefined') {
            Ticket.findOneAndUpdate({ name: name }, { ticketState: ticketState }, (err, doc) => {
                if (err) return res.status(500).send("COULD NOT MODIFY THE TICKET")
                res.status(200).send(doc)
            })
        } else {
            Ticket.findOneAndUpdate({ name: name }, { covalidatedByClient: covalidatedByClient }, (err, doc) => {
                if (err) return res.status(500).send("COULD NOT MODIFY THE TICKET")
                res.status(200).send(doc)
            })
        }
    } else {
        return res.status(500).send("no state to be cahnged given")
    }
}

const getTicket = (req, res) => {
    const { title } = req.body
    Ticket.findOne({ title: title }, (err, doc) => {
        if (err) return res.status(404).send("There is no  ticket with that title")
        res.status(200).send(doc)
    })
}
const getAllTickets = (req, res) => {
    const user = getUserByToken(req, res)
    if (typeof user !== 'undefined') {
        Ticket.find({}, (err, documents) => {
            if (err) return res.status(500).send("COULD NOT RETRIVE DATA")
            res.status(200).send(documents)
        })
    }
}
const addComment = (req, res) => {
    const user = getUserByToken(req, res)
    const { title, textContent } = req.body
    const userComment = {
        userCommenting: user,
        textContent: textContent
    }
    Ticket.findOneAndUpdate({ title: title }, { $push:{ comments: userComment } }, (err, doc) => {
        if (err) return res.status(500).send("error in finding the ticket")
        res.status(200).send(doc)
    })
}
module.exports = {
    createTicket,
    getTicket,
    getAllTickets,
    updateTicket,
    addComment
}