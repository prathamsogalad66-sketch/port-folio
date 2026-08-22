import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Academics from "./component/academics";
import Project from "./component/project";
import Contact from "./component/contact";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/project" element={<Project />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <footer className="footer">
        © 2026 <span>Pratham Sogalad</span> · AIML Student & Developer
      </footer>

    </BrowserRouter>

  );
}

export default App;