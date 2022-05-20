const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const dbconnect = require('./dbconnect')
var UserRoute = require('./routes/UserRoute')
var ProductRoute = require('./routes/ProductRoute')
var OrderRoute = require('./routes/OrderRoute')
app.use(bodyParser.json())
app.use("/api/products/", ProductRoute)
app.use("/api/users/", UserRoute)
app.use("/api/orders/", OrderRoute)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Server started on server 5000"))