import React, { useState, useEffect } from 'react'
import './App.css'
// import Lanyard from './include/Lanyard.jsx'
import SimpleLanyard from './include/SimpleLanyard.jsx'

// Error boundary component to catch Lanyard errors
class LanyardErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lanyard component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
          color: 'var(--color-text-secondary)',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div>3D Lanyard Component</div>
          <small style={{ color: 'var(--color-text-tertiary)' }}>Loading failed - using fallback</small>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setShowWelcome(false)
      }, 1000) // Wait for fade out animation
    }, 4000) // Show welcome screen for 4 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showWelcome) {
    return (
      <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="welcome-background">
          <div className="shine-overlay"></div>
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`}></div>
            ))}
          </div>
        </div>
        <div className="welcome-content">
          <div className="welcome-text">
            <h1 className="welcome-greeting">Welcome,</h1>
            <h2 className="welcome-name">
              <span className="text-reveal">my name is</span>
              <span className="name-highlight">James Thomson</span>
            </h2>
            <div className="welcome-subtitle">
              <span className="typewriter">Systems Administrator & Developer</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="profile-section">
            <div className="avatar">
              <img src="Avatar.jpg" alt="JT Logo" className="avatar-logo" />
            </div>
            <div className="profile-info">
              <h1 className="name">James Thomson</h1>
              <p className="username">@JamesBJThomson</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* About Section */}
          <section id="about" className="section">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-content">
              <div className="bio-card">
                <p className="bio">
                  Full-stack developer with a passion for creating clean, efficient, and user-friendly applications. 
                  I enjoy working with modern technologies and solving complex problems through code.
                </p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
              <div className="lanyard-container">
                <LanyardErrorBoundary>
                  <SimpleLanyard />
                </LanyardErrorBoundary>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <div className="section-header">
              <h2 className="section-title">Skills & Technologies</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">Vue.js</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Tools & Other</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">E-Commerce Platform</h3>
                  <span className="project-status">Public</span>
                </div>
                <p className="project-description">
                  A full-stack e-commerce platform built with React and Node.js, featuring payment integration and admin dashboard.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                  <a href="#" className="project-link">Live Demo</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Task Management App</h3>
                  <span className="project-status">Public</span>
                </div>
                <p className="project-description">
                  A collaborative task management application with real-time updates and team collaboration features.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">Socket.io</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                  <a href="#" className="project-link">Live Demo</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Weather Dashboard</h3>
                  <span className="project-status">Public</span>
                </div>
                <p className="project-description">
                  A responsive weather dashboard with location-based forecasts and interactive charts.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Chart.js</span>
                  <span className="tech-tag">API Integration</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                  <a href="#" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 James Thomson.</p>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
