const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['client', 'manager', 'technician'],
        default: "client",
        required: false,
    },
    name: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model("User",userSchema)