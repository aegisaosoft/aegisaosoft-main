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
import '../App.css'

export function Home() {
  const { t } = useTranslation()

  return (
    <main className="home-page">
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1>{t('home.title')}</h1>
          <p className="subtitle">
            {t('home.subtitle')}
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">{t('home.cta.primary')}</Link>
            <Link to="/products" className="btn btn-secondary">{t('home.cta.secondary')}</Link>
          </div>
        </div>
      </section>

      <section className="products" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <h2>{t('home.products.title')}</h2>
          <p className="section-subtitle">{t('home.products.subtitle')}</p>

          <div className="services-grid">
            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '660px', padding: '1.5rem' }}>
              <h3 className="product-card-heading" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>
                <img src={ezMark} alt="" className="product-mark" />
                MyEZWheels
              </h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.myEZWheels.home.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.myEZWheels.home.description')}</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.3', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.myEZWheels.home.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myezwheels" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.learnMore')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myezwheels.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myezwheels.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>{t('productCards.buttons.tryNow')}</a>
                </div>
              </div>
            </article>

            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛒 Mercadinho25</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.mercadinho25.home.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.mercadinho25.home.description')}</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.mercadinho25.home.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/brazilian-marketplace" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.learnMore')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>{t('productCards.buttons.tryNow')}</a>
                </div>
              </div>
            </article>

            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '660px', padding: '1.5rem' }}>
              <h3 className="product-card-heading" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>
                <img src={ezMark} alt="" className="product-mark" />
                MyEZToll
              </h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.myEZToll.home.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.myEZToll.home.description')}</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.myEZToll.home.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myeztoll" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.learnMore')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.myEZToll.ownerPortal')}</a>
                </div>
              </div>
            </article>

            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🌐 Aegis Localizer</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.aegisLocalizer.home.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.aegisLocalizer.home.description')}</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.aegisLocalizer.home.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/aegis-localizer" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.learnMore')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://github.com/aegisaosoft/aegis-localizer" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('productCards.buttons.viewSource')}</a>
                </div>
              </div>
            </article>

            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>💡 HueControl</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.hueControl.home.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.hueControl.home.description')}</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.hueControl.home.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/huecontrol" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.learnMore')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://github.com/aegisaosoft/huecontrol" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('productCards.buttons.viewSource')}</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="services-section" style={{ paddingTop: '4rem', backgroundColor: 'var(--card-bg)', scrollMarginTop: '5rem' }}>
        <div className="container">
          <h2>{t('home.services.title')}</h2>
          <p className="section-subtitle">{t('home.services.subtitle')}</p>

          <div className="services-grid">
            <article className="service-card">
              <h3>🚀 {t('home.services.customSaaS.title')}</h3>
              <p>{t('home.services.customSaaS.description')}</p>
            </article>

            <article className="service-card">
              <h3>☁️ {t('home.services.cloudArchitecture.title')}</h3>
              <p>{t('home.services.cloudArchitecture.description')}</p>
            </article>

            <article className="service-card">
              <h3>🔗 {t('home.services.systemIntegration.title')}</h3>
              <p>{t('home.services.systemIntegration.description')}</p>
            </article>

            <article className="service-card">
              <h3>🔄 {t('home.services.legacyReplacement.title')}</h3>
              <p>{t('home.services.legacyReplacement.description')}</p>
            </article>

            <article className="service-card">
              <h3>🤖 {t('home.services.aiSolutions.title')}</h3>
              <p>{t('home.services.aiSolutions.description')}</p>
            </article>

            <article className="service-card">
              <h3>🧠 {t('home.services.aiTollRates.title')}</h3>
              <p>{t('home.services.aiTollRates.description')}</p>
            </article>

            <article className="service-card">
              <h3>🛰️ {t('home.services.gpsNavigation.title')}</h3>
              <p>{t('home.services.gpsNavigation.description')}</p>
            </article>

            <article className="service-card">
              <h3>📱 {t('home.services.mobileApps.title')}</h3>
              <p>{t('home.services.mobileApps.description')}</p>
            </article>

            <article className="service-card">
              <h3>🛠️ {t('home.services.technicalSupport.title')}</h3>
              <p>{t('home.services.technicalSupport.description')}</p>
            </article>
          </div>

          <div className="cta-buttons" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary">{t('home.cta.primary')}</Link>
          </div>
        </div>
      </section>

      <section className="architecture-section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <h2>{t('home.architecture.title')}</h2>
          <p className="section-subtitle">{t('home.architecture.subtitle')}</p>

          {/* AI leads the architecture story, so it gets a full-width feature above the grid */}
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--border)',
            borderLeft: '5px solid var(--accent)',
            backgroundColor: 'var(--card-bg)',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}>
              {t('home.architecture.aiHighlight.label')}
            </p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>
              🤖 {t('home.architecture.aiHighlight.title')}
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              {t('home.architecture.aiHighlight.text')}
            </p>
            <Link to="/about" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}>
              {t('home.architecture.aiHighlight.link')}
            </Link>
          </div>

          <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {(t('home.architecture.items', { returnObjects: true }) as string[]).map((item, index) => (
              <div key={index} className="tech-item" style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <p>• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" style={{ paddingTop: '4rem', backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2>{t('home.about.title')}</h2>
          <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
              {t('home.about.description')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
              {t('home.about.mission')}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              {t('home.about.leadership')}
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="cta-content" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>{t('home.finalCta.title')}</h2>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              {t('home.finalCta.button')} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

