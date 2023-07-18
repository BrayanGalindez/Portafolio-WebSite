import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import PropTypes from "prop-types";
import dataNavbar_en from "./data/DataNavbar/DataNavbar_en.json";
import dataNavbar_es from "./data/DataNavbar/DataNavbar_es.json";

function Navbar(props) {
  const { language } = useContext(LanguageContext);
  const dataNabvar = language === "es" ? dataNavbar_es.es : dataNavbar_en.en;
  const { about, skills, projects, education, contact } = dataNabvar;
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
        <div className="flex justify-between">
          {window.innerWidth <= 768 && (
            <span
              className="text-3xl cursor-pointer text-black dark:text-white ml-auto"
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
          } justify-end md:flex md:items-center md:static w-full md:w-auto  md:bg-opacity-100 transition-all ease-in duration-500  ml-auto`}
        >
          <div className="flex mr-auto">
            {/* <span className="text-2xl text-black dark:text-white font-[Poppins] cursor-pointer ">
              <img
                className="h-10 inline"
                src="https://apkdirectory.com/logos/world-war-z.jpg"
                alt="Logo"
              />
              <BsFillBriefcaseFill />
            </span> */}
            <span
              className="text-2xl text-gray-800 hover:text-cyan-500 dark:hover:text-teal-400 dark:text-white font-[Poppins] cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
              
            >
              <BsFillBriefcaseFill />
            </span>
          </div>
          <li className="mx-4 my-6 md:my-0 ">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(aboutRef);
              }}
              className="text-xl text-gray-800 dark:text-white dark:hover:text-teal-400 hover:text-cyan-500 duration-500"
            >
              {about}
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(skillsRef);
              }}
              className="text-xl text-gray-800 dark:text-white dark:hover:text-teal-400 hover:text-cyan-500 duration-500"
            >
              {skills}
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionStart(projectsRef);
              }}
              className="text-xl text-gray-800 dark:text-white dark:hover:text-teal-400 hover:text-cyan-500 duration-500"
            >
              {projects}
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(educationRef);
              }}
              className="text-xl text-gray-800 dark:text-white dark:hover:text-teal-400 hover:text-cyan-500 duration-500"
            >
              {education}
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionStart(contactRef);
              }}
              className="text-xl text-gray-800 dark:text-white dark:hover:text-teal-400 hover:text-cyan-500 duration-500"
            >
              {contact}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
