<script setup lang="ts">
import { services } from '../../data/content'
import ServiceCard from '../ServiceCard.vue'
</script>

<template>
  <section
    id="servicos"
    class="border-b border-border px-8 py-section"
  >
    <div class="mx-auto max-w-275">
      <p
        class="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-caps text-brand"
      >
        {{ services.label }}
      </p>

      <h2
        class="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-heading tracking-[-0.025em]"
      >
        {{ services.title }}
      </h2>

      <p class="max-w-130 leading-body text-text-muted">
        {{ services.sub }}
      </p>

      <div class="mt-12 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
        <ServiceCard
          v-for="item in services.items"
          :key="item.title"
          :number="item.number"
          :title="item.title"
          :description="item.description"
          :tags="item.tags"
        />
      </div>
    </div>
  </section>
</template>
