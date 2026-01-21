import { useEffect, useMemo, useRef, useState } from 'react'
import { BsFileEarmarkText } from 'react-icons/bs'
import { useLanguage } from '../hooks/useLanguage'
import Section from './ui/Section'
import Button from './ui/Button'
import { getEducationImage, getCertificate } from '../utils/educationMapper'
import dataEducation_es from './data/DataEducation/DataEducation_es.json'
import dataEducation_en from './data/DataEducation/DataEducation_en.json'

const Education = () => {
  const { language } = useLanguage()
  const dataEducation = language === 'es' ? dataEducation_es.es : dataEducation_en.en
  const [selectedEducation, setSelectedEducation] = useState(null)
  const modalCloseButtonRef = useRef(null)
  const title = language === 'en' ? 'Education' : 'Educación'
  const viewCertText = language === 'en' ? 'View Certificate' : 'Ver certificado'
  const showMoreText = language === 'en' ? 'Show More' : 'Ver más'
  const modalTitleId = useMemo(() => {
    return selectedEducation
      ? `education-modal-title-${selectedEducation.title.replace(/\s+/g, '-').toLowerCase()}`
      : 'education-modal-title'
  }, [selectedEducation])

  useEffect(() => {
    if (!selectedEducation) return
    document.body.style.overflow = 'hidden'
    const timeout = setTimeout(() => {
      modalCloseButtonRef.current?.focus()
    }, 0)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timeout)
    }
  }, [selectedEducation])

  return (
    <Section id="education" title={title}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dataEducation.map((certification, index) => {
          return (
            <article
              key={`${certification.title}-${index}`}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-[220px] md:h-[240px] flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {certification.title}
              </h3>
              {getEducationImage(certification.imageFont) ? (
                <div className="mt-2 overflow-hidden rounded-xl aspect-[3/2] bg-white/70 dark:bg-slate-800/70">
                  <img
                    src={getEducationImage(certification.imageFont)}
                    alt={`${certification.title} certificate`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-2 rounded-xl aspect-[3/2] bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 border border-cyan-500/10 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Certificate
                  </span>
                </div>
              )}
              <div className="mt-auto pt-3 flex justify-end">
                <Button
                  onClick={() => setSelectedEducation(certification)}
                  ariaLabel={showMoreText}
                >
                  {showMoreText}
                </Button>
              </div>
            </article>
          )
        })}
      </div>

      {selectedEducation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setSelectedEducation(null)
            }
          }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-default"
            aria-label={language === 'en' ? 'Close modal' : 'Cerrar modal'}
            onClick={() => setSelectedEducation(null)}
          />
          <div className="relative w-full max-w-3xl bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id={modalTitleId} className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedEducation.title}
                </h3>
              </div>
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={() => setSelectedEducation(null)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded px-2 py-1"
                aria-label={language === 'en' ? 'Close modal' : 'Cerrar modal'}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6">
              <img
                src={getEducationImage(selectedEducation.imageFont)}
                alt={`${selectedEducation.title} certificate`}
                className="w-full h-56 object-contain rounded-xl bg-gray-100 dark:bg-gray-800"
                loading="lazy"
              />
              <div className="flex flex-col">
                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                  {selectedEducation.description}
                </p>
                {getCertificate(selectedEducation.certificateLink) && (
                  <a
                    href={getCertificate(selectedEducation.certificateLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded"
                    aria-label={`${viewCertText} - ${selectedEducation.title}`}
                  >
                    <BsFileEarmarkText className="w-6 h-6 mr-2" aria-hidden="true" />
                    {viewCertText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default Education
