"use client"
import { useState, useEffect, useRef } from 'react';
import { Carousel, Slide } from '@/components/ui/carousel';
import Image from 'next/image';
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import Link from 'next/link';
import { BackgroundGradient } from "./ui/background-gradient";

export function HeroCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg: breakpoint (1024px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel autoAdvance interval={7000}>
      {/* Video Slide */}
      {isMobile ? (
        <div className="w-full h-[40vh] md:h-[70vh] flex items-center bg-[url('/assets/images/bg1.jpeg')] bg-cover bg-center">
        <div className="container px-4 h-full">
          <div className="h-full flex flex-row items-center gap-2 md:gap-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0.0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="flex-1 min-w-[55%] text-white  pl-[2%] sm:pl-[10%] md:pl-[10%]"
            >
              <h2 className="text-lg md:text-3xl lg:text-4xl font-bold leading-tight [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)]">
                <span className="block">MOMENTS:</span>
                <span className="block">MINT CONDITION</span>
                <span className="block">EVERYTIME</span>
              </h2>
              <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 opacity-90 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                Collect, compete, and unlock rewards
              </p>
              <div className="mt-2 md:mt-4">
                <Link href="https://nbatopshot.com/" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block bg-white text-black px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-bold shadow-sm"
                  >
                    Explore Moments
                  </motion.a>
                </Link>
              </div>
            </motion.div>

            {/* Video Card */}
            <div className="flex-1 max-w-[45%] h-[25vh] md:h-[50vh]">
              <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/iconic.mp4" type="video/mp4" />
                </video>
              </div>

            </div>
          </div>
        </div>
      </div>

       ):(
        <div className="w-full h-[80vh] flex items-center justify-center bg-[url('/assets/images/bg1.jpeg')]">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              
              <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="px-4 z-10 text-white"
        >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block">MOMENTS:</span>
                <span className="block">MINT CONDITION</span>
                <span className="block">EVERYTIME</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-md">
                Collect, compete, and unlock rewards with premium digital collectibles.
              </p>
              <Link 
  href="https://nbatopshot.com/" 
  passHref
  legacyBehavior
>
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg mt-4"
  >
    Explore Moments
  </motion.a>
</Link>
        </motion.div>
            </div>
  
            {/* Video Card */}
            <BackgroundGradient>
            <div className="relative group">

              
              <div className="relative aspect-[1/1] bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/iconic.mp4" type="video/mp4" />
                  Your browser doesn't support HTML5 video.
                </video>
              </div>
            </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
      
      )}

      {/* Second Slide: Minimalistic Offer */}
      <Slide className="relative w-full h-[40vh] md:h-[70vh] bg-[url('/assets/images/players_bg.jpeg')] bg-cover">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.3)_90%)]"></div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center justify-center px-4 text-white text-center"
        >
          <h1 className="text-xl md:text-5xl font-bold">
            Own Legendary NBA Moments
          </h1>
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

      {/* Third Slide - Conditional Rendering */}
      {isMobile ? (
        // Show this slide only on mobile screens
      <Slide className="bg-gradient-to-br from-black to-blue-900 h-[40vh] md:h-[70vh]">
          <div
    className={cn(
      "absolute inset-0",
      "[background-size:20px_20px]",
      "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      "z-0"
    )}
  />
  
  {/* Dark overlay - adjusted to not interfere with dots */}
  <div className="pointer-events-none absolute inset-0 bg-black/30 z-0"></div>
    <div className='ml-[5%] sm:ml-[15%] md:ml-[20%]'>
      <div className="container px-4 h-full flex flex-row items-center justify-between gap-2 md:gap-8">
        <div className="flex-1 max-w-[45%] h-[30vh] md:h-[50vh]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/players.png"
              alt="Reward Pack"
              fill
              className="object-contain"
              priority
            />
          </div>
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
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)]">
            5-STAR LINEUP
          </h1>
          <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 opacity-90 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
            Earn legendary players
          </p>
          <div className="mt-2 md:mt-4 flex gap-2">
            <Link href="https://nbatopshot.com/" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-blue-500 text-black px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-sm rounded-full font-bold"
              >
                Get Pack
              </motion.a>
            </Link>
            <Link href="https://nbatopshot.com/challenges" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block border border-white px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-sm rounded-full font-bold"
              >
                Challenges
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
      </div>
    </Slide>
      ) : (
        // Show this slide only on large screens
        <Slide className="bg-gradient-to-br from-black to-blue-900 relative">
  {/* Dotted background layer - now properly behind content */}
  <div
    className={cn(
      "absolute inset-0",
      "[background-size:20px_20px]",
      "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      "z-0"
    )}
  />
  
  {/* Dark overlay - adjusted to not interfere with dots */}
  <div className="pointer-events-none absolute inset-0 bg-black/30 z-0"></div>

  {/* Content with higher z-index */}
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="relative px-4 z-10 text-white"
  >
    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
    <div className="relative h-96 lg:h-full">
  {/* Animated Radial Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_10%)] animate-[pulse_6s_ease-in-out_infinite]"></div>
  </div>

  {/* Image with Dual Glow Effects */}
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
      
      <div className="text-white space-y-6">
      
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

      )}
      {/* Fourth Slide: Full Image Display */}
      <Slide className="relative w-full h-[40vh] md:h-[70vh] bg-cover">
        <div className="absolute inset-0 hidden md:block bg-[url('/assets/images/nba_kia.jpeg')] bg-cover"></div>
        <Image
          src="/assets/images/nba_kia.jpeg"
          alt="KIA NBA"
          layout="fill"
          objectFit="contain"
          className="block md:hidden"
        />


      </Slide>
    </Carousel>
  );
}
