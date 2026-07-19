import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  // Helper for translated bullet lists stored as JSON arrays
  const list = (key: string): string[] => t(key, { returnObjects: true }) as unknown as string[]

  // The mission-critical areas block uses named keys rather than an array
  const missionCriticalAreas = ['fleet', 'payments', 'compliance', 'workflow', 'dataIntensive']

  // AI usage areas, rendered as cards in the order listed here
  const aiAreas = ['localization', 'agents', 'documents', 'messages']

  return (
    <main style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.title')}
          </h1>
          <p style={{ fontSize: '1.3rem', textAlign: 'center', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {t('about.intro.description')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {t('about.intro.leadership')}
            </p>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
              borderLeft: '4px solid #3b82f6',
              paddingLeft: '1.25rem',
            }}>
              {t('about.intro.ai')}
            </p>
          </div>
        </div>
      </section>

      {/* Artificial Intelligence — the lead capability, so it opens the page */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem', borderTop: '4px solid #3b82f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.ai.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            {t('about.ai.description')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {aiAreas.map((area) => (
              <div key={area} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.75rem' }}>{t(`about.ai.cards.${area}.title`)}</h3>
                <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5' }}>{t(`about.ai.cards.${area}.text`)}</p>
                <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                  {list(`about.ai.cards.${area}.items`).map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>{t('about.ai.principles.title')}</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem' }}>
              {list('about.ai.principles.items').map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {t('about.ai.philosophy')}
          </p>
        </div>
      </section>

      {/* Mission-Critical Systems */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.missionCritical.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            {t('about.missionCritical.description')}
          </p>

          <div style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>{t('about.missionCritical.areas.title')}</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem' }}>
              {missionCriticalAreas.map((area) => (
                <li key={area} style={{ marginBottom: '0.5rem' }}>{t(`about.missionCritical.areas.${area}`)}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
            {t('about.missionCritical.design')}
          </p>
        </div>
      </section>

      {/* Transportation Technology */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.transportation.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            {t('about.transportation.description')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem' }}>{t('about.transportation.vehicleRental.title')}</h3>
              <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                {list('about.transportation.vehicleRental.items').map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem' }}>{t('about.transportation.tollViolation.title')}</h3>
              <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                {list('about.transportation.tollViolation.items').map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.security.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            {t('about.security.description')}
          </p>

          <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {list('about.security.features').map((feature, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.technology.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            {t('about.technology.description')}
          </p>

          <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            {list('about.technology.stack').map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>

          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
            {t('about.technology.philosophy')}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.leadership.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            {t('about.leadership.description')}
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              {t('about.leadership.experience')}
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', marginBottom: '2rem' }}>
              {list('about.leadership.domains').map((domain, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{domain}</li>
              ))}
            </ul>

            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
              {t('about.leadership.approach')}
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            {t('about.delivery.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            {t('about.delivery.description')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>{t('about.delivery.assessment.title')}</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                {list('about.delivery.assessment.items').map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>{t('about.delivery.implementation.title')}</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                {list('about.delivery.implementation.items').map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>{t('about.delivery.operational.title')}</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                {list('about.delivery.operational.items').map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Commitment */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem' }}>
            {t('about.commitment.title')}
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '3rem' }}>
              {t('about.commitment.description')}
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              {t('home.cta.primary')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
