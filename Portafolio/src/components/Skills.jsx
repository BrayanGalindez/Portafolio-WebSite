import react from "../assets/Skills/react.png";
import node from "../assets/Skills/node.png";
import bootstrap from "../assets/Skills/bootstrap.png";
import fastapi from "../assets/Skills/fastapi.png";
import git from "../assets/Skills/git.png";
import vite from "../assets/Skills/vite.png";
import postman from "../assets/Skills/postman.png";
import mongodb from "../assets/Skills/mongodb.png";
import css from "../assets/Skills/css.png";
import html from "../assets/Skills/html.png";
import js from "../assets/Skills/js.png";
import tailwind from "../assets/Skills/tailwind.png";
import python from "../assets/Skills/python.png";
import java from "../assets/Skills/java.png";

import { useState, useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
// import dataSkills from "../components/data/DataSkills.jsx";
import dataSkills from "./data/DataSkills.jsx";
function Skills() {
  const [hoveredTechnology, setHoveredTechnology] = useState("");

  const { language } = useContext(LanguageContext);
  const { title } = dataSkills[language];
  const handleMouseEnter = (technologyName) => {
    setHoveredTechnology(technologyName);
  };

  const handleMouseLeave = () => {
    setHoveredTechnology("");
  };

  return (
    <section id="skills" className="bg-white py-8 dark:bg-gray-900 mt-10 ">
      <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("React")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={react}
            alt="Tecnología 1"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "React" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              React
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Node.js")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={node}
            alt="Tecnología 2"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Node.js" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Node.js
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Bootstrap")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={bootstrap}
            alt="Tecnología 3"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Bootstrap" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Bootstrap
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("FastAPI")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={fastapi}
            alt="Tecnología 4"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "FastAPI" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              FastAPI
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Git")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={git}
            alt="Tecnología 5"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Git" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Git
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Vite")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={vite}
            alt="Tecnología 6"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Vite" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Vite
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Postman")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={postman}
            alt="Tecnología 7"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Postman" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Postman
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("MongoDB")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={mongodb}
            alt="Tecnología 8"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "MongoDB" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              MongoDB
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("HTML")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={html}
            alt="Tecnología 9"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "HTML" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              HTML
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("CSS")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={css}
            alt="Tecnología 10"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "CSS" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              CSS
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Javascript")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={js}
            alt="Tecnología 11"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Javascript" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Javascript
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Tailwind")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={tailwind}
            alt="Tecnología 12"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Tailwind" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Tailwind
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Python")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={python}
            alt="Tecnología 13"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Python" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Python
            </p>
          )}
        </div>
        <div
          className="bg-gray-200 rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5 relative"
          onMouseEnter={() => handleMouseEnter("Java")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={java}
            alt="Tecnología 14"
            className="w-16  transition-transform duration-300 transform hover:scale-110"
          />
          {hoveredTechnology === "Java" && (
            <p className="rounded absolute inset-0 flex items-center justify-center text-center text-sm font-medium bg-gray-800 dark:bg-indigo-950 text-white py-2">
              Java
            </p>
          )}
        </div>
        {/* Agrega más tarjetas de tecnologías aquí */}
      </div>
    </section>
  );
}

export default Skills;
