<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>    
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
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
