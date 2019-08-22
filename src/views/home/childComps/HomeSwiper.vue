<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [] 
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data(){
    return {
      isLoad:false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
      this.$emit("swiperImageLoad")
      this.isLoad=true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>