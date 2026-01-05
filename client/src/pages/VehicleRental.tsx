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

      <section className="languages-section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>{t('vehicleRental.languages.title')}</h2>
          <div className="languages-row">
            <span className="language-badge">{t('vehicleRental.languages.english')}</span>
            <span className="language-badge">{t('vehicleRental.languages.spanish')}</span>
            <span className="language-badge">{t('vehicleRental.languages.portuguese')}</span>
            <span className="language-badge">{t('vehicleRental.languages.french')}</span>
            <span className="language-badge">{t('vehicleRental.languages.german')}</span>
          </div>
          <p style={{ marginTop: '1rem', marginBottom: '0', color: '#666', textAlign: 'center' }}>
            {t('vehicleRental.languages.description')}
          </p>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2>{t('vehicleRental.features.title')}</h2>
          
          <div className="services-grid four-columns">
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
                <li>{t('vehicleRental.features.socialMedia.reviewSync')}</li>
                <li>{t('vehicleRental.features.socialMedia.adIntegration')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cta" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="cta-section" style={{ padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px' }}>
            <h2 style={{ color: 'white' }}>{t('vehicleRental.customization.title')}</h2>
            <p style={{ color: 'white', marginTop: '1rem', marginBottom: '1.5rem' }}>
              {t('vehicleRental.customization.description')}
            </p>
            <div className="benefits" style={{ margin: '1.5rem 0' }}>
              <div className="benefit" style={{ color: 'white' }}>{t('vehicleRental.customization.features.colors')}</div>
              <div className="benefit" style={{ color: 'white' }}>{t('vehicleRental.customization.features.logo')}</div>
              <div className="benefit" style={{ color: 'white' }}>{t('vehicleRental.customization.features.layout')}</div>
              <div className="benefit" style={{ color: 'white' }}>{t('vehicleRental.customization.features.domain')}</div>
            </div>
            <p style={{ color: 'white', marginTop: '1.5rem' }}>
              {t('vehicleRental.customization.professional')}
            </p>
            <a 
              href="https://arina-studio-bvehc2apfnbngehu.canadacentral-01.azurewebsites.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ 
                marginTop: '1rem', 
                background: 'white', 
                color: '#764ba2', 
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              🎨 Arina Studio →
            </a>
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

      <section className="hero" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
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

      <section className="tech-compact" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: '#666', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            {t('vehicleRental.techStack.title').replace('🛠️ ', '')}
          </p>
          <div className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">ASP.NET Core</span>
            <span className="tech-badge">PostgreSQL</span>
            <span className="tech-badge">Azure</span>
            <span className="tech-badge">Stripe Connect</span>
            <span className="tech-badge">BlinkID</span>
            <span className="tech-badge">AI/Voice</span>
          </div>
        </div>
      </section>
    </main>
  )
}

