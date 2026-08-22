import './about.css';

function About() {
    return (
        <section className="page">

            <div className="page-container">

                <div className="page-label">
                    01 / ABOUT ME
                </div>

                <h1 className="page-title">
                    About <span>Me.</span>
                </h1>

                <p className="page-description">
                    I'm Pratham Sogalad, a second-year AIML engineering
                    student passionate about technology, programming,
                    web development and Artificial Intelligence.
                </p>

                <div className="cards">

                    <div className="card">
                        <div className="card-icon">🤖</div>
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Exploring AI concepts and learning how intelligent
                            systems solve real-world problems.
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-icon">💻</div>
                        <h3>Development</h3>
                        <p>
                            Building modern and responsive websites using
                            HTML, CSS, JavaScript and React.
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-icon">🚀</div>
                        <h3>Learning</h3>
                        <p>
                            Continuously improving my programming and
                            development skills through practical projects.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;