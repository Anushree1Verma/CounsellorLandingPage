function Services() {
  return (
    <section className="services" id="services">
      <h1>Services Provided</h1>

      <div className="service-cards">
        <div className="card">
          <div className="card-image">
            <img
              src="/services/career.jpeg"
              alt="Career counselling"
            />
          </div>

          <h2>Career Counselling</h2>
          <p>
            Personalised guidance to help individuals make informed academic
            and career decisions.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              src="/services/emotional.jpeg"
              alt="Emotional well-being support"
            />
          </div>

          <h2>Emotional Well-Being</h2>
          <p>
            Compassionate support for stress, anxiety, emotional regulation
            and life transitions.
          </p>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              src="/services/assessment.jpeg"
              alt="Psychometric assessments"
            />
          </div>

          <h2>Psychometric Assessments</h2>
          <p>
            Scientifically designed assessments to understand strengths,
            interests, and personality.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
