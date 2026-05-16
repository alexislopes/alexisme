<script setup lang="ts">
import { process } from '../../data/content'
</script>

<template>
  <section
    id="processo"
    class="border-b border-border px-8 py-section"
  >
    <div class="mx-auto max-w-275">
      <p
        class="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-caps text-brand"
      >
        {{ process.label }}
      </p>

      <h2
        class="mb-12 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-heading tracking-[-0.025em]"
      >
        {{ process.title }}
      </h2>

      <div
        class="grid grid-cols-1 gap-10 min-[720px]:grid-cols-2 min-[720px]:gap-12 min-[1024px]:grid-cols-4 min-[1024px]:gap-8"
      >
        <article
          v-for="step in process.steps"
          :key="step.number"
          class="accent-line"
        >
          <p
            class="mb-3 font-mono text-[0.6875rem] font-semibold tracking-caps text-brand"
          >
            {{ step.number }}
          </p>
          <h3 class="mb-3 text-lg font-bold tracking-[-0.02em]">
            {{ step.title }}
          </h3>
          <p class="text-sm leading-body text-text-muted">
            {{ step.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
