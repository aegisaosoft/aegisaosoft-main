import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🚗 Aegis Rental</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Multi-Tenant SaaS for Car Rental Businesses</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '1rem', gridRow: '3' }}>A comprehensive cloud platform for managing fleets, bookings, customers, and payments across multiple locations and organizations.</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.3', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Multi-tenant architecture</li>
                  <li style={{ marginBottom: '0.3rem' }}>Fleet and reservation management</li>
                  <li style={{ marginBottom: '0.3rem' }}>5-language support</li>
                  <li style={{ marginBottom: '0.3rem' }}>AI-powered vehicle search (Claude AI)</li>
                  <li style={{ marginBottom: '0.3rem' }}>Secure payment processing</li>
                  <li style={{ marginBottom: '0.3rem' }}>Scalable cloud deployment</li>
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/aegis-rental" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Learn More</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://aegis-rental.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Visit Site</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://aegis-rental.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>Try Now</a>
                </div>
              </div>
            </article>

            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛒 Mercadinho25</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Marketplace Platform for Artisan Products</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>A multilingual e-commerce marketplace designed for small businesses and independent producers, with built-in automation for global audiences.</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Multi-tenant marketplace SaaS</li>
                  <li style={{ marginBottom: '0.3rem' }}>10-language support (including indigenous languages)</li>
                  <li style={{ marginBottom: '0.3rem' }}>AI automatic translation of product descriptions</li>
                  <li style={{ marginBottom: '0.3rem' }}>Vendor onboarding and catalog management</li>
                  <li style={{ marginBottom: '0.3rem' }}>Payment and order processing</li>
                  <li style={{ marginBottom: '0.3rem' }}>Optimized for international users</li>
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/brazilian-marketplace" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Learn More</Link>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Visit Site</a>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block', backgroundColor: 'var(--accent-hover)' }}>Try Now</a>
                </div>
              </div>
            </article>

            <article className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto 1fr auto', height: '660px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', gridRow: '1' }}>🛣️ MyEZToll</h3>
              <p className="product-subtitle" style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--accent)', gridRow: '2' }}>Toll and Parking Management Platform for Fleet Operators</p>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem', gridRow: '3' }}>A specialized platform for rental companies and fleet operators to manage toll charges and parking violations across the United States.</p>
              <div style={{ gridRow: '4', alignSelf: 'start' }}>
                <ul style={{ fontSize: '0.8rem', lineHeight: '1.4', paddingLeft: '1rem', margin: '0' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Designed for single organizations (non-multi-tenant)</li>
                  <li style={{ marginBottom: '0.3rem' }}>Toll payment processing across multiple toll authorities</li>
                  <li style={{ marginBottom: '0.3rem' }}>Parking violation management across all 50 states</li>
                  <li style={{ marginBottom: '0.3rem' }}>Automated billing workflows</li>
                  <li style={{ marginBottom: '0.3rem' }}>Owner portal for payments and dispute handling</li>
                  <li style={{ marginBottom: '0.3rem' }}>Integration with fleet operations</li>
                </ul>
              </div>
              <div className="product-actions" style={{ gridRow: '5', paddingTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Link to="/products/myeztoll" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.2rem', width: '100%', textAlign: 'center', display: 'block' }}>Learn More</Link>
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

      <section className="services-section" style={{ paddingTop: '4rem', backgroundColor: 'var(--card-bg)' }}>
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
              <h3>🛠️ {t('home.services.technicalSupport.title')}</h3>
              <p>{t('home.services.technicalSupport.description')}</p>
            </article>
          </div>

          <div className="cta-buttons" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
          </div>
        </div>
      </section>

      <section className="architecture-section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <h2>{t('home.architecture.title')}</h2>
          <p className="section-subtitle">{t('home.architecture.subtitle')}</p>

          <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              'Microsoft Azure cloud platform',
              'Modern .NET (6–9) and ASP.NET Core',
              'REST APIs and distributed systems',
              'Entity Framework Core',
              'Microservices architecture',
              'High availability and fault tolerance',
              'CI/CD and DevOps practices',
              'Security and data protection',
              'AI integration where appropriate'
            ].map((item, index) => (
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

