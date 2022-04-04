<template>
  <div>
    <v-menubar/>
    <router-view></router-view>
  </div>
</template>

<script>
import vMenubar from "./components/MenuBar.vue";
export default {
  name: 'App',
  components: {
    vMenubar,
  }
}
</script>

<style>
</style>
