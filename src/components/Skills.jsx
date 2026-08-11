function Skills() {
  const skills = [
    {
      icon: "fab fa-html5",
      title: "HTML5",
      description: "Building semantic and well-structured web pages.",
    },
    {
      icon: "fab fa-css3-alt",
      title: "CSS3",
      description: "Creating modern, responsive and attractive designs.",
    },
    {
      icon: "fab fa-js",
      title: "JavaScript",
      description: "Adding dynamic functionality and interactivity.",
    },
    {
      icon: "fab fa-react",
      title: "React JS",
      description: "Building reusable and responsive React components.",
    },
    {
      icon: "fab fa-bootstrap",
      title: "Bootstrap",
      description: "Developing responsive layouts efficiently.",
    },
    {
      icon: "fab fa-git-alt",
      title: "Git & GitHub",
      description: "Managing projects with version control.",
    },
   
  ]

  return (
    <section className="skills-preview" id="skills">
      <div className="container">

        <div className="section-title">
          <span>My Expertise</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>

              <i className={skill.icon}></i>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills