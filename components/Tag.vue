<script lang="ts" setup>

interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
<div class="px-2 rounded-full text-sm border border-abyss h-fit text-abyss leading-4">
  {{ label }}
</div>
</template>

<style scoped></style>
