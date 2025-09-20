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
              <span className="typewriter">Full-Stack Developer & IT Professional</span>
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
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
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
                  Bachelor of Information Technology student at RMIT with professional experience in web development, 
                  cloud infrastructure, and robotics. Currently working as a Full-Stack Developer at WebPal and 
                  Casual Researcher at RMIT, specializing in React.js, Python, and ROS platform development.
                </p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Current Roles</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">15+</span>
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
                <h3 className="skill-category-title">Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">LUA</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Web & Frameworks</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">ROS Platform</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Cloud & Infrastructure</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Microsoft Azure</span>
                  <span className="skill-tag">Microsoft Entra</span>
                  <span className="skill-tag">Intune</span>
                  <span className="skill-tag">Domain Management</span>
                  <span className="skill-tag">Addigy MDM</span>
                  <span className="skill-tag">Proxmox</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Networking & Systems</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Cisco Networking</span>
                  <span className="skill-tag">VLAN Routing</span>
                  <span className="skill-tag">VoIP</span>
                  <span className="skill-tag">NAS</span>
                  <span className="skill-tag">Terminal/SSH</span>
                  <span className="skill-tag">Screen Share</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <div className="section-header">
              <h2 className="section-title">Professional Experience</h2>
            </div>
            <div className="experience-grid">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">Full-Stack Developer</h3>
                  <div className="experience-meta">
                    <span className="experience-company">WebPal</span>
                    <span className="experience-date">2024 - Present</span>
                  </div>
                </div>
                <p className="experience-description">
                  Developing web applications and managing cloud infrastructure. Specializing in domain management, 
                  provisioning, Microsoft Admin, Azure, Entra, and Intune deployment across multiple business environments.
                </p>
                <div className="experience-tech">
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Microsoft Entra</span>
                  <span className="tech-tag">Intune</span>
                  <span className="tech-tag">Domain Management</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">Casual Researcher</h3>
                  <div className="experience-meta">
                    <span className="experience-company">RMIT University</span>
                    <span className="experience-date">Mid 2024 - Present</span>
                  </div>
                </div>
                <p className="experience-description">
                  Research and development of robotic systems including Tiago and Pepper robots. Building software 
                  solutions using React.js, Python, and ROS platform for autonomous robotic applications.
                </p>
                <div className="experience-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ROS</span>
                  <span className="tech-tag">Robotics</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">Bartender & Gaming Specialist</h3>
                  <div className="experience-meta">
                    <span className="experience-company">Various Venues</span>
                    <span className="experience-date">2021 - 2023</span>
                  </div>
                </div>
                <p className="experience-description">
                  Worked in high-demand hospitality environments including Richmond Social and Harp of Erin Hotel. 
                  Gained experience in customer service, machine maintenance, and technical troubleshooting.
                </p>
                <div className="experience-tech">
                  <span className="tech-tag">Customer Service</span>
                  <span className="tech-tag">Technical Support</span>
                  <span className="tech-tag">Machine Maintenance</span>
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
                  <h3 className="project-title">RMIT F1 Robotics Platform</h3>
                  <span className="project-status">Research</span>
                </div>
                <p className="project-description">
                  Built software for Tiago robots from PAL Robotics using React.js, Python, and ROS platform. 
                  Developed multi-platform systems for autonomous robotic interactions.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ROS</span>
                  <span className="tech-tag">Robotics</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">RMIT Research</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Pepper Robot Multi-Platform System</h3>
                  <span className="project-status">Research</span>
                </div>
                <p className="project-description">
                  Developed comprehensive software systems for SoftBank Pepper robots, focusing on human-robot 
                  interaction and autonomous behavior programming.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ROS</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">SoftBank Robotics</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">RMIT Research</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">RMIT RedBackBots</h3>
                  <span className="project-status">Open Source</span>
                </div>
                <p className="project-description">
                  Contributing to autonomous robot soccer league development. Working on AI algorithms, 
                  computer vision, and autonomous decision-making systems for competitive robotics.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Computer Vision</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">ROS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">RoboCup</a>
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
            <a href="https://github.com/JimmieThomson" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/james-thomson-946a19294/" className="social-link">LinkedIn</a>
            <a href="mailto:james@jamesbjthomson.com" className="social-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
