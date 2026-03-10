import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaCode, FaFolder, FaBriefcase, FaEnvelope } from "react-icons/fa";

const BottomNavbar = () => {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false); // navbar visibility

  const navItems = [
    { id: "home", name: "Home", icon: <FaHome /> },
    { id: "about", name: "About", icon: <FaUser /> },
    { id: "skills", name: "Skills", icon: <FaCode /> },
    { id: "projects", name: "Projects", icon: <FaFolder /> },
    { id: "experience", name: "Experience", icon: <FaBriefcase /> },
    { id: "contact", name: "Contact", icon: <FaEnvelope /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setVisible(scrollPos > 50); // show navbar after scrolling 50px

      // Active section detection
      const middleScreen = scrollPos + window.innerHeight / 2;
      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (middleScreen >= offsetTop && middleScreen < offsetBottom) {
            setActive(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 w-auto transition-all duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Glass Container */}
      <div className="flex gap-6 px-6 py-3 rounded-full
        bg-black backdrop-blur-lg
        border border-white/20
        shadow-[0_0_25px_rgba(59,130,246,0.4)]
        md:gap-8 md:px-10 md:py-4">

        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2
              bg-black/80 text-white text-xs px-2 py-1 rounded
              opacity-0 group-hover:opacity-100
              transition duration-300
              md:px-3 md:py-1 md:text-xs">
              {item.name}
            </span>

            {/* Scroll Link */}
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setActive(item.id)}
            >
              <button
                className={`text-xl transition-all duration-300
                  ${active === item.id
                  ? "text-[#c3e422] scale-125 drop-shadow-[0_0_12px_#3b82f6]"
                  : "text-gray-300 hover:text-[#BBC77C] hover:scale-125"
                  }`}
              >
                {item.icon}
              </button>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BottomNavbar;