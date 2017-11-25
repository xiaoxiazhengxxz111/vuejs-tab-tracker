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

        <div v-for="song in songs" :key="song.id">
          {{song.title}} - 
          {{song.artist}} -
          {{song.album}}
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
</style>
