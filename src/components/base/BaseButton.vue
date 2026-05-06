<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'ghost'
  href?: string
  as?: 'a' | 'button'
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
})

const tag = computed(() => props.as ?? (props.href ? 'a' : 'button'))
const utility = computed(() => (props.variant === 'primary' ? 'btn-brand' : 'btn-ghost'))
</script>

<template>
  <component
    :is="tag"
    :class="utility"
    :href="tag === 'a' ? href : undefined"
    :type="tag === 'button' ? type : undefined"
  >
    <slot />
  </component>
</template>
