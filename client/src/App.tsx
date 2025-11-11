import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import './App.css'

type ContactForm = {
  name: string
  email: string
  company: string
  message: string
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: ContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function App() {
  const [formData, setFormData] = useState<ContactForm>(initialForm)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000',
    [],
  )

  const stats = [
    { number: '30+', label: 'Years engineering financial and operational systems' },
    { number: '4', label: 'Production platforms launched in 2024' },
    { number: '100%', label: 'Client-controlled infrastructure on Azure/AWS' },
  ]

  const services = [
    {
      title: 'Vehicle Rental Management',
      description:
        'Complete SaaS platform for rental companies with multi-tenant architecture, Stripe Connect integration, and automated operations.',
      items: ['Fleet management & availability', 'Driver verification (BlinkID)', 'Security deposit handling', 'Automated billing'],
    },
    {
      title: 'Compliance Automation',
      description:
        'Intelligent systems that monitor, parse, and automatically resolve parking citations across multiple municipalities.',
      items: ['Citation scraping & parsing', 'Automated payment processing', 'Multi-state support (FL, NJ)', 'Violation tracking & reporting'],
    },
    {
      title: 'Booking & Discovery',
      description:
        'User-facing platforms for retreat centers and experience providers with real-time availability and integrated payments.',
      items: ['Resort/venue search & filtering', 'Booking management', 'Payment processing', 'Multi-language support'],
    },
  ]

  const techCategories = [
    { title: 'Backend', copy: 'Node.js, ASP.NET Core, PostgreSQL, Redis' },
    { title: 'Frontend', copy: 'React, TypeScript, Material-UI' },
    { title: 'Cloud', copy: 'Azure App Service, AWS, Docker' },
    { title: 'Payments', copy: 'Stripe Connect, PCI DSS compliance' },
    { title: 'Automation', copy: 'Playwright, Puppeteer, scheduled workflows' },
    { title: 'Security', copy: 'AML/KYC, SOX, multi-tenant isolation' },
  ]

  const experience = [
    '20+ years building financial compliance systems at FXCM including payment processing, regulatory reporting, and back-office operations for regulated trading platforms.',
    'Founded CTM — electronic customs declaration system for Russian Customs.',
    'Delivered the Huur US car rental platform operating across multiple states.',
    'Built the ASP.NET API and PostgreSQL database powering Blue Cliff retreat experiences.',
  ]

  const processSteps = [
    {
      number: '1',
      title: 'Discover',
      copy: 'Technical requirements mapping, database schema design, API specification, and cloud architecture planning.',
    },
    {
      number: '2',
      title: 'Build',
      copy: 'Incremental delivery with Git-based workflows, containerized deployments, automated testing, and CI/CD pipelines.',
    },
    {
      number: '3',
      title: 'Scale',
      copy: 'Performance optimization, monitoring setup (Application Insights), security hardening, and documentation.',
    },
  ]

  const benefits = [
    'Senior engineer with 30+ years shipping production systems',
    'Experience with regulated industries (finance, customs)',
    'Full-stack delivery from database to deployment',
    'U.S.-based (EB-1 Exceptional Ability)',
  ]

  const handleInputChange = (field: keyof ContactForm) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setFeedback('Thanks for reaching out — our team will connect within one business day.')
      setFormData(initialForm)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback(
        'We could not process your request right now. Please try again later or email hello@aegisaosoft.com.',
      )
    }
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="logo">Aegis AO Soft</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Strategic Software Development</h1>
            <p className="subtitle">
              Building resilient rental management and automation platforms for ambitious businesses.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <h2>What We Build</h2>
            <p className="section-subtitle">
              Real-world solutions for rental operations and regulatory compliance.
            </p>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tech" id="tech">
          <div className="container">
            <h2>Technical Expertise</h2>
            <p className="section-subtitle">Production-proven stack for regulated industries.</p>
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
            <h2>Enterprise Experience</h2>
            <div className="experience-box">
              {experience.map((item) => (
                <p key={item}>
                  {item.includes('CTM') ? (
                    <>
                      Founded{' '}
                      <a href="https://www.ctm.ru" target="_blank" rel="noreferrer">
                        CTM
                      </a>{' '}
                      — electronic customs declaration system for Russian Customs.
                    </>
                  ) : item.includes('Huur US') ? (
                    <>
                      Delivered the{' '}
                      <a href="https://huur-us.com" target="_blank" rel="noreferrer">
                        Huur US
                      </a>{' '}
                      car rental platform operating across multiple states.
                    </>
                  ) : item.includes('Blue Cliff') ? (
                    <>
                      Built the{' '}
                      <a href="https://blue-cliff-0efe7c11e.3.azurestaticapps.net/" target="_blank" rel="noreferrer">
                        Blue Cliff
                      </a>{' '}
                      ASP.NET API with a PostgreSQL database backing their retreat planning experiences.
                    </>
                  ) : (
                    item
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <h2>Delivery Framework</h2>
            <p className="section-subtitle">Orchestrated execution from discovery to scale.</p>
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

        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-section">
              <h2>Let&apos;s Connect</h2>
              <p>
                Share your requirements—rental operations, compliance automation, or booking systems.
                We&apos;ll provide technical architecture recommendations and delivery timeline.
              </p>
              <div className="benefits">
                {benefits.map((benefit) => (
                  <div className="benefit" key={benefit}>
                    {benefit}
                  </div>
                ))}
              </div>
              <a href="mailto:hello@aegisaosoft.com" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-highlight">
                <h3>Tell us about your project</h3>
                <p>
                  We align strategy, delivery, and operations to help teams launch and scale platforms
                  that meet regulatory and customer demands.
                </p>
                <div className="contact-meta">
                  <span>Email</span>
                  <a href="mailto:hello@aegisaosoft.com">hello@aegisaosoft.com</a>
                </div>
                <div className="contact-meta">
                  <span>Location</span>
                  <p>New Jersey, USA • Available across North America & Europe</p>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(event) => handleInputChange('name')(event.target.value)}
                    placeholder="Jane Doe"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleInputChange('email')(event.target.value)}
                    placeholder="jane@company.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(event) => handleInputChange('company')(event.target.value)}
                    placeholder="Your company or project"
                    autoComplete="organization"
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(event) => handleInputChange('message')(event.target.value)}
                    placeholder="Share your goals, timelines, and challenges."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>
                {feedback && (
                  <p className={`form-feedback ${status === 'error' ? 'error' : 'success'}`}>
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Aegis AO Soft LLC</h4>
              <p>EIN: 41-2444296</p>
              <p>New Jersey, USA</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <a href="mailto:hello@aegisaosoft.com">hello@aegisaosoft.com</a>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Vehicle Rental Management</a>
              <a href="#services">Compliance Automation</a>
              <a href="#services">Booking Platforms</a>
            </div>
          </div>
          <p className="footer-meta">© {new Date().getFullYear()} Aegis AO Soft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
