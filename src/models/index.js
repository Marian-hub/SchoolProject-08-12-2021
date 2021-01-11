// this file is used just becouse a I want to be able to import 
// all the MODELS in the main file (app.js) more easly and to 
// create a more readable code 
const
    Ticket = require('./Ticket'),
    User = require('./User');

module.exports =  {
    Ticket,
    User
}