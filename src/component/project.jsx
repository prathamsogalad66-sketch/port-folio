function Project() {
  return (
    <section className="page">

      <div className="page-container">

        <div className="page-label">
          03 / MY WORK
        </div>

        <h1 className="page-title">
          My <span>Projects.</span>
        </h1>

        <p className="page-description">
          Here are some projects I have built while learning
          programming and web development.
        </p>

        <div className="project-grid">

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>Portfolio Website</h3>

            <p>
              A professional personal portfolio website
              designed to showcase my skills, education,
              projects and achievements.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

          </div>


          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>Student Web Application</h3>

            <p>
              A modern student-focused web application
              designed to provide useful academic features
              through a clean interface.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

          </div>


          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>AI Based Project</h3>

            <p>
              An upcoming project focused on applying
              Artificial Intelligence concepts to a
              practical real-world problem.
            </p>

            <div className="tech">
              <span>Python</span>
              <span>AI</span>
              <span>ML</span>
            </div>

          </div>


          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>Future Project</h3>

            <p>
              More innovative projects will be added as
              I continue developing my technical skills.
            </p>

            <div className="tech">
              <span>React</span>
              <span>AI</span>
              <span>Python</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;