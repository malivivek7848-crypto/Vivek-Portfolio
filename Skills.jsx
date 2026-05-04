import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '🧠',
    color: '#7c3aed',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'C', level: 75 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#06b6d4',
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#10b981',
    skills: [
      { name: 'Python/Flask', level: 75 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🗄️',
    color: '#f59e0b',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'DBMS', level: 80 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

const badges = [
  { name: 'Python', icon: '🐍' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'C', icon: '💻' },
  { name: 'Java', icon: '☕' },
  { name: 'VS Code', icon: '🔵' },
  { name: 'Git', icon: '🔀' },
  { name: 'DBMS', icon: '📊' },
  { name: 'Problem Solving', icon: '🧩' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="section-divider"></div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="skill-category glass-card"
              style={{ '--cat-color': cat.color }}
            >
              <div className="skill-category__header">
                <span className="skill-category__icon">{cat.icon}</span>
                <h3 className="skill-category__title">{cat.title}</h3>
              </div>

              <div className="skill-category__skills">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__info">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <div
                        className="skill-item__fill"
                        style={{ '--fill-width': `${skill.level}%`, '--fill-color': cat.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__badges">
          <p className="skills__badges-label">Tech Stack</p>
          <div className="skills__badges-grid">
            {badges.map((badge) => (
              <div key={badge.name} className="skill-badge">
                <span className="skill-badge__icon">{badge.icon}</span>
                <span className="skill-badge__name">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
