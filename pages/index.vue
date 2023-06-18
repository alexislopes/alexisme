<script lang="ts" setup>
const {data} = await useAsyncData('user',  () => $fetch('https://api.github.com/users/alexislopes'))
</script>

<template>
  <div class="light:bg-ice dark:bg-abyss flex items-center justify-center min-h-screen dark:text-ice light:text-abyss flex-col">
    <div class="max-w-xl">

      <img :src="data.avatar_url" class="h-36" alt="">
      
      <div class="flex justify-start flex-col gap-5">
        
        <h1 class="text-2xl">Sobre</h1>
        <p>Olá, sou Alexis Lopes, desenvolvedor e entusiasta Vue.js, Nuxt</p>
        <p>Atualmente, atuo como desenvolvedor no time de inovação da Treevia Forest Tech.</p>
        <p>Me encontrei na programação, onde consigo me expressar e transformar minhas ambições em código.</p>
        <h2>Me encontre em:</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

p {
  @apply text-xl
}

</style>
