import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../App.css'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <LanguageSwitcher />
          <nav className="header-nav">
            <Link to="/">{t('header.home')}</Link>
            <Link to="/about">{t('header.about')}</Link>
            <Link to="/contact">{t('header.contact')}</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

