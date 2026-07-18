/*
 * Copyright (c) 2025-2026 Aegis AO Soft LLC and Alexander Orlov.
 * 34 Middletown Ave, Atlantic Highlands, NJ 07716
 *
 * THIS SOFTWARE IS THE CONFIDENTIAL AND PROPRIETARY INFORMATION OF
 * Aegis AO Soft LLC and Alexander Orlov.
 *
 * This code may be used, reproduced, modified, or distributed ONLY with the
 * prior written permission of Aegis AO Soft LLC / Alexander Orlov.
 *
 * Author: Alexander Orlov
 * Aegis AO Soft LLC
 */


import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import '../App.css'

export function MyEZWheelsSetPassword() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // Track the mismatch as a flag so the message re-translates on language change
  const [passwordMismatch, setPasswordMismatch] = useState(false)

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (confirmPassword && value !== confirmPassword) {
      setPasswordMismatch(true)
    } else {
      setPasswordMismatch(false)
    }
  }

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value)
    if (password && value !== password) {
      setPasswordMismatch(true)
    } else {
      setPasswordMismatch(false)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordMismatch(true)
      return
    }
    
    // Use different URLs based on environment
    const baseUrl = import.meta.env.DEV 
      ? 'http://localhost:4000' 
      : 'https://admin.myezwheels.com'
    
    // Open the endpoint with email as username and password as parameters
    window.open(`${baseUrl}/set-new-client?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, '_blank')
  }

  const isFormValid = email && password && confirmPassword && password === confirmPassword

  return (
    <main>
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('setPassword.title')}</h1>
            <form className="contact-form" style={{ padding: '2rem' }} onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email">{t('contact.form.emailLabel')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('setPassword.emailPlaceholder')}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="password">{t('setPassword.passwordLabel')}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder={t('setPassword.passwordPlaceholder')}
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="field">
                <label htmlFor="confirmPassword">{t('setPassword.confirmPasswordLabel')}</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  placeholder={t('setPassword.confirmPasswordPlaceholder')}
                  required
                  autoComplete="new-password"
                />
                {passwordMismatch && (
                  <p className="form-feedback error" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                    {t('setPassword.errors.passwordsDoNotMatch')}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isFormValid}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                {t('setPassword.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

