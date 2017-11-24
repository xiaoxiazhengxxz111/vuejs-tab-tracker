const Authentication = require('./controllers/Authentication')

module.exports = (app) => {
  app.post('/register', Authentication.register)
}
