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
import './Footer.css'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t('footer.company')}</h4>
            <p>EIN: 41-2444296</p>
            <p>New Jersey, USA</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <a href="mailto:aegisaosoft@gmail.com">aegisaosoft@gmail.com</a>
          </div>
          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <a href="/about#services">{t('footer.vehicleRental')}</a>
            <a href="/about#services">{t('footer.compliance')}</a>
            <a href="/about#services">{t('footer.booking')}</a>
          </div>
        </div>
        <p className="footer-meta">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}

