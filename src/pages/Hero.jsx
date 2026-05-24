import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaDownload,
} from "react-icons/fa";
import { SiCplusplus, SiC, SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-white bg-linear-to-b from-black via-[#0a0f1f] to-black overflow-hidden py-20 md:py-32"
    >
      {/* ----------------- Floating Icons Container ----------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* You can adjust positions using percentages for responsiveness */}
        <FaReact className="absolute text-blue-400 text-4xl md:text-5xl top-[10%] left-[5%] animate-float opacity-40" />
        <FaPython className="absolute text-yellow-400 text-4xl md:text-5xl bottom-[15%] left-[15%] animate-float opacity-40" />
        <SiCplusplus className="absolute text-blue-500 text-4xl md:text-5xl top-[30%] right-[10%] animate-float opacity-40" />
        <SiC className="absolute text-blue-300 text-3xl md:text-4xl bottom-[10%] right-[20%] animate-float opacity-40" />
        <FaJsSquare className="absolute text-yellow-300 text-4xl md:text-5xl top-[20%] right-[33%] animate-float opacity-40" />
        <SiMongodb className="absolute text-green-400 text-4xl md:text-5xl bottom-[20%] left-[33%] animate-float opacity-40" />
        <FaNodeJs className="absolute text-green-500 text-4xl md:text-5xl top-[50%] right-[5%] animate-float opacity-40" />
        <FaGithub className="absolute text-purple-400 text-4xl md:text-5xl top-[55%] right-[10%] animate-float opacity-40" />
        <FaLinkedin className="absolute text-blue-300 text-4xl md:text-5xl top-[50%] left-[10%] animate-float opacity-40" />
        <FaHtml5 className="absolute text-red-300 text-4xl md:text-5xl top-[25%] left-[40%] animate-float opacity-40" />
      </div>

      {/* ----------------- Main Content ----------------- */}
      <div className="text-center max-w-3xl px-4 sm:px-6 md:px-8 z-10">
        {/* Heading */}
        <h4 className="text-2xl md:text-5xl font-bold mb-4">
          Hi, I'm Nadia Jahan <span className="text-[#c3e422]">Lucy</span>
        </h4>

        {/* Typing Role */}
        <h2 className="text-lg md:text-2xl text-gray-300 mb-6">
          I'm a{" "}
          <span className="text-[#BBC77C] font-semibold">
            <Typewriter
              words={[
                "Aspiring Software Engineer",
                "Problem Solver",
                "React Developer",
                "Machine Learning Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg">
          I build responsive web applications and software solutions using
          modern technologies. Passionate about clean code, problem solving, and
          innovative digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)]"
          >
            View My Work
          </a>

          <a
            href="/images/Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 rounded-full border border-[#c3e422] text-[#c3e422] hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)] hover:scale-105 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
