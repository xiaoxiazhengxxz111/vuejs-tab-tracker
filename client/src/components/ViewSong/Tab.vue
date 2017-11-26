<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: ['song'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
