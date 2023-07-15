import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext, LanguageContext } from "../providers/Context.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Theme = ({ children }) => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    return (
      <div>
        <button
          onClick={toggleTheme}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
        {children}
      </div>
    );
  };

  Theme.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const Lenguage = ({ children }) => {
    const { language, changeLanguage, isEnglishMode } = useContext(LanguageContext);
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
          {isEnglishMode ? "EN" : "ES"}
        </button>
        {children}
      </div>
    );
  };
  Lenguage.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 p-5 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
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
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                Sobre mi
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#projects"
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                Proyectos
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#skills"
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                Conocimientos
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#contact"
                className="text-xl text-gray-800 dark:text-white hover:text-cyan-500 duration-500"
              >
                Contacto
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
