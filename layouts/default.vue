<script lang="ts" setup></script>

<template>
<div class="w-full h-screen">
  <Header />
  <slot />
</div>
</template>

<style >
body,
html {
  height: 100vh;
  width: 100vw;
}
</style>
