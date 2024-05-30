<template>
  <div class="home my-16 px-5 py-2 mx-auto">
    <Welcome />
  </div>
</template>

<script lang="ts" setup>
import Welcome from '@/components/Welcome.vue';
</script>

<style>
.home {
  @apply w-full lg:w-[60rem] 2xl:w-[80rem];
}
</style>
