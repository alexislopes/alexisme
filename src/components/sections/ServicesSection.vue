<script setup lang="ts">
import { services } from '../../data/content'
import ServiceCard from '../ServiceCard.vue'
</script>

<template>
  <section id="servicos" class="section">
    <div class="container">
      <p class="section-label">{{ services.label }}</p>
      <h2 class="title">{{ services.title }}</h2>
      <p class="sub">{{ services.sub }}</p>

      <div class="grid">
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

<style scoped>
.section {
  padding: 5rem 2rem;
  border-bottom: 1px solid var(--color-border);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
}

.sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 32.5rem;
  line-height: var(--leading-body);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
