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
import { OWNER_APP_PLAY_URL, OWNER_APP_ON_PLAY } from '../products/ownerApp'

/** List item that keeps inline <strong> markup out of the translation string. */
type LabeledItem = { label: string; text: string }

export function OwnerAppDetail() {
  const { t } = useTranslation()

  // Helper casts for i18next arrays returned via returnObjects
  const list = (key: string) => t(key, { returnObjects: true }) as string[]
  const labeledList = (key: string) => t(key, { returnObjects: true }) as LabeledItem[]

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1>📱 MyEZToll Owner</h1>
          <h2>{t('ownerAppDetail.hero.title')}</h2>
          <p className="subtitle">
            {t('ownerAppDetail.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('ownerAppDetail.whatIs.title')}</h2>
            <p>{t('ownerAppDetail.whatIs.p1')}</p>
            <p>{t('ownerAppDetail.whatIs.p2')}</p>
            <p>{t('ownerAppDetail.whatIs.p3')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>👥 {t('ownerAppDetail.forWhom.title')}</h2>
            <ul>
              {labeledList('ownerAppDetail.forWhom.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('ownerAppDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>📊 {t('ownerAppDetail.capabilities.cards.dashboard.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.dashboard.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🚗 {t('ownerAppDetail.capabilities.cards.vehicles.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.vehicles.text')}</p>
              </div>
              <div className="capability-card">
                <h3>📅 {t('ownerAppDetail.capabilities.cards.bookings.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.bookings.text')}</p>
              </div>
              <div className="capability-card">
                <h3>💳 {t('ownerAppDetail.capabilities.cards.charges.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.charges.text')}</p>
              </div>
              <div className="capability-card">
                <h3>📸 {t('ownerAppDetail.capabilities.cards.disputes.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.disputes.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🚦 {t('ownerAppDetail.capabilities.cards.violations.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.violations.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🪪 {t('ownerAppDetail.capabilities.cards.drivers.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.drivers.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🔐 {t('ownerAppDetail.capabilities.cards.account.title')}</h3>
                <p>{t('ownerAppDetail.capabilities.cards.account.text')}</p>
              </div>
            </div>
          </div>

          {/* Turo integration */}
          <div className="detail-section">
            <h2>🔄 {t('ownerAppDetail.turo.title')}</h2>
            <p>{t('ownerAppDetail.turo.p1')}</p>
            <p>{t('ownerAppDetail.turo.p2')}</p>
            <p>{t('ownerAppDetail.turo.p3')}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('ownerAppDetail.turo.note')}</p>
          </div>

          {/* Problems it solves */}
          <div className="detail-section">
            <h2>🔧 {t('ownerAppDetail.problems.title')}</h2>
            <ul>
              {labeledList('ownerAppDetail.problems.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div className="detail-section">
            <h2>🛡️ {t('ownerAppDetail.privacy.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('ownerAppDetail.privacy.intro')}
            </p>
            <ul>
              {list('ownerAppDetail.privacy.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('ownerAppDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.platform.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.platform.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.backend.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.backend.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.security.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.security.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.photos.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.photos.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.updates.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.updates.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('ownerAppDetail.tech.cards.distribution.title')}</h3>
                <p>{t('ownerAppDetail.tech.cards.distribution.text')}</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="detail-section">
            <h2>📋 {t('ownerAppDetail.requirements.title')}</h2>
            <ul>
              {list('ownerAppDetail.requirements.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('ownerAppDetail.cta.title')}</h2>
            <p>{t('ownerAppDetail.cta.text')}</p>
            <div className="cta-buttons">
              {OWNER_APP_ON_PLAY ? (
                <a href={OWNER_APP_PLAY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('ownerAppDetail.cta.googlePlay')}</a>
              ) : (
                <span className="btn btn-secondary" aria-disabled="true" style={{ opacity: 0.6, cursor: 'default' }}>{t('ownerAppDetail.cta.googlePlaySoon')}</span>
              )}
              <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('ownerAppDetail.cta.ownerPortal')}</a>
              <Link to="/products/myeztoll" className="btn btn-secondary">{t('ownerAppDetail.cta.platform')}</Link>
              <Link to="/contact" className="btn btn-secondary">{t('ownerAppDetail.cta.contact')}</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
