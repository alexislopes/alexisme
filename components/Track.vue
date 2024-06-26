<template>
<div class="flex gap-2 text-lg">
  Enquanto escuto
  <p
    class="font-medium text-md flex items-center gap-1 border border-dashed border-[#191414] px-2 rounded-full bg-[#1db954]/20 max-w-xs truncate">
    <img class="h-4 w-4" :src="item.album.images[2].url" alt="">

    {{ item.name }} - {{ item.artists.map(({ name }) => name).toString() }}
  </p>
</div>
</template>

<script lang="ts" setup>
defineProps({ item: Object, playing: Boolean })
</script>

<style></style>