'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CAL_LINK = 'https://cal.com/YOUR_LINK_HERE'

export default function GetStarted() {
  useScrollReveal()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    role: '',
    email: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.role.trim()) e.role = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = CAL_LINK
    }, 2000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '52px',
    padding: '0 20px',
    fontFamily: 'var(--font-primary)',
    fontSize: '0.9375rem',
    color: 'white',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-primary)',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.8)',
    display: 'block',
    marginBottom: '8px',
  }

  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-primary)',
    fontSize: '0.75rem',
    color: '#FC8181',
    marginTop: '0.25rem',
  }

  return (
    <section
      id="get-started"
      className="section-dark"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        background: 'transparent',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .gs-input::placeholder { color: rgba(255,255,255,0.4); }
        .gs-input:focus {
          border-color: var(--color-blue) !important;
          box-shadow: 0 0 0 3px rgba(0,146,203,0.2);
        }
      `}} />

      <div className="container">
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p className="reveal section-label" style={{ fontFamily: 'var(--font-primary)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', display: 'block', textAlign: 'center' }}>
            Let&apos;s Talk
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: 700,
              color: 'var(--color-white)',
              marginBottom: '0.75rem',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to meet your next UX hire?
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.65)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              lineHeight: 1.65,
            }}
          >
            No commitment. Just a conversation with a recruiter who gets it.
          </p>

          <div
            className="reveal"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              padding: '48px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  You&apos;re all set!
                </div>
                <p style={{ fontFamily: 'var(--font-primary)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>
                  Redirecting you to schedule a call&hellip;
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* First Name + Last Name */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div>
                    <label htmlFor="firstName" style={labelStyle}>First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Alex"
                      className="gs-input"
                      style={inputStyle}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.firstName ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                    />
                    {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Johnson"
                      className="gs-input"
                      style={inputStyle}
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.lastName ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                    />
                    {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
                  </div>
                </div>

                {/* Company */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="company" style={labelStyle}>Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="gs-input"
                    style={inputStyle}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.company ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                  />
                  {errors.company && <p style={errorStyle}>{errors.company}</p>}
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="gs-input"
                    style={inputStyle}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.phone ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                  />
                  {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                </div>

                {/* Role — datalist */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="role" style={labelStyle}>Role You&apos;re Hiring For</label>
                  <input
                    id="role"
                    type="text"
                    list="roles"
                    placeholder="e.g. UX Researcher, Product Designer..."
                    className="gs-input"
                    style={inputStyle}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.role ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                  />
                  <datalist id="roles">
                    <option value="UX Researcher" />
                    <option value="UX Engineer" />
                    <option value="UX/UI Designer" />
                    <option value="Product Designer" />
                    <option value="UX Lead / Principal" />
                    <option value="Content Designer" />
                    <option value="Other" />
                  </datalist>
                  {errors.role && <p style={errorStyle}>{errors.role}</p>}
                </div>

                {/* Work Email */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="email" style={labelStyle}>Work Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    className="gs-input"
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? '#FC8181' : 'rgba(255,255,255,0.15)' }}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                {/* Brief Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="description" style={labelStyle}>Tell Us More (Optional)</label>
                  <textarea
                    id="description"
                    placeholder="Tell us about the role or project. The more context the better (optional)"
                    className="gs-input"
                    rows={4}
                    style={{
                      ...inputStyle,
                      height: 'auto',
                      padding: '16px 20px',
                      resize: 'vertical',
                      minHeight: '100px',
                    }}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', height: '56px', fontSize: '1rem' }}
                >
                  Book a Call
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
