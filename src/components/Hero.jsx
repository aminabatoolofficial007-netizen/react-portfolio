function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* HERO CONTENT */}
        <div className="hero-content">

          <span className="hero-tag">
            👋 Hello, I'm
          </span>

          <h1>
            Amina Batool
          </h1>

          <h2>
            Frontend Developer
          </h2>

          <p>
            I am a Software Engineering student and Frontend Developer.
            I create modern, responsive and user-friendly websites
            using HTML, CSS, JavaScript and React.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn-primary"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* HERO IMAGE */}
        <div className="hero-image">

          <div className="image-box">

            <img
              src="/Amina Batool.png"
              alt="Amina Batool - Frontend Developer"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;