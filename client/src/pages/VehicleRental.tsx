import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../App.css'

export function VehicleRental() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h1>{t('vehicleRental.title')}</h1>
          <p className="subtitle">
            {t('vehicleRental.subtitle')}
          </p>
          {/* Top Try Now button - centered under subtitle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <Link to="/vehicle-rental/set-password" className="try-now-btn try-now-top" style={{ textDecoration: 'none' }}>Try Now</Link>
          </div>
          <p>
            {t('vehicleRental.description')}
          </p>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('vehicleRental.languages.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <p>{t('vehicleRental.languages.english')}</p>
            </div>
            <div className="service-card">
              <p>{t('vehicleRental.languages.spanish')}</p>
            </div>
            <div className="service-card">
              <p>{t('vehicleRental.languages.portuguese')}</p>
            </div>
            <div className="service-card">
              <p>{t('vehicleRental.languages.french')}</p>
            </div>
            <div className="service-card">
              <p>{t('vehicleRental.languages.german')}</p>
            </div>
          </div>
          <p className="section-subtitle" style={{ marginTop: '1rem', marginBottom: '0' }}>
            {t('vehicleRental.languages.description')}
          </p>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('vehicleRental.features.title')}</h2>
          
          <div className="services-grid">
            <article className="service-card">
              <h3>{t('vehicleRental.features.intelligentBooking.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.intelligentBooking.voiceAI')}</li>
                <li>{t('vehicleRental.features.intelligentBooking.realTimeCalendar')}</li>
                <li>{t('vehicleRental.features.intelligentBooking.smartRecommendations')}</li>
                <li>{t('vehicleRental.features.intelligentBooking.vinRecognition')}</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>{t('vehicleRental.features.customerVerification.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.customerVerification.blinkID')}</li>
                <li>{t('vehicleRental.features.customerVerification.dataExtraction')}</li>
                <li>{t('vehicleRental.features.customerVerification.ageVerification')}</li>
                <li>{t('vehicleRental.features.customerVerification.documentStorage')}</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>{t('vehicleRental.features.paymentProcessing.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.paymentProcessing.stripeConnect')}</li>
                <li>{t('vehicleRental.features.paymentProcessing.multiCurrency')}</li>
                <li>{t('vehicleRental.features.paymentProcessing.securityDeposit')}</li>
                <li>{t('vehicleRental.features.paymentProcessing.automatedRefunds')}</li>
                <li>{t('vehicleRental.features.paymentProcessing.directPayouts')}</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>{t('vehicleRental.features.fleetManagement.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.fleetManagement.inventory')}</li>
                <li>{t('vehicleRental.features.fleetManagement.maintenance')}</li>
                <li>{t('vehicleRental.features.fleetManagement.statusUpdates')}</li>
                <li>{t('vehicleRental.features.fleetManagement.photoGallery')}</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>{t('vehicleRental.features.multiTenant.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.multiTenant.brandedWebsite')}</li>
                <li>{t('vehicleRental.features.multiTenant.customDomains')}</li>
                <li>{t('vehicleRental.features.multiTenant.uniqueBranding')}</li>
                <li>{t('vehicleRental.features.multiTenant.isolatedData')}</li>
                <li>{t('vehicleRental.features.multiTenant.customEmails')}</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>{t('vehicleRental.features.communication.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.communication.bookingConfirmations')}</li>
                <li>{t('vehicleRental.features.communication.reminders')}</li>
                <li>{t('vehicleRental.features.communication.paymentConfirmations')}</li>
                <li>{t('vehicleRental.features.communication.emailVerification')}</li>
                <li>{t('vehicleRental.features.communication.localizedEmails')}</li>
              </ul>
            </article>

            <article className="service-card" style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)', color: 'white' }}>
              <h3>{t('vehicleRental.features.socialMedia.title')}</h3>
              <ul>
                <li>{t('vehicleRental.features.socialMedia.instagram')}</li>
                <li>{t('vehicleRental.features.socialMedia.facebook')}</li>
                <li>{t('vehicleRental.features.socialMedia.socialLogin')}</li>
                <li>{t('vehicleRental.features.socialMedia.reviewSync')}</li>
                <li>{t('vehicleRental.features.socialMedia.adIntegration')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cta" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="cta-section" style={{ padding: '2rem' }}>
            <h2>{t('vehicleRental.openSite.title')}</h2>
            <div className="benefits" style={{ margin: '1.5rem 0' }}>
              <div className="benefit">{t('vehicleRental.openSite.signUp')}</div>
              <div className="benefit">{t('vehicleRental.openSite.configure')}</div>
              <div className="benefit">{t('vehicleRental.openSite.addVehicles')}</div>
              <div className="benefit">{t('vehicleRental.openSite.goLive')}</div>
            </div>
            <p>
              {t('vehicleRental.openSite.noCoding')}
            </p>
          </div>
        </div>
      </section>

      <section className="tech" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('vehicleRental.techStack.title')}</h2>
          <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
            <div className="tech-categories">
              <div className="tech-category">
                <h4>Frontend</h4>
                <p>{t('vehicleRental.techStack.frontend')}</p>
              </div>
              <div className="tech-category">
                <h4>Backend</h4>
                <p>{t('vehicleRental.techStack.backend')}</p>
              </div>
              <div className="tech-category">
                <h4>Database</h4>
                <p>{t('vehicleRental.techStack.database')}</p>
              </div>
              <div className="tech-category">
                <h4>Cloud</h4>
                <p>{t('vehicleRental.techStack.cloud')}</p>
              </div>
              <div className="tech-category">
                <h4>Payments</h4>
                <p>{t('vehicleRental.techStack.payments')}</p>
              </div>
              <div className="tech-category">
                <h4>Document Scanning</h4>
                <p>{t('vehicleRental.techStack.documentScanning')}</p>
              </div>
              <div className="tech-category">
                <h4>AI</h4>
                <p>{t('vehicleRental.techStack.ai')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <p className="subtitle" style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '0' }}>
            {t('vehicleRental.tagline')}
          </p>
          {/* Bottom Try Now button - centered under tagline */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/vehicle-rental/set-password" className="try-now-btn try-now-bottom" style={{ textDecoration: 'none' }}>Try Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

