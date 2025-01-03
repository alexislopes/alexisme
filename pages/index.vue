<script lang="ts" setup>

definePageMeta({
  layout: false,
  name: 'Home'
})

useHead({
  title: "Alexis Lopes | Início",
  link: [{ rel: 'icon', type: 'image/png', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐵</text></svg>" }]
})



</script>

<template>
  <div class="mx-auto max-w-sm px-4 my-20 flex flex-col gap-4">

    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tighter xl:text-3xl/none sm:text-2xl">Alexis Lopes</h2>
        <span class="text-pretty text-xl tracking-tighter xl:text-xl/none sm:text-lg">
          Front-end Developer | Vue, Nuxt Specialist
        </span>
      </BlurReveal>
    </ClientOnly>

    <Menu></Menu>

    <h1 class="uppercase text-xl text-slate-500">Foco atual</h1>
    <a href="https://minhatabela.com" target="_blank"
      class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent text-2xl font-black">minhatabela</a>
    <LinkPreview :width="350" :height="400" url="https://minhatabela.com/simular" />
  </div>
</template>

<style scoped></style>
