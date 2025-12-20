import { useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cosmo3DOrbit } from './Cosmo3DOrbit'
import { ProjectModal } from './ProjectModal'
import { projects } from '../data/projects'

interface AtlasModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AtlasModal({ isOpen, onClose }: AtlasModalProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)

  if (!isOpen) return null

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex)
  }

  const handleProjectModalClose = () => {
    setSelectedProjectIndex(null)
  }

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm">
        {/* Close Button - Top Left */}
        <button
          onClick={onClose}
          className="fixed top-8 left-8 z-[101] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          aria-label="Close Atlas"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Modal Content */}
        <div className="w-full h-full overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-start p-4">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mb-0 pt-4 max-w-2xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/grease.png"
                    alt="Grease"
                    className="w-20 h-20 rounded-lg object-cover border border-white/20"
                  />
                </div>

                {/* Quote Text */}
                <div className="flex-1">
                  <p className="text-base md:text-lg text-gray-200 italic leading-relaxed mb-2">
                    "We take the pressure and we throw away, conventionality belongs to yesterday."
                  </p>
                  <p className="text-gray-500 text-sm">— Frankie Valli</p>
                </div>
              </div>
            </motion.div>

            {/* 3D Orbit */}
            <div className="w-full max-w-7xl">
              <Cosmo3DOrbit onProjectClick={handleProjectClick} />
            </div>

            {/* Optional: Instructions */}
            <div className="text-center mt-8 pb-20 text-gray-500 text-sm">
              <p>Drag to rotate • Scroll to zoom • Click images to explore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProjectIndex !== null}
        onClose={handleProjectModalClose}
      />
    </>
  )
}
