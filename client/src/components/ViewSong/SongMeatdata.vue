<template>
    <panel title="Songs-view">
        <v-layout>            
            <v-flex xs6>
                <img :src="song.albumImageUrl"  class="album-imag">
                <div class="song-album">{{song.album}}</div>
            </v-flex>
            <v-flex xs6>
                <div class="song-title">{{song.title}}</div>
                <div class="song-artist">{{song.artist}}</div>
                <div class="song-genre">{{song.genre}}</div>
                <v-btn 
                color="teal lighten-4"  
                dark 
                @click ="navigateTo({name: 'editsong', params: {songId: song.id}})" 
                >Edit</v-btn>
            </v-flex>
        </v-layout>
    </panel>

</template>

<script>

export default {
  props: ['song'],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>