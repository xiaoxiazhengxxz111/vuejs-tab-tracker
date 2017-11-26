<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs"> 
        <v-btn
          slot="action"
          @click="navigateTo ({name: 'createsong'})"            
          class="teal lighten-4"
          light
          medium
          absolute
          right
          middle
          fab
        ><v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>            
            <v-flex xs6>
              <img :src="song.albumImageUrl"  class="album-imag">
            </v-flex>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-album">{{song.album}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn 
                color="teal lighten-4"  
                dark 
                @click ="navigateTo({name: 'song', params: {songId: song.id}})" 
                >View</v-btn>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
