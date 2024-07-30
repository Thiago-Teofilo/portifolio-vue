<template>
  <div class="welcome">
    <div
      class="section welcome-image self-end lg:!w-1/3 relative h-max !w-max mx-auto"
    >
      <img
        src="../assets/me.png"
        alt=""
        srcset=""
        class="max-h-[10rem] rounded-full lg:max-h-max"
      />
    </div>
    <div class="section lg:w-2/3 welcome-text text-left">
      <span class="info-title text-center sm:text-left"
        >Bem vindo(a) ao meu mundo</span
      >
      <h1 class="title">
        Olá, eu sou
        <TypingTextEffect text="Thiago Teofilo" component-tag="strong" />
      </h1>
      <h2 class="title">Desenvolvedor Full stack</h2>
      <p>
        Sou especialista em Node.js e formado em Análise e Desenvolvimento de
        Sistemas, trabalhando com desenvolvimento de software desde 2023. Gosto
        de explorar novas tecnologias e compartilhar conhecimento.
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
              href="https://www.linkedin.com/in/thiagoteofilojs/"
            />
            <BaseButton
              :icon-payload="{
                isBrand: true,
                name: 'Github',
              }"
              text="Github"
              href="https://github.com/Thiago-Teofilo"
            />
            <BaseButton
              :icon-payload="{
                isBrand: true,
                name: 'Instagram',
              }"
              text="Instagram"
              href="https://www.instagram.com/thiago_teofilo?igsh=MWhic3pqMjhiaDZ3OA=="
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue';
import TypingTextEffect from './TypingTextEffect.vue';
</script>

<style scoped lang="postcss">
.welcome {
  @apply xl:mt-20 lg:flex lg:gap-10 2xl:gap-80 lg:flex-row-reverse items-center;
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
  @apply absolute rounded-full opacity-50 bg-primary 
    h-full w-full top-0 right-0 -z-10 shadow-[0_0_5px_1px_black]
    border-solid border-primary;
}
</style>
