import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Share2 } from "lucide-react"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  category?: string
  readTime?: string
}

export function BlogModal({ isOpen, onClose, title, content, category, readTime }: BlogModalProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setScrollProgress(0)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Check out this article: ${title}`,
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          navigator.clipboard.writeText(window.location.href)
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const scrollToHeading = (heading: string) => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll("h2")
      elements.forEach((el) => {
        if (el.textContent === heading) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }
  }

  // Extract headings for table of contents
  const headings = content.match(/^## .+$/gm)?.map((h) => h.replace("## ", "")) || []

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="fixed left-1/2 top-1/2 z-[200] flex h-[85vh] w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-zinc-800">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 pt-6">
              <div className="flex flex-col gap-2 pr-4">
                <div className="flex items-center gap-2">
                  {category && (
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">
                      {category}
                    </span>
                  )}
                  {readTime && <span className="text-xs text-gray-500">{readTime}</span>}
                </div>
                <h2 className="text-xl font-bold text-white sm:text-2xl text-balance">{title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-gray-300 transition-colors hover:bg-zinc-700"
                  aria-label="Share article"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-gray-300 transition-colors hover:bg-zinc-700"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {headings.length > 2 && (
              <div className="border-b border-white/10 px-6 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-gray-500">Jump to:</span>
                  {headings.slice(0, 5).map((heading, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToHeading(heading)}
                      className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-white hover:text-black"
                    >
                      {heading.length > 25 ? heading.slice(0, 25) + "..." : heading}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-6 py-8 sm:px-10"
              style={{ scrollbarWidth: 'thin' }}
            >
              <article className="max-w-none">
                <div
                  className="text-gray-400 leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: formatContent(content) }}
                />
              </article>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function formatContent(content: string): string {
  // First wrap everything in paragraphs, then apply other formatting
  let formatted = '<p class="mb-4">' + content + '</p>'

  formatted = formatted
    .replace(/^### (.+)$/gm, '</p><h3 class="text-lg font-semibold text-white mt-8 mb-3">$1</h3><p class="mb-4">')
    .replace(/^## (.+)$/gm, '</p><h2 class="text-xl font-bold text-white mt-10 mb-4 scroll-mt-4">$1</h2><p class="mb-4">')
    .replace(/^# (.+)$/gm, '</p><h1 class="text-2xl font-bold text-white mb-6 hidden">$1</h1><p class="mb-4">')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-gray-300">$1</em>')
    .replace(/^- (.+)$/gm, '</p><li class="ml-6 list-disc mb-2 text-gray-300">$1</li><p class="mb-4">')
    .replace(/^(\d+)\. (.+)$/gm, '</p><li class="ml-6 list-decimal mb-2 text-gray-300">$2</li><p class="mb-4">')
    .replace(/`(.+?)`/g, '<code class="bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-white">$1</code>')
    .replace(
      /^> (.+)$/gm,
      '</p><blockquote class="border-l-4 border-white/30 pl-4 italic my-6 text-gray-300">$1</blockquote><p class="mb-4">',
    )
    .replace(/---/g, '</p><hr class="my-8 border-white/10" /><p class="mb-4">')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/<p class="mb-4"><\/p>/g, '') // Remove empty paragraphs

  return formatted
}
