const
    router = require('express').Router(),
    {
        getTicket,
        createTicket,
        getAllTickets,
        updateTicket,
        addComment
    } = require('../controllers/ticketController'),
    { verifyToken } = require('../midellwares/verifyToken');

router.get('/getTicket', verifyToken, getTicket)
router.get('/getAllTickets', verifyToken, getAllTickets)
router.post('/createTicket', verifyToken, createTicket)
router.post('/updateTicket', verifyToken, updateTicket)
router.post('/addComment', verifyToken, addComment)
module.exports = router