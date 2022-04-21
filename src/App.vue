<template>
  <nav>
    <router-link to="/">Assignment 1</router-link> |
    <router-link to="/assignment-two">Assignment 2</router-link> |
    <router-link to="/test">Test</router-link>
  </nav>
  <div class="main-page">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-page {
  @apply container mx-auto max-w-screen-lg;
  @apply px-0 md:px-4;
}
</style>
