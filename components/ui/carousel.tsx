'use client';

import { useState, useEffect, Children, ReactNode, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import CarouselDots from './carouselDots';

// ---------- Types ----------
interface CarouselProps {
  children: ReactNode;
  autoAdvance?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
}

// ---------- Constants ----------
const slideVariants = {
  enter: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: 'left' | 'right') => ({ x: direction === 'right' ? '-100%' : '100%', opacity: 0 }),
};

// ---------- Chevron Icons ----------
const ChevronLeft = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRight = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


// ---------- Main Carousel ----------
export function Carousel({ children, autoAdvance = true, interval = 5000, showControls = true, showDots = true }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const slides = Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!autoAdvance || isHovered) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoAdvance, interval, isHovered]);

  useGesture(
    {
      onDrag: ({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > 100) {
          cancel?.();
          xDir > 0 ? handlePrev() : handleNext();
        }
      },
    },
    {
      target: containerRef,
      drag: { filterTaps: true, threshold: 10 },
    }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] md:h-[50vh] lg:h-[70vh] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {slides[activeIndex]}
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <div className="absolute inset-0 flex items-center justify-between px-4 text-white">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all z-10 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all z-10 hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {showDots && slides.length > 1 && (
  <CarouselDots
  slides={slides}
  activeIndex={activeIndex}
  setActiveIndex={setActiveIndex}
  setDirection={setDirection}
  isMobile={isMobile}
/>
      )}
    </div>
  );
}

// ---------- Slide Wrapper ----------
export const Slide = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`w-full h-full flex items-center justify-center ${className}`}>
    <div className="max-w-7xl w-full px-4">{children}</div>
  </div>
);