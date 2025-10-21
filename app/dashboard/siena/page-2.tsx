"use client";
export default function Page() {
    return (
        <>
  <header>
    <nav className="navbar">
      <div className="nav-logo">Siena Marie Abad</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="files/resume.pdf" download className="resume-btn">Download Resume</a></li>
      </ul>
    </nav>

    <div className="hero">
      <img src="sien.jpg" alt="Profile" className="hero-img" />
      <div className="hero-text">
        <h1>Hello, I'm <span>Siena</span></h1>
        <p>An ICT student at Batanes State College, and currently in junior year</p>
        <a href="#projects" className="btn-primary">View Projects</a>
      </div>
    </div>
  </header>

  <main>
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        Kapian Dios! I'm Siena Marie, a passionate web developer and a student currently pursuing a degree in Information Technology. Although tech wasn’t my initial career path, I’ve grown to appreciate the creativity and logic it demands. With a strong foundation in HTML, CSS, and basic JavaScript, I enjoy crafting clean, user-centered websites and bringing ideas to life in the browser. I'm constantly learning, step by step, exploring where this journey might take me, and pushing myself to build intuitive, responsive, and visually engaging digital experiences.
      </p>
    </section>

    <section id="projects" className="section projects">
      <h2>Sample Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
        <div className="project-card">
          <h3>No Projects Yet</h3>
          <p>--</p>
        </div>
      </div>
    </section>

      <div className="social-links">
    <a href="https://facebook.com/siena.abad.castillejos" target="_blank" aria-label="Facebook">
      <img src="icons/facebook.svg" alt="Facebook" />
    </a>
    <a href="https://instagram.com/aneisx_" target="_blank" aria-label="Instagram">
      <img src="icons/instagram.svg" alt="Instagram" />
    </a>
    <a href="https://linkedin.com/in/siena-marie-abad-ba8981378" target="_blank" aria-label="LinkedIn">
      <img src="icons/linkedin.svg" alt="LinkedIn" />
    </a>
  </div>
  </main>

  <footer>
    <p>© 2025 Siena Marie Abad. All rights reserved.</p>
  </footer>
        </>
    )
}