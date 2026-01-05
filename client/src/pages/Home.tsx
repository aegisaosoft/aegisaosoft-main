import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../App.css'

export function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1>{t('home.title')}</h1>
          <p className="subtitle">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="services-grid">
            <Link to="/vehicle-rental" className="service-card-link">
              <article className="service-card clickable">
                <h3>{t('home.vehicleRental.title')}</h3>
                <p>
                  {t('home.vehicleRental.description')}
                </p>
                <ul>
                  <li>{t('home.vehicleRental.features.fleetManagement')}</li>
                  <li>{t('home.vehicleRental.features.driverVerification')}</li>
                  <li>{t('home.vehicleRental.features.securityDeposit')}</li>
                  <li>{t('home.vehicleRental.features.automatedBilling')}</li>
                  <li><strong>📱 {t('home.vehicleRental.features.socialIntegration')}</strong></li>
                </ul>
                <span className="btn btn-primary">
                  {t('home.vehicleRental.learnMore')}
                </span>
              </article>
            </Link>

            <Link to="/brazilian-marketplace" className="service-card-link">
              <article className="service-card clickable">
                <h3>{t('home.brazilianMarketplace.title')}</h3>
                <p>
                  {t('home.brazilianMarketplace.description')}
                </p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                  📱 Full Instagram Shop & Facebook Marketplace integration
                </p>
                <span className="btn btn-primary">
                  {t('home.brazilianMarketplace.learnMore')}
                </span>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

