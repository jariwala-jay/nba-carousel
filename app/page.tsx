import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  return (
    <div className="bg-black w-[100vw] h-[100vh]">
    <main className="max-w-[1440px] mx-auto">
    <HeroCarousel />
    
  </main>
  </div>
  );
}
