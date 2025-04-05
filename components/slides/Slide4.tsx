// slides/Slide4.tsx
import { Slide } from "@/components/ui/carousel";
import Image from "next/image";

export function Slide4() {
  return (
    <Slide className="relative w-full h-[40vh] md:h-[70vh] bg-cover">
      <div className="absolute inset-0 hidden md:block bg-[url('/assets/images/nba_kia.jpeg')] bg-cover" />
      <Image
        src="/assets/images/nba_kia.jpeg"
        alt="KIA NBA"
        fill
        className="block md:hidden object-contain"
      />
    </Slide>
  );
}
