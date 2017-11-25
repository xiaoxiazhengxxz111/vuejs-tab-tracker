<template>
    <div class="white elevation-2">
      <v-toolbar flat dense class="teal lighten-4" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot name="hello"></slot>
        <slot name="bye"></slot>
      </div>
    </div>
  </v-flex>
</v-layout>   
  
</template>

<script>
export default {
  props: [
    // receive data from its parent song vue
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
