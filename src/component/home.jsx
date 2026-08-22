import { Link } from "react-router-dom";
import './home.css';
function Home() {
  return (
    <section className="home">

      <div className="home-container">

        <div className="home-content">

          <div className="welcome">
            WELCOME TO MY PORTFOLIO
          </div>

          <h1 className="home-title">
            Hi, I'm <br />
            <span>Pratham</span>
          </h1>

          <h2 className="home-role">
            AIML Student × Developer
          </h2>

          <p className="home-description">
            I'm a 2nd Year Artificial Intelligence and Machine
            Learning student at SDM College of Engineering.
            I enjoy building modern websites, learning
            programming and exploring Artificial Intelligence
            and Machine Learning.
          </p>

          <div className="buttons">

            <Link to="/project" className="btn btn-primary">
              Explore My Projects →
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>

          </div>

        </div>

        <div className="home-card">

          <div className="profile-circle">
            PS
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;