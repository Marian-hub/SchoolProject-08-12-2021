const { reset } = require('nodemon');

const
    router = require('express').Router(),
    { getTicket, createTicket, getAllTickets } = require('../controllers/ticketController'),
    { verifyToken } = require('../midellwares/verifyToken');
//use verify token to create protected route after
//using not protected routes just for developpment purposes
router.get('/getTicket/:title', getTicket)
router.get('/getAllTickets',getAllTickets)
router.post('/createTicket', createTicket)

module.exports = router