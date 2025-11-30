import { useState, type FormEvent } from 'react'
import '../App.css'

export function VehicleRentalSetPassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (confirmPassword && value !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else {
      setPasswordError('')
    }
  }

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value)
    if (password && value !== password) {
      setPasswordError('Passwords do not match')
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
      return
    }
    
    // Use different URLs based on environment
    const baseUrl = import.meta.env.DEV 
      ? 'http://localhost:4000' 
      : 'https://admin.aegis-rental.com'
    
    // Open the endpoint with email as username and password as parameters
    window.open(`${baseUrl}/set-new-client?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, '_blank')
  }

  const isFormValid = email && password && confirmPassword && password === confirmPassword

  return (
    <main>
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '2rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Set Password</h1>
            <form className="contact-form" style={{ padding: '2rem' }} onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="Enter your password"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="field">
                <label htmlFor="confirmPassword">Retype Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  placeholder="Retype your password"
                  required
                  autoComplete="new-password"
                />
                {passwordError && (
                  <p className="form-feedback error" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                    {passwordError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isFormValid}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Set
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

