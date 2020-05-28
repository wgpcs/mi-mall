<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import jsonp from 'jsonp'
// import storage from './storage'
export default {
  name: 'App',
  data(){
    return{
      res: {}
    }
  },
  mounted(){
    // storage.setItem('name', 'jim')
    // storage.setItem('wgp',{name: 'wgp'})
    // storage.setItem('age',32, 'wgp')
    // storage.clear('name','wgp')
    this.axios.get('/user/login').then((res)=>{
      this.res = res
    })
  }
}
</script>

<style>
</style>
