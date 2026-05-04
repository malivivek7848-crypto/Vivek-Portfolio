import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span>VM</span>
              <span className="footer__logo-bracket">/&gt;</span>
            </div>
            <p className="footer__tagline">
              Building elegant solutions to real-world problems.
              <br />Based in Dondaicha, Maharashtra, India.
            </p>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/vivek-mali-841356308"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                id="footer-linkedin"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:malivivek7848@gmail.com"
                className="footer__social"
                id="footer-email"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a
                href="tel:+919423518222"
                className="footer__social"
                id="footer-phone"
                aria-label="Phone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="footer__nav-link" onClick={(e) => handleNavClick(e, href)}>
                    <span>→</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-info">
            <h4 className="footer__nav-title">Contact</h4>
            <div className="footer__contact-items">
              <a href="mailto:malivivek7848@gmail.com" className="footer__contact-item" id="footer-email-text">
                malivivek7848@gmail.com
              </a>
              <a href="tel:+919423518222" className="footer__contact-item" id="footer-phone-text">
                +91 9423518222
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-mali-841356308"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
                id="footer-linkedin-text"
              >
                linkedin.com/in/vivek-mali-841356308
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {currentYear} <span className="gradient-text">Vivek Ganesh Mali</span>. All rights reserved.
          </p>
          <p className="footer__made">
            Built with <span>❤️</span> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
