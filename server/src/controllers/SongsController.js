const {Song} = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const song = await Song.findAll({limit: 10})
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },

  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create a song'
      })
    }
  }
}
