"use client";

import { Slide } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "../hooks/useIsMobile";

export const Slide3 = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <Slide className="bg-gradient-to-br from-black to-blue-900 h-[40vh] md:h-[70vh]">
      <div className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        "z-0"
      )} />

      <div className="pointer-events-none absolute inset-0 bg-black/30 z-0"></div>

      <div className="ml-[5%] sm:ml-[15%] md:ml-[20%]">
        <div className="container px-4 h-full flex flex-row items-center justify-between gap-2 md:gap-8">
          <div className="flex-1 max-w-[45%] h-[30vh] md:h-[50vh] relative">
            <Image
              src="/assets/images/players.png"
              alt="Reward Pack"
              fill
              className="object-contain"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="flex-1 min-w-[55%] text-white z-10"
          >
            <span className="inline-block bg-blue-500 text-black px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm rounded-full font-bold mb-1 md:mb-2">
              REWARD PACK
            </span>
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-shadow">
              5-STAR LINEUP
            </h1>
            <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 opacity-90 text-shadow">
              Earn legendary players
            </p>
            <div className="mt-2 md:mt-4 flex gap-2">
              <Link href="https://nbatopshot.com/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-blue-500 text-black px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-sm rounded-full font-bold"
                >
                  Get Pack
                </motion.button>
              </Link>
              <Link href="https://nbatopshot.com/challenges">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block border border-white px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-sm rounded-full font-bold"
                >
                  Challenges
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  ) : (
    <Slide className="bg-gradient-to-br from-black to-blue-900 relative">
      <div className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        "z-0"
      )} />
      <div className="pointer-events-none absolute inset-0 bg-black/30 z-0"></div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative px-4 z-10 text-white"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_10%)] animate-[pulse_6s_ease-in-out_infinite]"></div>
            </div>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 [filter:drop-shadow(0_0_15px_rgba(255,255,255,0.7))]"></div>
              <Image
                src="/assets/images/players.png"
                alt="Mountain Dew x NBA - 5 Player Alliance"
                fill
                className="object-contain [filter:drop-shadow(0_0_30px_rgba(255,255,255,0.3))]"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block">
              EXCLUSIVE REWARD PACK
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">
              UNLOCK THE <span className="text-blue-400">ULTIMATE 5-STAR LINEUP</span>
            </h1>
            <p className="text-xl">
              Complete challenges, earn rare rewards, and add legendary NBA players to your collection.  
              This limited-time <b>Reward Pack</b> won't last forever—secure yours now!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://nbatopshot.com/">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all"
                >
                  Get Your Reward Pack →
                </motion.button>
              </Link>
              <Link href="https://nbatopshot.com/challenges">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white px-6 py-3 rounded-full font-bold transition-all"
                >
                  Explore Challenges
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};
