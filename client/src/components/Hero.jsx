import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroImg1 from "../assets/HeroImg.png";
import HeroImg2 from "../assets/Hero3.png";
import HeroImg3 from "../assets/heroo.png";

const images = [HeroImg1, HeroImg2, HeroImg3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🔄 Blurred Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            filter: "blur(4px)", // nice blur
            transform: "scale(1.05)", // subtle zoom to avoid border artifacts
          }}
        />
      </AnimatePresence>

      {/* Overlay to darken slightly for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* ✨ Foreground Content */}
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
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}