const
    router = require('express').Router(),
    { login, register } = require('../controllers/authController')

router.post('/login',login)
router.post('/register',register)

module.exports = router