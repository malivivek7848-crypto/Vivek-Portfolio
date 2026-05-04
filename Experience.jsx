import './Experience.css'

const achievements = [
  {
    title: 'NMIMS Yugantar 24-Hr Hackathon',
    organization: 'NMIMS University',
    type: 'Hackathon',
    year: '2024',
    description:
      'Collaborated with a cross-functional team to ideate, design, and develop a functional prototype within 24 hours. Demonstrated effective teamwork, time management, and adaptability under pressure while ensuring high code quality and smooth project execution.',
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    title: 'Idea Presentation',
    organization: "SVKM'S Institute of Technology, Dhule",
    type: 'Presentation',
    year: '2024',
    description:
      'Presented an innovative tech idea to an audience of faculty and industry experts, demonstrating strong communication skills and technical understanding.',
    icon: '💡',
    color: '#06b6d4',
  },
  {
    title: 'Winner – RCPIT Converges Event',
    organization: 'RCPIT, Shirpur',
    type: 'Competition',
    year: '2024',
    description:
      'Won the RCPIT Converges inter-college event, showcasing problem-solving skills and technical aptitude in a competitive environment.',
    icon: '🥇',
    color: '#7c3aed',
  },
  {
    title: 'AI Certification — Skill India',
    organization: 'Skill India (Government of India)',
    type: 'Certification',
    year: '2024',
    description:
      'Completed an online course in Artificial Intelligence from Skill India, gaining foundational knowledge in AI concepts and applications.',
    icon: '🤖',
    color: '#10b981',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <p className="section-label">What I've done</p>
        <h2 className="section-title">Experience & <span>Achievements</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle" style={{ marginBottom: '60px' }}>
          As a student, my experience comes from hackathons, competitions, certifications,
          and solving 1400+ problems on competitive platforms.
        </p>

        <div className="exp__codechef-banner glass-card">
          <div className="exp__codechef-icon">⚡</div>
          <div className="exp__codechef-info">
            <div className="exp__codechef-title">CodeChef Problem Solver</div>
            <div className="exp__codechef-sub">Competitive Programming</div>
          </div>
          <div className="exp__codechef-count">
            <span className="gradient-text">1400+</span>
            <small>Problems Solved</small>
          </div>
        </div>

        <div className="exp__timeline">
          {achievements.map((item, i) => (
            <div key={i} className="exp__item">
              <div className="exp__item-icon" style={{ '--item-color': item.color }}>
                {item.icon}
              </div>
              <div className="exp__item-content glass-card">
                <div className="exp__item-header">
                  <div>
                    <h3 className="exp__item-title">{item.title}</h3>
                    <p className="exp__item-org">{item.organization}</p>
                  </div>
                  <div className="exp__item-meta">
                    <span className="exp__item-type" style={{ '--item-color': item.color }}>
                      {item.type}
                    </span>
                    <span className="exp__item-year">{item.year}</span>
                  </div>
                </div>
                <p className="exp__item-desc">{item.description}</p>
              </div>
              {i < achievements.length - 1 && <div className="exp__connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
