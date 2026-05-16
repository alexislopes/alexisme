import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import pt from './pt'
import en from './en'

export type Locale = 'pt' | 'en'
export const SUPPORTED_LOCALES: Locale[] = ['pt', 'en']

const STORAGE_KEY = 'locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored
  const nav = window.navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('en') ? 'en' : 'pt'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectInitialLocale(),
  fallbackLocale: 'pt',
  messages: { pt, en },
})

// Keep <html lang> and localStorage in sync with the current locale.
if (typeof window !== 'undefined') {
  const apply = (locale: Locale) => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
    window.localStorage.setItem(STORAGE_KEY, locale)
  }
  apply(i18n.global.locale.value as Locale)
  watch(i18n.global.locale, (l) => apply(l as Locale))
}
