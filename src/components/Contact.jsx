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
  href="https://wa.me/918077656336"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-item"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.48 0 .11 5.37.11 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.26-1.63a11.9 11.9 0 005.79 1.48h.01c6.57 0 11.94-5.37 11.94-11.94 0-3.19-1.24-6.19-3.48-8.43zM12.06 21.5c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.45 9.45 0 01-1.46-5.04c0-5.23 4.26-9.49 9.49-9.49 2.54 0 4.92.99 6.72 2.78a9.42 9.42 0 012.78 6.71c0 5.23-4.26 9.49-9.48 9.49zm5.21-7.1c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.42-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.02 1.44 1.04 2.83 1.19 3.03.14.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.62.69.22 1.31.19 1.81.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.17-.55-.31z"/>
  </svg>

  <span>Chat on WhatsApp</span>
</a>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;