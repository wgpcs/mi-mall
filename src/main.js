import Vue from 'vue'
import router from './router'
import axios from './api/axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// mock 开关
const mock = true
if(mock){
  require('../mock/api')
}

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
