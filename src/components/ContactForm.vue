<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { formspreeEndpoint } from '../data/config'

const { t } = useI18n()

const name = ref('')
const email = ref('')
const message = ref('')
const gotcha = ref('') // honeypot — bots fill, humans don't see

type Status = 'idle' | 'loading' | 'success' | 'error'
const status = ref<Status>('idle')

async function submit() {
  if (status.value === 'loading') return

  if (gotcha.value) {
    // bot filled the honeypot — silently succeed
    status.value = 'success'
    return
  }

  status.value = 'loading'

  try {
    const res = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        _gotcha: gotcha.value,
      }),
    })

    if (!res.ok) throw new Error(`Formspree responded with ${res.status}`)

    status.value = 'success'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    console.error(err)
    status.value = 'error'
  }
}
</script>

<template>
  <form
    v-if="status !== 'success'"
    class="mx-auto flex max-w-150 flex-col gap-5 text-left"
    @submit.prevent="submit"
  >
    <label class="flex flex-col gap-2">
      <span class="text-xs font-medium uppercase tracking-caps text-text-muted">
        {{ t('contact.form.nameLabel') }}
      </span>
      <input
        v-model="name"
        type="text"
        required
        autocomplete="name"
        :placeholder="t('contact.form.namePlaceholder')"
        class="rounded-md border border-border bg-surface px-4 py-3 text-text placeholder:text-text-subtle focus:border-brand focus:outline-none"
      />
    </label>

    <label class="flex flex-col gap-2">
      <span class="text-xs font-medium uppercase tracking-caps text-text-muted">
        {{ t('contact.form.emailLabel') }}
      </span>
      <input
        v-model="email"
        type="email"
        required
        autocomplete="email"
        :placeholder="t('contact.form.emailPlaceholder')"
        class="rounded-md border border-border bg-surface px-4 py-3 text-text placeholder:text-text-subtle focus:border-brand focus:outline-none"
      />
    </label>

    <label class="flex flex-col gap-2">
      <span class="text-xs font-medium uppercase tracking-caps text-text-muted">
        {{ t('contact.form.messageLabel') }}
      </span>
      <textarea
        v-model="message"
        required
        rows="5"
        :placeholder="t('contact.form.messagePlaceholder')"
        class="resize-y rounded-md border border-border bg-surface px-4 py-3 leading-body text-text placeholder:text-text-subtle focus:border-brand focus:outline-none"
      />
    </label>

    <!-- honeypot: hidden from humans, bots fill it -->
    <input
      v-model="gotcha"
      type="text"
      name="_gotcha"
      tabindex="-1"
      autocomplete="off"
      class="hidden"
      aria-hidden="true"
    />

    <button
      type="submit"
      :disabled="status === 'loading'"
      class="btn-brand justify-center disabled:opacity-60"
    >
      {{ status === 'loading' ? t('contact.form.submitLoading') : t('contact.form.submitIdle') }}
    </button>

    <p
      v-if="status === 'error'"
      class="text-sm text-brand"
      role="alert"
    >
      <strong>{{ t('contact.form.errorTitle') }}</strong> {{ t('contact.form.errorBody') }}
    </p>
  </form>

  <div v-else class="mx-auto max-w-150 text-left" role="status">
    <p class="mb-2 text-2xl font-bold tracking-tight text-text">
      {{ t('contact.form.successTitle') }}
    </p>
    <p class="leading-body text-text-muted">
      {{ t('contact.form.successBody') }}
    </p>
  </div>
</template>
