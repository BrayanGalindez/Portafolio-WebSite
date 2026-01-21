/**
 * Maps project image names to imported images
 * Centralized image mapping for better maintainability
 */
import Img_proyecto1 from '../assets/Projects/Proyecto_TuChaza.png'
import Img_proyecto2 from '../assets/Projects/Proyecto_PapitasConSoftware.png'
import Img_proyecto3 from '../assets/Projects/Proyecto_Notas.png'
import Img_proyecto4 from '../assets/Projects/Proyecto_Portafolio.png'
import Img_proyecto5 from '../assets/Projects/Proyecto_BankSaintPatrick.png'
import Img_proyecto6 from '../assets/Projects/Proyecto_Subacubun.png'
import Img_proyecto7 from '../assets/Projects/Proyecto_Mentora.png'

export const projectImageMap = {
  'Proyecto_TuChaza.png': Img_proyecto1,
  'Proyecto_PapitasConSoftware.png': Img_proyecto2,
  'Proyecto_Notas.png': Img_proyecto3,
  'Proyecto_Portafolio.png': Img_proyecto4,
  'Proyecto_BankSaintPatrick.png': Img_proyecto5,
  'Proyecto_Subacubun.png': Img_proyecto6,
  'Proyecto_Mentora.png': Img_proyecto7
}

/**
 * Gets project image by name
 * @param {string} imageName - Name of the image file
 * @returns {string} Image path or empty string
 */
export const getProjectImage = (imageName) => {
  return projectImageMap[imageName] || ''
}
