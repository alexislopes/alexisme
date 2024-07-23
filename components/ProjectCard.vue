<script lang="ts" setup>

interface Props {
  nome: string
  descricao: string
  topicos: string[]
  homepage: string
  github: string
  thumb: string
}

defineProps<Props>()

</script>

<template>
<div class="w-[350px] rounded-2xl shadow-xl">
  <div>
    <NuxtImg :src="thumb" alt="" class="h-[200px] rounded-t-2xl w-full" />
  </div>
  <div class="px-6 py-4 rounded-b-2xl flex flex-col gap-2">
    <div>
      <h1 class="text-abyss text-2xl font-bold">{{ nome }}</h1>
      <p class="font-normal text-gray">{{ descricao }}</p>
    </div>
    <div class="flex flex-wrap gap-2 py-2">
      <Tag v-for="tag in topicos" :key="tag" :label="tag" />
    </div>
    <div class="flex gap-2">
      <NuxtLink :to="github" target="_blank">
        <Icon name="bi:github" class="text-xl" />
      </NuxtLink>
      <NuxtLink :to="homepage" target="_blank">
        <Icon name="gridicons:external" class="text-xl" />
      </NuxtLink>
    </div>
  </div>
</div>
</template>

<style scoped></style>
