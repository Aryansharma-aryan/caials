import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroImg1 from "../assets/HeroImg.png";
import HeroImg2 from "../assets/Hero3.png";
import HeroImg3 from "../assets/heroo.png";

// 🚀 Pre-load images for instant switching
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const images = [HeroImg1, HeroImg2, HeroImg3];

// 🎯 Optimized animation variants to prevent re-creation
const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const transition = { duration: 1 };

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 🚀 Preload all images on component mount
  useEffect(() => {
    preloadImages(images);
    // Set a small delay to ensure images are cached
    const timer = setTimeout(() => setImagesLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 🎯 Memoized next index function to prevent re-creation
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  // ⚡ Carousel interval with cleanup
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [imagesLoaded, goToNext]);

  // 🎨 Memoized background style to prevent recalculation
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: "blur(4px)",
    transform: "scale(1.05)",
    // 🚀 Add these for better performance
    willChange: 'opacity',
    backfaceVisibility: 'hidden',
  }), [currentIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🔄 Ultra-fast Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute inset-0 z-0"
          style={backgroundStyle}
          // 🚀 Performance optimizations
          data-testid={`hero-bg-${currentIndex}`}
        />
      </AnimatePresence>

      {/* 🌈 Optimized gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"
        style={{ willChange: 'auto' }}
      />

      {/* ✨ Foreground Content with performance optimizations */}
      <div className="relative z-10 flex items-center h-full w-full px-6 md:px-16 lg:px-28">
        <div className="max-w-3xl text-white space-y-6">
          <p className="uppercase text-sm tracking-widest text-yellow-300 font-bold">
            California Immigration & Legal Services
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-red-500">Your Gateway to </span>
            <TypeAnimation
              sequence={[
                "Visa Assistance.",
                2000,
                "Study Abroad.",
                2000,
                "Work Opportunities.",
                2000,
                "Legal Guidance.",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor={false}
              className="inline"
              // 🚀 Prevent layout shifts
              style={{ minHeight: '1.2em', display: 'inline-block' }}
            />
          </h1>

          <p className="text-lg text-gray-200 max-w-xl">
            <span className="text-white font-medium">
              Trusted advisors helping you immigrate, study, or work abroad.
            </span>{" "}
            Turn your international dream into reality with{" "}
            <span className="text-red-400 font-semibold">unmatched guidance</span> and{" "}
            <span className="text-red-400 font-semibold">legal support</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
           <Link
  to="../consultancy"
  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-colors duration-200 inline-block text-center"
  style={{ willChange: 'background-color' }}
>
  Get Free Consultation
</Link>

            <button 
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
              style={{ willChange: 'background-color, color' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* 🚀 Optional: Preload indicator (remove in production) */}
      {!imagesLoaded && (
        <div className="absolute top-4 right-4 z-20 text-white text-xs opacity-50">
          Loading...
        </div>
      )}
    </section>
  );
}