<script lang="ts" setup>
useHead({
  title: 'Alexis Lopes',
  link: [{ rel: 'icon', type: 'image/png', href: 'https://avatars.githubusercontent.com/u/20803498?v=4' }]
})

const { data } = await useAsyncData('user', () => $fetch('https://api.github.com/users/alexislopes'))
</script>

<template>
  <div
  class="light:bg-ice dark:bg-abyss flex items-center justify-center min-h-screen dark:text-ice light:text-abyss flex-col">
  <nav>
    <NuxtLink to="/threads">
      Threads
    </NuxtLink>
  </nav>

  <div class="max-w-xl flex gap-8 flex-col">
    <img :src="data.avatar_url" alt="" srcset="" class="rounded-full w-32" >

    <div class="flex justify-center flex-col w-full items-center">
      <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="h-64" width="100%" id="blobSvg"
        filter="blur(0px)" style="opacity: 1;" transform="rotate(0)">
        <image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)"
          :href="data.avatar_url" preserveAspectRatio="none"></image>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(65, 234, 212);"></stop>
            <stop offset="100%" style="stop-color: rgb(65, 234, 212);"></stop>
          </linearGradient>
        </defs>
        <clipPath id="shape">
          <path id="blob" fill="url(#gradient)">
            <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
              values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;">
            </animate>
          </path>
        </clipPath>
      </svg> -->

      <h1 class="text-2xl w-full">Alexis Lopes</h1>
    </div>

    <div class="flex justify-start flex-col gap-5">

      <p>Olá, sou Alexis. Desenvolvedor e entusiasta Vue.js, Nuxt.</p>
      <p>Atualmente, atuo como desenvolvedor no time de inovação da Treevia Forest Tech.🌳</p>
      <p>Me encontrei na programação, onde consigo me expressar e transformar minhas ambições em código.</p>
      <h2>Me encontre em:</h2>
      <div class="flex gap-2">
        <NuxtLink to="https://github.com/alexislopes/" target="_blank">
          <Icon class="h-8 w-8" name="mdi:github" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/alexislopes/" target="_blank">
          <Icon name="mdi:linkedin" class="h-8 w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/alexislopes/" target="_blank">
          <Icon name="mdi:instagram" class="h-8 w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.twitter.com/alexislxpes/" target="_blank">
          <Icon name="tabler:brand-x" class="h-8 w-8" />
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
</style>
