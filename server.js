// BRING IN ALL DEPENDENCIES
const express = require('express')
const cors = require('cors')

// INSTANTIATE A EXPRESS SERVER
const app = express()

// START OUR DATABASE
require('./server/config/mongoose.config')

// CONFIGURE EXPRESS SERVER FOR POST REQUESTS AND CORS REQUEST
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CONNECT THE EXPRESS SERVER INSTANCE TO ROUTES
require('./server/routes/player.routes')(app)   // update filename!!!

// TURN ON EXPRESS SERVER 
app.listen(8000, () => {
    console.log("connecting to port 8000")
})