import axios from 'axios'
import env from '../config/env'

axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    // 未登录
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

export default axios
