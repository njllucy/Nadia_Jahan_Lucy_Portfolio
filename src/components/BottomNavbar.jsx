import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaCode,
  FaFolder,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";

const BottomNavbar = () => {

  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const navItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/about", name: "About", icon: <FaUser /> },
    { path: "/skills", name: "Skills", icon: <FaCode /> },
    { path: "/projects", name: "Projects", icon: <FaFolder /> },
    { path: "/experience", name: "Experience", icon: <FaBriefcase /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope /> }
  ];

  // show navbar after scroll
  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
     // SHOW NAVBAR WHEN CURSOR MOVES
   const handleMouseMove = () => {
    setVisible(true);

    clearTimeout(window.navbarTimeout);

    window.navbarTimeout = setTimeout(() => {
      if (window.scrollY <= 50) {
        setVisible(false);
      }
    }, 2000); // hide after 2 sec if no movement
  };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  }, []);

  return (

    <div
      className={`
      fixed bottom-5 left-1/2 -translate-x-1/2 z-50
      transition-all duration-500
      ${visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10 pointer-events-none"
      }
      `}
    >

      {/* Glass Container */}
      <div
        className="
        flex gap-6 px-6 py-3 rounded-full
        bg-black/70 backdrop-blur-xl
        border border-[#c3e422]/20
        shadow-[0_0_25px_rgba(195,228,34,0.2)]
        md:gap-8 md:px-10 md:py-4
        "
      >

        {navItems.map((item) => {

          const active = location.pathname === item.path;

          return (

            <div key={item.path} className="relative group">

              {/* Tooltip */}
              <span
                className="
                absolute -top-8 left-1/2 -translate-x-1/2
                bg-black/80 text-white text-xs px-2 py-1 rounded
                opacity-0 group-hover:opacity-100
                transition duration-300
                whitespace-nowrap
                "
              >
                {item.name}
              </span>

              {/* Page Link */}
              <Link to={item.path}>

                <button
                  className={`
                  text-xl transition-all duration-300

                  ${active
                    ? "text-[#c3e422] scale-125 drop-shadow-[0_0_12px_#c3e422]"
                    : "text-gray-300 hover:text-[#BBC77C] hover:scale-125"
                  }
                  `}
                >
                  {item.icon}
                </button>

              </Link>

            </div>

          );
        })}

      </div>

    </div>
  );
};

export default BottomNavbar;