import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 6 + 2, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-red-800 to-blue-700 overflow-hidden">
      {/* 💫 Particle Background */}
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* 🖼 Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-90 mb-12 z-10 drop-shadow-xl animate-fade-in"
      />

      {/* 🌀 Circular Loader */}
      <div className="relative w-30 h-30 z-10">
        <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 160 160">
       
          <circle
            cx="80"
            cy="80"
            r="65"
            stroke="url(#orangePinkGradient)"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 65}`}
            strokeDashoffset={`${2 * Math.PI * 65 * (1 - progress / 100)}`}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="orangePinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {/* 💎 Inner Glass Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg shadow-inner  animate-pulse" />
        </div>
      </div>

      {/* 📊 Progress Text */}
      <div className="mt-10 text-white font-semibold text-2xl tracking-widest drop-shadow-md z-10">
        {Math.round(progress)}%
      </div>

      {/* 🌐 Tagline */}
      <div className="mt-2 text-white text-base sm:text-lg font-light tracking-wide z-10">
        Loading your experience...
      </div>
    </div>
  );
};

export default Loader;
