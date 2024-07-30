<template>
  <component :is="componentTag" :class="{ 'blinking-cursor': showCursor }">
    {{ displayText }}
  </component>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    text: string;
    speed?: number;
    componentTag?: string;
  }>(),
  {
    componentTag: 'p',
  }
);
const displayText = ref('');
const showCursor = ref(true);

onMounted(() => {
  let currentIndex = 0;
  const typingSpeed = props.speed || 100; // default speed is 100ms

  const type = () => {
    if (currentIndex < props.text.length) {
      displayText.value += props.text.charAt(currentIndex);
      currentIndex++;
      setTimeout(type, typingSpeed);
    } else {
      showCursor.value = false; // hide cursor when typing is done
    }
  };

  type();
});
</script>

<style scoped lang="postcss">
.blinking-cursor::after {
  content: '|';
  animation: blink 1s step-end infinite;
  @apply font-light;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
