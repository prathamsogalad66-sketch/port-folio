import "./academics.css";

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
  return (
    <section className="page">
      <div className="page-container">
        <div className="page-label">02 / ACADEMICS &amp; SKILLS</div>

        <h1 className="page-title">
          My <span>Education &amp; Skills.</span>
        </h1>

        <p className="page-description">
          My academic foundation at <strong>SDM College of Engineering (SDMCET)</strong>,
          practical extracurricular participation, and my full technical skills repertoire.
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
    </section>
  );
}

export default Academics;
