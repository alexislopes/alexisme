<template>
<div class="flex gap-2 text-lg p-2 shadow-md rounded-lg max-w-md">
  <img class="h-20 w-20 rounded-lg mx-auto" :src="item.album.images[0].url" alt="">
  <div class="flex rounded-lg flex-col text-[#191414]">
    <p class="font-bold text-md">{{ item.name }} </p>
    <span class="font-medium text-sm">{{ item.artists.map(({ name }) => name).toString() }}</span>
    <div class="flex items-center gap-2 text-xs" v-if="playing">
      <SvgSpinnersBarsScaleMiddle class="text-[#1db954]" /> Ouvindo agora
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import SvgSpinnersBarsScaleMiddle from '~icons/svg-spinners/bars-scale-middle';
defineProps({ item: Object, playing: Boolean })
</script>

<style></style>