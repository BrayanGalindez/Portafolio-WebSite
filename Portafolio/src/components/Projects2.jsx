import { useEffect, useMemo, useRef, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'
import { useLanguage } from '../hooks/useLanguage'
import Section from './ui/Section'
import TechnologyIcon from './ui/TechnologyIcon'
import { getProjectImage } from '../utils/imageMapper'
import { PROJECT_STATUS } from '../utils/constants'
import dataProjects_en from './data/DataProjects/DataProjects_en.json'
import dataProjects_es from './data/DataProjects/DataProjects_es.json'

const Projects = () => {
  const { language } = useLanguage()
  const dataProjects = language === 'es' ? dataProjects_es.es : dataProjects_en.en
  const title = language === 'en' ? 'Projects' : 'Proyectos'

  const [selectedProject, setSelectedProject] = useState(null)
  const modalCloseButtonRef = useRef(null)
  const modalTitleId = useMemo(() => {
    return selectedProject ? `project-modal-title-${selectedProject.title.replace(/\s+/g, '-').toLowerCase()}` : 'project-modal-title'
  }, [selectedProject])

  const isFinished = (status) => {
    return status === PROJECT_STATUS.FINISHED || status === PROJECT_STATUS.FINISHED_EN
  }

  const getBentoClasses = (index) => {
    if (index % 6 === 0) return 'md:col-span-2'
    return ''
  }

  useEffect(() => {
    if (!selectedProject) return
    document.body.style.overflow = 'hidden'
    const timeout = setTimeout(() => {
      modalCloseButtonRef.current?.focus()
    }, 0)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timeout)
    }
  }, [selectedProject])

  return (
    <Section id="projects" title={title} className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataProjects.map((project, index) => {
          const finished = isFinished(project.status)
          return (
            <button
              key={`${project.title}-${index}`}
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`group text-left bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-lg p-4 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 h-[420px] md:h-[440px] ${getBentoClasses(index)}`}
              aria-label={`${language === 'en' ? 'Open project' : 'Abrir proyecto'}: ${project.title}`}
            >
              <article className="h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs text-white font-bold rounded-full ${
                      finished ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    role="status"
                    aria-label={`Project status: ${project.status}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-3 overflow-hidden rounded-xl aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                  <img
                    src={getProjectImage(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <p className="text-slate-700 dark:text-slate-200 mt-3 text-sm max-h-[4.5rem] overflow-hidden">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {project.technologies.map((technology, techIndex) => (
                      <TechnologyIcon
                        key={`${technology}-${techIndex}`}
                        technology={technology}
                        className="text-3xl text-gray-700 dark:text-white"
                      />
                    ))}
                  </ul>
                  <span className="mt-3 inline-flex items-center text-sm text-cyan-600 dark:text-cyan-400">
                    {language === 'en' ? 'View details' : 'Ver detalles'}
                  </span>
                </div>
              </article>
            </button>
          )
        })}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setSelectedProject(null)
            }
          }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-default"
            aria-label={language === 'en' ? 'Close modal' : 'Cerrar modal'}
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-3xl bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id={modalTitleId} className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {selectedProject.status}
                </p>
              </div>
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded px-2 py-1"
                aria-label={language === 'en' ? 'Close modal' : 'Cerrar modal'}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
              <img
                src={getProjectImage(selectedProject.image)}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="flex flex-col">
                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white mb-2">
                    {language === 'en' ? 'Technologies' : 'Tecnologías'}
                  </p>
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {selectedProject.technologies.map((technology, techIndex) => (
                      <TechnologyIcon
                        key={`${technology}-${techIndex}`}
                        technology={technology}
                        className="text-3xl text-gray-700 dark:text-white"
                      />
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors inline-flex items-center gap-2"
                      aria-label={`View ${selectedProject.title} on GitHub`}
                    >
                      <AiFillGithub className="w-5 h-5" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {(selectedProject.status === PROJECT_STATUS.FINISHED ||
                    selectedProject.status === PROJECT_STATUS.FINISHED_EN) && (
                    <a
                      href={selectedProject.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors inline-flex items-center gap-2"
                      aria-label={`Visit ${selectedProject.title} website`}
                    >
                      <BsLink45Deg className="w-5 h-5" aria-hidden="true" />
                      {language === 'en' ? 'Live' : 'Ver'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default Projects
