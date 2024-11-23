<template>
  <nav class="w-full py-4 fixed top-0 z-10 backdrop-blur-3xl">
    <div class="max-w-7xl mx-auto flex justify-between">
      <span class="flex items-center gap-1" @click="router.back()">
        <Icon name="tdesign:gesture-left-filled" />
        Voltar
      </span>
      <div class="flex gap-4">
        <NuxtLink v-for="router in router.getRoutes()" :key="router.name" :to="router.path">{{ router.name }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter()


</script>

<style></style>