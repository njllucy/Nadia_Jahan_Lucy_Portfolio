import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import pp from "./profile.jpg"

const TopNavbar = () => {

  return (
    <div className="w-full sticky top-0 z-50 bg-black text-white shadow-[0_4px_25px_rgba(195,228,34,0.50)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2 cursor-pointer">

  {/* Image + Name Row */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img
        src={pp}
        alt="pp"
        className="w-full h-full object-cover"
      />
    </div>

    <h1 className="text-lg font-bold tracking-wide text-white">
      Lucyyy.
    </h1>
  </div>

  {/* Available Badge */}
  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full w-fit shadow-[0_0_10px_rgba(34,197,94,0.7)]">
    
    <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)] animate-pulse"></span>

    <p className="text-xs text-green-400 font-medium">
      Available for Work
    </p>

  </div>

</div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5">
          <button className="px-4 py-2  rounded-lg hover:text-[#BBC77C] transition duration-300 flex items-center gap-2">
            <a href="https://wa.me/8801646656525" target="_blank"><FaWhatsapp className="text-green-500 w-7 h-7"/></a>
             Contact
          </button>
          <a href="https://www.linkedin.com/in/nadia-jahan-lucy" target="_blank" className="text-xl hover:text-[#c3e422] transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/njllucy" target="_blank" className="text-xl hover:text-[#c3e422] transition">
            <FaGithub />
          </a>
          
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden items-center gap-4">
          <button className="text-xl hover:text-[#c3e422] transition">
            <a href="https://wa.me/8801646656525"><FaWhatsapp className="text-green-500 w-7 h-7"/></a>
          </button>
          <a href="https://www.linkedin.com/in/nadia-jahan-lucy" className="text-xl hover:text-[#c3e422] transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/njllucy" className="text-xl hover:text-[#c3e422] transition">
            <FaGithub />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
