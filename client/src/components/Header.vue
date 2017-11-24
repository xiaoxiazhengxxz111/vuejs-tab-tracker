<template>
  <v-toolbar fixed class="teal lighten-4" dark>
    <v-toolbar-title class="mr-4">
      <router-link :to="{ path: '/' }">
        <v-btn 
          flat 
          dark 
          class="navbtn"
          v-if="!$store.state.isUserLoggedIn"
        >TabTracker</v-btn>
      </router-link>      
    </v-toolbar-title>
     <v-toolbar-items >
      <v-btn 
        flat 
        dark 
        class="navbtn"
        v-if="!$store.state.isUserLoggedIn"
      >Browser</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <router-link :to="{ path: 'login' }">
        <v-btn 
          flat 
          dark 
          class="navbtn"
          v-if="!$store.state.isUserLoggedIn"
        >Login</v-btn>
    </router-link>      
    </v-toolbar-items> 
    <v-toolbar-items >
      <router-link :to="{ path: 'register' }">
        <v-btn 
          flat 
          dark 
          class="navbtn" 
          v-if="!$store.state.isUserLoggedIn"
        >Sign up</v-btn>
      </router-link>      
    </v-toolbar-items>    
  </v-toolbar>  
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbtn:hover {
  color:blue
}

</style>
