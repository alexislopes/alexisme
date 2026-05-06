<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'red' | 'cyan' | 'cobalt'
}

const props = withDefaults(defineProps<Props>(), { variant: 'cyan' })

const utility = computed(() => `tag-${props.variant}`)
</script>

<template>
  <span :class="utility">
    <slot />
  </span>
</template>
