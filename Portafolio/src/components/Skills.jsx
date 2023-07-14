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
function Skills() {
  return (
    <section id="skills" className="bg-gray-200 py-8">
      <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 mb-4">
        Mis habilidades
      </h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={react} alt="Tecnología 1" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={node} alt="Tecnología 2" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={bootstrap} alt="Tecnología 3" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={fastapi} alt="Tecnología 4" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={git} alt="Tecnología 5" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={vite} alt="Tecnología 6" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={postman} alt="Tecnología 7" className="w-16  transition-transform duration-300 transform hover:scale-110"  />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={mongodb} alt="Tecnología 8" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={html} alt="Tecnología 9" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={css} alt="Tecnología 10" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={js} alt="Tecnología 11" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={tailwind} alt="Tecnología 12" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={python} alt="Tecnología 12" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-2 m-2 flex-basis-1/5">
          <img src={java} alt="Tecnología 12" className="w-16  transition-transform duration-300 transform hover:scale-110" />
        </div>
        {/* Agrega más tarjetas de tecnologías aquí */}
      </div>
    </section>
  );
}

export default Skills;