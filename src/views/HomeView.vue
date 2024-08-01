<template>
  <div class="home">
    <NavBar />
    <Welcome />
    <Resume />
    <Skills />
  </div>
</template>

<script lang="ts" setup>
import Welcome from '@/components/Welcome.vue';
import Resume from '@/components/Resume.vue';
import Skills from '@/components/Skills.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="postcss">
.home {
  @apply w-full grid gap-24 py-16 lg:gap-48 lg:py-48 mx-auto;
}

.home,
.navbar .content {
  @apply px-5 lg:w-[60rem] 2xl:w-[80rem];
}
</style>
