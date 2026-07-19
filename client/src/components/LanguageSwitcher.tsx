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


import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import '../App.css'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-Hans', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-Hant', name: '繁體中文', flag: '🇹🇼' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
]

/**
 * Detection reports region tags (en-US, zh-CN, zh-TW), not the codes the bundles
 * are keyed by, so resolve those onto an entry we can actually label.
 */
function resolveLanguage(code: string) {
  const exact = languages.find((lang) => lang.code === code)
  if (exact) return exact

  if (code.startsWith('zh')) {
    const traditional = /Hant|TW|HK|MO/i.test(code)
    return languages.find((lang) => lang.code === (traditional ? 'zh-Hant' : 'zh-Hans')) || languages[0]
  }

  const base = code.split('-')[0]
  return languages.find((lang) => lang.code === base) || languages[0]
}

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const currentLanguage = resolveLanguage(i18n.language || 'en')

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    localStorage.setItem('i18nextLng', langCode)
    localStorage.setItem('languageManuallySet', 'true')
  }

  return (
    <div className="language-switcher-container">
      <button
        className="language-switcher-button"
        aria-label={t('languageSwitcher.ariaLabel')}
      >
        <Globe className="globe-icon" />
        <span className="language-text">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </button>

      <div className="language-dropdown">
        <div className="language-dropdown-content">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
            >
              <span className="language-flag">{lang.flag}</span>
              <span>{lang.name}</span>
              {i18n.language === lang.code && (
                <span className="language-check">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

