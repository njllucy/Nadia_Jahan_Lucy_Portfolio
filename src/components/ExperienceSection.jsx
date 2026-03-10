import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
  // Certificate data with images (place images in public/certificates/)
  const certificates = [
    { 
      title: "C++ Certificate", 
      image: "/images/C++.png" 
    },
    { 
      title: "Frontend Development Certificate", 
      image: "/images/Frontend development.png" 
    },
    { 
      title: "ICT Olympiad Ambassador Certificate", 
      image: "/images/ict olympiad_certificate.jpg" 
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="px-6 py-16 bg-gray-900 text-white" id="experience">
      {/* -------------------- Work Experience -------------------- */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <motion.div
          className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Teaching Assistant</h3>
          <p className="text-gray-300 mb-2">International Islamic University Chittagong (IIUC)</p>
          <p className="text-gray-400">Since September 2025</p>
        </motion.div>
      </div>

      {/* -------------------- Certificates -------------------- */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-[0_4px_25px_rgba(195,228,34,0.5)] transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-2">{cert.title}</h4>
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-green-300 hover:underline cursor-pointer" 
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------- Modal / Popup -------------------- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 box-sha"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-xl p-4 max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                &times;
              </button>
              {/* Certificate Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg mt-4 w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;