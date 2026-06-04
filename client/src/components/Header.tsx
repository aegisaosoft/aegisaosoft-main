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
            <Link to="/products">{t('header.products')}</Link>
            <Link to="/about">{t('header.about')}</Link>
            <Link to="/contact">{t('header.contact')}</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

