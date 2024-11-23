<template>
  <nav class="w-full py-4 fixed top-0 z-10 bg-[#fefefe]">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
      <span class="flex items-center gap-1" @click="router.back()">
        <Icon name="tdesign:gesture-left-filled" />
        Voltar
      </span>
      <Icon v-show="!opened" @click="opened = true" name="solar:hamburger-menu-bold" class="lg:hidden text-xl" />
      <div v-show="opened || !isMobile"
        class="flex gap-4 absolute top-0 bottom-0 left-0 w-2/3 flex-col h-screen p-4 bg-[#fefefe] z-20 lg:bg-transparent lg:relative lg:w-auto lg:h-auto lg:flex-row lg:p-0">
        <div class="flex justify-end px-4 lg:hidden">
          <Icon @click="opened = false" name="ic:round-close" />
        </div>
        <NuxtLink v-for="router in router.getRoutes()" :key="router.name" :to="router.path">{{ router.name }}</NuxtLink>
      </div>
    </div>
  </nav>
  <div v-show="opened && isMobile" class="absolute bg-black/60 top-0 bottom-0 left-0 right-0 z-[9]"></div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';
const router = useRouter()

const { width } = useWindowSize()
const opened = ref(false)

const isMobile = computed(() => {
  return width.value <= 1023
})
</script>

<style></style>