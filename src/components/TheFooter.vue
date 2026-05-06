<script setup lang="ts">
import { footer } from '../data/content'
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <p class="copy">{{ footer.copyright }}</p>
      <p class="note">{{ footer.note }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: 1.75rem 2rem;
}

.inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.copy {
  font-size: 0.8125rem;
  color: var(--color-text-subtle);
}

.note {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-subtle);
}
</style>
