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
  <div class="lg:px-20 lg:pb-5 p-10 lg:p-0">
    <div class="mb-6">
      <h1 class="text-abyss text-4xl font-bold">Projetos</h1>
      <p class="text-abyss mt-1">Projetos que criei ou estou mantendo</p>
    </div>
    <div class="flex flex-wrap gap-6 items-center justify-center" v-if="projetos.length">
      <ProjectCard 
      v-for="projeto in projetos" 
      :nome="projeto.name" 
      :descricao="projeto.description" 
      :topicos="projeto.topics"
      :github="projeto.html_url" 
      :homepage="projeto.homepage"
      :thumb="`https://raw.githubusercontent.com/alexislopes/${projeto.name}/master/docs/portifolio/thumb.png`"
      />
    </div>
    <div class="flex flex-wrap gap-6" v-else>
      <div class="w-[350px] h-[400px] rounded-2xl shadow-xl bg-surface animate-pulse"></div>
    </div>
  </div>
</template>

<style scoped></style>
