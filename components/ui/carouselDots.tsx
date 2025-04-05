'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface CarouselDotsProps {
  slides: ReactNode[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setDirection: (direction: 'left' | 'right') => void;
  isMobile: boolean;
}

const previewImages = [
  '/assets/images/previews/slide1.png',
  '/assets/images/previews/slide2.png',
  '/assets/images/previews/slide3.png',
  '/assets/images/previews/slide4.png',
];

export default function CarouselDots({
  slides,
  activeIndex,
  setActiveIndex,
  setDirection,
  isMobile,
}: CarouselDotsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
      {slides.map((_, index) => (
        <div key={index} className="relative group flex flex-col items-center">
          <motion.button
            onClick={() => {
              setDirection(index > activeIndex ? 'right' : 'left');
              setActiveIndex(index);
              setHoveredIndex(null);
            }}
            className={`w-3 h-3 rounded-full transition-all ease-in-out duration-10 ${
              index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.4, y: -5, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.05 } }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
          {!isMobile && hoveredIndex === index && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`preview-${index}`}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="absolute -top-[125px] w-[200px] h-[111px] z-50 pointer-events-none"
              >
                <div className="relative flex flex-col items-center rounded-xl overflow-hidden border border-gray-300 shadow-lg bg-white/20 backdrop-blur-lg">
                  <Image
                    src={previewImages[index]}
                    alt={`Slide ${index + 1} preview`}
                    width={200}
                    height={111}
                    quality={90}
                    priority
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}
