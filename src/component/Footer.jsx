import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div>

                    <Link to="/" className="footer-logo">
                        PRATHAM<span>.</span>
                    </Link>

                    <p>
                        AIML Student × Developer
                    </p>

                </div>


                <div className="footer-links">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/academics">Academics</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © 2026 Pratham Sogalad
                </span>

                <span>
                    Designed & Built with React
                </span>

            </div>

        </footer>
    );
}

export default Footer;