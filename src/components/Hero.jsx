// import { Typewriter } from "react-simple-typewriter";
// import {
//   FaReact,
//   FaPython,
//   FaJsSquare,
//   FaNodeJs,
//   FaGithub,
//   FaLinkedin,
//   FaHtml5,
// } from "react-icons/fa";
// import { SiCplusplus, SiC, SiMongodb } from "react-icons/si";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className=" top-0 relative min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-black via-[#0a0f1f] to-black overflow-hidden"
//     >
//       {/* Floating Icons */}
//       <FaReact className="absolute text-blue-400 text-5xl top-20 left-10 animate-float opacity-40" />
//       <FaPython className="absolute text-yellow-400 text-5xl bottom-32 left-20 animate-float opacity-40" />
//       <SiCplusplus className="absolute text-blue-500 text-5xl top-40 right-20 animate-float opacity-40" />
//       <SiC className="absolute text-blue-300 text-4xl bottom-20 right-40 animate-float opacity-40" />
//       <FaJsSquare className="absolute text-yellow-300 text-5xl top-24 right-1/3 animate-float opacity-40" />
//       <SiMongodb className="absolute text-green-400 text-5xl bottom-24 left-1/3 animate-float opacity-40" />
//       <FaNodeJs className="absolute text-green-500 text-5xl top-1/2 right-10 animate-float opacity-40" />
//       <FaGithub className="absolute text-purple-400 text-5xl top-1/2 right-50 animate-float opacity-40"/>
//       <FaLinkedin className="absolute text-blue-300 text-5xl top-1/2 left-50 animate-float opacity-40"/>
//       <FaHtml5 className="absolute text-red-300 text-5xl top-1/4 left-60 animate-float opacity-40"/>

//       {/* Main Content */}
//       <div className="text-center max-w-4xl px-6">

//         {/* Profile Image */}
//         {/* <div className="flex justify-center mb-6">
//           <div className="w-40 h-40 rounded-full overflow-hidden shadow-[0_0_40px_#c3e422]">
//             <img src={pp} alt="profile" className="w-full h-full object-cover" />
//           </div>
//         </div> */}

//         {/* Heading */}
//         <h4 className="text-2xl md:text-6xl font-bold mb-4">
//           Hi, I'm Nadia Jahan <span className="text-[#c3e422]">Lucy</span>
//         </h4>

//         {/* Typing Role */}
//         <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
//           I'm a{" "}
//           <span className="text-[#BBC77C] font-semibold">
//             <Typewriter
//               words={[
//                 "Aspiring Software Engineer",
//                 "Problem Solver",
//                 "React Developer",
//                 "Machine Learning Enthusiast",
//               ]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1200}
//             />
//           </span>
//         </h2>

//         {/* Description */}
//         <p className="text-gray-300 mb-8 ">
//           I build responsive web applications and software solutions using
//           modern technologies. Passionate about clean code, problem solving,
//           and innovative digital experiences.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-6">
//           <a
//             href="#projects"
//             className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)]"
//           >
//             View My Work
//           </a>

//           <a
//             href="/src/certificates/Resume.pdf"
//             target="_blank"
//             className="px-6 py-3 rounded-full border border-[#c3e422] text-[#c3e422] hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)] hover:scale-105 transition"
//           >
//             Download CV
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
      className="relative flex items-center justify-center text-white bg-gradient-to-b from-black via-[#0a0f1f] to-black overflow-hidden py-20 md:py-32"
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
        <div className="flexflex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)]"
          >
            View My Work
          </a>

          <a
            href="/public/certificates/Resume.pdf"
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
