import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
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
import { BiLogoPostgresql } from "react-icons/bi";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageContext } from "../providers/Context.jsx";
import dataProjects_en from "./data/DataProjects/DataProjects_en.json";
import dataProjects_es from "./data/DataProjects/DataProjects_es.json";
import Img_proyecto1 from "../assets/Projects/Proyecto_TuChaza.png";
import Img_proyecto2 from "../assets/Projects/Proyecto_PapitasConSoftware.png";
import Img_proyecto3 from "../assets/Projects/Proyecto_Notas.png";
import Img_proyecto4 from "../assets/Projects/Proyecto_Portafolio.png";
import Img_proyecto5 from "../assets/Projects/Proyecto_BankSaintPatrick.png";

function Projects() {
  const { language } = useContext(LanguageContext);
  const dataProjects =
    language === "es" ? dataProjects_es.es : dataProjects_en.en;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <section
      id="about"
      className="bg-white py-8 dark:bg-gray-900 mt-16 style={{ marginTop: '80px' }}"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {language === "en" ? "Projects" : "Proyectos"}
        </h2>
        <Slider {...settings}>
          {dataProjects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <div
                key={index}
                style={{ width: "300 ", margin: "0 10px" }}
                className=" bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 relative "
              >
                <div
                  className={`status-badge ${
                    project.status === "Finalizado" ||
                    project.status === "Finished"
                      ? "bg-green-500 rounded-full"
                      : "bg-blue-500 rounded-full"
                  } absolute top-0 right-0 p-2 text-xs mt-2 mr-2 text-white font-bold`}
                >
                  {project.status}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>

                <img
                  src={
                    project.image === "Proyecto_TuChaza.png"
                      ? Img_proyecto1
                      : project.image === "Proyecto_PapitasConSoftware.png"
                      ? Img_proyecto2
                      : project.image === "Proyecto_Notas.png"
                      ? Img_proyecto3
                      : project.image === "Proyecto_Portafolio.png"
                      ? Img_proyecto4
                      : project.image === "Proyecto_BankSaintPatrick.png"
                      ? Img_proyecto5
                      : ""
                  }
                  alt={project.title}
                  className="w-full h-auto mb-4"
                />
                <p className="text-gray-700 dark:text-white mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap justify-center space-x-4 mt-4">
                  {project.technologies.map((technology, index) => (
                    <li
                      key={index}
                      className="text-4xl text-black dark:text-white"
                    >
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
                      {technology === "posgresql" && <BiLogoPostgresql />}
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
                  {project.status === "Finalizado" ||
                  project.status === "Finished" ? (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      <BsLink45Deg className="w-6 h-6" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>
    </section>
  );
}

export default Projects;
