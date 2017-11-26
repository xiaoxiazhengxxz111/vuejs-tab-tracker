<template>
  <v-toolbar fixed class="teal lighten-4" dark>
    <v-toolbar-title class="mr-4">
      <v-toolbar-items >
        <v-btn 
          flat 
          dark
          :to="{ path: '/' }"
        >TabTracker</v-btn>
      </v-toolbar-items >     
    </v-toolbar-title>
    <v-toolbar-items >
      <v-btn 
        flat 
        dark
        :to="{ path: 'songs'}" 
      >Browser</v-btn>  
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn 
        flat 
        dark 
        v-if="!$store.state.isUserLoggedIn"
        :to="{ path: 'login'}" 
      >Login</v-btn> 
    </v-toolbar-items>
    <v-toolbar-items >
        <v-btn 
          flat 
          dark 
          v-if="$store.state.isUserLoggedIn"
          @click ="logout"
        >Log out</v-btn>
    </v-toolbar-items> 
    <v-toolbar-items >
        <v-btn 
          flat 
          dark 
          v-if="!$store.state.isUserLoggedIn"
          :to="{ path: 'register'}"
        >Sign up</v-btn> 
    </v-toolbar-items>    
  </v-toolbar>  
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
