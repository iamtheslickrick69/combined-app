import React, { useState, useRef, useEffect } from 'react'
import { Archive, Menu, ChevronRight, ExternalLink, ChevronLeft, Folder } from 'lucide-react'
import { ProjectModal } from './ProjectModal'
import { projects } from '../data/projects'

interface CardSettings {
  id: number
  title: string
  subtitle: string
  date: string
  dateLabel: string
  image: string
  visible: boolean
  order: number
  borderRadius: 'none' | 'soft' | 'rounded' | 'pill'
  filter: 'none' | 'grayscale' | 'sepia' | 'blur' | 'brightness' | 'contrast'
  imageHeight: number
  glassmorphism: boolean
  fontStyle: 'default' | 'serif' | 'mono' | 'display'
  showDate: boolean
  linkUrl: string
  buttonText: string
  showButton: boolean
}

const initialCards: CardSettings[] = [
  {
    id: 1,
    title: 'PayPro',
    subtitle: 'Payment processing with real merchant results',
    date: 'December 19, 2024',
    dateLabel: 'Dec 19',
    image: '/references/paypro-stats.png',
    visible: true,
    order: 0,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 2,
    title: 'BeeHive Rental & Sales',
    subtitle: 'Professional equipment for every project',
    date: 'December 18, 2024',
    dateLabel: 'Dec 18',
    image: '/references/beehive-equipment.png',
    visible: true,
    order: 1,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 3,
    title: 'Haestus',
    subtitle: 'The age of AI is the rematch between David and Goliath',
    date: 'December 17, 2024',
    dateLabel: 'Dec 17',
    image: '/references/haestus-hero.png',
    visible: true,
    order: 2,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 4,
    title: 'TireMax AI',
    subtitle: 'Take your tire shopping experience to the MAX',
    date: 'December 16, 2024',
    dateLabel: 'Dec 16',
    image: '/references/tiremax-ai.png',
    visible: true,
    order: 3,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 5,
    title: 'LoopSync / Coro',
    subtitle: 'The #1 platform to collect real feedback from employees',
    date: 'December 15, 2024',
    dateLabel: 'Dec 15',
    image: '/references/loopsync-coro.png',
    visible: true,
    order: 4,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 6,
    title: 'CBSC Screen Cleaners',
    subtitle: 'Simple from design to delivery - NASA-inspired technology',
    date: 'December 14, 2024',
    dateLabel: 'Dec 14',
    image: '/references/cbsc-cleaners.png',
    visible: true,
    order: 5,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 7,
    title: 'Haestus Services',
    subtitle: 'Transform your business with AI consulting',
    date: 'December 13, 2024',
    dateLabel: 'Dec 13',
    image: '/references/haestus-services.png',
    visible: true,
    order: 6,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
  {
    id: 8,
    title: 'Promptlee',
    subtitle: 'Supercharge your prompts - anyone can build',
    date: 'December 12, 2024',
    dateLabel: 'Dec 12',
    image: '/references/promptlee-tool.png',
    visible: true,
    order: 7,
    borderRadius: 'soft',
    filter: 'none',
    imageHeight: 78,
    glassmorphism: false,
    fontStyle: 'default',
    showDate: true,
    linkUrl: '',
    buttonText: 'View Project',
    showButton: false,
  },
]

// Helper functions for card styling
const getBorderRadius = (radius: CardSettings['borderRadius']) => {
  switch (radius) {
    case 'none':
      return 'rounded-none'
    case 'soft':
      return 'rounded-lg'
    case 'rounded':
      return 'rounded-2xl'
    case 'pill':
      return 'rounded-3xl'
    default:
      return ''
  }
}

const getFilter = (filter: CardSettings['filter']) => {
  switch (filter) {
    case 'grayscale':
      return 'grayscale'
    case 'sepia':
      return 'sepia'
    case 'blur':
      return 'blur-[1px]'
    case 'brightness':
      return 'brightness-110'
    case 'contrast':
      return 'contrast-110'
    default:
      return ''
  }
}

const getFontClass = (fontStyle: CardSettings['fontStyle']) => {
  switch (fontStyle) {
    case 'serif':
      return 'font-serif'
    case 'mono':
      return 'font-mono'
    case 'display':
      return 'font-sans tracking-tight'
    default:
      return 'font-sans'
  }
}

interface PortfolioCarouselProps {
  onAtlasClick?: () => void
}

export function PortfolioCarousel({ onAtlasClick }: PortfolioCarouselProps = {}) {
  const [cards] = useState<CardSettings[]>(initialCards)
  const [position, setPosition] = useState(0)
  const [viewMode, setViewMode] = useState<'stack' | 'list'>('stack')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHoveringCards, setIsHoveringCards] = useState(false)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsAreaRef = useRef<HTMLDivElement>(null)

  // Filter visible cards
  const visibleCards = cards.filter((c) => c.visible)

  const handleScroll = (e: WheelEvent) => {
    if (viewMode !== 'stack') return
    e.preventDefault()

    const scrollSensitivity = 0.01
    const delta = e.deltaY * scrollSensitivity

    setPosition((prev) => {
      let newPosition = prev + delta
      const totalCards = visibleCards.length

      // Wrap around using modulo
      while (newPosition < 0) {
        newPosition += totalCards
      }
      while (newPosition >= totalCards) {
        newPosition -= totalCards
      }

      return newPosition
    })
  }

  useEffect(() => {
    const cardsArea = cardsAreaRef.current
    if (cardsArea && viewMode === 'stack') {
      cardsArea.addEventListener('wheel', handleScroll, { passive: false })
      return () => cardsArea.removeEventListener('wheel', handleScroll)
    }
  }, [viewMode, visibleCards.length])

  const handleTimelineClick = (index: number) => {
    setPosition(index)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleCardClick = (cardIndex: number) => {
    // Map card index to project index (cycle through 8 projects)
    const projectIndex = cardIndex % projects.length
    setSelectedProjectIndex(projectIndex)
  }

  const handleProjectModalClose = () => {
    setSelectedProjectIndex(null)
  }

  const handlePrevious = () => {
    setPosition((prev) => {
      const newPos = prev - 1
      return newPos < 0 ? visibleCards.length - 1 : newPos
    })
  }

  const handleNext = () => {
    setPosition((prev) => {
      const newPos = prev + 1
      return newPos >= visibleCards.length ? 0 : newPos
    })
  }

  const activeIndex = Math.round(position) % visibleCards.length

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 bg-black"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <h2 className="text-3xl font-semibold text-white">Portfolio</h2>

          <div className="flex items-center gap-6">
            {/* Arrow Navigation */}
            {viewMode === 'stack' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5 text-white/70" />
                </button>
                <span className="text-sm text-gray-500 min-w-[60px] text-center">
                  {activeIndex + 1} / {visibleCards.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5 text-white/70" />
                </button>
              </div>
            )}

            {/* Unified View Toggle & Atlas */}
            <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'stack' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('stack')}
                aria-label="Stack view"
              >
                <Archive className="h-5 w-5 text-white/70" />
              </button>
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <Menu className="h-5 w-5 text-white/70" />
              </button>
              {onAtlasClick && (
                <button
                  onClick={onAtlasClick}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Open Atlas 3D"
                >
                  <Folder className="h-5 w-5 text-white/70" />
                  <span className="text-sm font-medium text-white/70">Atlas (3D)</span>
                </button>
              )}
            </div>
          </div>
        </div>

      {viewMode === 'stack' ? (
        <>
          {/* Cards Stack */}
          <div
            ref={cardsAreaRef}
            className="relative flex items-center justify-center h-[620px] mx-auto max-w-[1000px] overflow-hidden"
            style={{ perspective: '1500px' }}
            onMouseEnter={() => setIsHoveringCards(true)}
            onMouseLeave={() => setIsHoveringCards(false)}
          >
            <div className="relative h-[600px] w-[850px]" style={{ transformStyle: 'preserve-3d' }}>
              {visibleCards.map((card, index) => {
                // Calculate circular distance from active position
                const rawDistance = index - position
                let distanceFromActive = rawDistance

                // Wrap distance for circular scrolling
                const halfLength = visibleCards.length / 2
                if (distanceFromActive > halfLength) {
                  distanceFromActive -= visibleCards.length
                } else if (distanceFromActive < -halfLength) {
                  distanceFromActive += visibleCards.length
                }

                // Only render cards in visible range
                if (distanceFromActive < -2 || distanceFromActive > 6) {
                  return null
                }

                const isBehind = distanceFromActive > 0

                const translateZ = distanceFromActive * -60
                const translateY = distanceFromActive * -30
                const scale = 1 - Math.abs(distanceFromActive) * 0.03

                return (
                  <div
                    key={card.id}
                    className="absolute inset-0"
                    style={{
                      transform: `translateZ(${translateZ}px) translateY(${translateY}px) scale(${Math.max(0.7, scale)})`,
                      zIndex: Math.round((visibleCards.length - Math.abs(distanceFromActive)) * 10),
                      transition: 'transform 0.15s ease-out',
                      pointerEvents: Math.abs(distanceFromActive) < 0.5 ? 'auto' : 'none',
                    }}
                    onClick={() => {
                      if (Math.abs(distanceFromActive) < 0.5) {
                        handleCardClick(index)
                      }
                    }}
                  >
                    <div
                      className={`h-full w-full overflow-hidden shadow-2xl ${getBorderRadius(card.borderRadius)} ${
                        card.glassmorphism ? 'border border-white/20 bg-white/10 backdrop-blur-xl' : 'bg-zinc-900 border border-white/10'
                      }`}
                    >
                      <div
                        className="relative overflow-hidden bg-black rounded-t-lg"
                        style={{ height: `${card.imageHeight}%` }}
                      >
                        <img
                          src={card.image || '/placeholder.svg'}
                          alt={card.title}
                          className={`h-full w-full object-cover ${getFilter(card.filter)}`}
                        />
                        {isBehind && (
                          <div
                            className="absolute inset-0 bg-black"
                            style={{
                              opacity: Math.min(0.3, Math.abs(distanceFromActive) * 0.08),
                            }}
                          />
                        )}
                      </div>
                      <div className="px-6 py-4 bg-white border-t-2 border-white/40 shadow-[0_-4px_20px_rgba(255,255,255,0.3)]" style={{ backdropFilter: 'blur(10px)', height: `${100 - card.imageHeight}%` }}>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h2
                              className={`text-2xl font-semibold tracking-tight text-black leading-tight ${getFontClass(card.fontStyle)}`}
                            >
                              {card.title}
                            </h2>
                            <p className={`mt-1 text-sm text-gray-700 leading-snug ${getFontClass(card.fontStyle)}`}>
                              {card.subtitle}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCardClick(index)
                            }}
                            className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105 shadow-lg shrink-0"
                          >
                            {card.title}
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Instruction Text */}
          <div className="text-center mt-8 text-sm text-gray-600">
            Hover over cards and scroll to navigate
          </div>
        </>
      ) : (
        <>
          <div className="divide-y divide-white/10">
            {visibleCards.map((card, index) => (
              <button
                key={card.id}
                className="group flex w-full items-center gap-6 py-4 text-left transition-colors hover:bg-white/5"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  handleCardClick(index)
                }}
              >
                <span className="w-32 shrink-0 text-sm text-gray-600">
                  {card.date.split(',')[0]}, {card.date.split(',')[1]?.trim().split(' ')[0]}
                </span>
                <span className="min-w-0 shrink-0 font-medium text-white" style={{ width: '280px' }}>
                  {card.title}
                </span>
                <span className="min-w-0 flex-1 text-gray-400">{card.subtitle}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-gray-700 transition-transform group-hover:translate-x-1 group-hover:text-gray-500" />
              </button>
            ))}
          </div>

          {/* Floating preview image */}
          {hoveredIndex !== null && visibleCards[hoveredIndex] && (
            <div
              className="pointer-events-none fixed z-50 overflow-hidden rounded-lg shadow-2xl transition-opacity duration-200 border border-white/20"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 100,
                width: 280,
                height: 180,
              }}
            >
              <img
                src={visibleCards[hoveredIndex].image || '/placeholder.svg'}
                alt={visibleCards[hoveredIndex].title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </>
      )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProjectIndex !== null ? projects[selectedProjectIndex] : null}
        isOpen={selectedProjectIndex !== null}
        onClose={handleProjectModalClose}
      />
    </div>
  )
}
