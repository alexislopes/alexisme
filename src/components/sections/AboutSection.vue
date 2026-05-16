<script setup lang="ts">
import { about } from '../../data/content'
import CodeBlock from '../base/CodeBlock.vue'

// Convert **bold** markers in copy to <strong> spans.
function renderMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
}
</script>

<template>
  <section
    id="sobre"
    class="border-b border-border px-8 py-section"
  >
    <div class="mx-auto max-w-275">
      <p
        class="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-caps text-brand"
      >
        {{ about.label }}
      </p>

      <h2
        class="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-heading tracking-[-0.025em]"
      >
        {{ about.title }}<br />
        {{ about.titleHighlight }}
      </h2>

      <div class="mt-12 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <p
            v-for="(paragraph, i) in about.paragraphs"
            :key="i"
            class="mb-5 leading-body text-text-muted"
            v-html="renderMarkdown(paragraph)"
          />
        </div>

        <CodeBlock>
<span class="text-text-subtle">// Alexis.vue</span>
<span class="text-brand">&lt;script setup&gt;</span>
  <span class="text-text">const</span> role = <span class="text-[#3FB950]">'Senior Vue.js Engineer'</span>
  <span class="text-text">const</span> focus = [
    <span class="text-[#3FB950]">'Architecture'</span>,
    <span class="text-[#3FB950]">'Component Systems'</span>,
    <span class="text-[#3FB950]">'Scalable Interfaces'</span>
  ]
<span class="text-brand">&lt;/script&gt;</span>
        </CodeBlock>
      </div>
    </div>
  </section>
</template>
