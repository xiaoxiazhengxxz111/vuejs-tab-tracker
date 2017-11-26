import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  createSong (song) {
    return Api().post('createsong', song)
  },
  getSongById (songId) {
    return Api().get(`songs/${songId}`)
  }
}
