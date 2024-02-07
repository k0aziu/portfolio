import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Styl Vuesax
import App from './App.vue'
import router from './router'
import 'boxicons/css/boxicons.min.css' // Dodanie stylów boxicons

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
