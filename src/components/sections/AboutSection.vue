<script setup lang="ts">
import { about } from '../../data/content'
import CodeBlock from '../base/CodeBlock.vue'

// Convert **bold** markers in copy to <strong> spans.
function renderMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}
</script>

<template>
  <section id="sobre" class="section">
    <div class="container">
      <p class="section-label">{{ about.label }}</p>
      <h2 class="title">
        {{ about.title }}<br />
        {{ about.titleHighlight }}
      </h2>

      <div class="grid">
        <div class="text">
          <p
            v-for="(paragraph, i) in about.paragraphs"
            :key="i"
            v-html="renderMarkdown(paragraph)"
          />
        </div>

        <CodeBlock>
<span class="c-gray">// Alexis.vue</span>
<span class="c-red">&lt;script setup&gt;</span>
  <span class="c-white">const</span> role = <span class="c-green">'Senior Vue.js Engineer'</span>
  <span class="c-white">const</span> focus = [
    <span class="c-green">'Architecture'</span>,
    <span class="c-green">'Component Systems'</span>,
    <span class="c-green">'Scalable Interfaces'</span>
  ]
<span class="c-red">&lt;/script&gt;</span>
        </CodeBlock>
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}

.text p {
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  line-height: var(--leading-body);
}

.text :deep(strong) { color: var(--color-text); font-weight: 600; }

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
