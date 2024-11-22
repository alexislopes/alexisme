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
  <div class="mx-auto max-w-lg my-20 flex flex-col gap-4">

    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tighter xl:text-3xl/none sm:text-2xl">Alexis Lopes</h2>
        <span class="text-pretty text-xl tracking-tighter xl:text-xl/none sm:text-lg">
          Front-end Developer | Vue, Nuxt Specialist
        </span>
      </BlurReveal>
    </ClientOnly>

    <Menu></Menu>
  </div>
</template>

<style scoped></style>
