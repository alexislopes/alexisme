<template>
  <nav>
    <transition-group appear name="list" tag="ul">
      <li v-for="route in router.getRoutes().filter(f => f.name != 'Home')" :key="route.name">
        <!-- <li v-for="route in list" :key="route.name"> -->
        <NuxtLink :to="route.path">
          <MenuItem>{{ route.name }}</MenuItem>
        </NuxtLink>
      </li>
    </transition-group>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter()

const list = ref([])

onMounted(() => {
  router.getRoutes().forEach((e) => {
    if (e.name != 'Home') {
      list.value.push(e)
    }
  })
})
</script>

<style>
.list-enter-active {
  animation: fade-in 1s;
}

.list-leave-active {
  animation: fade-in 1s reverse;
}

@keyframes fade-in {
  from {
    opacity: 0;
    width: 0;
    /* background-color: blue; */
  }

  to {
    opacity: 1;
    width: 100%;
  }
}
</style>