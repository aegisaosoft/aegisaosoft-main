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
import { SEWGEN_URL } from '../products/sewGen'

/** List item that keeps inline <strong> markup out of the translation string. */
type LabeledItem = { label: string; text: string }

/** Capability cards in display order, each with its icon. */
const CAPABILITIES: Array<[key: string, icon: string]> = [
  ['upload', '🖼️'],
  ['monogram', '🔤'],
  ['ai', '✨'],
  ['preview', '👀'],
  ['threads', '🧶'],
  ['formats', '💾'],
  ['modes', '🎚️'],
  ['open', '📂'],
]

export function SewGenDetail() {
  const { t } = useTranslation()

  // Helper casts for i18next arrays returned via returnObjects
  const list = (key: string) => t(key, { returnObjects: true }) as string[]
  const labeledList = (key: string) => t(key, { returnObjects: true }) as LabeledItem[]

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1>🧵 SewGen</h1>
          <h2>{t('sewGenDetail.hero.title')}</h2>
          <p className="subtitle">
            {t('sewGenDetail.hero.subtitle')}
          </p>
          <div className="cta-buttons">
            <a href={SEWGEN_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('sewGenDetail.cta.openSite')}</a>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('sewGenDetail.whatIs.title')}</h2>
            <p>{t('sewGenDetail.whatIs.p1')}</p>
            <p>{t('sewGenDetail.whatIs.p2')}</p>
            <p>{t('sewGenDetail.whatIs.p3')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>👥 {t('sewGenDetail.forWhom.title')}</h2>
            <ul>
              {labeledList('sewGenDetail.forWhom.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('sewGenDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              {CAPABILITIES.map(([key, icon]) => (
                <div className="capability-card" key={key}>
                  <h3>{icon} {t(`sewGenDetail.capabilities.cards.${key}.title`)}</h3>
                  <p>{t(`sewGenDetail.capabilities.cards.${key}.text`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* File formats and machines */}
          <div className="detail-section">
            <h2>🪡 {t('sewGenDetail.formats.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('sewGenDetail.formats.intro')}
            </p>
            <ul>
              {labeledList('sewGenDetail.formats.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="detail-section">
            <h2>💳 {t('sewGenDetail.pricing.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('sewGenDetail.pricing.intro')}
            </p>
            <ul>
              {list('sewGenDetail.pricing.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="detail-section">
            <h2>🌍 {t('sewGenDetail.languages.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('sewGenDetail.languages.intro')}
            </p>
            <ul>
              {list('sewGenDetail.languages.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('sewGenDetail.cta.title')}</h2>
            <p>{t('sewGenDetail.cta.text')}</p>
            <div className="cta-buttons">
              <a href={SEWGEN_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('sewGenDetail.cta.openSite')}</a>
              <Link to="/contact" className="btn btn-secondary">{t('sewGenDetail.cta.contact')}</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
