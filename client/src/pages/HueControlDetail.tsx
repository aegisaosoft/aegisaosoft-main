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

/** List item that keeps inline <strong> markup out of the translation string. */
type LabeledItem = { label: string; text: string }

export function HueControlDetail() {
  const { t } = useTranslation()

  // Helper casts for i18next arrays returned via returnObjects
  const list = (key: string) => t(key, { returnObjects: true }) as string[]
  const labeledList = (key: string) => t(key, { returnObjects: true }) as LabeledItem[]

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1>💡 HueControl</h1>
          <h2>{t('hueControlDetail.hero.title')}</h2>
          <p className="subtitle">
            {t('hueControlDetail.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('hueControlDetail.whatIs.title')}</h2>
            <p>{t('hueControlDetail.whatIs.p1')}</p>
            <p>{t('hueControlDetail.whatIs.p2')}</p>
            <p>{t('hueControlDetail.whatIs.p3')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>👥 {t('hueControlDetail.forWhom.title')}</h2>
            <ul>
              {labeledList('hueControlDetail.forWhom.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('hueControlDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🎛️ {t('hueControlDetail.capabilities.cards.lights.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.lights.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🎨 {t('hueControlDetail.capabilities.cards.color.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.color.text')}</p>
              </div>
              <div className="capability-card">
                <h3>➕ {t('hueControlDetail.capabilities.cards.devices.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.devices.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🔘 {t('hueControlDetail.capabilities.cards.switches.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.switches.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🌇 {t('hueControlDetail.capabilities.cards.scenes.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.scenes.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🏠 {t('hueControlDetail.capabilities.cards.bridges.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.bridges.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🔒 {t('hueControlDetail.capabilities.cards.local.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.local.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🌍 {t('hueControlDetail.capabilities.cards.languages.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.languages.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🌗 {t('hueControlDetail.capabilities.cards.themes.title')}</h3>
                <p>{t('hueControlDetail.capabilities.cards.themes.text')}</p>
              </div>
            </div>
          </div>

          {/* Problems it solves */}
          <div className="detail-section">
            <h2>🔧 {t('hueControlDetail.problems.title')}</h2>
            <ul>
              {labeledList('hueControlDetail.problems.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div className="detail-section">
            <h2>🛡️ {t('hueControlDetail.privacy.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('hueControlDetail.privacy.intro')}
            </p>
            <ul>
              {list('hueControlDetail.privacy.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="detail-section">
            <h2>🌍 {t('hueControlDetail.languages.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('hueControlDetail.languages.intro')}
            </p>
            <ul>
              {list('hueControlDetail.languages.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('hueControlDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.platform.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.platform.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.ui.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.ui.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.architecture.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.architecture.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.bridge.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.bridge.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.dependencies.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.dependencies.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.i18n.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.i18n.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.testing.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.testing.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('hueControlDetail.tech.cards.license.title')}</h3>
                <p>{t('hueControlDetail.tech.cards.license.text')}</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="detail-section">
            <h2>📋 {t('hueControlDetail.requirements.title')}</h2>
            <ul>
              {list('hueControlDetail.requirements.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('hueControlDetail.cta.title')}</h2>
            <p>{t('hueControlDetail.cta.text')}</p>
            <div className="cta-buttons">
              <a href="https://github.com/aegisaosoft/huecontrol" className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('hueControlDetail.cta.sourceCode')}</a>
              <a href="https://aegisaosoft.github.io/huecontrol/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('hueControlDetail.cta.privacyPolicy')}</a>
              <Link to="/contact" className="btn btn-secondary">{t('hueControlDetail.cta.contact')}</Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
              {t('hueControlDetail.cta.trademarkNote')}
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
