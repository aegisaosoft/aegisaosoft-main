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
import ezMark from '../assets/ez-mark.png'

export function MyEZWheelsDetail() {
  const { t } = useTranslation()

  return (
    <main className="product-detail-page">
      <section className="hero" style={{ backgroundColor: 'var(--card-bg)', padding: '4rem 0' }}>
        <div className="container">
          <h1 className="product-logo-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            <img src={ezMark} alt="" className="product-mark product-mark-lg" />
            MyEZWheels
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>{t('myEZWheelsDetail.hero.tagline')}</h2>
          <p className="subtitle" style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            {t('myEZWheelsDetail.hero.subtitle')}
          </p>
          <div className="hero-actions" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a href="https://myezwheels.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginRight: '1rem' }}>{t('myEZWheelsDetail.hero.tryDemo')}</a>
            <a href="https://myezwheels.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>{t('myEZWheelsDetail.hero.visitPlatform')}</a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>15</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('myEZWheelsDetail.hero.stats.languages')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('myEZWheelsDetail.hero.stats.multi')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('myEZWheelsDetail.hero.stats.tenant')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('myEZWheelsDetail.hero.stats.ai')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('myEZWheelsDetail.hero.stats.powered')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('myEZWheelsDetail.hero.stats.cloud')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('myEZWheelsDetail.hero.stats.native')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('myEZWheelsDetail.whatIs.title')}</h2>
            <p>{t('myEZWheelsDetail.whatIs.p1')}</p>
            <p>{t('myEZWheelsDetail.whatIs.p2')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 {t('myEZWheelsDetail.forWhom.title')}</h2>
            <ul>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.rentalCompanies.label')}</strong> {t('myEZWheelsDetail.forWhom.items.rentalCompanies.text')}</li>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.fleetOperators.label')}</strong> {t('myEZWheelsDetail.forWhom.items.fleetOperators.text')}</li>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.entrepreneurs.label')}</strong> {t('myEZWheelsDetail.forWhom.items.entrepreneurs.text')}</li>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.existingBusinesses.label')}</strong> {t('myEZWheelsDetail.forWhom.items.existingBusinesses.text')}</li>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.multiLocationChains.label')}</strong> {t('myEZWheelsDetail.forWhom.items.multiLocationChains.text')}</li>
              <li><strong>{t('myEZWheelsDetail.forWhom.items.p2pHosts.label')}</strong> {t('myEZWheelsDetail.forWhom.items.p2pHosts.text')}</li>
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('myEZWheelsDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🏬 {t('myEZWheelsDetail.capabilities.storefronts.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.storefronts.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🌍 {t('myEZWheelsDetail.capabilities.languages.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.languages.text')}</p>
              </div>
              <div className="capability-card">
                <h3>📱 {t('myEZWheelsDetail.capabilities.license.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.license.text')}</p>
              </div>
              <div className="capability-card">
                <h3>💳 {t('myEZWheelsDetail.capabilities.payments.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.payments.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🚙 {t('myEZWheelsDetail.capabilities.fleet.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.fleet.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🔗 {t('myEZWheelsDetail.capabilities.integrations.title')}</h3>
                <p>{t('myEZWheelsDetail.capabilities.integrations.text')}</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 {t('myEZWheelsDetail.problems.title')}</h2>
            <ul>
              <li><strong>{t('myEZWheelsDetail.problems.items.noDirectChannel.label')}</strong> → {t('myEZWheelsDetail.problems.items.noDirectChannel.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.manualBooking.label')}</strong> → {t('myEZWheelsDetail.problems.items.manualBooking.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.paperVerification.label')}</strong> → {t('myEZWheelsDetail.problems.items.paperVerification.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.complexPayments.label')}</strong> → {t('myEZWheelsDetail.problems.items.complexPayments.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.languageBarriers.label')}</strong> → {t('myEZWheelsDetail.problems.items.languageBarriers.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.contentNeedsDeveloper.label')}</strong> → {t('myEZWheelsDetail.problems.items.contentNeedsDeveloper.text')}</li>
              <li><strong>{t('myEZWheelsDetail.problems.items.highDevCosts.label')}</strong> → {t('myEZWheelsDetail.problems.items.highDevCosts.text')}</li>
            </ul>
          </div>

          {/* Tenant customization */}
          <div className="detail-section">
            <h2>🎨 {t('myEZWheelsDetail.brand.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('myEZWheelsDetail.brand.intro')}
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🌐 {t('myEZWheelsDetail.brand.domains.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('myEZWheelsDetail.brand.domains.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  📝 {t('myEZWheelsDetail.brand.content.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('myEZWheelsDetail.brand.content.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🧾 {t('myEZWheelsDetail.brand.booking.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('myEZWheelsDetail.brand.booking.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('myEZWheelsDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.frontend.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.frontend.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.backend.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.backend.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.database.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.database.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.cloud.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.cloud.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.payments.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.payments.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('myEZWheelsDetail.tech.ai.title')}</h3>
                <p>{t('myEZWheelsDetail.tech.ai.text')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('myEZWheelsDetail.cta.title')}</h2>
            <p>{t('myEZWheelsDetail.cta.text')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">{t('myEZWheelsDetail.cta.startTrial')}</Link>
              <a href="https://myezwheels.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('myEZWheelsDetail.cta.visitSite')}</a>
              <Link to="/contact" className="btn btn-secondary">{t('myEZWheelsDetail.cta.requestPricing')}</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
