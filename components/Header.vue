<script lang="ts" setup>
import MakiCross from '~icons/maki/cross';
import TablerMenu2 from '~icons/tabler/menu-2';

const { currentRoute } = useRouter()

const opened = ref(false)
const mobile = ref(false)

onMounted(() => {
  if (window.innerWidth <= 990) {
    mobile.value = true
  }

  addEventListener("resize", (event) => {
    if (window.innerWidth <= 990) {
      mobile.value = true
    } else {
      mobile.value = false
    }
  });

})

watch(currentRoute, () => {
  opened.value = false
})

const isOpened = computed(() => {
  if (mobile.value) {
    return opened.value
  }

  return true
})


</script>

<template>
<div>

  <div v-if="mobile" class="absolute top-4 left-4">
    <TablerMenu2 @click="opened = true" />
  </div>
  <div v-if="isOpened"
    class="px-8 py-2 flex justify-center items-center h-screen w-screen absolute bg-white lg:relative lg:h-20 lg:w-full z-10">
    <div v-if="mobile" class="absolute top-4 left-4">
      <MakiCross v-if="mobile" @click="opened = false" />
    </div>
    <!-- <logo /> -->
    <div class="flex gap-1 flex-col lg:flex-row">
      <NuxtLink class="link" to="/" :class="{ active: currentRoute.path === '/' }">Sobre</NuxtLink>
      <NuxtLink class="link relative" to="/projetos" :class="{ active: currentRoute.path === '/projetos' }">
        Projetos
      </NuxtLink>
    </div>
  </div>
</div>
</template>

<style scoped>
.link {
  @apply font-medium text-abyss py-1 px-4 text-center
}

.active {
  @apply text-clay bg-surface rounded-md
}
</style>
