<script setup lang="ts">
import StackTag from './base/StackTag.vue'

interface Props {
  number: string
  title: string
  description: string
  tags: string[]
}

defineProps<Props>()
</script>

<template>
  <article class="card-brand p-8">
    <p class="number">{{ number }}</p>
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ description }}</p>
    <div class="tags">
      <StackTag v-for="tag in tags" :key="tag" variant="cobalt">{{ tag }}</StackTag>
    </div>
  </article>
</template>

<style scoped>
.number {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--color-brand);
  letter-spacing: var(--tracking-caps);
  margin-bottom: 1.25rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: var(--leading-body);
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
