<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/MainTabBar'
export default {
  data() {
    return {};
  },
  components:{
    MainTabBar
  }
  
};
</script>
<style lang="less" scoped>
@import "assets/css/base.css";
</style>
