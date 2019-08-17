<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path:String,
    activeColor:{
      type:String,
      default:"#ff5777"
    }
  },
  data() {
    return {};
  },
  computed: {
    //路由对应的样式
    isActive() {
      return this.$route.path == this.path;
    },
    //字体的样式
    activeStyle(){
       return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    //点击改变路由
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  img {
    widows: 24px;
    height: 24px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
}
</style>