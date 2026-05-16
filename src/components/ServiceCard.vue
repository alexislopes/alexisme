<script setup lang="ts">
import StackTag from './base/StackTag.vue'

interface Props {
  number: string
  title: string
  description: string
  tags?: string[]
}

defineProps<Props>()
</script>

<template>
  <article class="card-brand p-8">
    <p
      class="mb-5 font-mono text-[0.6875rem] font-semibold tracking-caps text-brand"
    >
      {{ number }}
    </p>

    <h3 class="mb-3 text-xl font-bold tracking-[-0.02em]">
      {{ title }}
    </h3>

    <p class="text-sm leading-body text-text-muted">
      {{ description }}
    </p>

    <div v-if="tags?.length" class="mt-6 flex flex-wrap gap-2">
      <StackTag v-for="tag in tags" :key="tag" variant="cobalt">{{ tag }}</StackTag>
    </div>
  </article>
</template>
