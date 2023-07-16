import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import PropTypes from "prop-types";

function Navbar(props) {
  const { language } = useContext(LanguageContext);
  const { aboutRef, skillsRef, projectsRef, educationRef, contactRef } = props;
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setMenuOpen(false);
  };

  const scrollToSectionStart = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Ocultar el menú en pantallas más grandes
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  Navbar.propTypes = {
    aboutRef: PropTypes.object,
    projectsRef: PropTypes.object,
    skillsRef: PropTypes.object,
    educationRef: PropTypes.object,
    contactRef: PropTypes.object,
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 p-5 bg-white dark:bg-gray-900 shadow-md ">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img
              className="h-10 inline"
              src="https://apkdirectory.com/logos/world-war-z.jpg"
              alt="Logo"
            />
          </span>
          {window.innerWidth <= 768 && (
            <span
              className="text-3xl cursor-pointer text-black dark:text-white"
              onClick={toggleMenu}
            >
              <AiOutlineMenu />
            </span>
          )}
        </div>
        <ul
          className={`${
            menuOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 md:opacity-100 md:max-h-screen"
          } md:flex md:items-center md:static w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:bg-opacity-100 transition-all ease-in duration-500 overflow-hidden`}
        >
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(aboutRef);
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
                e.preventDefault();
                scrollToSection(skillsRef);
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
                e.preventDefault();
                scrollToSectionStart(projectsRef);
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
                e.preventDefault();
                scrollToSection(educationRef);
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
                e.preventDefault();
                scrollToSectionStart(contactRef);
              }}
              className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
            >
              {language === "en" ? "Contact" : "Contacto"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
