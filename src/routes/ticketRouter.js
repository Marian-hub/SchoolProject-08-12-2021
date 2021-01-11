const 
    router = require('express').Router(),
    { getTicket} = require('../controllers/ticketController'),
    verifyToken = require('../midellwares/verifyToken');

router.get('/ticket',verifyToken,getTicket)
module.exports = router