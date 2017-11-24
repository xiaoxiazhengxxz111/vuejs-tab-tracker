const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

// init app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(morgan('combine'))
app.use(cors())

// routers
require('./routers')(app)

// set up server
sequelize.sync()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server start on part ${config.port}`)
    })
  })
