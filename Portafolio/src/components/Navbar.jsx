import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../providers/Context.jsx";
import PropTypes from "prop-types";

function Navbar(props) {
  const {
    aboutRef,
    skillsRef,
    projectsRef,
    educationRef,
    contactRef,
  } = props;
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollToSectionStart = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  

  
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Theme = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    return (
      <div>
        <button
          onClick={toggleTheme}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    );
  };
  Navbar.propTypes = {
    aboutRef: PropTypes.object,
    projectsRef: PropTypes.object,
    skillsRef: PropTypes.object,
    educationRef: PropTypes.object,
    contactRef: PropTypes.object,
  };
  const Lenguage = () => {
    const { language, changeLanguage, isEnglishMode } =
      useContext(LanguageContext);
    const toggleLanguage = () => {
      if (language === "en") {
        changeLanguage("es");
      } else {
        changeLanguage("en");
      }
    };
    return (
      <div>
        <button
          onClick={toggleLanguage}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isEnglishMode ? "ES" : "EN"}
        </button>
        {/* {children} */}
      </div>
    );
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 p-5 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img
              className="h-10 inline"
              src="https://apkdirectory.com/logos/world-war-z.jpg"
              alt="Logo"
            />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <ul
            className={`md:flex md:items-center md:static absolut w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:bg-opacity-100 ${
              menuOpen
                ? "opacity-100 top-0"
                : "opacity-0 -top-400 pointer-events-none"
            } transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                  scrollToSection(aboutRef); // Desplaza suavemente a la sección "About"
                }}
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                {language === "en" ? "About" : "Sobre mi"}
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                  scrollToSection(skillsRef); // Desplaza suavemente a la sección "About"
                }}
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                {language === "en" ? "Skills" : "Habilidades"}
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                  scrollToSectionStart(projectsRef); // Desplaza suavemente a la sección "About"
                }}
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                {language === "en" ? "Projects" : "Proyectos"}
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                  scrollToSection(educationRef); // Desplaza suavemente a la sección "About"
                }}
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                {language === "en" ? "Education" : "Educacion"}
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                  scrollToSectionStart(contactRef); // Desplaza suavemente a la sección "About"
                }}
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                {language === "en" ? "Contact" : "Contacto"}
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Theme>{/* Contenido aquí */}</Theme>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Lenguage>{/* Contenido aquí */}</Lenguage>
            </li>
          </ul>
          <span
            className="text-3xl cursor-pointer text-black dark:text-white  "
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
