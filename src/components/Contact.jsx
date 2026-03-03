import { Instagram, Mail, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h1>Connect with Us</h1>

        <p className="contact-intro">
          Whether you're ready to begin or simply exploring your options,
          feel free to reach out. I’ll respond with care and confidentiality.
        </p>

        <div className="contact-links">

          <a
            href="https://www.instagram.com/the.listening.moments?igsh=MXNraDNsMHg1djZpeg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href="mailto:thelisteningmoments@gmail.com"
            className="contact-item"
          >
            <Mail size={18} />
            <span>Mail Us</span>
          </a>

          <a
            href="8077656336"
            className="contact-item"
          >
            <Phone size={18} />
            <span>Call Us: 8077656336</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;