import './Projects.css'

const projects = [
  {
    id: 'event-management',
    title: 'Event Management System',
    description:
      'A full-stack application to manage and book events with user authentication, admin controls, and database integration. Built with robust CRUD operations and a clean, user-friendly interface.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    highlights: ['User Authentication', 'Admin Dashboard', 'Database Integration', 'Event Booking'],
    icon: '🗓️',
    color: '#7c3aed',
    featured: true,
  },
  {
    id: 'kitchen-calculator',
    title: 'Kitchen Scaling Calculator',
    description:
      'A web app to dynamically adjust recipe ingredient quantities based on the number of servings. Features real-time calculations and a user-friendly interface built with Flask.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    highlights: ['Dynamic Calculations', 'Real-time Updates', 'User-Friendly UI'],
    icon: '🍳',
    color: '#06b6d4',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider"></div>
        <p className="section-subtitle" style={{ marginBottom: '60px' }}>
          Real-world applications built to solve practical problems using modern web technologies and programming concepts.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="project-card glass-card"
              style={{ '--project-color': project.color }}
            >
              <div className="project-card__top">
                <div className="project-card__icon">{project.icon}</div>
                {project.featured && (
                  <span className="project-card__featured">⭐ Featured</span>
                )}
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__highlights">
                {project.highlights.map((h) => (
                  <span key={h} className="project-card__highlight">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="5" fill="currentColor" opacity="0.6"/>
                    </svg>
                    {h}
                  </span>
                ))}
              </div>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-card__glow"></div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <div className="projects__more-text">
            <span>🚀</span>
            <p>More projects coming soon — currently building in public!</p>
          </div>
          <a href="mailto:malivivek7848@gmail.com" className="btn-secondary" id="projects-collaborate">
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  )
}
