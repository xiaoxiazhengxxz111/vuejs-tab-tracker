<template>
<v-layout>
  <v-flex sx4>
    <panel title="Song Metadata"> 
      <v-text-field
        label="Title"
        required
        :rules="[required]" 
        v-model="song.title"
      ></v-text-field>

      <v-text-field
        label="Artist"
        required
        :rules="[required]" 
        v-model="song.artist"
      ></v-text-field>

      <v-text-field
        label="Genre"
        required
        :rules="[required]" 
        v-model="song.genre"
      ></v-text-field>

      <v-text-field
        label="Album"
        required
        :rules="[required]"  
        v-model="song.album"
      ></v-text-field>

      <v-text-field
        label="Album Image Url" 
        v-model="song.albumImageUrl"
      ></v-text-field>

      <v-text-field
        label="Youtube Id"
        required
        :rules="[required]"  
        v-model="song.youtubeId"
      ></v-text-field>
    </panel>
  </v-flex>

  <v-flex sx8>
    <panel title="Song details" class="ml-2">
      <v-text-field
        label="Lyrics"
        required
        :rules="[required]"  
        multi-line
        v-model="song.lyrics"
      ></v-text-field>

      <v-text-field
        label="Tab"
        required
        :rules="[required]" 
        multi-line
        v-model="song.tab"
      ></v-text-field>
    </panel>
    <div class="danger-alert" v-if="error"> {{error}} </div>
    <v-btn color="teal lighten-4"  dark @click ="saveSong" >Save</v-btn>
  </v-flex>   
</v-layout> 

</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    // call api
    async saveSong () {
      this.error = null
      const areAllFieldFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        // if all fine, put this edtion to api then redirect it
        await SongsService.saveSong(this.song)
        this.$router.push({
          name: 'song',
          params: {songId: songId}})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    // when i mounted, afficher all its song infor: getSongById
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.getSongById(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
