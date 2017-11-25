import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// global state to strack
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    // Action handlers receive a context object which exposes the same set of methods/properties
    // on the store instance, so you can call context.commit to commit a mutation
    // argument destructuring
    // setToken2 (token) {
    //   token.commit('setToken')
    // },
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
