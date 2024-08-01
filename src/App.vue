<template>
  <!-- <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/">Sobre mim</router-link> |
    <router-link to="/">Habilidades</router-link>
  </nav> -->
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from './store/theme';

const themeStore = useThemeStore();
onMounted(() => {
  themeStore.loadThemeFromLocalStorage();
});
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
