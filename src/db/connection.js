require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
exports.connectDB = mongoose.connect(process.env.DATABASE_URL,(err)=>{
    if(err){
        console.log(err)
        return err
    }
    //created Initial Model to create as well the mongodb datattbase
    // const user = new User({
    //     name:"Admin",
    //     role:"technician",
    //     password:"admin"
    // })
    // user.save()
    
    console.log("SUCCESSFULLY CONNECTED TO DB")
},{'useFindAndModify':false})

