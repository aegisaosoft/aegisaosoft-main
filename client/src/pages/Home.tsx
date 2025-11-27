import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../App.css'

export function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>{t('home.title')}</h1>
          <p className="subtitle">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services-grid">
            <article className="service-card">
              <h3>{t('home.vehicleRental.title')}</h3>
              <p>
                {t('home.vehicleRental.description')}
              </p>
              <ul>
                <li>{t('home.vehicleRental.features.fleetManagement')}</li>
                <li>{t('home.vehicleRental.features.driverVerification')}</li>
                <li>{t('home.vehicleRental.features.securityDeposit')}</li>
                <li>{t('home.vehicleRental.features.automatedBilling')}</li>
              </ul>
              <Link to="/vehicle-rental" className="btn btn-primary">
                {t('home.vehicleRental.learnMore')}
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

