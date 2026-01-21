/**
 * Maps education images and certificates
 */
import Img1 from '../assets/Education/misiontic.png'
import Img2 from '../assets/Education/InnovationCampus.png'
import Img3 from '../assets/Education/DS4A.png'
import Img4 from '../assets/Education/AluraLatam.jpg'
import Img5 from '../assets/Education/GenerativeAWS.jpg'
import Certificado_1 from '../assets/Education/Mintic.pdf'
import Certificado_2 from '../assets/Education/InnovationCampus.pdf'
import Certificado_3 from '../assets/Education/DS4A.pdf'

export const educationImageMap = {
  'misiontic.png': Img1,
  'InnovationCampus.png': Img2,
  'innovationcampus.png': Img2,
  'innovationcampus': Img2,
  'DS4A.png': Img3,
  'ds4a.png': Img3,
  'ds4a': Img3,
  'AluraLatam.jpg': Img4,
  'aluralatam.jpg': Img4,
  'aluralatam': Img4,
  'GenerativeAWS.jpg': Img5,
  'generativeaws.jpg': Img5,
  'generativeaws': Img5
}

export const certificateMap = {
  'Mintic.pdf': Certificado_1,
  'InnovationCampus.pdf': Certificado_2,
  'DS4A.pdf': Certificado_3
}

/**
 * Gets education image by name
 * @param {string} imageName - Name of the image file
 * @returns {string} Image path
 */
export const getEducationImage = (imageName) => {
  if (typeof imageName !== 'string' || imageName.trim() === '') {
    return null
  }
  const trimmed = imageName.trim()
  const normalized = trimmed.toLowerCase()
  if (normalized.includes('alura')) return Img4
  if (normalized.includes('generativeaws') || normalized.includes('aws')) return Img5
  if (normalized.includes('misiontic')) return Img1
  if (normalized.includes('innovationcampus')) return Img2
  if (normalized.includes('ds4a')) return Img3
  return educationImageMap[trimmed] || educationImageMap[normalized] || null
}

/**
 * Gets certificate PDF by name
 * @param {string} certName - Name of the certificate file
 * @returns {string} Certificate path
 */
export const getCertificate = (certName) => {
  if (typeof certName === 'string' && certName.startsWith('http')) {
    return certName
  }
  if (!certName) {
    return ''
  }
  return certificateMap[certName] || ''
}
