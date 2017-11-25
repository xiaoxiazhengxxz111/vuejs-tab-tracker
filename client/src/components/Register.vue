<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Register">
      <form>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="password"
            type="password"
            v-model="password"
          ></v-text-field>
          <div v-html="error" class="error"></div>
          <br>         
          <v-btn color="teal lighten-4"  dark @click ="register" >Regsiter</v-btn>      
        </div>
      </form>
    </panel> 
  </v-flex>
</v-layout>  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Register',
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
