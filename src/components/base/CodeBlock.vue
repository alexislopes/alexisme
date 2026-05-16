<script setup lang="ts">
// Static syntax-highlighting helpers exposed via slot content.
</script>

<template>
  <div
    class="rounded-lg border border-border bg-elevated p-6 font-mono text-[0.8125rem] leading-code text-text-muted"
  >
    <div class="mb-4 flex gap-1.5 border-b border-border pb-3">
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
    <pre class="m-0 whitespace-pre-wrap font-mono text-inherit"><slot /></pre>
  </div>
</template>
