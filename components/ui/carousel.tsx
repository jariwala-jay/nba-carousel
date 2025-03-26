'use client';

import { useState, useEffect, Children, ReactNode,useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  children: ReactNode;
  autoAdvance?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
}

export function Carousel({
  children,
  autoAdvance = true,
  interval = 5000,
  showControls = true,
  showDots = true,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const slides = Children.toArray(children);

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoAdvance || isHovered) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoAdvance, interval, isHovered]);

  const containerRef = useRef<HTMLDivElement>(null);

  useGesture(
    {
      onDrag: ({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > 100) {
          cancel?.();
          xDir > 0 ? handlePrev() : handleNext();
        }
      }
    },
    {
      target: containerRef,
      drag: {
        filterTaps: true,
        threshold: 10
      }
    }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] md:h-[50vh] lg:h-[70vh] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction === 'right' ? '100%' : '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'right' ? '-100%' : '100%' }}
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 'right' : 'left');
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function Slide({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="max-w-7xl w-full px-4">{children}</div>
    </div>
  );
}
