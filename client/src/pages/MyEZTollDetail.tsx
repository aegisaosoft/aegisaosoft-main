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
import myEZTollLogo from '../assets/myeztoll-logo.png'

/** List item that keeps inline <strong> markup out of the translation string. */
type LabeledItem = { label: string; text: string }

export function MyEZTollDetail() {
  const { t } = useTranslation()

  // Helper casts for i18next arrays returned via returnObjects
  const list = (key: string) => t(key, { returnObjects: true }) as string[]
  const labeledList = (key: string) => t(key, { returnObjects: true }) as LabeledItem[]

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1 className="product-logo-heading">
            <img src={myEZTollLogo} alt="MyEZToll" className="product-logo product-logo-lg" />
          </h1>
          <h2>{t('myEZTollDetail.hero.title')}</h2>
          <p className="subtitle">
            {t('myEZTollDetail.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('myEZTollDetail.whatIs.title')}</h2>
            <p>{t('myEZTollDetail.whatIs.p1')}</p>
            <p>{t('myEZTollDetail.whatIs.p2')}</p>
            <p>{t('myEZTollDetail.whatIs.p3')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 {t('myEZTollDetail.forWhom.title')}</h2>
            <ul>
              {labeledList('myEZTollDetail.forWhom.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('myEZTollDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🚛 {t('myEZTollDetail.capabilities.cards.automatedToll.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.automatedToll.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🅿️ {t('myEZTollDetail.capabilities.cards.parkingViolations.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.parkingViolations.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🛰️ {t('myEZTollDetail.capabilities.cards.gpsTolling.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.gpsTolling.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🚨 {t('myEZTollDetail.capabilities.cards.towingAlerts.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.towingAlerts.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🔌 {t('myEZTollDetail.capabilities.cards.thirdPartyGps.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.thirdPartyGps.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🧠 {t('myEZTollDetail.capabilities.cards.aiRateResearch.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.aiRateResearch.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🇺🇸🇨🇦 {t('myEZTollDetail.capabilities.cards.coverage.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.coverage.text')}</p>
              </div>
              <div className="capability-card">
                <h3>⚙️ {t('myEZTollDetail.capabilities.cards.ownerPortal.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.ownerPortal.text')}</p>
              </div>
              <div className="capability-card">
                <h3>📊 {t('myEZTollDetail.capabilities.cards.analytics.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.analytics.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🤖 {t('myEZTollDetail.capabilities.cards.automation.title')}</h3>
                <p>{t('myEZTollDetail.capabilities.cards.automation.text')}</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 {t('myEZTollDetail.problems.title')}</h2>
            <ul>
              {labeledList('myEZTollDetail.problems.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div className="detail-section">
            <h2>🤖 {t('myEZTollDetail.ai.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('myEZTollDetail.ai.intro')}
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🔎 {t('myEZTollDetail.ai.cards.rateResearch.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.ai.cards.rateResearch.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  📄 {t('myEZTollDetail.ai.cards.documents.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.ai.cards.documents.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🧭 {t('myEZTollDetail.ai.cards.tripMatching.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.ai.cards.tripMatching.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* GPS */}
          <div className="detail-section">
            <h2>🛰️ {t('myEZTollDetail.gps.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('myEZTollDetail.gps.intro')}
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  📍 {t('myEZTollDetail.gps.cards.derivedTolls.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.derivedTolls.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🗺️ {t('myEZTollDetail.gps.cards.liveMap.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.liveMap.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🚨 {t('myEZTollDetail.gps.cards.alerts.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {labeledList('myEZTollDetail.gps.cards.alerts.labeledItems').map((item) => (
                    <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
                  ))}
                  {list('myEZTollDetail.gps.cards.alerts.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🛡️ {t('myEZTollDetail.gps.cards.theft.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.theft.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  📐 {t('myEZTollDetail.gps.cards.geofencing.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.geofencing.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🔌 {t('myEZTollDetail.gps.cards.externalProviders.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.externalProviders.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  🔧 {t('myEZTollDetail.gps.cards.devices.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {list('myEZTollDetail.gps.cards.devices.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Key Features */}
          <div className="detail-section">
            <h2>🔑 {t('myEZTollDetail.keyFeatures.title')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>🔄 {t('myEZTollDetail.keyFeatures.cards.singleOrg.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.singleOrg.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🏛️ {t('myEZTollDetail.keyFeatures.cards.government.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.government.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🇨🇦 {t('myEZTollDetail.keyFeatures.cards.canadian.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.canadian.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🔗 {t('myEZTollDetail.keyFeatures.cards.connectors.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.connectors.text')}</p>
              </div>
              <div className="feature-item">
                <h3>💰 {t('myEZTollDetail.keyFeatures.cards.costOptimization.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.costOptimization.text')}</p>
              </div>
              <div className="feature-item">
                <h3>📱 {t('myEZTollDetail.keyFeatures.cards.mobile.title')}</h3>
                <p>{t('myEZTollDetail.keyFeatures.cards.mobile.text')}</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('myEZTollDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.frontend.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.frontend.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.backend.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.backend.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.database.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.database.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.ai.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.ai.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.gps.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.gps.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.cloud.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.cloud.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.automation.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.automation.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZTollDetail.tech.cards.security.title')}</h3>
                <p>{t('myEZTollDetail.tech.cards.security.text')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('myEZTollDetail.cta.title')}</h2>
            <p>{t('myEZTollDetail.cta.text')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">{t('myEZTollDetail.cta.requestDemo')}</Link>
              <a href="https://myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('myEZTollDetail.cta.visitSite')}</a>
              <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('myEZTollDetail.cta.ownerPortal')}</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
