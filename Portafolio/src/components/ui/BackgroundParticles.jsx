import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const BackgroundParticles = ({ mode = 'light' }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  const options = useMemo(() => {
    const isDark = mode === 'dark'
    return {
      fullScreen: { enable: false },
      detectRetina: true,
      background: { color: 'transparent' },
      fpsLimit: 60,
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: isDark ? '#22d3ee' : '#0ea5e9' },
        links: {
          enable: true,
          color: isDark ? '#22d3ee' : '#0ea5e9',
          opacity: 0.12,
          distance: 140,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: 'out' }
        },
        opacity: { value: 0.2 },
        size: { value: { min: 1, max: 3 } }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 }
        }
      }
    }
  }, [mode])

  if (!isReady) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0"
    />
  )
}

export default BackgroundParticles
