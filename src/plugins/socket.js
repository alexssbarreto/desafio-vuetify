import Vue from 'vue'
import VueEcho from 'vue-echo'

window.io = require('pusher-js')

Vue.use(VueEcho, {
  broadcaster: 'pusher',
  key: '090a727ee9765ff0f10e',
  wsHost: window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  disableStats: true
})
