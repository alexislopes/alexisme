<script lang="ts" setup>

useHead({
  title: "Alexis Lopes | Início",
  link: [{ rel: 'icon', type: 'image/png', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐵</text></svg>" }]
})

// definePageMeta({
//   middleware: 'auth'
// })



// const { $spotify } = useNuxtApp()

// const { data: player, error, refresh, status, execute } = await $spotify.spotifyPlayer.getPlaybackState({ lazy: true })


// watch(status, (value) => {
//   if (value === 'error') {
//     navigateTo('/')
//   }
// })

// function resetAndRefresh() {
//   if (player.value) {
//     player.value.progress_ms = 0
//   }
//   refresh()
// }

function navigate() {
  navigateTo('https://treevia.com.br/inventario-florestal/', {
    external: true, open: {
      target: " _blank"
    }
  })
}

const { data: repos } = useLazyAsyncData('repos', () => $fetch('https://api.github.com/users/alexislopes/repos?per_page=100&sort=updated'))

const projetos = computed(() => {
  return repos.value ? repos.value.filter(repo => repo.topics.includes('portifolio')).slice(0, 3) : []
})



</script>

<template>
<div class="flex flex-col px-5 lg:px-0 gap-4">

  <div>

    <h1 class="lg:text-5xl font-bold text-5xl max-w-4xl">Olá! Sou Alexis | Desenvolvedor front-end. </h1>
    <p class="!text-md font-medium mt-4 max-w-4xl text-slate-500">Transformar códigos em soluções que geram valor é o
      que me mantém na caminhada.</p>
  </div>


  <div class="flex flex-col gap-2">
    <!-- <div>
      <h1 class="text-2xl font-bold mb-2">Agora</h1>
      <Track v-if="player" :player="player" @refresh="resetAndRefresh" />
    </div> -->

    <div>

      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold mb-2">Projetos</h1>
        <NuxtLink to="/projetos">ver todos</NuxtLink>
      </div>

      <div class="grid lg:grid-rows-none grid-rows-3 lg:grid-cols-3 gap-4">
        <div v-if="!projetos.length" v-for="index in 3" :key="index"
          class="h-[190px] w-[330px] bg-slate-200 animate-pulse rounded-lg"></div>
        <NuxtLink v-else :to="projeto.html_url" :key="projeto.name" external target="_blank" class="relative"
          v-for="projeto in projetos">
          <Backdrop />
          <p class="absolute bottom-0 text-[#fefefe] px-2 py-1">{{ projeto.name }}</p>
          <img class="rounded-lg h-[190px] w-[330px]"
            :src="`https://raw.githubusercontent.com/alexislopes/${projeto.name}/master/docs/portifolio/thumb.png`"
            alt="">
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
p {
  @apply text-xl
}


h2 {
  @apply overflow-hidden border-r-4 whitespace-nowrap m-0 tracking-normal pr-2 h-12 lg:h-16 w-fit text-start
}

h2 {
  /* overflow: hidden;
   Ensures the content is not revealed until the animation 
  border-right: .15em solid orange;
   The typwriter cursor 
  white-space: nowrap;
  Keeps the content on a single line 
  margin: 0;
   Gives that scrolling effect as the typing happens 
  letter-spacing: 0em; */
  /* Adjust as needed */

  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  /* padding-right: 0.5rem;
  height: 50px;
  width: fit-content;
  text-align: start; */

}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange;
  }
}
</style>
