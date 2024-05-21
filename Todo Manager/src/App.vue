<template>
  <nav-bar></nav-bar>
  <h1>ss</h1>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style></style>
