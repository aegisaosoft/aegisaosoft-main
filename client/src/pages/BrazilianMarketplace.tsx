import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../App.css'

export function BrazilianMarketplace() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h1>{t('brazilianMarketplace.page.title')}</h1>
          <p className="subtitle">
            {t('brazilianMarketplace.page.subtitle')}
          </p>
          {/* Top Try Now button - centered under subtitle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <Link to="/mercadinho25" className="try-now-btn try-now-top" style={{ textDecoration: 'none' }}>Try Now</Link>
          </div>
          <p>
            {t('brazilianMarketplace.page.description')}
          </p>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('brazilianMarketplace.page.coreOfferings.title')}</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.traditionalCrafts.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.traditionalCrafts.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.regionalGoods.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.regionalGoods.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.everydayEssentials.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.everydayEssentials.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.souvenirs.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.coreOfferings.souvenirs.description')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('brazilianMarketplace.page.features.title')}</h2>
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.features.storefronts.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.features.storefronts.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.features.paymentProcessing.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.features.paymentProcessing.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.features.multiLanguage.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.features.multiLanguage.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.features.shipping.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.features.shipping.description')}
                </span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#000' }}>
                  {t('brazilianMarketplace.page.features.mobileFirst.title')}
                </strong>
                <span style={{ color: '#000' }}>
                  {t('brazilianMarketplace.page.features.mobileFirst.description')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hero" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          {/* Bottom Try Now button - centered */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/mercadinho25" className="try-now-btn try-now-bottom" style={{ textDecoration: 'none' }}>Try Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

