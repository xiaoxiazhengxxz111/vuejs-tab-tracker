<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
      <form>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="password"
              type="password" 
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <div v-html="error" class="error"></div>
          <br>         
          <v-btn color="teal lighten-4"  dark @click ="login" >Login</v-btn>      
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
  name: 'Login',
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // dispatch/sned actions in components with this.$store.dispatch('xxx')
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
/* .error {
  color: red
} */
</style>
