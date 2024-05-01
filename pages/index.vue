<script lang="ts" setup>
import { rand } from "@vueuse/shared";
import BiGithub from '~icons/bi/github';
import BiInstagram from '~icons/bi/instagram';
import BiLinkedin from '~icons/bi/linkedin';
import OiDoubleQuoteSansLeft from '~icons/oi/double-quote-sans-left';

useSeoMeta({
  title: 'Alexis Lopes | Front-End Developer',
  ogTitle: 'Alexis Lopes | Front-End Developer',
  description: 'Bem-vindos ao meu portifólio',
  ogDescription: 'Bem-vindos ao meu portifólio',
  ogImage: "https://avatars.githubusercontent.com/u/20803498?v=4",
  twitterCard: 'summary',
})

useHead({
  title: "Alexis Lopes | Sobre",
  link: [{ rel: 'icon', type: 'image/png', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐵</text></svg>" }]
})

const { data } = useLazyAsyncData('user', () => $fetch('https://api.github.com/users/alexislopes'))

const greetings = ['Olá', 'Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好', 'Привет']
const word = ref('Olá')
const interval = ref(2000)

const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]
}, interval)

const expTime = computed(() => {
  return Math.round(new Date().getFullYear() - 2019)
})
</script>

<template>
<div class="h-screen w-screen lg:h-[calc(100vh_-_80px)] lg:w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20">
  <div class="p-6 lg:p-0">
    <h1 class="lg:text-4xl text-2xl font-medium">{{ word }}! Sou Alexis, atuo como:</h1>
    <h2 class="typewriter font-bold lg:text-6xl text-4xl text-orange">Front-end Developer</h2>

    <p class="!text-base font-medium mt-4 max-w-2xl">Tenho {{ expTime }} anos de experiencia na área de
      desenvolvimento de produtos digitais. Já atuei em diversas funções como as de sustentaçao, agregando valores ao
      produto de forma ágil, conforme as demandas e na área de inovação, liderando a criação de novos produtos do zero,
      propondo padrões e estruturas.</p>

    <blockquote class="max-w-2xl font-code p-4 rounded-md mt-4 bg-surface !text-sm relative">
      <OiDoubleQuoteSansLeft class="absolute -mt-6 -ml-5 text-xl text-abyss" />
      Sempre gostei de ver as coisas ganhando forma, se transformando. Conseguir transformar código em produtos que
      agregam valor e resolvem problemas é muito gratificante para mim.
    </blockquote>

    <p class="text-md text-abyss font-medium mt-6">Voce pode me encontrar em:</p>
    <div class="flex gap-3 py-2 text-abyss">
      <NuxtLink to="https://github.com/alexislopes" target="_blank">
        <BiGithub class="text-xl cursor-pointer hover:text-clay" />
      </NuxtLink>
      <NuxtLink to="https://linkedin.com/in/alexislopes" target="_blank">
        <BiLinkedin class="text-xl cursor-pointer hover:text-clay" />
      </NuxtLink>
      <NuxtLink to="https://instagram.com/alexislopes" target="_blank">
        <BiInstagram class="text-xl cursor-pointer hover:text-clay"/>
      </NuxtLink>
      
    </div>
  </div>
  <div>
    <img v-if="data" :src="data?.avatar_url"
      class="rounded-full lg:h-72 lg:w-72 h-52 7-52 shadow-[0_0px_167px_5px_var(--tw-shadow-color)] shadow-orange" alt="">
      <div v-else class="lg:h-72 lg:w-72 h-52 7-52 bg-surface animate-pulse rounded-full shadow-[0_0px_167px_5px_var(--tw-shadow-color)] shadow-orange"></div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

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
