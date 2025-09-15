import { createI18n } from 'vue-i18n'
import uz from '@/locales/uz.json'
import ru from '@/locales/ru.json'
import { DEFAULT_LANGUAGE, Language } from '@/constants/languages'

let activeLang: string | null = localStorage.getItem('lang')
if (!activeLang) {
  localStorage.setItem('lang', DEFAULT_LANGUAGE)
  activeLang = DEFAULT_LANGUAGE
}

export const i18n = createI18n({
  legacy: false,
  locale: activeLang,
  fallbackLocale: 'uz',
  messages: {
    uz,
    ru,
  },
})
export function updateLang(lang: Language) {
  activeLang = lang
  i18n.global.locale.value = lang
  localStorage.setItem('lang', lang)
}
