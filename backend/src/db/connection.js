require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
exports.connectDB = mongoose.connect(process.env.DATABASE_URL,(err)=>{
    if(err){
        console.log(err)
        return err
    }
    console.log("SUCCESSFULLY CONNECTED TO DB")
},{'useFindAndModify':false})

