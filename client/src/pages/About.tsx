import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import '../App.css'

export function About() {
  const { t } = useTranslation()

  const services = [
    {
      title: t('about.whatWeBuild.vehicleRental.title'),
      description: t('about.whatWeBuild.vehicleRental.description'),
      link: '/vehicle-rental',
      items: [
        t('about.whatWeBuild.vehicleRental.features.fleetManagement'),
        t('about.whatWeBuild.vehicleRental.features.driverVerification'),
        t('about.whatWeBuild.vehicleRental.features.securityDeposit'),
        t('about.whatWeBuild.vehicleRental.features.automatedBilling'),
      ],
    },
    {
      title: t('about.whatWeBuild.complianceAutomation.title'),
      description: t('about.whatWeBuild.complianceAutomation.description'),
      link: '/vehicle-rental',
      items: [
        t('about.whatWeBuild.complianceAutomation.features.citationScraping'),
        t('about.whatWeBuild.complianceAutomation.features.automatedPayment'),
        t('about.whatWeBuild.complianceAutomation.features.multiState'),
        t('about.whatWeBuild.complianceAutomation.features.violationTracking'),
      ],
    },
  ]

  const techCategories = [
    { title: 'Backend', copy: t('about.technicalExpertise.backend') },
    { title: 'Frontend', copy: t('about.technicalExpertise.frontend') },
    { title: 'Cloud', copy: t('about.technicalExpertise.cloud') },
    { title: 'Payments', copy: t('about.technicalExpertise.payments') },
    { title: 'Automation', copy: t('about.technicalExpertise.automation') },
    { title: 'Security', copy: t('about.technicalExpertise.security') },
  ]

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
    <main className="about-page">
      <section className="services" id="services">
        <div className="container">
          <h2>{t('about.whatWeBuild.title')}</h2>
          <p className="section-subtitle">
            {t('about.whatWeBuild.subtitle')}
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <Link to={service.link} className="service-card-link" key={service.title}>
                <article className="service-card clickable">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="tech" id="tech">
        <div className="container">
          <h2>{t('about.technicalExpertise.title')}</h2>
          <p className="section-subtitle">{t('about.technicalExpertise.subtitle')}</p>
          <div className="tech-stack">
            <div className="tech-categories">
              {techCategories.map((category) => (
                <div className="tech-category" key={category.title}>
                  <h4>{category.title}</h4>
                  <p>{category.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="container">
          <h2>{t('about.enterpriseExperience.title')}</h2>
          <div className="experience-box">
            <p>{t('about.enterpriseExperience.fxcm')}</p>
            <p>
              <Trans
                i18nKey="about.enterpriseExperience.ctm"
                components={{
                  ctmLink: <a href="https://www.ctm.ru" target="_blank" rel="noreferrer" />
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.enterpriseExperience.huur"
                components={{
                  huurLink: <a href="https://huur-us.com" target="_blank" rel="noreferrer" />
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.enterpriseExperience.blueCliff"
                components={{
                  blueCliffLink: <a href="https://blue-cliff-0efe7c11e.3.azurestaticapps.net/" target="_blank" rel="noreferrer" />
                }}
              />
            </p>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <h2>{t('about.deliveryFramework.title')}</h2>
          <p className="section-subtitle">{t('about.deliveryFramework.subtitle')}</p>
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

