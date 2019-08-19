<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{active:index==currentIndex}"
     @click="clickItem(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods:{
      clickItem(index){
          this.currentIndex=index;
          this.$emit('tabClick',index)
      }
  }
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
  }
  span {
    padding: 5px;
    padding-top: 0
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>