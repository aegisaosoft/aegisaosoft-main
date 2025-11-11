import { FormEvent, useMemo, useState } from 'react'
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

  const services = [
    {
      title: 'Product Engineering',
      description:
        'Design, develop, and evolve cloud-native platforms with resilient architectures and modern tooling.',
      items: ['Full-stack delivery', 'Scalable infrastructure', 'CI/CD automation'],
    },
    {
      title: 'AI & Data Solutions',
      description:
        'Transform data into actionable intelligence through applied ML models, analytics pipelines, and dashboards.',
      items: ['Data engineering', 'Predictive analytics', 'Intelligent automation'],
    },
    {
      title: 'Experience Design',
      description:
        'Craft user-centered experiences that align strategy and execution across web and mobile touchpoints.',
      items: ['Design systems', 'UX research', 'Product discovery'],
    },
  ]

  const specialties = [
    'TypeScript & Node.js platforms',
    'React and React Native applications',
    'Domain-driven microservices',
    'Serverless and edge deployments',
    'Observability-driven operations',
  ]

  const deliveryPillars = [
    {
      title: 'Discover',
      copy: 'Map goals to technical realities through stakeholder workshops and rapid prototyping.',
    },
    {
      title: 'Build',
      copy: 'Deliver incremental value with automated testing, code reviews, and iterative releases.',
    },
    {
      title: 'Scale',
      copy: 'Elevate reliability, performance, and maintainability with observability and continuous optimization.',
    },
  ]

  const insights = [
    {
      metric: '12+',
      label: 'Years shipping enterprise-grade products',
    },
    {
      metric: '98%',
      label: 'Client satisfaction from post-project surveys',
    },
    {
      metric: '4.6x',
      label: 'Average ROI delivered within 12 months',
    },
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
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">
            <span className="logo-mark">A</span>
            <span className="logo-text">Aegis AO Soft</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Start a Project
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Strategic Software Delivery</p>
          <h1>
            Building resilient digital products that give ambitious teams a competitive edge.
          </h1>
          <p className="hero-copy">
            Aegis AO Soft partners with scale-ups and enterprises to launch mission-critical
            platforms with confidence. From initial roadmap to post-launch optimization, we align
            strategy, design, and engineering for measurable outcomes.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="primary">
              Schedule a Consultation
            </a>
            <a href="#services" className="secondary">
              Explore Services
            </a>
          </div>
          <div className="metrics">
            {insights.map((insight) => (
              <div className="metric-card" key={insight.label}>
                <span className="metric-value">{insight.metric}</span>
                <span className="metric-label">{insight.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section services" id="services">
          <div className="section-header">
            <p className="eyebrow">What We Do</p>
            <h2>Outcome-driven partnerships built for clarity and velocity.</h2>
            <p className="section-copy">
              We embed with your product teams to uncover the right problems, co-create solutions,
              and deliver software that stands up to the demands of growth.
            </p>
          </div>
          <div className="grid three">
            {services.map((service) => (
              <article className="card" key={service.title}>
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
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="section-header compact">
            <p className="eyebrow">Expertise</p>
            <h2>Technical leadership across the modern delivery stack.</h2>
          </div>
          <div className="pill-group">
            {specialties.map((capability) => (
              <span className="pill" key={capability}>
                {capability}
              </span>
            ))}
          </div>
          <div className="cta-panel">
            <div>
              <h3>Integration-ready teams</h3>
              <p>
                We operate as an extension of your product organization, aligning with your rituals,
                tools, and success metrics while introducing proven delivery practices.
              </p>
            </div>
            <a href="#contact" className="primary">
              Build With Us
            </a>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="section-header compact">
            <p className="eyebrow">Delivery Framework</p>
            <h2>Orchestrated execution from discovery to scale.</h2>
          </div>
          <div className="grid three">
            {deliveryPillars.map((pillar) => (
              <article className="card compact" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header">
            <p className="eyebrow">Let&apos;s Connect</p>
            <h2>Share your vision. We&apos;ll help you build the path there.</h2>
            <p className="section-copy">
              Tell us about your product goals, timeline, and constraints. We&apos;ll respond with
              a tailored plan of action and quote.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-highlight">
              <h3>Why teams choose Aegis AO Soft</h3>
              <ul>
                <li>Embedded, senior talent with product-first thinking</li>
                <li>Transparent reporting and operational rigor</li>
                <li>Strategic partnership beyond launch day</li>
              </ul>
              <div className="contact-meta">
                <span>Email</span>
                <a href="mailto:hello@aegisaosoft.com">hello@aegisaosoft.com</a>
              </div>
              <div className="contact-meta">
                <span>HQ</span>
                <p>Seattle, WA • Available across North America & Europe</p>
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
              <button
                type="submit"
                className="primary full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
              {feedback && (
                <p className={`form-feedback ${status === 'error' ? 'error' : 'success'}`}>
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="logo">
            <span className="logo-mark">A</span>
            <span className="logo-text">Aegis AO Soft</span>
          </div>
          <p>Building resilient software ecosystems for trailblazing teams.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Aegis AO Soft. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
