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
import ezMark from '../assets/ez-mark.png'

export function Products() {
  const { t } = useTranslation()

  return (
    <main className="products-page">
      <section className="hero">
        <div className="container">
          <h1>{t('home.products.title')}</h1>
          <p className="subtitle">
            {t('home.products.subtitle')}
          </p>
        </div>
      </section>

      <section className="products-grid">
        <div className="container">
          <div className="services-grid">

            {/* MyEZWheels */}
            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '560px', padding: '1.5rem' }}>
              <h3 className="product-card-heading" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>
                <img src={ezMark} alt="" className="product-mark" />
                MyEZWheels
              </h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.myEZWheels.products.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.myEZWheels.products.description')}</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.myEZWheels.products.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myezwheels" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('productCards.buttons.viewDetails')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myezwheels.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myezwheels.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>{t('productCards.buttons.tryNow')}</a>
                </div>
              </div>
            </article>

            {/* Mercadinho25 */}
            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '560px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛒 Mercadinho25</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.mercadinho25.products.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.mercadinho25.products.description')}</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.mercadinho25.products.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/brazilian-marketplace" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('productCards.buttons.viewDetails')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>{t('productCards.buttons.tryNow')}</a>
                </div>
              </div>
            </article>

            {/* MyEZToll */}
            <article className="service-card card-clickable" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', minHeight: '560px', padding: '1.5rem' }}>
              <h3 className="product-card-heading" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>
                <img src={ezMark} alt="" className="product-mark" />
                MyEZToll
              </h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>{t('productCards.myEZToll.products.subtitle')}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>{t('productCards.myEZToll.products.description')}</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  {(t('productCards.myEZToll.products.items', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myeztoll" className="btn btn-primary card-stretched-link" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('productCards.buttons.viewDetails')}</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.products.visitSite')}</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>{t('home.myEZToll.ownerPortal')}</a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t('productCards.productsCta.title')}</h2>
          <p>{t('productCards.productsCta.description')}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">{t('home.cta.primary')}</Link>
            <Link to="/about" className="btn btn-secondary">{t('productCards.productsCta.learnAboutProcess')}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}