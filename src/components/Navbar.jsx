import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          Amina <span>Batool</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* NAVIGATION */}
        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" onClick={closeMenu}>
              Certificates
            </a>
          </li>
<li>
  <a href="#reviews" onClick={closeMenu}>
    Reviews
  </a>
</li>



          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* CV BUTTON */}
        <a
          href="/Amina-Batool%20cv%20(1).pdf"
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>

      </nav>
    </header>
  );
}

export default Navbar;