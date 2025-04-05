import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { Slide } from "@/components/ui/carousel";


export const Slide1=()=>{
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <>
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
      ) : (
        <Slide className="w-full h-[80vh] flex items-center justify-center bg-[url('/assets/images/bg1.jpeg')]">
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
                    Collect, compete, and unlock rewards with premium digital
                    collectibles.
                  </p>
                  <Link href="https://nbatopshot.com/" passHref legacyBehavior>
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
                      <source
                        src="/assets/videos/iconic.mp4"
                        type="video/mp4"
                      />
                      Your browser doesn't support HTML5 video.
                    </video>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        </Slide>
      )}
      )
    </>
  );
}
