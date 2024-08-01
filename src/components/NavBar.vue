<template>
  <div class="navbar">
    <div class="content">
      <div>
        <div class="toggle-menu" @click="() => (toggleMenu = !toggleMenu)">
          <div :class="{ icon: true, open: toggleMenu }">
            <span :class="{ line1: true, open: toggleMenu }"></span>
            <span :class="{ line2: true, open: toggleMenu }"></span>
            <span :class="{ line3: true, open: toggleMenu }"></span>
          </div>
          <transition name="slide-down">
            <div v-if="toggleMenu || windowWidth > 640" class="menu">
              <ul>
                <li><a href="#welcome">Início</a></li>
                <li><a href="#resume">Sobre mim</a></li>
                <li><a href="#skills">Habilidades</a></li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <label class="switch">
        <input
          type="checkbox"
          :checked="themeStore.isLightTheme"
          @change="themeStore.toggleTheme"
        />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const toggleMenu = ref(false);
const themeStore = useThemeStore();
const windowWidth = ref(window.innerWidth);

// Função para atualizar a largura da janela
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Adiciona o listener para capturar a largura da janela ao montar o componente
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

// Remove o listener quando o componente for desmontado
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style lang="postcss" scoped>
.navbar {
  @apply fixed shadow-lg w-full left-0 top-0 h-12 z-20 bg-lightPrimary dark:bg-primary;
}

.navbar .content {
  @apply flex mx-auto items-center justify-between h-full;
}

.navbar .content .icon {
  @apply sm:hidden;
}

.toggle-menu {
  @apply cursor-pointer;
}

.navbar,
.toggle-menu .menu {
  @apply border-b border-solid border-lightSecondary dark:border-secondary;
}

.toggle-menu .menu {
  @apply sm:block sm:static sm:h-max sm:w-max fixed bg-lightPrimary dark:bg-primary w-full h-full top-0 left-0 -z-10 grid items-center;
}

.toggle-menu .menu ul {
  @apply w-max mx-auto sm:flex;
}

.toggle-menu .menu li {
  @apply my-8 sm:my-4 px-8 relative rounded-full;
}

.toggle-menu .menu li::before {
  content: '';
  @apply absolute transition-all bg-primary dark:bg-tertiary 
    h-0.5 w-0 -bottom-4 left-0;
}

.toggle-menu .menu li:hover::before {
  @apply w-full;
}

/* Botão Theme Switch */

.switch {
  @apply inline-flex items-center cursor-pointer;
}

.switch input {
  @apply sr-only;
}

.slider {
  @apply w-10 h-6 bg-secondary relative rounded-full transition-all;
}

input:checked ~ .slider {
  @apply bg-tertiary;
}

.slider:before {
  @apply absolute top-[2.2px] left-0 w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform;
  content: '';
}

input:checked ~ .slider:before {
  @apply translate-x-full;
}

/* Efeito do Ícone de Toggle Menu */

.icon {
  @apply relative w-8 h-8 flex flex-col justify-center items-center;
}

.icon span {
  @apply block w-6 h-0.5 bg-primary dark:bg-white my-0.5 transition-all duration-300 ease-in-out;
}

.icon .line1.open {
  @apply transform w-7 rotate-45 translate-y-2;
}

.icon .line2.open {
  @apply opacity-0;
}

.icon .line3.open {
  @apply transform w-7 -rotate-45 translate-y-[-0.3rem];
}

/* Animação do Menu */

.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-all duration-300 ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  @apply transform -translate-y-full opacity-0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  @apply transform translate-y-0 opacity-100;
}
</style>
