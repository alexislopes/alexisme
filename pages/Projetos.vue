<script lang="ts" setup>
useHead({
  title: "Alexis Lopes | Projetos",
  link: [{ rel: 'icon', type: 'image/png', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐵</text></svg>" }]
})

const { data: repos } = useLazyAsyncData('repos', () => $fetch('https://api.github.com/users/alexislopes/repos?per_page=100&sort=updated'))

const projetos = computed(() => {
  return repos.value ? repos.value.filter(repo => repo.topics.includes('portifolio')) : []
})

</script>

<template>

  <div class="mb-6 p-4">
    <h1 class="text-abyss text-4xl font-bold">Projetos</h1>
    <p class="text-abyss mt-1">Navegue pelos projetos que criei</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
    <ClientOnly>
      <CardContainer v-for="projeto in projetos" :nome="projeto.name" class="h-full">
        <CardBody
          class=" relative w-auto !h-full rounded-xl border border-black/[0.1] bg-gray-50 p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
            {{ projeto.name }}
          </CardItem>
          <CardItem as="p" translate-z="60" class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
            {{ projeto.description }}
          </CardItem>
          <CardItem :translate-z="100" class="mt-4 w-full">
            <NuxtImg
              :src="`https://raw.githubusercontent.com/alexislopes/${projeto.name}/master/docs/portifolio/thumb.png`"
              height="200" width="350" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              :alt="projeto.name" />
          </CardItem>
          <div class="mt-4 flex items-center justify-between">
            <CardItem :translate-z="20" as="a" :href="projeto.homepage" target="__blank"
              class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white">
              Visitar →
            </CardItem>
            <CardItem :translate-z="20" as="a" :href="projeto.html_url" target="__blank"
              class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black flex items-center gap-1">
              <Icon name="mdi:github" class="!text-lg" />
              Ver no Github
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </ClientOnly>
  </div>

  <!-- <div class="grid grid-cols-2 gap-4" v-if="projetos.length">
    <ProjectCard v-for="projeto in projetos" :nome="projeto.name" :descricao="projeto.description"
      :topicos="projeto.topics" :github="projeto.html_url" :homepage="projeto.homepage"
      :thumb="`https://raw.githubusercontent.com/alexislopes/${projeto.name}/master/docs/portifolio/thumb.png`" />
  </div>
  <div class="flex flex-wrap gap-6" v-else>
    <div class="w-[350px] h-[400px] rounded-2xl shadow-xl bg-surface animate-pulse"></div>
  </div> -->
</template>

<style scoped></style>
