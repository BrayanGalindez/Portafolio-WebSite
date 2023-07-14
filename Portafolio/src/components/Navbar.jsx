import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-cyan-400">
      <nav className="p-5 bg-slate-600 shadow md:flex md:item-center md:justify-between relative">
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
            className={`md:flex md:items-center md:static absolute bg-slate-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:bg-opacity-100 ${
              menuOpen
                ? "opacity-100 top-0"
                : "opacity-0 -top-400 pointer-events-none"
            } transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0">
              <a href="#about" className="text-xl hover:text-cyan-500 duration-500">
                Sobre mi
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#projects" className="text-xl hover:text-cyan-500 duration-500">
                Proyectos
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#skills" className="text-xl hover:text-cyan-500 duration-500">
                Conocimientos
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#contact" className="text-xl hover:text-cyan-500 duration-500">
                Contacto
              </a>
            </li>
          </ul>
          <span className="text-3xl cursor-pointer  " onClick={toggleMenu}>
            <AiOutlineMenu />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;