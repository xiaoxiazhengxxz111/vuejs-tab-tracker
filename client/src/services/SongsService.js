import Api from '@/services/Api'

export default {
  getAllSongs (search) {
    return Api().get('songs', {params: {search: search}})
  },
  getSongById (songId) {
    return Api().get(`songs/${songId}`)
  },
  createSong (song) {
    return Api().post('createsong', song)
  },
  saveSong (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
