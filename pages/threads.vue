<script lang="ts" setup>
useHead({
  title: ' Threads | Alexis Lopes',
  link: [{ rel: 'icon', type: 'image/png', href: 'https://avatars.githubusercontent.com/u/20803498?v=4' }]
})

const threads = ref([
  {
    title: "Computed properties x v-model",
    image: "https://pbs.twimg.com/media/F87IpjjWUAAtsSp?format=jpg&name=small",
    link: "https://x.com/alexislxpes/status/1715553620081443264?s=20"
  }
])

</script>

<template>
<div class="bg-abyss h-screen text-2xl flex flex-col items-center gap-4">

  <h1 class="text-ice uppercase">threads</h1>
  <p class="text-ice">Me siga no X</p>
  <div v-for="thread in threads" :key="thread.title"
    class="bg-ice w-fit p-4 rounded-lg flex items-center flex-col gap-2">
    <h1 class="font-medium text-lg">{{ thread.title }}</h1>
    <img :src="thread.image" :alt="thread.title" class="h-52 rounded-md">
    <a :href="thread.link" class="float-right" target="_blank">Ver no X</a>
  </div>
</div>
</template>

<style scoped></style>
