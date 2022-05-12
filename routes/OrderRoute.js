const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const stripe = require('stripe')('sk_test_51KyfVaSJLir7fHVuWyseSLtqFC3dN3lWVK6gxApYEFOD1g8JFlsvYRhQQWXG2nQqGNhAlLZiQjnVpgvFGXaGUkVA00TV8Gd5VA')

router.post("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body
    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    })

    const payment = await stripe.charges.create({
        amount: subtotal * 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email: token.email

    }, {
        idempotencyKey: uuidv4()
    })

    if (payment) {
        res.send('Payment Successful')
    } else {
        return res.status(400).json({ message: 'Payment Failed' })
    }
})

module.exports = router
