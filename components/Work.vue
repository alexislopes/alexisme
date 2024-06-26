<template>
<div class="flex items-center gap-2 text-lg">
  Conectando florestas com
  <div @click="navigate"
    class="border rounded-full cursor-pointer border-dashed border-[#01395E] px-2 flex items-center justify-center gap-1 bg-[#95BB49]/20">
    <img class="h-4 w-4" src="https://treevia.com.br/wp-content/uploads/2021/02/cpia-de-logo-treevia3.png" alt="">
    <p class="text-base">SmartForest</p>
  </div>
</div>
</template>

<script lang="ts" setup>
function navigate() {
  navigateTo('https://treevia.com.br/inventario-florestal/', {
    external: true, open: {
      target: " _blank"
    }
  })
}
</script>

<style></style>