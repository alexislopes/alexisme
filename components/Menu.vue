<template>
  <nav>
    <NuxtLink v-for="route in router.getRoutes().filter(f => f.name != 'Home')" :key="route.name" :to="route.path">
      <MenuItem>{{ route.name }}</MenuItem>
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style></style>