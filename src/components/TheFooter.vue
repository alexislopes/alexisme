<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-border px-8 py-7">
    <div class="mx-auto flex max-w-275 flex-wrap items-center justify-between gap-6">
      <p class="text-[0.8125rem] text-text-subtle">{{ t('footer.copyright') }}</p>
      <p class="font-mono text-xs text-text-subtle">{{ t('footer.note') }}</p>
    </div>
  </footer>
</template>
