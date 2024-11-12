<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div id="app">
    <HeaderComponent />

    <router-view />

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} DTHP</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: var(--body-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
