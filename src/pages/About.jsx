import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

import pp from "../components/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#020617] text-white px-6 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="w-80 h-80 rounded-md overflow-hidden hover:shadow-[0_0_80px_rgba(195,228,34,0.5)] transition duration-300 hover:scale-105 
          "
          >
            <img
              src={pp}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          {/* Section Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#c3e422] font-bold uppercase tracking-widest mb-2"
          >
            About Me
          </motion.p>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-gray-300 mb-8 flex justify-between"
          >
            <div className="">
              <p className="text-[16px] font-bold">
                Aspiring Software Engineer | Web Developer
              </p>

              <p>
                <span className="text-[#c3e422] font-semibold">Email:</span>{" "}
                <a href="">njllucy1221@gmail.com</a>
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#c3e422] font-semibold">City:</span>{" "}
                Chittagong
              </p>

              <p>
                <span className="text-[#c3e422] font-semibold">Degree:</span>{" "}
                B.Sc in CSE, IIUC
              </p>
            </div>
          </motion.div>

          {/* Who Am I Title */}
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Who Am I
          </motion.h3>

          {/* About Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-6 text-sm"
          >
            I am a CSE undergraduate student at International Islamic University
            Chittagong (IIUC) and an aspiring software engineer. I have
            experience with C, C++, Python, JavaScript, and React. <br />
            Currently, I am learning more about full-stack development, data
            structures, and modern web technologies. I also practice competitive
            programming on platforms like LeetCode and Codeforces to strengthen
            my problem-solving skills.
          </motion.p>

          {/* Button + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition hover:shadow-[0_4px_25px_rgba(195,228,34,0.50)]"
            >
              View My Work
            </a>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/nadia-jahan-lucy"
                target="_blank"
                className="hover:text-[#c3e422] transition"
              >
                <FaLinkedin className="text-blue-400" />
              </a>

              <a
                href="https://leetcode.com/u/lu_cy/"
                target="_blank"
                className="hover:text-[#c3e422] transition"
              >
                <SiLeetcode className="text-orange-300" />
              </a>

              <a
                href="https://codeforces.com/profile/J_Nadia"
                target="_blank"
                className="hover:text-[#c3e422] transition"
              >
                <SiCodeforces />
              </a>

              <a
                href="https://www.facebook.com/nadia.jahan.lucy/"
                target="_blank"
                className="hover:text-[#c3e422] transition"
              >
                <FaFacebook className="text-sky-300" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=njllucy1221@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c3e422] transition"
              >
                <FaEnvelope className="text-amber-100" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
