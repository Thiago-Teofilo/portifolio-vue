<template>
  <div class="welcome">
    <div class="section welcome-image">
      <img
        src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png"
        alt=""
        srcset=""
        class="max-h-[20rem] lg:max-h-max"
      />
    </div>
    <div class="section lg:w-2/3 welcome-text text-left">
      <span class="info-title">Bem vindo(a) ao meu mundo</span>
      <h1 class="mb-0">
        Olá, eu sou
        <strong>Thiago Teofilo</strong>
      </h1>
      <h2 class="mt-2 sm:mt-5">Um desenvolvedor Full stack</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptas
        molestias sunt repellat ea nobis corrupti adipisci. Molestiae ex dolor
        fugit id ullam officia mollitia unde saepe, neque dolore ipsum. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam cum
        aspernatur voluptas quaerat repellat, quia, nostrum animi velit
        reprehenderit suscipit dolor, quam rerum magni ad dolore sed est! A.
      </p>
      <div class="additional-info uppercase">
        <div class="social-media mt-10">
          <span class="info-title">Me encontre em:</span>
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
        <div class="main-skills mt-10">
          <span class="info-title">Principais Habilidades:</span>
          <div class="buttons">
            <BaseButton text="Vue.js">
              <VueDotjsIcon />
            </BaseButton>
            <BaseButton text="NestJS">
              <NestJsIcon />
            </BaseButton>
            <BaseButton text="TypeScript">
              <TypeScriptIcon />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue';
import { TypeScriptIcon, NestJsIcon, VueDotjsIcon } from 'vue3-simple-icons';
</script>

<style>
.welcome {
  @apply lg:flex lg:gap-5 lg:flex-row-reverse;
}

.section {
  @apply w-full;
}

.info-title {
  @apply uppercase opacity-70 w-full block text-center sm:text-left;
}

strong {
  @apply text-tertiary;
}

.buttons {
  @apply flex gap-3 flex-col justify-center md:justify-start sm:flex-row;
}

.btn {
  @apply sm:w-1/3 lg:w-1/5;
}

.welcome-image {
  @apply lg:w-1/3 relative h-max w-max mx-auto;
}

.welcome-image::before {
  content: '';
  @apply absolute rounded-lg opacity-50 bg-primary 
    h-full w-full top-0 right-0 -z-10 shadow-[0_0_5px_1px_black]
    border-solid border-primary;
}
</style>
