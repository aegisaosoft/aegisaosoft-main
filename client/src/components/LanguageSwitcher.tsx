import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import '../App.css'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    localStorage.setItem('i18nextLng', langCode)
    localStorage.setItem('languageManuallySet', 'true')
  }

  return (
    <div className="language-switcher-container">
      <button
        className="language-switcher-button"
        aria-label="Change language"
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

