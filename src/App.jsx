import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Academics from "./component/academics";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projects" element={<Navigate to="/project" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
