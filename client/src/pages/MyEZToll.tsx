import { useTranslation } from 'react-i18next'

export function MyEZToll() {
  const { t } = useTranslation()

  return (
    <main className="myeztoll-page">
      <section className="hero">
        <div className="container">
          <h1>{t('home.myEZToll.title')}</h1>
          <h2>{t('home.myEZToll.subtitle')}</h2>
          <p className="subtitle">
            {t('home.myEZToll.description')}
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Platform Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🚛 {t('home.myEZToll.features.tollProcessing')}</h3>
            </div>
            <div className="feature-card">
              <h3>🅿️ {t('home.myEZToll.features.parkingManagement')}</h3>
            </div>
            <div className="feature-card">
              <h3>🇺🇸 {t('home.myEZToll.features.usaCoverage')}</h3>
            </div>
            <div className="feature-card">
              <h3>🚗 {t('home.myEZToll.features.fleetOperators')}</h3>
            </div>
            <div className="feature-card">
              <h3>⚙️ {t('home.myEZToll.features.ownerPortal')}</h3>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">{t('home.myEZToll.learnMore')}</a>
            <a href="#" className="btn btn-secondary">{t('home.myEZToll.visitSite')}</a>
            <a href="#" className="btn btn-secondary">{t('home.myEZToll.ownerPortal')}</a>
          </div>
        </div>
      </section>
    </main>
  )
}