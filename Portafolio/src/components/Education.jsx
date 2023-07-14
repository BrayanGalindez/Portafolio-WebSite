import { useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import Certificado_1 from "../assets/Education/Mintic.pdf";
import Certificado_2 from "../assets/Education/DS4A.pdf";
import Certificado_3 from "../assets/Education/InnovationCampus.pdf";
function Education() {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleShowLess = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };
  const certifications = [
    {
      title: "MisionTic",
      description: (
        <div>
          <p>
            MisionTIC es un programa de formación ofrecido por el Ministerio de
            Tecnologías de la Información y las Comunicaciones (MinTIC) que se
            enfoca en brindar capacitación en áreas fundamentales de la
            programación. Durante este programa, los participantes adquieren
            conocimientos y habilidades en temas como Fundamentos de
            Programación, Programación Básica, Desarrollo de Software y
            Desarrollo de Aplicaciones Web.
          </p>
          <p>
            El programa MisionTIC tiene una duración total de 800 horas, durante
            las cuales los participantes tienen la oportunidad de sumergirse en
            el mundo de la programación y desarrollar proyectos prácticos que
            les permiten aplicar los conceptos aprendidos.
          </p>
        </div>
      ),
      certificateLink: Certificado_1,
    },
    {
      title: "Fundamentos en analitica de datos",
      description: (
        <div>
          <p>
            Durante el curso de Fundamentos en Analítica de Datos de Correlation
            One, se adquirieron conocimientos en alfabetización de datos, Excel,
            Python, estadística y limpieza de datos. Además, se exploraron temas
            avanzados como visualización de datos, tablas dinámicas en Excel,
            lógica condicional y diseño de tableros de control. El curso también
            cubrió análisis logístico, bases de datos, SQL y organización de
            equipos profesionales de datos en empresas. En resumen, el curso
            proporcionó una sólida base en analítica de datos, abarcando desde
            conceptos básicos hasta herramientas y técnicas avanzadas.
          </p>
        </div>
      ),
      certificateLink: Certificado_2,
    },
    {
      title: "Curso en codificacion y programacion en python",
      description: (
        <div>
          <p>
            En el curso de programación en Python de Innovation Campus, se
            enfocó en los fundamentos de Python con énfasis en análisis de
            datos.
          </p>
        </div>
      ),
      certificateLink: Certificado_3,
    },
    // Agrega más objetos de certificación aquí
  ];

  return (
    <section id="education" className="py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 ${
                showMore[index] ? "expanded" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {certification.title}
              </h3>
              {showMore[index] ? (
                <>
                  <p className="text-gray-700 mb-4">
                    {certification.description}
                  </p>
                  <a
                    href={certification.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <BsFileEarmarkText className="w-6 h-6 mr-2" />
                    Ver certificado
                  </a>
                  <button
                    onClick={() => handleShowLess(index)}
                    className="bg-slate-600 text-white font-bold px-4 py-2 rounded hover:bg-slate-700 mt-4"
                  >
                    Ver menos
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleShowMore(index)}
                  className="bg-slate-600 text-white font-bold px-4 py-2 rounded hover:bg-slate-700 mt-4"
                >
                  Ver más
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
