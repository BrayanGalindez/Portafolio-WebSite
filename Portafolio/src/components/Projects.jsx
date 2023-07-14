import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import Img_proyecto1 from "../assets/Projects/Proyecto_TuChaza.png";
import Ima_proyecto2 from "../assets/Projects/Proyecto_PapitasConSoftware.png";
import Ima_proyecto3 from "../assets/Projects/Proyecto_Notas.png";
import { BiLogoReact } from "react-icons/bi";
import { LiaNodeJs } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiVite } from "react-icons/si";
function Projects() {
  const projects = [
    {
      title: "TuChaza",
      image: Img_proyecto1,
      description:
        "TuChaza es una página web diseñada específicamente para facilitar la creación de pequeñas tiendas, conocidas como chazas, en la Universidad Nacional de Colombia. Esta plataforma tiene como objetivo principal conectar la información de estas tiendas dentro del campus universitario.",
      githubLink: "https://github.com/BrayanGalindez/TuChazaDefinitive",
      webLink: "https://www.example.com/project1",
      status: "Finalizado", // Agrega el estado del proyecto
      technologies: [
        "react",
        "node.js", 
        "bootstrap", 
        "mongodb", 
        "html", 
        "js"
      ],
    },
    {
      title: "BogoTaste",
      image: Ima_proyecto2,
      description:
        "BogoTaste es una página web diseñada con el propósito de proporcionar a los usuarios de la ciudad de Bogotá una recopilación de reseñas de restaurantes locales. Su objetivo es brindar a los usuarios información detallada y confiable sobre los restaurantes de la ciudad, para que puedan tomar decisiones informadas al elegir dónde comprar comida.",
      githubLink: "https://github.com/BrayanGalindez/PapitasConSoftware",
      webLink: "https://www.example.com/project2",
      status: "En proceso", // Agrega el estado del proyecto
      technologies: [
        "react",
        "node.js",
        "mongodb",
        "html",
        "css",
        "js",
        "fastapi",
      ],
    },
    {
      title: "Mis notas",
      image: Ima_proyecto3,
      description:
        "Mis Notas es un sitio web diseñado para ofrecerte una forma sencilla y práctica de guardar tus notas de deberes. Con esta herramienta, podrás registrar rápidamente tus tareas pendientes, asignarles fechas límite y marcarlas como completadas una vez que las hayas realizado. Con Mis Notas, podrás mantener un seguimiento organizado de tus deberes y asegurarte de no olvidar ninguna tarea importante. Simplifica tu vida académica con Mis Notas y mantén tus tareas bajo control de manera eficiente.",
      githubLink: "https://github.com/BrayanGalindez/FARM-Stack-CRUD",
      webLink: "https://www.example.com/project2",
      status: "En proceso", // Agrega el estado del proyecto
      technologies: [
        "vite",
        "react",
        "node.js",
        "mongodb",
        "html",
        "js",
        "fastapi",
        "tailwind"
      ],
    },
    // Agrega más objetos de proyecto aquí
  ];

  return (
    <section id="projects" className="py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 mb-4">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 relative"
            >
              <div
                className={`status-badge ${
                  project.status === "Finalizado"
                    ? "bg-green-500 rounded-full"
                    : "bg-blue-500 rounded-full "
                } absolute top-0 right-0 p-2 text-xs text-white font-bold`}
              >
                {project.status}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-4"
              />
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="flex justify-center space-x-4">
                {project.technologies.map((technology, index) => (
                  <li key={index} className="text-4xl">
                    {technology === "react" && <BiLogoReact />}
                    {technology === "node.js" && <LiaNodeJs />}
                    {technology === "tailwind" && <BiLogoTailwindCss />}
                    {technology === "mongodb" && <BiLogoMongodb />}
                    {technology === "fastapi" && <SiFastapi />}
                    {technology === "html" && <AiFillHtml5 />}
                    {technology === "js" && <BiLogoJavascript />}
                    {technology === "css" && <BiLogoCss3 />}
                    {technology === "bootstrap" && <BiLogoBootstrap />}
                    {technology === "vite" && <SiVite />}
                    {/* Agrega más condiciones para otros iconos de tecnologías */}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                  <AiFillGithub className="w-6 h-6" />
                </a>
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  <BsLink45Deg className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
