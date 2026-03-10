import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Oxygen Survival Maze Simulator",
    description:
      "A C/OpenGL based simulation game where players navigate a maze while managing oxygen survival mechanics.",
    tech: ["C++", "OpenGL"],
    image: "/images/maze.png",
    github:
      "https://github.com/njllucy/Oxygen-Survival-Maze-Simulator-C-OpenGL-Game-Project-.git",
    live: "https://youtu.be/ObSlHNgKFtc?si=I7B07JPIF4mekelk",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Ecommerce Website",
    description:
      "A modern ecommerce web application built with React featuring product listing, cart system and responsive UI.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/ecommerce.png",
    github: "https://github.com/njllucy/Ecommerce_Website-React-.git",
    live: "https://ecommerce-website-react-tau-five.vercel.app/",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Todo App",
    description:
      "A clean and responsive todo application built using React and TailwindCSS to manage daily tasks efficiently.",
    tech: ["React", "TailwindCSS"],
    image: "/images/Todo.png",
    github: "https://github.com/njllucy/TODO-APP-React-TailwindCss-.git",
    live: "https://todo-app-react-tailwind-n8ze0ozeo-nadia-jahan-lucys-projects.vercel.app/",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Face Recognition | Age & Emotion Prediction",
    description:
      "AI based face recognition system built with OpenCV and TensorFlow for detecting and recognizing faces in real-time.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    image: "/images/facerecognition.png",
    github:
      "https://github.com/njllucy/Face_Recognition-OpenCv-Tensorflow-.git",
    // live: "",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Computer Network Project",
    description:
      "A networking project demonstrating Ddos Attack Simulation & Detection",
    tech: ["C++", "Networking Concepts"],
    github: "https://github.com/njllucy/Computer-Network-Project-.git",
    image: "/images/CN.png",
    color: "from-teal-300 to-teal-800",

  },
  {
    title: "Eat & Split App",
    description:
      "A JavaScript application to split bills with friends and manage shared expenses easily.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/njllucy/Eat-Split-js-project-.git",
    live:"https://njllucy.github.io/Eat-Split-js-project-/",
    image: "/images/Eat & split.png",
    color: "from-amber-400 to-amber-800",

  },
  {
    title: "StoryNest Book Website",
    description:
      "A responsive book discovery website with dark mode, carousel and modern UI.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Swiper.js"],
    github: "https://github.com/njllucy/StoryNest-Book-website-.git",
    live:"https://njllucy.github.io/StoryNest-Book-website-/",
    image: "/images/bookwebsite.png",
    color: "from-purple-200 to-purple-700",

  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className=" py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-[#c3e422]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Some projects I built while learning and exploring technologies
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // hidden at start
            whileInView={{ opacity: 1, y: 0 }} // animates when in viewport
            viewport={{ once: true, amount: 0.2 }} // triggers once, 20% visible
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0 4px 25px rgba(195, 228, 34, 0.5)",
            }}
            transition={{ type: "keyframes", stiffness: 200 }}
            className="rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg p-6 group"
          >
            {/* Top gradient line */}
            <div
              className={`h-1 w-full rounded mb-4 bg-gradient-to-r ${project.color}`}
            ></div>
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm px-3 py-2 bg-white/10 rounded hover:bg-white/20 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm px-3 py-2  rounded hover:bg-[#c3e422] transition"
              >
                Demo
                <FaExternalLinkAlt className="text-blue-400 hover:text-white" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
