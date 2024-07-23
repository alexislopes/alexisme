<template>
<div class="">

  <div class="w-full  rounded-lg h-2 bg-slate-200">
    <div :style="{ width: `${progressBar}%` }" class="bg-black rounded-lg h-2"></div>
  </div>
  <div class="flex justify-between !w-full">
    <span class="text-sm">
      {{ formattedProgress }}
    </span>
    <span class="text-sm">

      {{ formattedDuration }}
    </span>
  </div>
</div>
</template>

<script lang="ts" setup>
interface Progress {
  duration: number,
  playing: boolean
}

const progress = defineModel<number>({ default: 0 })

const props = defineProps<Progress>()

const progressBar = computed(() => {

  return (progress.value * 100) / props.duration

})

const formattedProgress = computed(() => {
  const date = new Date(progress.value)

  return `${date.getMinutes()}:${date.getSeconds().toString().padStart(2, '0')}`
})
const formattedDuration = computed(() => {
  const date = new Date(props.duration)

  return `${date.getMinutes()}:${date.getSeconds().toString().padStart(2, '0')}`
})


onMounted(() => {
  if (props.playing) {
    setInterval(() => { progress.value = progress.value + 1000 }, 1000)
  }

})
</script>

<style></style>