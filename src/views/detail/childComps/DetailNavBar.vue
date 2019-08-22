<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active: index==currentIndex}"
          @click='itemClick(index)'>
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "推荐", "评论"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.back {
  img{
      margin-top: 12px
  }
}
.title {
  display: flex;
  font-size: 13px;
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>