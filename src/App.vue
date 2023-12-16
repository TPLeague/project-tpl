<template>
  <div class="min-h-screen bg-spaceBlack">
    <MainNavbar />
    <router-view />
  </div>
</template>

<script setup>
import MainNavbar from './components/MainNavbar.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
