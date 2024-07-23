<template>
<div class="flex gap-2 text-lg shadow-md rounded-lg w-fit flex-col relative">
  <div class="relative">
    
    <div class="flex absolute rounded-t-lg flex-col z-10 text-[#191414] w-full h-full bg-gradient-to-t from-white from-10% ..."></div>
    <img class=" h-80 w-80 rounded-t-lg -z-0" :src="player?.item.album.images[0].url" alt="">
  </div>
  <div class="w-full h-20 z-10  justify-center items-center rounded-b-lg flex flex-col bg-white">
    
    <div class="-mt-28 flex flex-col items-center w-full">
      <Icon name="fa:spotify" class="absolute bottom-2 right-2 text-black " />
      <p class="font-bold text-xl max-w-72 text-center">{{ player?.item.name }} </p>
      <span class="font-medium text-sm">{{ player?.item.artists.map(({ name }) => name).toString() }}</span>
      
      <Progress class="w-[80%] mt-6" :playing="player?.is_playing" :duration="player?.item.duration_ms" v-model="progress" />
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({ player: Object })
const emit = defineEmits(['refresh'])

const progress = ref()

watch(progress, (value) => {
  if (value > props.player?.item.duration_ms) {
    progress.value = 0
    emit('refresh')
  }
})

onMounted(() => {

  progress.value = props.player?.progress_ms || 0

})
</script>

<style></style>