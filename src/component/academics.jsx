import { useState } from "react";
import "./academics.css";

// Import Certificates
import certGoogleAI from "../assets/certificates/cert-google-ai.png";
import certGooglePrompting from "../assets/certificates/cert-google-prompting-essentials.png";
import certGoogleAIEssentials from "../assets/certificates/cert-google-ai-essentials.png";
import certInfosysJS from "../assets/certificates/cert-infosys-javascript.png";
import certInfosysHTML5 from "../assets/certificates/cert-infosys-html5.png";

const CERTIFICATES = [
  {
    id: "cert-1",
    title: "Google AI Professional Certificate",
    issuer: "Google | Coursera",
    issuerType: "google",
    courses: "7 Comprehensive Courses",
    date: "July 2026",
    image: certGoogleAI,
    description:
      "Advanced professional program covering AI Fundamentals, AI for Brainstorming & Planning, Research & Insights, Content Creation, Data Analysis, and App Building with AI tools.",
    skillsLearned: ["AI Fundamentals", "Data Analysis with AI", "Prompting", "App Building"]
  },
  {
    id: "cert-2",
    title: "Google Prompting Essentials Specialization",
    issuer: "Google | Coursera",
    issuerType: "google",
    courses: "4 Specialized Courses",
    date: "July 2026",
    image: certGooglePrompting,
    description:
      "Hands-on specialization developing advanced AI prompt engineering: designing prompts for everyday workflows, accelerating data analysis, presentation building, and creative collaboration.",
    skillsLearned: ["Prompt Engineering", "Workflow Automation", "AI Collaboration", "Context Framing"]
  },
  {
    id: "cert-3",
    title: "Google AI Essentials Specialization",
    issuer: "Google | Coursera",
    issuerType: "google",
    courses: "5 Specialized Courses",
    date: "July 2026",
    image: certGoogleAIEssentials,
    description:
      "Foundational AI curriculum by Google focusing on intelligent agent systems, maximizing developer productivity with AI tools, the art of prompting, and responsible AI governance.",
    skillsLearned: ["Generative AI", "Responsible AI", "Productivity Tools", "AI Principles"]
  },
  {
    id: "cert-4",
    title: "JavaScript",
    issuer: "Infosys Springboard",
    issuerType: "infosys",
    courses: "Course Completion",
    date: "August 2026",
    image: certInfosysJS,
    description:
      "Certified course covering JavaScript core concepts, asynchronous operations, event-driven programming, modern ES6+ features, and interactive frontend development.",
    skillsLearned: ["JavaScript (ES6+)", "DOM Manipulation", "Asynchronous Logic", "Functions"]
  },
  {
    id: "cert-5",
    title: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    issuerType: "infosys",
    courses: "Course Completion",
    date: "August 2026",
    image: certInfosysHTML5,
    description:
      "Certified course covering semantic HTML5 architecture, responsive markup standards, web accessibility, and modern structural web page design.",
    skillsLearned: ["HTML5", "Semantic Architecture", "Web Standards", "Accessibility"]
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "💻",
    description: "Core languages for logic building, algorithms, and application development.",
    skills: [
      { name: "Python", icon: "🐍", tag: "AI, ML, Scripting & Data Structures" },
      { name: "C Programming", icon: "⚡", tag: "Pointers, Algorithms & Memory Fundamentals" },
      { name: "JavaScript (ES6+)", icon: "🟨", tag: "Async, DOM & Modern Web Logic" },
      { name: "HTML5", icon: "🌐", tag: "Semantic Markup & Accessibility" },
      { name: "CSS3", icon: "🎨", tag: "Flexbox, CSS Grid & Animations" }
    ]
  },
  {
    title: "Web & Frontend Frameworks",
    icon: "⚛️",
    description: "Modern component-driven web technologies and responsive architectures.",
    skills: [
      { name: "React.js", icon: "⚛️", tag: "Hooks, Components & State Flow" },
      { name: "React Router", icon: "🧭", tag: "Client-side SPA Navigation" },
      { name: "Vite", icon: "⚡", tag: "High-Performance Build & Bundling" },
      { name: "Responsive UI", icon: "📱", tag: "Mobile-First Adaptive Design" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Theoretical and practical foundations of artificial intelligence and data modeling.",
    skills: [
      { name: "AI Essentials & Fundamentals", icon: "🤖", tag: "Intelligent Systems & Core Architectures" },
      { name: "Machine Learning Concepts", icon: "🧠", tag: "Supervised Models, Classification & Regression" },
      { name: "Algorithmic Problem Solving", icon: "💡", tag: "Structured Logic & Computational Thinking" }
    ]
  },
  {
    title: "Developer Tools & Workflow",
    icon: "🛠️",
    description: "Industry-standard development environments, version control, and rapid delivery.",
    skills: [
      { name: "Git & GitHub", icon: "🐙", tag: "Version Control & Project Repositories" },
      { name: "VS Code", icon: "💻", tag: "Modern Development Environment & Debugging" },
      { name: "Rapid Prototyping", icon: "🚀", tag: "Fast Sprint Delivery (e.g. 3-Day Car Site)" }
    ]
  }
];

function Academics() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section className="page">
      <div className="page-container">
        <div className="page-label">02 / ACADEMICS, CERTS &amp; SKILLS</div>

        <h1 className="page-title">
          Education &amp; <span>Certifications.</span>
        </h1>

        <p className="page-description">
          My academic foundation at <strong>SDM College of Engineering (SDMCET)</strong>,
          verified industry certifications from <strong>Google</strong> and{" "}
          <strong>Infosys Springboard</strong>, and my full technical skills repertoire.
        </p>

        {/* Academic Journey Cards */}
        <div className="cards academic-cards">
          <div className="card">
            <div className="card-icon">🎓</div>
            <div className="card-year-tag">CURRENT · 2nd YEAR</div>
            <h3>B.Tech / B.E. in AIML</h3>
            <p className="college-name">SDM College of Engineering</p>
            <p className="card-subtext">
              Specializing in Artificial Intelligence and Machine Learning, with
              strong focus on computational logic, mathematics, and programming.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🔬</div>
            <div className="card-year-tag">EVENT EXHIBITOR</div>
            <h3>National Science Day</h3>
            <p className="college-name">SDMCET Dharwad · AIML Dept</p>
            <p className="card-subtext">
              Co-developed and presented "Telemedicine: Smart Healthcare Through Digital Innovation"
              guided by Prof. Priyanka Betageri, exploring remote consultations and IoT health monitoring.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <div className="card-year-tag">3-DAY SPRINT</div>
            <h3>NEXORA Car Care Portal</h3>
            <p className="college-name">Automotive Web Platform</p>
            <p className="card-subtext">
              Engineered and shipped a full-fledged vehicle servicing web application
              within a rapid 72-hour challenge, complete with service booking and dark-mode UI.
            </p>
          </div>
        </div>

        {/* =========================================
           VERIFIED CERTIFICATIONS SHOWCASE
           ========================================= */}
        <div className="certifications-section-wrapper" id="certifications">
          <div className="skills-heading-container">
            <h2 className="section-subtitle">
              Verified <span>Certifications</span>
            </h2>
            <p className="skills-subtitle">
              Official industry credentials earned from Google (Coursera) and Infosys Springboard in Artificial Intelligence, Prompt Engineering, and Web Development.
            </p>
          </div>

          <div className="certifications-grid">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div
                  className="cert-img-box"
                  onClick={() => setActiveCertModal(cert)}
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-thumbnail"
                  />
                  <div className="cert-img-overlay">
                    <span className="expand-pill">🔍 View Certificate</span>
                  </div>
                </div>

                <div className="cert-info">
                  <div className="cert-badges-row">
                    <span className={`issuer-tag tag-${cert.issuerType}`}>
                      {cert.issuer}
                    </span>
                    <span className="cert-date">{cert.date}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-courses">{cert.courses}</div>
                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-skills-chips">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean, Attractive Technical Skills Showcase - No Percentages / Comparison */}
        <div className="skills-section-wrapper">
          <div className="skills-heading-container">
            <h2 className="section-subtitle">
              Technical <span>Skills</span>
            </h2>
            <p className="skills-subtitle">
              Technologies and tools I work with across core programming, web development, AI foundations, and developer workflow.
            </p>
          </div>

          <div className="skills-category-grid">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="category-card">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <div>
                    <h3>{category.title}</h3>
                    <p className="category-tagline">{category.description}</p>
                  </div>
                </div>

                <div className="skills-badge-grid">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-card-badge">
                      <div className="skill-badge-header">
                        <span className="skill-badge-icon">{skill.icon}</span>
                        <h4 className="skill-badge-title">{skill.name}</h4>
                      </div>
                      <p className="skill-badge-tag">{skill.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Skill Chips Summary */}
          <div className="all-skills-summary-box">
            <h3 className="summary-title">Core Technologies Summary</h3>
            <div className="summary-pills">
              <span className="pill-item">Python</span>
              <span className="pill-item">C Programming</span>
              <span className="pill-item">React.js</span>
              <span className="pill-item">JavaScript (ES6+)</span>
              <span className="pill-item">HTML5</span>
              <span className="pill-item">CSS3</span>
              <span className="pill-item">React Router</span>
              <span className="pill-item">Vite</span>
              <span className="pill-item">Google AI</span>
              <span className="pill-item">Prompt Engineering</span>
              <span className="pill-item">AI Essentials</span>
              <span className="pill-item">Machine Learning</span>
              <span className="pill-item">Git &amp; GitHub</span>
              <span className="pill-item">VS Code</span>
              <span className="pill-item">Responsive Design</span>
              <span className="pill-item">Rapid Prototyping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Full Certificate Viewer */}
      {activeCertModal && (
        <div
          className="image-modal-backdrop"
          onClick={() => setActiveCertModal(null)}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-modal-header">
              <h3>{activeCertModal.title} · {activeCertModal.issuer}</h3>
              <button
                className="close-modal-btn"
                onClick={() => setActiveCertModal(null)}
              >
                ✕
              </button>
            </div>
            <div className="image-modal-body">
              <img
                src={activeCertModal.image}
                alt={activeCertModal.title}
                className="modal-expanded-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Academics;
