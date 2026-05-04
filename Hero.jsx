import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === '0' ? '1' : '0'
      }
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__greeting">
            <span className="hero__greeting-emoji">👋</span>
            <span>Hello, I&apos;m</span>
          </div>

          <h1 className="hero__name">
            Vivek Ganesh<br />
            <span className="gradient-text">Mali</span>
          </h1>

          <div className="hero__title">
            <span className="hero__title-prefix font-mono">&gt; </span>
            <span className="hero__title-text">Computer Engineer</span>
            <span className="hero__cursor" ref={cursorRef}>|</span>
          </div>

          <p className="hero__description">
            Passionate Computer Engineering undergraduate building real-world solutions
            with <span className="hero__highlight">Python</span>, <span className="hero__highlight">JavaScript</span>,
            and modern web technologies. Turning ideas into impactful digital experiences.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" id="hero-view-projects">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary" id="hero-contact">
              Get In Touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/vivek-mali-841356308"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-linkedin"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:malivivek7848@gmail.com"
              className="hero__social-link"
              id="hero-email"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a
              href="tel:+919423518222"
              className="hero__social-link"
              id="hero-phone"
              aria-label="Phone"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-container">
            <div className="hero__avatar-ring hero__avatar-ring--1"></div>
            <div className="hero__avatar-ring hero__avatar-ring--2"></div>
            <div className="hero__avatar-card">
              <div className="hero__avatar-initials">VM</div>
              <div className="hero__avatar-glow"></div>
            </div>

            <div className="hero__badge hero__badge--code">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <span>1400+ CodeChef</span>
            </div>

            <div className="hero__badge hero__badge--edu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <span>B.Tech CSE</span>
            </div>

            <div className="hero__badge hero__badge--location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Dondaicha, MH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll down</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}
