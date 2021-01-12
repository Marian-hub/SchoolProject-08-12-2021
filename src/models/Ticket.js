const mongoose = require('mongoose')
const User = require('./User')
const user = User.schema
const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    timeStarted: {
        type: Date,
        require: true,
        default: Date
    },
    timeEnded: {
        type: Date,
        required: false
    },
    technicianCreator: {
        type: user,
        required: true
    },
    clientAssociated: {
        type: user,
        required: true
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
        type:Array,
        userCommenting: {
            type: user,//
            required: false
        },
        commentText: {
            type: String,
            required: false
        },
        
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)