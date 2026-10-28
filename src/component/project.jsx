import { useState } from "react";
import nexoraImg from "../assets/nexora-car-service.png";
import scienceDayImg from "../assets/science-day-telemedicine.jpg";
import "./home.css";

const PROJECTS = [
  {
    id: "01",
    badge: "⚡ 3-Day Sprint Challenge",
    badgeType: "sprint",
    category: "Automotive Web Application",
    title: "NEXORA · Independent Vehicle Care Platform",
    image: nexoraImg,
    imageAlt: "NEXORA Car Service Web Application Preview",
    description:
      "A complete, fully functional automotive service website designed and engineered from scratch in an intensive 3-day sprint. Tagline: 'Care that keeps you moving.' Features an interactive service catalogue, transparent pricing, garage portal, and instant booking workflow.",
    highlights: [
      "Built and deployed end-to-end within a 72-hour challenge",
      "Interactive booking flow ('Book a service') & service explorer",
      "Garage portal & client sign-in integration architecture",
      "Sleek dark automotive UI featuring Porsche imagery & responsive layout"
    ],
    tech: ["React", "JavaScript", "CSS3", "Vite", "Responsive Design"],
    featured: true
  },
  {
    id: "02",
    badge: "🏆 National Science Day Exhibition",
    badgeType: "event",
    category: "Smart Healthcare & Digital Innovation",
    title: "Telemedicine: Smart Healthcare Through Digital Innovation",
    image: scienceDayImg,
    imageAlt: "National Science Day Telemedicine Exhibition Poster SDMCET",
    description:
      "Selected project and exhibition for National Science Day at SDM College of Engineering & Technology (SDMCET), Dharwad. Guided by Prof. Priyanka Betageri (AIML Dept). Designed a comprehensive digital telemedicine system to deliver remote consultations, continuous IoT vitals tracking, and cloud medical storage for rural and underserved communities.",
    highlights: [
      "Presented to faculty, peers, and visitors on National Science Day",
      "Remote doctor-patient consultation and digital prescription pipeline",
      "Team collaboration: Karan Navalagund, Pratham Sogalad, Yatharth Pal, Adarsh Mandal",
      "Bridging digital innovation with healthcare accessibility"
    ],
    tech: ["Digital Innovation", "IoT Vitals", "Telemedicine", "Cloud Health", "SDMCET"],
    featured: true
  },
  {
    id: "03",
    badge: "✨ Active Portfolio",
    badgeType: "featured",
    category: "Personal Brand & Web App",
    title: "Personal Developer Portfolio (V2)",
    description:
      "A high-performance modern developer portfolio engineered with React 19, React Router, and a custom cyberpunk glassmorphic design system. Features animated role typing, active navigation indicators, categorized skill matrices with visual progress bars, and responsive mobile architecture.",
    highlights: [
      "Modular React component structure with React Router",
      "Bespoke cyberpunk dark aesthetic with glowing accents",
      "Dynamic interactive typing and active navigation indicators",
      "Optimized build with Vite and responsive layout"
    ],
    tech: ["React 19", "React Router", "CSS Glassmorphism", "Vite", "Responsive Design"],
    featured: true
  },
  {
    id: "04",
    badge: "🤖 Core AIML Specialization",
    badgeType: "aiml",
    category: "Machine Learning & Python",
    title: "AI & Machine Learning Explorations",
    description:
      "A series of practical implementations exploring supervised learning models, data preprocessing pipelines, and algorithmic prediction tasks in Python. Focuses on bridging foundational AI theory with tangible code implementations.",
    highlights: [
      "Python-based algorithmic logic and structured data processing",
      "Exploration of classification, regression, and pattern analysis",
      "Foundation for upcoming intelligent web-integrated AI systems"
    ],
    tech: ["Python", "AI Fundamentals", "Machine Learning", "Algorithms", "Data Logic"],
    featured: false
  },
  {
    id: "05",
    badge: "📚 Academic Utility",
    badgeType: "web",
    category: "Student Web Application",
    title: "Student Academic Resource Hub",
    description:
      "A modern student-focused web portal designed to help engineering students organize semester subjects, track project milestones, and access curated reference resources through a clean interface.",
    highlights: [
      "Clean UI designed specifically for engineering student workflows",
      "Modular components for subject organization and notes"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Architecture"],
    featured: false
  }
];

function Project() {
  const [filter, setFilter] = useState("all");
  const [activeImageModal, setActiveImageModal] = useState(null);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : filter === "featured"
      ? PROJECTS.filter((p) => p.featured)
      : filter === "web"
      ? PROJECTS.filter((p) => p.tech.includes("React") || p.tech.includes("HTML5"))
      : PROJECTS.filter((p) => p.tech.includes("Python") || p.tech.includes("Digital Innovation"));

  return (
    <section className="page">
      <div className="page-container">
        <div className="page-label">03 / MY WORK &amp; ACHIEVEMENTS</div>

        <h1 className="page-title">
          Featured <span>Projects.</span>
        </h1>

        <p className="page-description">
          A collection of real-world projects, fast-track development sprints
          (including the 3-day <strong>NEXORA</strong> car care platform), our{" "}
          <strong>National Science Day Telemedicine</strong> exhibition at SDMCET,
          and practical AI developments.
        </p>

        {/* Filter Tabs */}
        <div className="project-filter-tabs">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Works ({PROJECTS.length})
          </button>
          <button
            className={`filter-btn ${filter === "featured" ? "active" : ""}`}
            onClick={() => setFilter("featured")}
          >
            Featured Highlights
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web Applications
          </button>
          <button
            className={`filter-btn ${filter === "aiml" ? "active" : ""}`}
            onClick={() => setFilter("aiml")}
          >
            AI &amp; Science
          </button>
        </div>

        {/* Projects Grid */}
        <div className="project-grid-enhanced">
          {filteredProjects.map((item) => (
            <div key={item.id} className="project-card-enhanced">
              {/* Media image preview if available */}
              {item.image && (
                <div
                  className="project-image-box"
                  onClick={() => setActiveImageModal(item)}
                  title="Click to expand image"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="project-img"
                  />
                  <div className="project-image-overlay">
                    <span className="expand-pill">🔍 Click to Expand</span>
                  </div>
                </div>
              )}

              <div className="project-top-row">
                <span className={`project-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
                <span className="project-id-number">{item.id}</span>
              </div>

              <div className="project-category">{item.category}</div>
              <h2 className="project-title-enhanced">{item.title}</h2>

              <p className="project-desc-enhanced">{item.description}</p>

              {/* Highlights List */}
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx}>
                      <span className="bullet-glow">▹</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="tech-enhanced">
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Image Viewer */}
      {activeImageModal && (
        <div
          className="image-modal-backdrop"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-modal-header">
              <h3>{activeImageModal.title}</h3>
              <button
                className="close-modal-btn"
                onClick={() => setActiveImageModal(null)}
              >
                ✕
              </button>
            </div>
            <div className="image-modal-body">
              <img
                src={activeImageModal.image}
                alt={activeImageModal.title}
                className="modal-expanded-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
