<script setup lang="ts">
import { cases } from '../../data/content'
</script>

<template>
  <section
    id="cases"
    class="border-b border-border px-8 py-section"
  >
    <div class="mx-auto max-w-275">
      <p
        class="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-caps text-brand"
      >
        {{ cases.label }}
      </p>

      <h2
        class="mb-12 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-heading tracking-[-0.025em]"
      >
        {{ cases.title }}
      </h2>

      <div class="grid grid-cols-1 gap-10 min-[720px]:grid-cols-2 min-[720px]:gap-16">
        <article
          v-for="item in cases.items"
          :key="item.title"
          class="accent-line"
        >
          <p
            class="mb-3 font-mono text-[0.6875rem] font-semibold tracking-caps text-brand"
          >
            {{ item.number }}
          </p>
          <h3 class="mb-3 text-xl font-bold tracking-[-0.02em]">
            {{ item.title }}
          </h3>
          <p class="leading-body text-text-muted">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
