const express = require('express')
const router = express.Router()
const User = require('../modals/userModal')

router.post('/register', (req, res) => {
    User.find({ email: req.body.email }, (err, docs) => {
        if (docs.length > 0) {
            return res.status(400).json({ message: 'User already exists' })


        }
        else {
            const newUser = new User(req.body)

            newUser.save(err => {
                if (!err) {
                    res.send('User Registration Success')
                }
                else
                    res.send('Something went wrong')
            })
        }
        if (err) {
            return res.status(400).json({ message: 'Something went wrong' })
        }
    })

})

router.post("/login", (req, res) => {

    User.find({ email: req.body.email, pass: req.body.pass }, (err, docs) => {
        if (docs.length > 0) {
            const user = {
                name: docs[0].name,
                _id: docs[0]._id,
                email: docs[0].email
            }
            res.send(user)
        } else {
            return res.status(400).json({ message: 'Invalid Credentials' })

        }
    })
})

module.exports = router