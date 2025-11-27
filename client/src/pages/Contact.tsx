import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../App.css'

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

export function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ContactForm>(initialForm)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000',
    [],
  )

  const benefits = [
    t('contact.letsConnect.benefits.seniorEngineer'),
    t('contact.letsConnect.benefits.regulatedIndustries'),
    t('contact.letsConnect.benefits.fullStack'),
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
      setFeedback(t('contact.form.success'))
      setFormData(initialForm)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback(t('contact.form.error'))
    }
  }

  return (
    <main>
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-section">
            <h2>{t('contact.letsConnect.title')}</h2>
            <p>{t('contact.letsConnect.description')}</p>
            <div className="benefits">
              {benefits.map((benefit) => (
                <div className="benefit" key={benefit}>
                  {benefit}
                </div>
              ))}
            </div>
            <a href="mailto:aegisaosoft@gmail.com" className="btn btn-primary">
              {t('contact.letsConnect.getInTouch')}
            </a>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-highlight">
              <h3>{t('contact.form.title')}</h3>
              <p>{t('contact.form.description')}</p>
              <div className="contact-meta">
                <span>{t('contact.form.email')}</span>
                <a href="mailto:aegisaosoft@gmail.com">aegisaosoft@gmail.com</a>
              </div>
              <div className="contact-meta">
                <span>{t('contact.form.location')}</span>
                <p>{t('contact.form.locationValue')}</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(event) => handleInputChange('name')(event.target.value)}
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">{t('contact.form.emailLabel')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleInputChange('email')(event.target.value)}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="company">{t('contact.form.company')}</label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(event) => handleInputChange('company')(event.target.value)}
                  placeholder={t('contact.form.companyPlaceholder')}
                  autoComplete="organization"
                />
              </div>
              <div className="field">
                <label htmlFor="message">{t('contact.form.projectDetails')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) => handleInputChange('message')(event.target.value)}
                  placeholder={t('contact.form.projectDetailsPlaceholder')}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? t('contact.form.submitting') : t('contact.form.submit')}
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
  )
}

