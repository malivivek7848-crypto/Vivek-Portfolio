import './About.css'

const education = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'RCPIT, Shirpur',
    status: 'Currently Pursuing',
    icon: '🎓',
  },
  {
    degree: 'HSC (12th)',
    institution: 'S.A. Mission Jr. College, Nanddurbar',
    score: '88%',
    icon: '📘',
  },
  {
    degree: 'SSC (10th) — CBSE',
    institution: 'Rotary English School, Dondaicha',
    score: '93.80%',
    icon: '📗',
  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider"></div>

        <div className="about__grid">
          <div className="about__bio">
            <p className="about__bio-text">
              I&apos;m a passionate and detail-oriented <strong>Computer Engineering undergraduate</strong> with a
              strong foundation in programming, software development, and problem solving.
            </p>
            <p className="about__bio-text">
              I&apos;m eager to apply academic knowledge to real-world projects and contribute to innovative
              solutions in technology. I&apos;m skilled in languages such as <span className="highlight">Java</span> and
              <span className="highlight"> C</span>, with hands-on experience in web development and
              database management.
            </p>
            <p className="about__bio-text">
              Highly motivated to learn new technologies, collaborate effectively in team environments,
              and grow as a future software engineer.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value gradient-text">1400+</span>
                <span className="about__stat-label">CodeChef Problems</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value gradient-text">2+</span>
                <span className="about__stat-label">Projects Built</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value gradient-text">2</span>
                <span className="about__stat-label">Certifications</span>
              </div>
            </div>

            <a href="mailto:malivivek7848@gmail.com" className="btn-primary about__cta" id="about-contact-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Say Hello
            </a>
          </div>

          <div className="about__education">
            <h3 className="about__edu-title">Education</h3>
            <div className="about__edu-list">
              {education.map((item, i) => (
                <div key={i} className="about__edu-item glass-card">
                  <div className="about__edu-icon">{item.icon}</div>
                  <div className="about__edu-info">
                    <div className="about__edu-degree">{item.degree}</div>
                    <div className="about__edu-institution">{item.institution}</div>
                    {item.score && (
                      <div className="about__edu-score">
                        <span className="score-badge">{item.score}</span>
                      </div>
                    )}
                    {item.status && (
                      <div className="about__edu-score">
                        <span className="status-badge">{item.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
