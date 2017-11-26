<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout >
      <v-flex xs6 x class="mt-2">
        <tab :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2 mt-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>    
  </div>

</template>

<script>
import SongMetadata from './SongMeatdata'
import YouTube from './YouTube'
import Tab from './Tab'
import Lyrics from './Lyrics'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.getSongById(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Tab,
    Lyrics
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
