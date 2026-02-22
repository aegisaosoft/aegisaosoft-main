import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

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

            {/* Aegis Rental */}
            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '560px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🚗 Aegis Rental</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Car Rental SaaS Platform</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>Multi-tenant architecture with fleet management, AI-powered search, and 5-language support. Real production system serving rental companies.</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Multi-tenant SaaS architecture</li>
                  <li style={{ marginBottom: '0.3rem' }}>AI-powered vehicle search</li>
                  <li style={{ marginBottom: '0.3rem' }}>BlinkID driver verification</li>
                  <li style={{ marginBottom: '0.3rem' }}>Stripe Connect payments</li>
                  <li style={{ marginBottom: '0.3rem' }}>5-language localization</li>
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/aegis-rental" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>View Details</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://aegis-rental.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Visit Site</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://aegis-rental.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>Try Now</a>
                </div>
              </div>
            </article>

            {/* Mercadinho25 */}
            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '560px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛒 Mercadinho25</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Marketplace Platform for Artisan Products</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>Multi-tenant marketplace connecting Brazilian artisans globally. AI translation, social commerce, and comprehensive vendor management.</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Multi-tenant marketplace</li>
                  <li style={{ marginBottom: '0.3rem' }}>10-language support (including indigenous languages)</li>
                  <li style={{ marginBottom: '0.3rem' }}>AI automatic translation</li>
                  <li style={{ marginBottom: '0.3rem' }}>Instagram/Facebook integration</li>
                  <li style={{ marginBottom: '0.3rem' }}>Vendor management system</li>
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/brazilian-marketplace" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>View Details</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Visit Site</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>Try Now</a>
                </div>
              </div>
            </article>

            {/* MyEZToll */}
            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '560px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛣️ MyEZToll</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Toll & Parking Management for Fleet Operators</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>Enterprise platform for car rental companies. Automated toll processing and parking violation management across all 50 U.S. states.</p>

              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>50-state U.S. coverage</li>
                  <li style={{ marginBottom: '0.3rem' }}>Automated toll processing</li>
                  <li style={{ marginBottom: '0.3rem' }}>Parking violation management</li>
                  <li style={{ marginBottom: '0.3rem' }}>Fleet operator focus</li>
                  <li style={{ marginBottom: '0.3rem' }}>Owner self-service portal</li>
                </ul>
              </div>

              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myeztoll" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>View Details</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Visit Site</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Owner Portal</a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Discuss Your Project?</h2>
          <p>We build production-ready platforms that scale with your business. From multi-tenant SaaS to specialized enterprise solutions.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <Link to="/about" className="btn btn-secondary">Learn About Our Process</Link>
          </div>
        </div>
      </section>
    </main>
  )
}