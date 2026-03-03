import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
    <div className="hero-bubbles">
      <div className="bubble bubble-sage bubble-1"></div>
      <div className="bubble bubble-blush bubble-2"></div>
      <div className="bubble bubble-sage bubble-3"></div>
      <div className="bubble bubble-blush bubble-4"></div>
      <div className="bubble bubble-sage bubble-5"></div>
  </div>


      {/* Actual hero content */}
      <div className="hero-content">
        <h1>THE LISTENING MOMENTS</h1>
        <h2>You Deserve Support That Understands You</h2>

        <h3>
          Professional Counselling & Psychometric Assessment for Career,
          Personal Growth & Emotional Well-Being
        </h3>

        <p>
          Confidential, compassionate, personalised support — wherever you are,
          whenever you’re ready.
        </p>

        <div className="hero-buttons">
          <a
            href="https://www.theraptrack.com/therapist/TH71585"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            👉 Book a Free Consultation
          </a>

          <a
            href="https://example.com/self-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            📋 Take a Quick Self-Assessment
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
