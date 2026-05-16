<script setup lang="ts">
import { hero } from '../../data/content'
import BaseButton from '../base/BaseButton.vue'
import StackTag from '../base/StackTag.vue'
</script>

<template>
  <section
    id="top"
    class="border-b border-border px-8 pt-hero pb-section"
  >
    <div class="mx-auto max-w-275">
      <p
        class="mb-6 font-mono text-xs font-semibold uppercase tracking-wide text-brand"
      >
        {{ hero.label }}
      </p>

      <h1
        class="mb-6 whitespace-nowrap text-[clamp(2.25rem,8vw,5.375rem)] font-bold leading-display tracking-[-0.04em]"
      >
        {{ hero.firstName }} <em class="not-italic text-brand">{{ hero.lastName }}</em>
      </h1>

      <p
        class="mb-10 text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium leading-[1.3] tracking-[-0.01em] text-text"
      >
        {{ hero.tagline }}
      </p>

      <div class="mb-16 flex flex-wrap items-center gap-4">
        <BaseButton :href="hero.primaryCta.href" variant="primary">
          {{ hero.primaryCta.label }}
        </BaseButton>
        <BaseButton :href="hero.ghostCta.href" variant="ghost">
          {{ hero.ghostCta.label }}
        </BaseButton>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <span
          class="mr-2 font-mono text-xs tracking-[0.06em] text-text-subtle"
        >
          STACK
        </span>
        <StackTag v-for="item in hero.stack" :key="item" variant="cyan">{{ item }}</StackTag>
      </div>
    </div>
  </section>
</template>
