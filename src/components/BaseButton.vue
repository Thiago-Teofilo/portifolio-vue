<template>
  <button class="grid-cols-2 justify-center gap-4 btn">
    <p class="my-auto" v-if="text">
      {{ text }}
    </p>
    <div class="my-auto w-max">
      <Icon v-if="iconPayload" :icon-payload="iconPayload" />
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { IIcon } from '@/utils/helpers';
import Icon from '@/components/Icon.vue';

withDefaults(
  defineProps<{
    text?: string;
    iconPayload?: IIcon;
  }>(),
  {
    text: undefined,
    iconPayload: undefined,
  }
);
</script>

<style>
.btn {
  @apply flex px-4 py-3 rounded-lg shadow-[0_0_2px_1px_black]
    hover:bg-tertiary hover:text-[rgb(0,0,0)] transition;
}
</style>
