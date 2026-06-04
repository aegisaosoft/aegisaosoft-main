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
import '../App.css'

export function Booking() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="services" id="services">
        <div className="container">
          <h2>{t('booking.title')}</h2>
          <p className="section-subtitle">
            {t('booking.subtitle')}
          </p>
          <div className="services-grid">
            <article className="service-card">
              <h3>{t('booking.title')}</h3>
              <p>
                {t('booking.description')}
              </p>
              <ul>
                <li>{t('booking.features.resortSearch')}</li>
                <li>{t('booking.features.bookingManagement')}</li>
                <li>{t('booking.features.paymentProcessing')}</li>
                <li>{t('booking.features.multiLanguage')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

