<!--  -->
<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <Wheader class="header-container" /> -->
    <div class="main-container">
      <!-- <app-main /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      url: process.env.VUE_APP_URL,
    }
  },
  components: {
    
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
<style scoped></style>
