<script setup lang="ts">
import { nav } from '../data/content'
</script>

<template>
  <nav
    class="sticky top-0 z-100 border-b border-border bg-[color-mix(in_srgb,var(--color-bg)_95%,transparent)] px-8 py-5 backdrop-blur-md"
    aria-label="Navegação principal"
  >
    <div class="mx-auto flex max-w-275 items-center justify-between gap-6">
      <a href="#top" class="inline-flex h-7 shrink-0 items-center text-text" aria-label="Alexis Lopes">
        <svg
          viewBox="0 0 632 492"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-full w-auto"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M411.373 0.00843172C423.032 -0.326241 432.503 9.34701 431.922 20.9967L409.942 461.674C409.439 471.772 401.479 479.905 391.395 480.627L241 491.387C107.899 491.387 0 382.593 0 248.387C6.88106e-05 114.182 107.899 5.38734 241 5.38734V4.89906L411.373 0.00843172ZM226 83.3903C161.383 83.3903 109 135.773 109 200.39C109 265.008 161.383 317.39 226 317.39C290.617 317.39 343 265.008 343 200.39C343 135.773 290.617 83.3903 226 83.3903Z"
          />
          <path
            fill="currentColor"
            d="M437.404 20.209C437.911 8.75696 447.921 0.0738589 459.33 1.18906L572.384 12.24C585.825 13.5538 594.29 27.5673 589.616 40.2373C569.183 95.6177 526.832 228.109 559.5 298.89C601.5 389.89 633.224 397.808 631.171 431.448C629.118 465.088 543.104 469.886 543.104 469.886L439.488 477.33C427.556 478.187 417.545 468.447 417.545 468.447L437.404 20.209Z"
          />
        </svg>
      </a>

      <ul class="hidden gap-8 min-[720px]:flex">
        <li v-for="link in nav.links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm text-text-muted transition-colors duration-fast hover:text-text"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        :href="nav.cta.href"
        class="rounded-md bg-brand px-5 py-2 text-[0.8125rem] font-semibold tracking-[0.02em] text-white transition-colors duration-base hover:bg-brand-hover"
      >
        {{ nav.cta.label }}
      </a>
    </div>
  </nav>
</template>
