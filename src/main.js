import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
