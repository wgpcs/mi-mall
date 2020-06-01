<!--  -->
<template>
  <div :class="classObj" class="app-wrapper">
    <WHeader class="header-container" />
    <div class="main-container">
      <!-- <app-main /> -->
    </div>
  </div>
</template>

<script>
import WHeader from 'components/WHeader/index'
export default {
  name: 'home',
  data() {
    return {
      url: process.env.VUE_APP_URL,
    }
  },
  components: {
    WHeader
  },
  computed: {
    classObj() {
      return {
        mobile: this.device === 'mobile',
      }
    },
  },
}
</script>
<style lang='scss' scoped>
</style>
