import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import VueI18n from 'vue-i18n'
import { messages, defaultLocale } from '@/i18n'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueI18n)

const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale
})

require('./plugins/socket.js')

new Vue({
  vuetify,
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
