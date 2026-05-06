<script setup lang="ts">
// Static syntax-highlighting helpers exposed via slot content.
</script>

<template>
  <div class="code-block">
    <div class="code-top">
      <span class="dot dot-r" />
      <span class="dot dot-y" />
      <span class="dot dot-g" />
    </div>
    <pre class="code-body"><slot /></pre>
  </div>
</template>

<style scoped>
.code-block {
  background-color: var(--color-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: var(--leading-code);
  color: var(--color-text-muted);
}

.code-top {
  display: flex;
  gap: 0.375rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.dot-r { background: #FF5F57; }
.dot-y { background: #FEBC2E; }
.dot-g { background: #28C840; }

.code-body {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  color: inherit;
}

:slotted(.c-red)   { color: var(--color-brand); }
:slotted(.c-white) { color: var(--color-text); }
:slotted(.c-gray)  { color: var(--color-text-subtle); }
:slotted(.c-green) { color: #3FB950; }
</style>
