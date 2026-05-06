<script setup lang="ts">
import { hero } from '../../data/content'
import BaseButton from '../base/BaseButton.vue'
import StackTag from '../base/StackTag.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="label">{{ hero.label }}</p>
      <h1 class="name">
        {{ hero.firstName }}<br />
        <em>{{ hero.lastName }}</em>
      </h1>
      <p class="tagline">{{ hero.tagline }}</p>

      <div class="actions">
        <BaseButton :href="hero.primaryCta.href" variant="primary">
          {{ hero.primaryCta.label }}
        </BaseButton>
        <BaseButton :href="hero.ghostCta.href" variant="ghost">
          {{ hero.ghostCta.label }}
        </BaseButton>
      </div>

      <div class="stack">
        <span class="stack-label">STACK</span>
        <StackTag v-for="item in hero.stack" :key="item" variant="cyan">{{ item }}</StackTag>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 6.25rem 2rem 5rem;
  border-bottom: 1px solid var(--color-border);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-brand);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.name {
  font-size: clamp(3rem, 7vw, 5.375rem);
  font-weight: 700;
  line-height: var(--leading-display);
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
}

.name em {
  font-style: normal;
  color: var(--color-brand);
}

.tagline {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  max-width: 35rem;
  line-height: var(--leading-body);
  margin-bottom: 2.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.stack {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.stack-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-subtle);
  letter-spacing: 0.06em;
  margin-right: 0.5rem;
}
</style>
