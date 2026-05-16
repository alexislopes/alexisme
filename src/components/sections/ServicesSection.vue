<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { serviceKeys } from '../../data/config'
import ServiceCard from '../ServiceCard.vue'

const { t } = useI18n()

const items = computed(() =>
  serviceKeys.map((key) => ({
    key,
    number: t(`services.items.${key}.number`),
    title: t(`services.items.${key}.title`),
    description: t(`services.items.${key}.description`),
  })),
)
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
        {{ t('services.label') }}
      </p>

      <h2
        class="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-heading tracking-[-0.025em]"
      >
        {{ t('services.title') }}
      </h2>

      <p class="max-w-130 leading-body text-text-muted">
        {{ t('services.sub') }}
      </p>

      <div class="mt-12 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
        <ServiceCard
          v-for="item in items"
          :key="item.key"
          :number="item.number"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>
