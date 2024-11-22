<template>
  <div class="w-full py-4 fixed top-0 bg-[#fefefe]">
    <div class="max-w-5xl mx-auto flex justify-between">
      <span></span>
      <div class="flex gap-4">
        <NuxtLink v-for="router in router.getRoutes()" :key="router.name" :to="router.path">{{ router.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()


</script>

<style></style>