<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs title pass to child panle component">
        <div slot="hello">
          <h3>hello slot</h3>
          <p>hello</p>
        </div>
        <div slot="bye">
          <h3>bye slot</h3>
          <p>bye bye</p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
