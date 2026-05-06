<script setup lang="ts">
import { contact } from '../../data/content'
</script>

<template>
  <section id="contato" class="section">
    <div class="container">
      <p class="section-label">{{ contact.label }}</p>
      <h2 class="title">
        {{ contact.title }}<br />
        {{ contact.titleSecondLine }}
      </h2>
      <p class="sub">{{ contact.sub }}</p>

      <a :href="`mailto:${contact.email}`" class="email">{{ contact.email }}</a>

      <div class="socials">
        <a
          v-for="social in contact.socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="social"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6.25rem 2rem;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 30rem;
  margin: 0 auto 2.5rem;
  line-height: var(--leading-body);
}

.email {
  display: inline-block;
  font-size: 1.125rem;
  color: var(--color-brand);
  font-weight: 600;
  margin-bottom: 2rem;
  transition: color var(--duration-fast) ease;
}

.email:hover { color: var(--color-red-300); }

.socials {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-md);
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.social:hover {
  color: var(--color-text);
  border-color: var(--color-neutral-40);
}
</style>
