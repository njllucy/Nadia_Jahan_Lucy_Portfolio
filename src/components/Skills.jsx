
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiCplusplus
} from "react-icons/si";

import {
  FaCode,
  FaPalette,
  FaLaptopCode,
} from "react-icons/fa";



// TECHNICAL SKILLS
const techSkills = [
  { name: "React", icon: <FaReact className="text-blue-400"/>, level: 85, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300"/>, level: 80, color: "from-yellow-400 to-orange-500" },
  { name: "Python", icon: <FaPython className="text-green-200"/>, level: 75, color: "from-green-400 to-green-600" },
  { name: "C++", icon: <SiCplusplus className="text-blue-500"/>, level: 85, color: "from-blue-500 to-indigo-600" },
  { name: "HTML", icon: <FaHtml5 className="text-red-400"/>, level: 90, color: "from-orange-400 to-red-500" },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-200"/>, level: 85, color: "from-blue-400 to-cyan-500" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-blue-300"/>, level: 88, color: "from-cyan-400 to-teal-500" }
];

// WORK SKILLS
const workSkills = [
  { name: "Web Development", icon: <FaLaptopCode className="text-white"/>, level: 95 ,color:"from-green-400 to-green-600"},
  { name: "Web Design", icon: <FaPalette className="text-amber-100"/>, level: 70,color: "from-blue-400 to-blue-600" },
  { name: "Problem Solving", icon: <FaCode className="text-purple-300"/>, level: 80 },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20
      bg-gradient-to-br
      from-[#020617]
      via-[#0f172a]
      to-[#1e293b]
      text-white"
    >

      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-[#c3e422]">Skills</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Technologies and tools I use to build modern applications
        </p>
      </div>


      {/* TECHNICAL SKILLS */}
      <h3 className="text-2xl font-semibold mb-8 text-center text-[#c3e422]">
        Technical Skills
      </h3>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">

        {techSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            shadow-lg"
          >

            <div className="flex items-center gap-3 text-xl mb-4">
              <span className="text-3xl text-[#c3e422]">
                {skill.icon}
              </span>

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              Proficiency
            </p>

            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`h-2 bg-gradient-to-r ${skill.color}`}
              />
            </div>

            <p className="text-right text-sm text-gray-300 mt-2">
              {skill.level}%
            </p>

          </motion.div>
        ))}

      </div>


      {/* WORK SKILLS */}
      <h3 className="text-2xl font-semibold mb-8 text-center text-[#c3e422]">
        Work Skills
      </h3>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">

        {workSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            text-center
            shadow-lg"
          >

            <div className="text-4xl mb-4 text-[#c3e422]">
              {skill.icon}
            </div>

            <h4 className="font-semibold mb-4">
              {skill.name}
            </h4>

            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-2 bg-gradient-to-r from-orange-400 to-red-500"
              />
            </div>

            <p className="text-sm text-gray-300 mt-2">
              {skill.level}%
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Skills;

