// slides/Slide2.tsx
import { Slide } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";

export function Slide2() {
  return (
    <Slide className="relative w-full h-[40vh] md:h-[70vh] bg-[url('/assets/images/players_bg.jpeg')] bg-cover">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.3)_90%)]" />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-4 text-white text-center"
      >
        <h1 className="text-xl md:text-5xl font-bold">Own Legendary NBA Moments</h1>
        <p className="text-[10px] md:text-xl mt-2">
          Limited-time offer on exclusive collectible moments. Get yours today.
        </p>
        <Link href="https://nbatopshot.com/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg mt-4 text-[10px] md:text-lg"
          >
            Start Collecting
          </motion.button>
        </Link>
      </motion.div>
    </Slide>
  );
}
