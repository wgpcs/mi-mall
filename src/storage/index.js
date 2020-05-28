// storage 封装
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let item = this.getStorage()
      item[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(item))
    }
  },
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) || {}
  },
  clear(key, module_name) {
    let item = this.getStorage()
    if (Object.keys(item).length == 0) return
    if (module_name) {
      if (!item[module_name]) return
      delete item[module_name][key]
    } else {
      delete item[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(item))
  },
}
