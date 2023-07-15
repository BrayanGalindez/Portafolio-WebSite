import Certificado_1 from "../../assets/Education/Mintic.pdf";
import Certificado_2 from "../../assets/Education/DS4A.pdf";
import Certificado_3 from "../../assets/Education/InnovationCampus.pdf";
import Img1 from "../../assets/Education/misiontic.png";
import Img2 from "../../assets/Education/InnovationCampus.png";
import Img3 from "../../assets/Education/DS4A.png";

const dataEducation = {
  en: [
    {
      title: "MisionTic",
      description: `MisionTIC is a training program offered by the Ministry of Information and Communication Technologies (MinTIC) that focuses on providing education in fundamental areas of programming. During this program, participants acquire knowledge and skills in topics such as Fundamentals of Programming, Basic Programming, Software Development, and Web Application Development.
        
        The MisionTIC program has a total duration of 800 hours, during which participants have the opportunity to dive into the world of programming and develop practical projects that allow them to apply the concepts learned.`,
      certificateLink: Certificado_1,
      imageFont: Img1,
    },
    {
      title: "Fundamentals of Data Analytics",
      description: `During the Fundamentals of Data Analytics course by Correlation One, I acquired knowledge in data literacy, Excel, Python, statistics, and data cleaning. Additionally, I explored advanced topics such as data visualization, pivot tables in Excel, conditional logic, and designing dashboards. The course also covered logistic regression, databases, SQL, and organizing professional data teams in companies. In summary, the course provided a solid foundation in data analytics, ranging from basic concepts to advanced tools and techniques.`,
      certificateLink: Certificado_2,
      imageFont: Img2,
    },
    {
      title: "Python Coding and Programming Course",
      description: `In the Python Coding and Programming course by Innovation Campus, the focus was on the fundamentals of Python with an emphasis on data analysis.`,
      certificateLink: Certificado_3,
      imageFont: Img3,
    },
    // Add more certification objects here
  ],
  es: [
    {
      title: "MisionTic",
      description: `MisionTIC es un programa de formación ofrecido por el Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) que se enfoca en brindar capacitación en áreas fundamentales de la programación. Durante este programa, los participantes adquieren conocimientos y habilidades en temas como Fundamentos de Programación, Programación Básica, Desarrollo de Software y Desarrollo de Aplicaciones Web.
        
        El programa MisionTIC tiene una duración total de 800 horas, durante las cuales los participantes tienen la oportunidad de sumergirse en el mundo de la programación y desarrollar proyectos prácticos que les permiten aplicar los conceptos aprendidos.`,
      certificateLink: Certificado_1,
      imageFont: Img1,
    },
    {
      title: "Fundamentos en Analítica de Datos",
      description: `Durante el curso de Fundamentos en Analítica de Datos de Correlation One, se adquirieron conocimientos en alfabetización de datos, Excel, Python, estadística y limpieza de datos. Además, se exploraron temas avanzados como visualización de datos, tablas dinámicas en Excel, lógica condicional y diseño de tableros de control. El curso también cubrió análisis logístico, bases de datos, SQL y organización de equipos profesionales de datos en empresas. En resumen, el curso proporcionó una sólida base en analítica de datos, abarcando desde conceptos básicos hasta herramientas y técnicas avanzadas.`,
      certificateLink: Certificado_2,
      imageFont: Img2,
    },
    {
      title: "Curso en Codificación y Programación en Python",
      description: `En el curso de programación en Python de Innovation Campus, se enfocó en los fundamentos de Python con énfasis en análisis de datos.`,
      certificateLink: Certificado_3,
      imageFont: Img3,
    },
    // Agrega más objetos de certificación aquí
  ],
};

export default dataEducation;
