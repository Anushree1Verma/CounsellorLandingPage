import { useEffect, useState } from "react";

function smoothScrollTo(targetId, duration = 700) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const start = window.pageYOffset;
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  const end =
    target.getBoundingClientRect().top + start - navbarHeight - 8;

  let startTime = null;

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const ease = progress / duration;

    window.scrollTo(
      0,
      start + (end - start) * Math.min(ease, 1)
    );

    if (progress < duration) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  window.requestAnimationFrame(scrollStep);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="brand brand-text-only">
        <span>The Listening Moments</span>
      </div>



      <ul className="nav-links">
        <li>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("hero");
            }}
          >
            Home
          </a>
        </li>


        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#why-choose"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("why-choose");
            }}
          >
            Why Choose Us
          </a>
        </li>

        <li>
  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      smoothScrollTo("contact");
    }}
  >
    Contact
  </a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;
