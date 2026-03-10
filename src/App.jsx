import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <>
    <div className="">
      <TopNavbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ExperienceSection/>
      <ContactFooter/>
      <BottomNavbar />
    </div>   
    </>
  );
}

export default App;