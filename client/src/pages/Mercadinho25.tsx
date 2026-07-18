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

export function Mercadinho25() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>{t('mercadinho25.title')}</h1>
          <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#666' }}>
            {t('mercadinho25.description')}
          </p>
        </div>
      </section>
    </main>
  )
}


