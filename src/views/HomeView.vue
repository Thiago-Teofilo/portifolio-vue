<template>
  <div class="home">
    <Welcome />
    <Resume />
    <Skills />
  </div>
</template>

<script lang="ts" setup>
import Welcome from '@/components/Welcome.vue';
import Resume from '@/components/Resume.vue';
import Skills from '@/components/Skills.vue';
</script>

<style lang="postcss">
.home {
  @apply w-full grid gap-36 lg:w-[60rem] 2xl:w-[80rem] my-16 px-5 py-2 mx-auto;
}
</style>
