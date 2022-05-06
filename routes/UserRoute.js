const express = require('express')
const router = express.Router()
const User = require('../modals/userModal')

router.post('/register', (req, res) => {
    const newUser = new User(req.body)
    newUser.save(err => {
        if (!err)
            res.send('User Registration Success')
        else
            res.send('Something went wrong')
    })
})

module.exports = router