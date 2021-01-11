// this file is used just becouse a I want to be able to import 
// all the routes in the main file (app.js) more easly and to 
// create a more readable code 
const
    router = require('express').Router(),
    authRouter = require('./authRouter'),
    ticketRouter = require('./ticketRouter');

router.use(authRouter)
router.use(ticketRouter)

module.exports = router