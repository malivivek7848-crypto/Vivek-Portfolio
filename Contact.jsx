import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:malivivek7848@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.open(mailtoLink)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactItems = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'malivivek7848@gmail.com',
      href: 'mailto:malivivek7848@gmail.com',
      id: 'contact-email-link',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+91 9423518222',
      href: 'tel:+919423518222',
      id: 'contact-phone-link',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'vivek-mali-841356308',
      href: 'https://www.linkedin.com/in/vivek-mali-841356308',
      id: 'contact-linkedin-link',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'Dondaicha, Maharashtra',
      href: null,
      id: 'contact-location',
    },
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle" style={{ marginBottom: '60px' }}>
          I&apos;m always open to new opportunities, collaborations, and interesting conversations.
          Feel free to reach out — I&apos;ll get back to you soon!
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__items">
              {contactItems.map((item) => (
                <div key={item.id} className="contact__item">
                  <div className="contact__item-icon">{item.icon}</div>
                  <div className="contact__item-body">
                    <div className="contact__item-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} id={item.id} className="contact__item-value contact__item-link"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span id={item.id} className="contact__item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__availability">
              <div className="contact__avail-dot"></div>
              <span>Open to internships & entry-level opportunities</span>
            </div>
          </div>

          <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
            {submitted && (
              <div className="contact__success">
                ✅ Message opened in your mail client!
              </div>
            )}

            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Vivek Mali"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="contact__input contact__textarea"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary contact__submit" id="contact-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
