import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-enhanced">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              PRATHAM<span>.</span>
            </Link>
            <p className="footer-tagline">
              AIML Student × Developer · SDM College of Engineering
            </p>
            <p className="footer-subtext">
              Building intelligent applications, fast web platforms, and engineering practical solutions.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4>Quick Navigation</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/academics">Academics &amp; Skills</Link>
              <Link to="/project">Projects &amp; Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
              >
                GitHub Profile ↗
              </a>
              <Link to="/contact" className="footer-social-btn highlight">
                Send a Message ✉
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pratham D. Sogalad. All Rights Reserved.</p>
          <p className="built-with">
            Designed &amp; Built with <span>React 19</span> &amp; <span>Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
