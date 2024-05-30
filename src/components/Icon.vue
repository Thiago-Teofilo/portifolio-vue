<template>
  <div class="" :title="iconPayload.name">
    <FontAwesomeIcon :class="['text-[24px]', iconPayload.class]" :icon="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { IIcon } from '@/utils/helpers';

library.add(fas);
library.add(fab);

const props = defineProps<{
  iconPayload: IIcon;
}>();

const icon = computed(() => {
  return [
    props.iconPayload.isBrand ? 'fab' : 'fas',
    props.iconPayload.name.toLowerCase(),
  ];
});
</script>
