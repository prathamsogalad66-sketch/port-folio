import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <section className="page">
      <div className="page-container">
        <div className="page-label">01 / ABOUT ME</div>

        <h1 className="page-title">
          About <span>Me.</span>
        </h1>

        <p className="page-description">
          I'm <strong>Pratham D. Sogalad</strong>, a passionate 2nd-year
          Artificial Intelligence and Machine Learning engineering student at{" "}
          <strong>SDM College of Engineering</strong>. I bridge computational
          logic with modern web design, building responsive digital products
          and exploring real-world intelligent systems.
        </p>

        {/* 4 Core Focus Cards */}
        <div className="cards">
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>
              Studying AI essentials, machine learning logic, and predictive
              systems to solve real-world industrial and software problems.
            </p>
            <div className="card-badge">AIML Specialization</div>
          </div>

          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Modern Web Development</h3>
            <p>
              Crafting performant, visually aesthetic web interfaces with
              React, modern JavaScript, semantic HTML5, and responsive CSS.
            </p>
            <div className="card-badge">Frontend &amp; UI</div>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Rapid Project Delivery</h3>
            <p>
              Proven ability to design and launch complete web applications
              under tight deadlines — including creating the <strong>NEXORA car service platform in 3 days</strong>.
            </p>
            <div className="card-badge">72-Hour Sprint</div>
          </div>

          <div className="card">
            <div className="card-icon">🔬</div>
            <h3>Science &amp; Healthcare Innovation</h3>
            <p>
              Exhibited <strong>Telemedicine: Smart Healthcare</strong> at{" "}
              <strong>National Science Day (SDMCET)</strong>, exploring IoT vitals
              and digital medical consultation.
            </p>
            <div className="card-badge">SDMCET Exhibition</div>
          </div>
        </div>

        {/* Key Competencies / Mindset Section */}
        <div className="about-details-section">
          <div className="details-card">
            <div className="details-header">
              <span className="details-number">01</span>
              <h3>Core Programming</h3>
            </div>
            <p>
              Grounded in rigorous computer science principles with{" "}
              <strong>Python</strong> for algorithmic thinking and automation,
              and <strong>C</strong> for memory understanding and fundamental
              problem-solving.
            </p>
          </div>

          <div className="details-card">
            <div className="details-header">
              <span className="details-number">02</span>
              <h3>Execution Speed</h3>
            </div>
            <p>
              I believe in learning by shipping. Rapidly turning ideas into
              usable prototypes with modern tooling like Vite, component-driven
              React, and modular architecture.
            </p>
          </div>

          <div className="details-card">
            <div className="details-header">
              <span className="details-number">03</span>
              <h3>Continuous Growth</h3>
            </div>
            <p>
              Consistently updating my skills, participating in technical
              college events, building personal projects, and expanding my
              professional LinkedIn network.
            </p>
          </div>
        </div>

        <div className="about-actions">
          <Link to="/academics" className="btn btn-primary">
            View Academics &amp; Skills →
          </Link>
          <Link to="/project" className="btn btn-secondary">
            Explore My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
