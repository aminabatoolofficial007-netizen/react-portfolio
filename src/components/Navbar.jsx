function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          Amina Batool
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href="/Amina-Batool cv (1).pdf"
          className="resume-btn"
          target="_blank"
        >
          Download CV
        </a>
      </nav>
    </header>
  )
}

export default Navbar