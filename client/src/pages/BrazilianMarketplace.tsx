import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../App.css'

function GuideSection({ id, title, children, defaultOpen = false }: { id: string; title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`guide-accordion ${open ? 'open' : ''}`} id={id}>
      <button className="guide-accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="guide-accordion-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="guide-accordion-body">{children}</div>}
    </div>
  )
}

function GuideTip({ text }: { text: string }) {
  return <div className="guide-tip">💡 {text}</div>
}

function GuideSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="guide-steps">
      {steps.map((s, i) => <li key={i}>{s}</li>)}
    </ol>
  )
}

function GuideList({ items }: { items: string[] }) {
  return (
    <ul className="guide-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export function BrazilianMarketplace() {
  const { t } = useTranslation()
  const s = (key: string) => t(`adminGuide.sections.${key}`)
  const sa = (key: string): string[] => t(`adminGuide.sections.${key}`, { returnObjects: true }) as unknown as string[]

  return (
    <main className="brazilian-page">
      {/* ===== HERO ===== */}
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h1>{t('brazilianMarketplace.page.title')}</h1>
          <p className="subtitle">{t('brazilianMarketplace.page.subtitle')}</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <a href="https://mercadinho25.com/" target="_blank" rel="noopener noreferrer" className="try-now-btn try-now-top" style={{ textDecoration: 'none' }}>Try Now</a>
          </div>
          <p>{t('brazilianMarketplace.page.description')}</p>
        </div>
      </section>

      {/* ===== CORE OFFERINGS ===== */}
      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('brazilianMarketplace.page.coreOfferings.title')}</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['traditionalCrafts', 'regionalGoods', 'everydayEssentials', 'souvenirs'].map(key => (
                <li key={key} style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                    {t(`brazilianMarketplace.page.coreOfferings.${key}.title`)}
                  </strong>
                  <span style={{ color: '#000' }}>
                    {t(`brazilianMarketplace.page.coreOfferings.${key}.description`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('brazilianMarketplace.page.features.title')}</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['storefronts', 'paymentProcessing', 'multiLanguage', 'shipping', 'mobileFirst'].map(key => (
                <li key={key} style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                    {t(`brazilianMarketplace.page.features.${key}.title`)}
                  </strong>
                  <span style={{ color: '#000' }}>
                    {t(`brazilianMarketplace.page.features.${key}.description`)}
                  </span>
                </li>
              ))}
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative', background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)', borderRadius: '8px', padding: '1.5rem', marginLeft: '-2rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>
                  📱 {t('brazilianMarketplace.page.features.socialMedia.title')}
                </strong>
                <span style={{ color: '#fff' }}>
                  {t('brazilianMarketplace.page.features.socialMedia.description')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ADMIN GUIDE ===== */}
      <section className="guide-section">
        <div className="container">
          <div className="guide-header">
            <h2>{t('adminGuide.sectionTitle')}</h2>
            <p>{t('adminGuide.sectionSubtitle')}</p>
          </div>

          <div className="guide-content">
            <GuideTip text={t('adminGuide.recommendationTip')} />

            {/* 1. Getting Started */}
            <GuideSection id="getting-started" title={s('gettingStarted.title')} defaultOpen={true}>
              <p>{s('gettingStarted.intro')}</p>

              <h4>{s('gettingStarted.login.title')}</h4>
              <GuideSteps steps={sa('gettingStarted.login.steps')} />
              <GuideTip text={s('gettingStarted.login.tip')} />

              <h4>{s('gettingStarted.roles.title')}</h4>
              <p>{s('gettingStarted.roles.intro')}</p>
              <GuideList items={[
                s('gettingStarted.roles.customer'),
                s('gettingStarted.roles.seller'),
                s('gettingStarted.roles.tenantAdmin'),
                s('gettingStarted.roles.superAdmin'),
              ]} />

              <h4>{s('gettingStarted.dashboard.title')}</h4>
              <p>{s('gettingStarted.dashboard.intro')}</p>
              <GuideList items={sa('gettingStarted.dashboard.items')} />
            </GuideSection>

            {/* 2. Product Management */}
            <GuideSection id="products" title={s('products.title')}>
              <h4>{s('products.categories.title')}</h4>
              <p>{s('products.categories.intro')}</p>
              <GuideSteps steps={sa('products.categories.steps')} />

              <h4>{s('products.categories.translations.title')}</h4>
              <p>{s('products.categories.translations.intro')}</p>
              <GuideList items={sa('products.categories.translations.items')} />

              <h4>{s('products.categories.attributes.title')}</h4>
              <p>{s('products.categories.attributes.intro')}</p>
              <GuideSteps steps={sa('products.categories.attributes.steps')} />
              <GuideTip text={s('products.categories.attributes.tip')} />

              <h4>{s('products.creating.title')}</h4>
              <GuideSteps steps={sa('products.creating.steps')} />

              <h4>{s('products.phoneUpload.title')}</h4>
              <p>{s('products.phoneUpload.intro')}</p>
              <GuideSteps steps={sa('products.phoneUpload.steps')} />
              <GuideTip text={s('products.phoneUpload.tip')} />

              <h4>{s('products.autoTranslate.title')}</h4>
              <p>{s('products.autoTranslate.intro')}</p>
              <GuideSteps steps={sa('products.autoTranslate.steps')} />
              <GuideTip text={s('products.autoTranslate.tip')} />

              <h4>{s('products.variants.title')}</h4>
              <p>{s('products.variants.intro')}</p>
              <GuideSteps steps={sa('products.variants.steps')} />
              <GuideTip text={s('products.variants.tip')} />

              <h4>{s('products.bulkOps.title')}</h4>
              <GuideList items={sa('products.bulkOps.items')} />

              <h4>{s('products.shipments.title')}</h4>
              <GuideList items={sa('products.shipments.items')} />

              <h4>{s('products.reports.title')}</h4>
              <GuideList items={sa('products.reports.items')} />
            </GuideSection>

            {/* 3. Store Management */}
            <GuideSection id="store" title={s('store.title')}>
              <h4>{s('store.tenants.title')}</h4>
              <p>{s('store.tenants.intro')}</p>
              <GuideSteps steps={sa('store.tenants.steps')} />
              <GuideTip text={s('store.tenants.tip')} />

              <h4>{s('store.sellers.title')}</h4>
              <GuideList items={sa('store.sellers.items')} />

              <h4>{s('store.users.title')}</h4>
              <GuideList items={sa('store.users.items')} />
            </GuideSection>

            {/* 4. Payment Settings */}
            <GuideSection id="payments" title={s('payments.title')}>
              <h4>{s('payments.stripe.title')}</h4>
              <GuideList items={[
                s('payments.stripe.sandbox'),
                s('payments.stripe.production'),
                s('payments.stripe.connect'),
              ]} />

              <h4>{s('payments.mercadopago.title')}</h4>
              <GuideList items={sa('payments.mercadopago.items')} />

              <h4>{s('payments.shipping.title')}</h4>
              <GuideList items={sa('payments.shipping.items')} />
            </GuideSection>

            {/* 5. Integrations */}
            <GuideSection id="integrations" title={s('integrations.title')}>
              <h4>{s('integrations.google.title')}</h4>
              <GuideSteps steps={sa('integrations.google.steps')} />

              <h4>{s('integrations.etsy.title')}</h4>
              <GuideList items={sa('integrations.etsy.items')} />

              <h4>{s('integrations.social.title')}</h4>
              <GuideList items={sa('integrations.social.items')} />
            </GuideSection>

            {/* 6. Branding */}
            <GuideSection id="branding" title={s('branding.title')}>
              <GuideList items={sa('branding.items')} />
            </GuideSection>

            {/* 7. Languages */}
            <GuideSection id="languages" title={s('languages.title')}>
              <p>{s('languages.intro')}</p>
              <GuideTip text={s('languages.tip')} />
            </GuideSection>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="hero" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="https://mercadinho25.com/" target="_blank" rel="noopener noreferrer" className="try-now-btn try-now-bottom" style={{ textDecoration: 'none' }}>Try Now</a>
          </div>
        </div>
      </section>
    </main>
  )
}
