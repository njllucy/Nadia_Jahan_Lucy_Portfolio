import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ExperienceSection from "./pages/ExperienceSection";
import ContactFooter from "./pages/ContactFooter";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">

      <TopNavbar />

      <Routes>

        <Route path="/" element={<Hero />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<ExperienceSection />} />

        <Route path="/contact" element={<ContactFooter />} />

      </Routes>

      <BottomNavbar/>
      <ContactFooter/>

    </div>
  );
}

export default App;