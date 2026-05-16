<script setup lang="ts">
import { contact } from '../../data/content'
</script>

<template>
  <section id="contato" class="px-8 py-hero text-center">
    <div class="mx-auto max-w-275">
      <p
        class="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-caps text-brand"
      >
        {{ contact.label }}
      </p>

      <h2
        class="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight"
      >
        {{ contact.title }}<br />
        {{ contact.titleSecondLine }}
      </h2>

      <p class="mx-auto mb-10 max-w-120 leading-body text-text-muted">
        {{ contact.sub }}
      </p>

      <a
        :href="`mailto:${contact.email}`"
        class="mb-8 inline-block text-lg font-semibold text-brand transition-colors duration-fast hover:text-red-300"
      >
        {{ contact.email }}
      </a>

      <div class="flex flex-wrap justify-center gap-5">
        <a
          v-for="social in contact.socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-md border border-border px-5 py-2 text-[0.8125rem] text-text-muted transition-colors duration-fast hover:border-neutral-40 hover:text-text"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </section>
</template>
