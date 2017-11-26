<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <search-panel />
      <song-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchPanel from './SongSearchPanel'
import SongPanel from './SongPanel'
import SongsService from '@/services/SongsService'

export default {
  name: 'Songs',
  components: {
    SongPanel,
    SearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album-imag {
  width: 70%;
  margin: 0 auto;
}
.song-title{
  font-size: 24px
}
.song-artist{
  font-size: 18px
}
.song-album{
  font-size: 18px
}
.song-genre{
  font-size: 10px
}
</style>
