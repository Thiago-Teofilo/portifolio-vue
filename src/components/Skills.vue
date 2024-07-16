<template>
  <div class="skills">
    <div class="section">
      <h2 class="title">Habilidades</h2>
    </div>
    <div
      class="section my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      <div
        v-for="(cardData, index) in skillCards"
        :key="index"
        class="skill-card"
      >
        <component :is="cardData.component" />
        <p>{{ cardData.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SKILLS } from '@/utils/constants';

const skillCards = SKILLS;
</script>

<style>
.skill-card {
  @apply border-b-2 bg-secondary border-solid rounded-tr-2xl grid justify-items-center gap-2 p-4;
}

.skill-card:nth-child(7) {
  @apply lg:col-start-3;
}

.skill-card p {
  @apply my-auto;
}
</style>
