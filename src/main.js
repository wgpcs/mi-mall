import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import axios from './api/axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import '@/assets/scss/index.scss'

// mock 开关
const mock = true
if(mock){
  require('../mock/api')
}
Vue.use(Element, { size: 'small' })
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
