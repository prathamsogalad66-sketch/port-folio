import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/pratham-profile.jpg";
import "./home.css";

const ROLES = [
  "AIML Engineering Student",
  "Python & C Programmer",
  "React Web Developer",
  "Creator of NEXORA (3-Day Car Portal)",
  "National Science Day Exhibitor"
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1600);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedRole = ROLES[roleIndex].substring(0, charIndex);

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            2nd Year AIML · SDM College of Engineering (SDMCET)
          </div>

          <div className="welcome">WELCOME TO MY PORTFOLIO</div>

          <h1 className="home-title">
            Hi, I'm <br />
            <span className="gradient-text">Pratham Sogalad</span>
          </h1>

          <div className="typing-wrapper">
            <span className="home-role">{displayedRole}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="home-description">
            Passionate 2nd-year Artificial Intelligence &amp; Machine Learning
            student at SDM College of Engineering. I build fast, modern web
            experiences, write clean code in <strong>Python</strong> and <strong>C</strong>,
            and rapidly bring ideas to life — from delivering the complete
            <strong> NEXORA car service platform in 3 days</strong> to presenting smart
            healthcare telemedicine at <strong>National Science Day</strong>.
          </p>

          <div className="buttons">
            <Link to="/project" className="btn btn-primary">
              Explore Projects →
            </Link>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-linkedin"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37h2.8z" />
              </svg>
              LinkedIn Profile
            </a>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>

          {/* Quick Stats Highlights */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3 Days</span>
              <span className="stat-label">NEXORA Car Site</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Science Day</span>
              <span className="stat-label">Telemedicine Model</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5 Certs</span>
              <span className="stat-label">Google &amp; Infosys</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Python &amp; C</span>
              <span className="stat-label">Core Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SDMCET</span>
              <span className="stat-label">AIML 2nd Year</span>
            </div>
          </div>
        </div>

        <div className="home-card">
          <div className="card-ambient-glow"></div>

          {/* Tech float pills */}
          <div className="tech-pill pill-python">🐍 Python</div>
          <div className="tech-pill pill-c">⚡ C Lang</div>
          <div className="tech-pill pill-react">⚛️ React</div>
          <div className="tech-pill pill-ai">🤖 AIML</div>

          <div className="profile-image-container">
            <div className="profile-image-glow"></div>
            <img
              src={profileImg}
              alt="Pratham D. Sogalad"
              className="profile-photo"
            />
          </div>

          <div className="profile-caption">
            <h3>Pratham D. Sogalad</h3>
            <p>Developer &amp; AIML Engineer</p>
            <div className="profile-status">
              <span className="status-indicator"></span>
              Open to Collaborations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
