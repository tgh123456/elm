import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/reset.css'
import '@/assets/js/buju.js'

Vue.use(VueAxios,axios)
new Vue({
  el: '#app',
  router,
  components: { 
	  App
	},
  template: '<App/>',
})