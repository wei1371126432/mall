<template>
    <div id="detail">
      <detail-nav-bar></detail-nav-bar>
    </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
    export default {
        data(){
            return{
                iid:''
            }
        },
        components:{
            DetailNavBar
        },
        created(){
            this.iid=this.$route.params.iid
        }
    }
</script>

<style lang="less" scoped>

</style>