import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import user from './user'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    app,
    user,
  },
  plugins: [ 
    createPersistedState({
      key: 'sheleader'
    }) 
  ]
})
