import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function AdminGuide() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('gettingStarted')

  const tabs = [
    { id: 'gettingStarted', label: t('adminGuide.sections.gettingStarted.title'), icon: '🚀' },
    { id: 'products', label: t('adminGuide.sections.products.title'), icon: '📦' },
    { id: 'store', label: t('adminGuide.sections.store.title'), icon: '🏪' },
    { id: 'payments', label: t('adminGuide.sections.payments.title'), icon: '💳' },
    { id: 'integrations', label: t('adminGuide.sections.integrations.title'), icon: '🔗' },
    { id: 'branding', label: t('adminGuide.sections.branding.title'), icon: '🎨' },
    { id: 'languages', label: t('adminGuide.sections.languages.title'), icon: '🌍' }
  ]

  return (
    <div className="page">
      {/* Hero Section - Fixed padding to avoid header overlap */}
      <section className="hero" style={{ backgroundColor: 'var(--card-bg)', padding: '5rem 0 3rem', marginTop: '2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '1.2rem', textAlign: 'center', fontWeight: 'bold' }}>
            📚 {t('adminGuide.sectionTitle')}
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('adminGuide.sectionSubtitle')}
          </p>
        </div>
      </section>

      {/* Recommendation Tip */}
      <section style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '1rem 0' }}>
        <div className="container">
          <p style={{
            textAlign: 'center',
            margin: 0,
            fontWeight: '500',
            fontSize: '1rem'
          }}>
            💡 {t('adminGuide.recommendationTip')}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="container" style={{ padding: '2rem 0 0' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '2px solid var(--border)',
          paddingBottom: '1rem',
          justifyContent: 'center'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.8rem 1.2rem',
                border: 'none',
                borderRadius: '0.5rem',
                backgroundColor: activeTab === tab.id ? 'var(--accent)' : 'var(--card-bg)',
                color: activeTab === tab.id ? 'white' : 'var(--text)',
                cursor: 'pointer',
                fontWeight: activeTab === tab.id ? '600' : '500',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '140px',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'var(--border)'
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'var(--card-bg)'
                }
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="container" style={{ paddingBottom: '3rem' }}>

        {/* Getting Started Tab */}
        {activeTab === 'gettingStarted' && (
          <div>
            <p style={{ marginBottom: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {t('adminGuide.sections.gettingStarted.intro')}
            </p>

            {/* Login Section */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.gettingStarted.login.title')}</h3>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.gettingStarted.login.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '0.8rem',
                borderRadius: '6px',
                marginTop: '0.8rem',
                borderLeft: '3px solid var(--accent)',
                fontSize: '0.85rem'
              }}>
                <strong>Tip:</strong> {t('adminGuide.sections.gettingStarted.login.tip')}
              </div>
            </div>

            {/* User Roles */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.gettingStarted.roles.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.gettingStarted.roles.intro')}</p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.2rem' }}><strong>Customer:</strong> {t('adminGuide.sections.gettingStarted.roles.customer')}</li>
                <li style={{ marginBottom: '0.2rem' }}><strong>Seller:</strong> {t('adminGuide.sections.gettingStarted.roles.seller')}</li>
                <li style={{ marginBottom: '0.2rem' }}><strong>TenantAdmin:</strong> {t('adminGuide.sections.gettingStarted.roles.tenantAdmin')}</li>
                <li style={{ marginBottom: '0.2rem' }}><strong>SuperAdmin:</strong> {t('adminGuide.sections.gettingStarted.roles.superAdmin')}</li>
              </ul>
            </div>

            {/* Dashboard Overview */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.gettingStarted.dashboard.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.gettingStarted.dashboard.intro')}</p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.gettingStarted.dashboard.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Product Management Tab */}
        {activeTab === 'products' && (
          <div>
            {/* Category Management */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.categories.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.products.categories.intro')}</p>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.categories.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>

              {/* Category Translations */}
              <div style={{ marginTop: '1.2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{t('adminGuide.sections.products.categories.translations.title')}</h4>
                <p style={{ marginBottom: '0.6rem', fontSize: '0.85rem' }}>{t('adminGuide.sections.products.categories.translations.intro')}</p>
                <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {(t('adminGuide.sections.products.categories.translations.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.2rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Attribute Types */}
              <div style={{ marginTop: '1.2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{t('adminGuide.sections.products.categories.attributes.title')}</h4>
                <p style={{ marginBottom: '0.6rem', fontSize: '0.85rem' }}>{t('adminGuide.sections.products.categories.attributes.intro')}</p>
                <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {(t('adminGuide.sections.products.categories.attributes.steps', { returnObjects: true }) as string[]).map((step, index) => (
                    <li key={index} style={{ marginBottom: '0.2rem' }}>{step}</li>
                  ))}
                </ol>
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '0.6rem',
                  borderRadius: '6px',
                  marginTop: '0.8rem',
                  borderLeft: '3px solid var(--accent)',
                  fontSize: '0.8rem'
                }}>
                  <strong>Tip:</strong> {t('adminGuide.sections.products.categories.attributes.tip')}
                </div>
              </div>
            </div>

            {/* Product Creation */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.creating.title')}</h3>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.creating.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Phone Upload */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.phoneUpload.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.products.phoneUpload.intro')}</p>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.phoneUpload.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '0.6rem',
                borderRadius: '6px',
                marginTop: '0.8rem',
                borderLeft: '3px solid var(--accent)',
                fontSize: '0.8rem'
              }}>
                <strong>Tip:</strong> {t('adminGuide.sections.products.phoneUpload.tip')}
              </div>
            </div>

            {/* Auto Translation */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.autoTranslate.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.products.autoTranslate.intro')}</p>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.autoTranslate.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '0.6rem',
                borderRadius: '6px',
                marginTop: '0.8rem',
                borderLeft: '3px solid var(--accent)',
                fontSize: '0.8rem'
              }}>
                <strong>Tip:</strong> {t('adminGuide.sections.products.autoTranslate.tip')}
              </div>
            </div>

            {/* Product Variants */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.variants.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.products.variants.intro')}</p>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.variants.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '0.6rem',
                borderRadius: '6px',
                marginTop: '0.8rem',
                borderLeft: '3px solid var(--accent)',
                fontSize: '0.8rem'
              }}>
                <strong>Tip:</strong> {t('adminGuide.sections.products.variants.tip')}
              </div>
            </div>

            {/* Bulk Operations */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.bulkOps.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.bulkOps.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Shipments */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.shipments.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.shipments.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Reports */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.products.reports.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.products.reports.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Store Management Tab */}
        {activeTab === 'store' && (
          <div>
            {/* Tenant Management */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.store.tenants.title')}</h3>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.store.tenants.intro')}</p>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.store.tenants.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '0.6rem',
                borderRadius: '6px',
                marginTop: '0.8rem',
                borderLeft: '3px solid var(--accent)',
                fontSize: '0.8rem'
              }}>
                <strong>Tip:</strong> {t('adminGuide.sections.store.tenants.tip')}
              </div>
            </div>

            {/* Seller Management */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.store.sellers.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.store.sellers.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* User Management */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.store.users.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.store.users.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Payment Settings Tab */}
        {activeTab === 'payments' && (
          <div>
            {/* Stripe Configuration */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.payments.stripe.title')}</h3>
              <div style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                <strong>Sandbox:</strong> {t('adminGuide.sections.payments.stripe.sandbox')}
              </div>
              <div style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                <strong>Production:</strong> {t('adminGuide.sections.payments.stripe.production')}
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <strong>Stripe Connect:</strong> {t('adminGuide.sections.payments.stripe.connect')}
              </div>
            </div>

            {/* MercadoPago */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.payments.mercadopago.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.payments.mercadopago.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Shipping */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.payments.shipping.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.payments.shipping.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Integrations Tab */}
        {activeTab === 'integrations' && (
          <div>
            {/* Google Shopping */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.integrations.google.title')}</h3>
              <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.integrations.google.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Etsy Integration */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.integrations.etsy.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.integrations.etsy.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.2rem' }}>{t('adminGuide.sections.integrations.social.title')}</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {(t('adminGuide.sections.integrations.social.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Branding Tab */}
        {activeTab === 'branding' && (
          <div>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
              {(t('adminGuide.sections.branding.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} style={{ marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Language Settings Tab */}
        {activeTab === 'languages' && (
          <div>
            <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>{t('adminGuide.sections.languages.intro')}</p>
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '0.6rem',
              borderRadius: '6px',
              borderLeft: '3px solid var(--accent)',
              fontSize: '0.8rem'
            }}>
              <strong>Tip:</strong> {t('adminGuide.sections.languages.tip')}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}