<template>
  <NavBar v-if="!$route.meta.hideNabar" />
  <div class="d-flex justify-content-center align-items-center main">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './Components/NavBarTemplate.vue';
export default {
  name: 'App',
  components: {
    NavBar

  },
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: around;
}
</style>
