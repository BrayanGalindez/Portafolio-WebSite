import { BiLogoReact, BiLogoTailwindCss, BiLogoMongodb, BiLogoJavascript, BiLogoCss3, BiLogoBootstrap, BiLogoPostgresql, BiLogoJava } from 'react-icons/bi'
import { LiaNodeJs } from 'react-icons/lia'
import { SiFastapi, SiVite, SiSpring, SiMysql } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

/**
 * Maps technology names to their corresponding icon components
 */
export const technologyIconMap = {
  react: BiLogoReact,
  'node.js': LiaNodeJs,
  tailwind: BiLogoTailwindCss,
  mongodb: BiLogoMongodb,
  fastapi: SiFastapi,
  html: AiFillHtml5,
  js: BiLogoJavascript,
  css: BiLogoCss3,
  bootstrap: BiLogoBootstrap,
  vite: SiVite,
  posgresql: BiLogoPostgresql,
  java: BiLogoJava,
  spring: SiSpring,
  mysql: SiMysql
}

/**
 * Gets technology icon component by name
 * @param {string} technology - Technology name
 * @returns {React.Component|null} Icon component or null
 */
export const getTechnologyIcon = (technology) => {
  return technologyIconMap[technology.toLowerCase()] || null
}
