<template>
  <button class="gap-4 btn">
    <a :href="href" target="_blank">
      <div class="max-content flex mx-auto place-content-between">
        <p v-if="text" class="my-auto">
          {{ text }}
        </p>
        <div class="my-auto w-max">
          <Icon v-if="iconPayload" :icon-payload="iconPayload" />
          <slot></slot>
        </div>
      </div>
    </a>
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
    href?: string;
  }>(),
  {
    text: undefined,
    iconPayload: undefined,
    href: undefined,
  }
);
</script>

<style lang="postcss">
.btn {
  @apply px-4 py-3 rounded-lg shadow-lg
    bg-pure-white dark:bg-secondary hover:bg-secondary hover:text-white dark:hover:bg-tertiary dark:hover:text-[rgb(0,0,0)] transition;
}
</style>
