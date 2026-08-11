function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="footer-container">

          {/* ABOUT */}
          <div className="footer-about">
            <h2>Amina Batool</h2>

            <p>
              Frontend Developer and Software Engineering student
              passionate about creating modern, responsive and
              user-friendly websites.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#certificates">Certificates</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-social">
            <h3>Follow Me</h3>

            <div className="social-icons">

              {/* GitHub */}
              <a
                href="https://github.com/aminabatoolofficial007-netizen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amina-batool-0104043a8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/code._architect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Amina Batool.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;