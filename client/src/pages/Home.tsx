import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../App.css'

export function Home() {
  const { t } = useTranslation()

  const processSteps = [
    {
      number: '1',
      title: t('about.deliveryFramework.discover.title'),
      copy: t('about.deliveryFramework.discover.description'),
    },
    {
      number: '2',
      title: t('about.deliveryFramework.build.title'),
      copy: t('about.deliveryFramework.build.description'),
    },
    {
      number: '3',
      title: t('about.deliveryFramework.scale.title'),
      copy: t('about.deliveryFramework.scale.description'),
    },
  ]

  return (
    <main className="home-page">
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
                  <li>{t('home.vehicleRental.features.voiceAI')}</li>
                  <li><strong>📱 {t('home.vehicleRental.features.socialIntegration')}</strong></li>
                </ul>
              </article>
            </Link>

            <Link to="/brazilian-marketplace" className="service-card-link">
              <article className="service-card clickable">
                <h3>{t('home.brazilianMarketplace.title')}</h3>
                <p>
                  {t('home.brazilianMarketplace.description')}
                </p>
                <ul>
                  <li><strong>📱 Full Instagram & Facebook integration</strong></li>
                </ul>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="process" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="process-steps">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

