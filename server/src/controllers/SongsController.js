const {Song} = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {$like: `%${search}%`}
            }))
          }
        })
      } else {
        songs = await Song.findAll({limit: 10})
      }
      res.send(songs)
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
  },
  async saveEditSong (req, res) {
    try {
      await Song.update(req.body, {
        where: {id: req.params.songId}
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update a song'
      })
    }
  },

  async getSongById (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  }
}
