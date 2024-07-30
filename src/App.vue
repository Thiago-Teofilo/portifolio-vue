<template>
  <!-- <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/">Sobre mim</router-link> |
    <router-link to="/">Habilidades</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
