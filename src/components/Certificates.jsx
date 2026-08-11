function Certificates() {
  const certificates = [
    {
      title: "Web Development",
      issuer: "Professional Certification",
      image: "/Certificate1.jpg",
    },
    {
      title: "Frontend Development",
      issuer: "Web Development Certification",
      image: "/Certificate2.jpg",
    },
    {
      title: "Web designing and Development",
      issuer: "Professional Training",
      image: "/Certificate3.jpg",
    },
  ]

  return (
    <section className="certificate-gallery" id="certificates">
      <div className="container">

        <div className="section-title">
          <span>My Achievements</span>
          <h2>Certificates</h2>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.title}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <div className="certificate-content">
                <h3>{certificate.title}</h3>

                <p className="issuer">
                  {certificate.issuer}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certificates