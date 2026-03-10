import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <section
      className="bg-gray-900 text-white px-6 py-16 text-center"
      id="contact"
    >
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-6 text-[rgb(187,199,124)]">
          Have a project in mind?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          I can help you build and design modern websites and create interactive
          projects.
        </p>

        {/* -------------------- Text + Button Side by Side -------------------- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="text-lg font-semibold bg-white py-3 px-6 rounded-md text-black">
            Let's Work Together
          </button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=njllucy1221@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(187,199,124)] text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
          >
            <FaEnvelope /> E-mail
          </a>
        </div>
      </div>

      {/* -------------------- Footer -------------------- */}
      <footer className="border-t border-gray-700 pt-8 text-center pb-7">
        <div className="flex justify-center gap-6 mb-4 text-gray-400">
          <a
            href="https://www.linkedin.com/in/nadia-jahan-lucy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(187,199,124)] text-2xl transition-colors text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/njllucy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(187,199,124)] text-2xl transition-colors text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=njllucy1221@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(187,199,124)] text-2xl transition-colors text-amber-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/nadia.jahan.lucy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(187,199,124)] text-2xl transition-colors text-blue-200"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="text-gray-500">Designed By Nadia Jahan Lucy</p>
      </footer>
    </section>
  );
};

export default ContactFooter;
