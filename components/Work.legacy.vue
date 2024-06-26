<template>
<div class="flex items-center gap-2 rounded-lg p-2 max-w-md">
  <img class="h-20 w-20" src="https://treevia.com.br/wp-content/uploads/2021/02/cpia-de-logo-treevia3.png" alt="">

  <div class="flex-col flex">
    <span class="text-md">
      Conectando florestas pelo mundo com
    </span>
    <strong @click="navigate"
      class="cursor-pointer text-lg text-[#01395E] hover:text-[#95BB49] w-fit">SmartForest</strong>
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