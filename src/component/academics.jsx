import './academics.css';
function Academics() {
  return (
    <section className="page">

      <div className="page-container">

        <div className="page-label">
          02 / ACADEMICS
        </div>

        <h1 className="page-title">
          My <span>Education.</span>
        </h1>

        <p className="page-description">
          My academic journey and the technical skills I am
          developing as an AIML engineering student.
        </p>

        <div className="cards">

          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>B.Tech AIML</h3>
            <p>
              SDM College of Engineering
            </p>
            <p>2nd Year</p>
          </div>

          <div className="card">
            <div className="card-icon">🧠</div>
            <h3>Specialization</h3>
            <p>
              Artificial Intelligence &
              Machine Learning
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Current Focus</h3>
            <p>
              Programming, Web Development,
              AI and Machine Learning.
            </p>
          </div>

        </div>

        <h2 style={{ marginTop: "70px" }}>
          Technical Skills
        </h2>

        <div className="skills">

          <span className="skill">C Programming</span>
          <span className="skill">Python</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">AI Fundamentals</span>
          <span className="skill">Machine Learning</span>

        </div>

      </div>

    </section>
  );
}

export default Academics;