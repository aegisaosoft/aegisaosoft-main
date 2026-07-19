/*
 * Copyright (c) 2025-2026 Aegis AO Soft LLC and Alexander Orlov.
 * 34 Middletown Ave, Atlantic Highlands, NJ 07716
 *
 * THIS SOFTWARE IS THE CONFIDENTIAL AND PROPRIETARY INFORMATION OF
 * Aegis AO Soft LLC and Alexander Orlov.
 *
 * This code may be used, reproduced, modified, or distributed ONLY with the
 * prior written permission of Aegis AO Soft LLC / Alexander Orlov.
 *
 * Author: Alexander Orlov
 * Aegis AO Soft LLC
 */


import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import ja from './locales/ja.json'
import ru from './locales/ru.json'
import hi from './locales/hi.json'
import zhHans from './locales/zh-Hans.json'
import zhHant from './locales/zh-Hant.json'
import gnMby from './locales/gn-mby.json'
import yrl from './locales/yrl.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
      fr: { translation: fr },
      de: { translation: de },
      it: { translation: it },
      ja: { translation: ja },
      ru: { translation: ru },
      hi: { translation: hi },
      'zh-Hans': { translation: zhHans },
      'zh-Hant': { translation: zhHant },
      'gn-mby': { translation: gnMby },
      yrl: { translation: yrl },
    },
    // Browsers report Chinese as zh-CN / zh-TW / zh-HK, never as the script tags
    // we key the bundles by, so map the region tags onto the right script first.
    fallbackLng: {
      zh: ['zh-Hans', 'en'],
      'zh-CN': ['zh-Hans', 'en'],
      'zh-SG': ['zh-Hans', 'en'],
      'zh-TW': ['zh-Hant', 'en'],
      'zh-HK': ['zh-Hant', 'en'],
      'zh-MO': ['zh-Hant', 'en'],
      default: ['en'],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

