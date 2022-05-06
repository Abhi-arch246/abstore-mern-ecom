const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var dbconnection = require('./dbconnect')
var UserRoute = require('./routes/UserRoute')
var ProductRoute = require('./routes/ProductRoute')
app.use(bodyParser.json())
app.use("/api/products/", ProductRoute)
app.use("/api/users/", UserRoute)
app.get("/", (req, res) => {
    res.send("Response is working")
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log("Server started on server 5000"))