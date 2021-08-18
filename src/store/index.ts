import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import chat from '@/store/modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state: {},
  modules: {
    chat
  }
})
