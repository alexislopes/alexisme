<script lang="ts" setup>

const { currentRoute } = useRouter()

</script>

<template>
<div class="px-8 py-2 flex justify-center items-center h-20">
  <!-- <logo /> -->
  <div class="flex gap-1">
    <NuxtLink class="link" to="/" :class="{ active: currentRoute.path === '/' }">Sobre</NuxtLink>
    <NuxtLink class="link relative" to="/projetos"
      :class="{ active: currentRoute.path === '/projetos' }">
      Projetos
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>
.link {
  @apply font-medium text-abyss py-1 px-4
}

.active {
  @apply text-clay bg-surface rounded-md
}
</style>
