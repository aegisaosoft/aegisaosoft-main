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
import { Link } from 'react-router-dom'

export function BrazilianMarketplaceDetail() {
  const { t } = useTranslation()

  return (
    <main className="product-detail-page">
      <section className="hero" style={{ backgroundColor: 'var(--card-bg)', padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>🛒 {t('brazilianMarketplaceDetail.hero.title')}</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>{t('brazilianMarketplaceDetail.hero.subtitle')}</h2>
          <p className="subtitle" style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            {t('brazilianMarketplaceDetail.hero.description')}
          </p>
          <div className="hero-actions" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginRight: '1rem' }}>{t('brazilianMarketplaceDetail.hero.tryDemo')}</a>
            <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>{t('brazilianMarketplaceDetail.hero.visitMarketplace')}</a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>10</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('brazilianMarketplaceDetail.hero.stats.languages.label')}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{t('brazilianMarketplaceDetail.hero.stats.languages.note')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('brazilianMarketplaceDetail.hero.stats.translation.value')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('brazilianMarketplaceDetail.hero.stats.translation.label')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('brazilianMarketplaceDetail.hero.stats.social.value')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('brazilianMarketplaceDetail.hero.stats.social.label')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{t('brazilianMarketplaceDetail.hero.stats.multiTenant.value')}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('brazilianMarketplaceDetail.hero.stats.multiTenant.label')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('brazilianMarketplaceDetail.whatIs.title')}</h2>
            <p>{t('brazilianMarketplaceDetail.whatIs.paragraph1')}</p>
            <p>{t('brazilianMarketplaceDetail.whatIs.paragraph2')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 {t('brazilianMarketplaceDetail.audience.title')}</h2>
            <ul>
              <li><strong>{t('brazilianMarketplaceDetail.audience.artisans.label')}</strong> {t('brazilianMarketplaceDetail.audience.artisans.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.audience.vendors.label')}</strong> {t('brazilianMarketplaceDetail.audience.vendors.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.audience.operators.label')}</strong> {t('brazilianMarketplaceDetail.audience.operators.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.audience.culturalSellers.label')}</strong> {t('brazilianMarketplaceDetail.audience.culturalSellers.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.audience.socialCommerce.label')}</strong> {t('brazilianMarketplaceDetail.audience.socialCommerce.text')}</li>
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ {t('brazilianMarketplaceDetail.capabilities.title')}</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🏪 {t('brazilianMarketplaceDetail.capabilities.storefronts.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.storefronts.description')}</p>
              </div>
              <div className="capability-card">
                <h3>🌍 {t('brazilianMarketplaceDetail.capabilities.languages.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.languages.description')}</p>
                <div style={{ marginTop: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '0.5rem', borderLeft: '3px solid var(--accent)' }}>
                  <strong style={{ color: 'var(--accent)' }}>🏛️ {t('brazilianMarketplaceDetail.capabilities.languages.heritage.title')}</strong>
                  <br />
                  <span style={{ fontSize: '0.9rem' }}>{t('brazilianMarketplaceDetail.capabilities.languages.heritage.intro')}</span>
                  <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem' }}>
                    <li><strong>{t('brazilianMarketplaceDetail.capabilities.languages.heritage.guarani.label')}</strong> {t('brazilianMarketplaceDetail.capabilities.languages.heritage.guarani.text')}</li>
                    <li><strong>{t('brazilianMarketplaceDetail.capabilities.languages.heritage.nheengatu.label')}</strong> {t('brazilianMarketplaceDetail.capabilities.languages.heritage.nheengatu.text')}</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', fontStyle: 'italic', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                    {t('brazilianMarketplaceDetail.capabilities.languages.heritage.note')}
                  </div>
                </div>
              </div>
              <div className="capability-card">
                <h3>🤖 {t('brazilianMarketplaceDetail.capabilities.aiTranslation.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.aiTranslation.description')}</p>
              </div>
              <div className="capability-card">
                <h3>📱 {t('brazilianMarketplaceDetail.capabilities.socialCommerce.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.socialCommerce.description')}</p>
              </div>
              <div className="capability-card">
                <h3>💳 {t('brazilianMarketplaceDetail.capabilities.payments.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.payments.description')}</p>
              </div>
              <div className="capability-card">
                <h3>📦 {t('brazilianMarketplaceDetail.capabilities.shipping.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.capabilities.shipping.description')}</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 {t('brazilianMarketplaceDetail.problems.title')}</h2>
            <ul>
              <li><strong>{t('brazilianMarketplaceDetail.problems.globalReach.label')}</strong> → {t('brazilianMarketplaceDetail.problems.globalReach.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.problems.setup.label')}</strong> → {t('brazilianMarketplaceDetail.problems.setup.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.problems.socialSales.label')}</strong> → {t('brazilianMarketplaceDetail.problems.socialSales.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.problems.payments.label')}</strong> → {t('brazilianMarketplaceDetail.problems.payments.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.problems.inventory.label')}</strong> → {t('brazilianMarketplaceDetail.problems.inventory.text')}</li>
              <li><strong>{t('brazilianMarketplaceDetail.problems.mobile.label')}</strong> → {t('brazilianMarketplaceDetail.problems.mobile.text')}</li>
            </ul>
          </div>

          {/* Core Offerings */}
          <div className="detail-section">
            <h2>🎨 {t('brazilianMarketplaceDetail.categories.title')}</h2>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>{t('brazilianMarketplace.page.coreOfferings.traditionalCrafts.title')}</h3>
                <p>{t('brazilianMarketplace.page.coreOfferings.traditionalCrafts.description')}</p>
              </div>
              <div className="offering-card">
                <h3>{t('brazilianMarketplace.page.coreOfferings.regionalGoods.title')}</h3>
                <p>{t('brazilianMarketplace.page.coreOfferings.regionalGoods.description')}</p>
              </div>
              <div className="offering-card">
                <h3>{t('brazilianMarketplace.page.coreOfferings.everydayEssentials.title')}</h3>
                <p>{t('brazilianMarketplace.page.coreOfferings.everydayEssentials.description')}</p>
              </div>
              <div className="offering-card">
                <h3>{t('brazilianMarketplace.page.coreOfferings.souvenirs.title')}</h3>
                <p>{t('brazilianMarketplace.page.coreOfferings.souvenirs.description')}</p>
              </div>
            </div>
          </div>

          {/* Social Media Integration */}
          <div className="detail-section">
            <h2>📱 {t('brazilianMarketplaceDetail.social.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('brazilianMarketplaceDetail.social.intro')}
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🛒 {t('brazilianMarketplaceDetail.social.instagram.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('brazilianMarketplaceDetail.social.instagram.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  📘 {t('brazilianMarketplaceDetail.social.facebook.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('brazilianMarketplaceDetail.social.facebook.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  💬 {t('brazilianMarketplaceDetail.social.whatsapp.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('brazilianMarketplaceDetail.social.whatsapp.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🌍 {t('brazilianMarketplaceDetail.social.analytics.title')}
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  {(t('brazilianMarketplaceDetail.social.analytics.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '2px solid var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🏛️ {t('brazilianMarketplaceDetail.social.heritage.title')}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ marginBottom: '0.8rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {t('brazilianMarketplaceDetail.social.heritage.intro')}
                  </p>
                  <div style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent)', fontSize: '1rem' }}>{t('brazilianMarketplaceDetail.social.heritage.supportTitle')}</h4>
                    <ul style={{ lineHeight: '1.6', fontSize: '0.9rem', margin: 0 }}>
                      <li><strong>{t('brazilianMarketplaceDetail.social.heritage.guarani.label')}</strong> {t('brazilianMarketplaceDetail.social.heritage.guarani.text')}</li>
                      <li><strong>{t('brazilianMarketplaceDetail.social.heritage.nheengatu.label')}</strong> {t('brazilianMarketplaceDetail.social.heritage.nheengatu.text')}</li>
                    </ul>
                  </div>
                  <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    {t('brazilianMarketplaceDetail.social.heritage.note')}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('brazilianMarketplaceDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.frontend.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.frontend.description')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.backend.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.backend.description')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.database.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.database.description')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.cloud.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.cloud.description')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.ai.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.ai.description')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('brazilianMarketplaceDetail.tech.integration.title')}</h3>
                <p>{t('brazilianMarketplaceDetail.tech.integration.description')}</p>
              </div>
            </div>
          </div>

          {/* Live Examples - Tenant Storefronts */}
          <div className="detail-section">
            <h2>🏪 {t('brazilianMarketplaceDetail.tenants.title')}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              {t('brazilianMarketplaceDetail.tenants.intro')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

              {/* Alex's Store */}
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{t('brazilianMarketplaceDetail.tenants.alex.title')}</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {t('brazilianMarketplaceDetail.tenants.alex.description')}
                </p>
                <a
                  href="https://alex.mercadinho25.com"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '0.5rem', display: 'inline-block', width: '200px' }}
                >
                  🌐 {t('brazilianMarketplaceDetail.tenants.alex.linkLabel')}
                </a>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  alex.mercadinho25.com
                </div>
              </div>

              {/* Joanna's Store */}
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧵</div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{t('brazilianMarketplaceDetail.tenants.joanna.title')}</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {t('brazilianMarketplaceDetail.tenants.joanna.description')}
                </p>
                <a
                  href="https://joanna.mercadinho25.com"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '0.5rem', display: 'inline-block', width: '200px' }}
                >
                  🌐 {t('brazilianMarketplaceDetail.tenants.joanna.linkLabel')}
                </a>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  joanna.mercadinho25.com
                </div>
              </div>

            </div>

            <div style={{
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid var(--accent)',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, color: 'var(--accent)', fontWeight: '500' }}>
                💡 <strong>{t('brazilianMarketplaceDetail.tenants.callout.label')}</strong> {t('brazilianMarketplaceDetail.tenants.callout.text')}
              </p>
            </div>
          </div>

          {/* Administration & Seller Guide - Link to dedicated page */}
          <div className="detail-section">
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid var(--accent)',
              textAlign: 'center'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>📋 {t('adminGuide.sectionTitle')}</h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                {t('adminGuide.sectionSubtitle')}
              </p>
              <Link to="/admin-guide" className="btn btn-primary" style={{
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                📚 {t('brazilianMarketplaceDetail.adminGuideCta.buttonLabel')}
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('brazilianMarketplaceDetail.cta.title')}</h2>
            <p>{t('brazilianMarketplaceDetail.cta.description')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">{t('brazilianMarketplaceDetail.cta.startMarketplace')}</Link>
              <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('brazilianMarketplaceDetail.cta.visitSite')}</a>
              <Link to="/admin-guide" className="btn btn-secondary">{t('brazilianMarketplaceDetail.cta.sellerGuide')}</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
