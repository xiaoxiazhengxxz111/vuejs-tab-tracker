<template>
    <panel title="YouTube Video" class="ml-2">
        <youtube 
            :video-id="youtubeId"
            :player-width="500"
            :player-height="300">
        </youtube>
    </panel>  
</template>

<script>
export default {
  props: ['youtubeId'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
