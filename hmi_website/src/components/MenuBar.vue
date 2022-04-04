<template>
  <div>
    <el-menu
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="production">产品介绍</el-menu-item>
      <el-menu-item index="group">团队介绍</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
        methods: {
        handleSelect(index){
            this.$router.push({ path:'/'+index}) 
        }
    }
}
</script>

<style>
</style>