<template>
  <div class="welcome">
    <div
      class="section welcome-image self-end lg:!w-1/3 relative h-max !w-max mx-auto"
    >
      <img
        src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png"
        alt=""
        srcset=""
        class="max-h-[20rem] lg:max-h-max"
      />
    </div>
    <div class="section lg:w-2/3 welcome-text text-left">
      <span class="info-title">Bem vindo(a) ao meu mundo</span>
      <h1 class="title">
        Olá, eu sou
        <strong>Thiago Teofilo</strong>
      </h1>
      <h2 class="title">Desenvolvedor Full stack</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptas
        molestias sunt repellat ea nobis corrupti adipisci. Molestiae ex dolor
        ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam cum
      </p>
      <div class="additional-info uppercase">
        <div class="social-media mt-10">
          <span class="info-title text-center sm:text-left"
            >Me encontre em:</span
          >
          <div class="buttons">
            <BaseButton
              :icon-payload="{
                isBrand: true,
                name: 'Linkedin',
              }"
              text="Linkedin"
            />
            <BaseButton
              :icon-payload="{
                isBrand: true,
                name: 'Github',
              }"
              text="Github"
            />
            <BaseButton
              :icon-payload="{
                isBrand: true,
                name: 'Instagram',
              }"
              text="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue';
</script>

<style scoped>
.welcome {
  @apply lg:flex lg:gap-5 lg:flex-row-reverse items-center;
}

strong {
  @apply text-tertiary;
}

.title {
  @apply !border-none py-0;
}

.main-skills button {
  @apply cursor-auto;
}

.buttons {
  @apply flex gap-3 flex-col justify-center md:justify-start sm:flex-row;
}

.btn {
  @apply sm:w-1/3 lg:w-1/5;
}

.welcome-image::before {
  content: '';
  @apply absolute rounded-lg opacity-50 bg-primary 
    h-full w-full top-0 right-0 -z-10 shadow-[0_0_5px_1px_black]
    border-solid border-primary;
}
</style>
