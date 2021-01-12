const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ticketSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    timeStarted: {
        type: Date,
        require: false,
        default: Date
    },
    timeEnded: {
        type: Date,
        required: false
    },
    technicianCreator: {
        type: String,//user.name
        required: false
    },
    clientAssociated: {
        type: String,//user.name
        required: false
    },
    ticketState: {
        type: Boolean,
        required: false,
        default: false
    },
    covalidatedByClient: {
        type: Boolean,
        required: false,
        default: false
    },
    comments: {
        user: {
            type: String,//client.comment
            required: false
        },
        commentText: {
            type: String,
            required: false
        },
        require:false
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)