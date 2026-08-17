function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website with a modern user interface and smooth shopping experience.",
      image: "/e commerce.jpeg",
      liveLink: "https://e-commerce-website-taupe-seven.vercel.app/",
      githubLink:
        "https://github.com/aminabatoolofficial007-netizen/e-commerce-website",
    },

    {
      title: "Weather App",
      description:
        "A weather application that fetches and displays real-time weather information using an API.",
      image: "/weather.jpeg",
      liveLink: "https://wea-sigma.vercel.app/",
      githubLink:
        "https://github.com/aminabatoolofficial007-netizen/wea",
    },

    {
      title: "Portfolio Website",
      description:
        "A personal responsive portfolio website showcasing my skills, projects and experience.",
      image: "/portfolio.jpeg",
      liveLink: "",
      githubLink:
        "https://github.com/aminabatoolofficial007-netizen/react-portfolio",
    },

    {
      title: "Temperature Converter",
      description:
        "A simple and responsive application for converting temperatures between different units.",
      image: "/conver.jpeg",
      liveLink: "",
      githubLink:
        "https://github.com/aminabatoolofficial007-netizen/temperature-convertor",
    },

    {
      title: "DT Perfumes Landing Page",
      description:
        "A modern perfume landing page with an attractive interface and responsive design.",
      image: "/dt.jpeg",
      liveLink: "",
      githubLink:
        "https://github.com/aminabatoolofficial007-netizen/DT",
    },
  ];

  return (
    <section className="projects-preview" id="projects">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <span>My Recent Work</span>
          <h2>Projects</h2>
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              {/* PROJECT IMAGE */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                />
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* PROJECT BUTTONS */}
                <div className="project-buttons">

                  <a
                    href={project.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;