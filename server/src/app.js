const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// init app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(morgan('combine'))
app.use(cors())

// routers
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello'
  })
})

// set up server
app.listen(process.env.PORT || 8081)
