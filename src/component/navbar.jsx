import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          PS<span>.</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/academics"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Academics
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="nav-cta-btn"
            onClick={closeMenu}
          >
            Connect ↗
          </Link>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
