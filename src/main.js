import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store/index.js'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import $ from 'jquery'

import '../static/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
