import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

export function BeforeAfterSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isLocked, setIsLocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    if (isLocked && !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLocked) {
      setIsLocked(true);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLocked) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 px-6 py-3 rounded-md bg-[#3a3a3a] border border-white/10 hover:bg-[#4a4a4a] hover:border-white/20 transition-all duration-200 shadow-lg"
      >
        <Eye className="w-4 h-4 text-[#0cc0df]" />
        <span className="text-base font-medium text-white">
          See the Difference
        </span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Caption */}
              <p className="text-center text-sm text-gray-400 mb-4">
                {isLocked ? 'Drag to compare — Click to unlock' : 'Hover to compare — Click to lock'}
              </p>

              {/* Slider Container */}
              <div
                ref={containerRef}
                className="relative w-full aspect-[2/1] rounded-xl overflow-hidden cursor-ew-resize border border-white/20 select-none shadow-2xl"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* After Image (Background) */}
                <img
                  src="/after.png"
                  alt="After"
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  draggable={false}
                />

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/before.png"
                    alt="Before"
                    className="absolute inset-0 h-full object-contain bg-black"
                    style={{ width: `${containerRef.current?.offsetWidth || 100}px`, maxWidth: 'none' }}
                    draggable={false}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Handle Grip */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5 transition-transform ${isDragging ? 'scale-110' : ''}`}>
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
