<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { heroStack, heroPrimaryCtaHref, heroGhostCtaHref } from '../../data/config'
import BaseButton from '../base/BaseButton.vue'
import StackTag from '../base/StackTag.vue'

const { t } = useI18n()
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
        {{ t('hero.label') }}
      </p>

      <h1
        class="mb-6 whitespace-nowrap text-[clamp(2.25rem,8vw,5.375rem)] font-bold leading-display tracking-[-0.04em]"
      >
        {{ t('hero.firstName') }} <em class="not-italic text-brand">{{ t('hero.lastName') }}</em>
      </h1>

      <p
        class="mb-10 text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium leading-[1.3] tracking-[-0.01em] text-text"
      >
        {{ t('hero.tagline') }}
      </p>

      <div class="mb-16 flex flex-wrap items-center gap-4">
        <BaseButton :href="heroPrimaryCtaHref" variant="primary">
          {{ t('hero.primaryCta') }}
        </BaseButton>
        <BaseButton :href="heroGhostCtaHref" variant="ghost">
          {{ t('hero.ghostCta') }}
        </BaseButton>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <span
          class="mr-2 font-mono text-xs tracking-[0.06em] text-text-subtle"
        >
          {{ t('hero.stackLabel') }}
        </span>
        <StackTag v-for="item in heroStack" :key="item" variant="cyan">{{ item }}</StackTag>
      </div>
    </div>
  </section>
</template>
