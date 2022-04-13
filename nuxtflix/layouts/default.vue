<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {},
})
</script>

<style lang="scss">
@font-face {
  font-family: 'Regular';
  src: url('~static/font/NetflixSans_W_Rg.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Medium';
  src: url('~static/font/NetflixSans_W_Md.woff2') format('woff2');
  font-weight: lighter;
  font-style: normal;
}

html {
  font-family: 'Regular', sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: black;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
