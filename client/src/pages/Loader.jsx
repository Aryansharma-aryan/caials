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
          }, 300);
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
        className="w-38 mb-8 z-10 drop-shadow-xl animate-fade-in"
      />

      {/* 🍩 Doughnut Spinner */}
      <div className="relative w-16 h-16 mb-4 z-10">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-red-500 animate-spin"></div>
      </div>

      {/* 📊 Progress Bar (Optional below spinner) */}
      <div className="w-94 h-8 bg-white/20 rounded-full overflow-hidden z-10 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-yellow-300 via-red-500 to-orange-600 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-4 text-sm font-medium tracking-wider text-white z-10 animate-pulse">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
