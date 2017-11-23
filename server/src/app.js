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
app.post('/register', (req, res) => {
  res.send({
    // client request/provide from payload: to access client payload req.body.email
    message: `your user ${req.body.email} was registed!`
  })
})

// set up server
app.listen(process.env.PORT || 8081)
