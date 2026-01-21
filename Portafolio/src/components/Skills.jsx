import { useState } from 'react'
import {
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiExpress,
  SiSpringboot,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGithubactions,
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiFastapi,
  SiGit,
  SiVite,
  SiPostman,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiPython
} from 'react-icons/si'
import { FaFileExcel, FaChartBar, FaCogs, FaThLarge, FaJava } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'
import Section from './ui/Section'
import dataSkills_es from './data/DataSkills/DataSkills_es.json'
import dataSkills_en from './data/DataSkills/DataSkills_en.json'

const skillsData = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript (ES6+)', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Netlify', icon: SiNetlify },
  { name: 'CI/CD', icon: SiGithubactions },
  { name: 'Postman', icon: SiPostman },
  { name: 'Vite', icon: SiVite },
  { name: 'Power BI', icon: FaChartBar },
  { name: 'Power Automate', icon: FaCogs },
  { name: 'Power Apps', icon: FaThLarge },
  { name: 'Excel (Avanzado)', icon: FaFileExcel }
]

const Skills = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState('')
  const { language } = useLanguage()
  const dataSkills = language === 'es' ? dataSkills_es.es : dataSkills_en.en
  const { title } = dataSkills

  return (
    <Section id="skills" title={title}>
      <div className="flex flex-col items-center gap-4" role="list" aria-label="Technologies">
        {(() => {
          const rowPattern = [5, 4, 3, 4, 5]
          const rows = []
          let index = 0

          for (const count of rowPattern) {
            if (index >= skillsData.length) break
            const row = skillsData.slice(index, index + count)
            rows.push(row)
            index += count
          }

          if (index < skillsData.length) {
            rows.push(skillsData.slice(index))
          }

          return rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-wrap justify-center gap-2.5"
            >
              {row.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-lg flex items-center justify-center p-2 relative group w-14 h-14 md:w-16 md:h-16"
                  onMouseEnter={() => setHoveredTechnology(skill.name)}
                  onMouseLeave={() => setHoveredTechnology('')}
                  role="listitem"
                  aria-label={skill.name}
                >
                  <skill.icon
                    className="text-xl text-cyan-600 dark:text-cyan-400 transition-transform duration-300 transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                  {hoveredTechnology === skill.name && (
                    <p 
                      className="rounded absolute inset-0 flex items-center justify-center text-center text-xs font-medium bg-slate-900/90 dark:bg-slate-950/90 text-white py-2 transition-opacity duration-300"
                      role="tooltip"
                      aria-live="polite"
                    >
                      {skill.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))
        })()}
      </div>
    </Section>
  )
}

export default Skills
