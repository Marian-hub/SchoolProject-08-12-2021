const
    Ticket = require('../models/Ticket');
//storaing the token given by the server in cookies
const createTicket = (req, res) => {
    const { title, timeStarted, timeEnded, technicalCreator, clientAssociated } = req.body
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
}
const getTicket = (req, res) => {
    const { title } = req.params
    Ticket.findOne({ title: title }, (err, doc) => {
        if (err) return res.status(404).send("There is no  ticket with that title")
        res.status(200).send(doc)
    })
}
const getAllTickets = (req, res) => {
    Ticket.findOne({}, (err, documents) => {
        if (err) return res.status(500).send("COULD NOT RETRIVE DATA")
        res.status(200).send(documents)
    })
}
module.exports = {
    createTicket,
    getTicket,
    getAllTickets
}