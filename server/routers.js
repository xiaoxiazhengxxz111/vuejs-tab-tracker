module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      // client request/provide from payload: to access client payload req.body.email
      message: `your user ${req.body.email} was registed!`
    })
  })
}
