import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('formatPrice', function(value) {
  return parseFloat(value).toFixed(2).replace('.', ',')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
