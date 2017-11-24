const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'This email account is already used.'
      })
    }
  },

  async login (req, res) {
    try {
      // get input infor from ui
      const {email, password} = req.body
      const user = await User.findOne({
        where: {email: email}
      })
      if (!user) {
        res.status(403).send({error: 'The login information was incorrect'})
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({error: 'The password was incorrect'})
      }

      // if all fine will send back use json to client
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        tocken: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(500).send({
        error: 'An error as occured trying to login.'
      })
    }
  }
}
