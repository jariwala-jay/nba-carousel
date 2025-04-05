// HeroCarousel.tsx
"use client";

import { Carousel } from "@/components/ui/carousel";
import { slidesData } from "./slides/SlideData"; 

export function HeroCarousel() {
  return (
    <Carousel autoAdvance interval={7000}>
      {slidesData.map((slide) => {
        const SlideComponent = slide.component; 
        return <SlideComponent key={slide.id} />; 
      })}
    </Carousel>
  );
}
