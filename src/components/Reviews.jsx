function Reviews() {
  const reviews = [
    {
      name: "Muhammad Ahmad",
      role: "Client",
      review:
        "Amina did a great job on the website. The design was clean, responsive and professional. She understood the requirements very well.",
      rating: 5,
      initials: "MA",
    },

    {
      name: "Sarah Khan",
      role: "Project Collaborator",
      review:
        "Working with Amina was a great experience. She is dedicated, creative and pays attention to the small details of the project.",
      rating: 5,
      initials: "SK",
    },

    {
      name: "Ali Raza",
      role: "Client",
      review:
        "The website looks modern and works smoothly on different screen sizes. Very professional work and good communication.",
      rating: 5,
      initials: "AR",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <span>Client Feedback</span>
          <h2>What People Say</h2>
          <p>
            Feedback from clients and people I have worked with.
          </p>
        </div>

        {/* REVIEWS */}
        <div className="reviews-grid">

          {reviews.map((review) => (
            <div className="review-card" key={review.name}>

              {/* QUOTE ICON */}
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>

              {/* STARS */}
              <div className="review-stars">
                {[...Array(review.rating)].map((_, index) => (
                  <i
                    className="fas fa-star"
                    key={index}
                  ></i>
                ))}
              </div>

              {/* REVIEW TEXT */}
              <p className="review-text">
                "{review.review}"
              </p>

              {/* REVIEWER */}
              <div className="review-author">

                <div className="review-avatar">
                  {review.initials}
                </div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;