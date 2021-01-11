const { Schema } = require('mongoose')
const User = require('./User')

const ticketSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    timeSpent: {
        timeStarted: {
            type: Date.now(),
            require: true,
            default:Date.now()
        },
        timeEndend: {
            type: Date,
            required: false
        }
    },
    technicianCreator: {
        type: User,
        required: true
    },
    clientAssociated: {
        type: User,
        required: true
    },
    ticketState: {
        type: Boolean,
        required: true,
        default: false
    },
    covalidatedByClient: {
        type: Boolean,
        required: false,
        default: false
    },
    comments: {
        user: {
            type: User,
            required: true
        },
        commentText: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)