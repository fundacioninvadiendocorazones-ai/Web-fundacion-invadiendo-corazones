import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const HeartSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro animation in this browser session
    const hasSeenSplash = sessionStorage.getItem('invadiendo_corazones_splash_seen');
    if (!hasSeenSplash) {
      setIsVisible(true);
      sessionStorage.setItem('invadiendo_corazones_splash_seen', 'true');

      // Begin graceful exit transition after 2.6 seconds
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 2600);

      // Unmount after transition finishes (700ms)
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3300);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  const handleDismiss = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F2] select-none transition-all duration-700 ease-out cursor-pointer ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Animación de bienvenida de Fundación Invadiendo Corazones"
      role="banner"
    >
      {/* Background ambient warm illumination */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-radial from-[#FADCD5]/70 via-[#F7ECE1]/40 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-6 text-center max-w-lg mx-auto">
        
        {/* Pulsing Concentric Ripple Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -mt-10 sm:-mt-12">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-[#E03338]/30 animate-ripple-1" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -mt-10 sm:-mt-12">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-[#E03338]/25 animate-ripple-2" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -mt-10 sm:-mt-12">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-[#E03338]/15 animate-ripple-3" />
        </div>

        {/* Big Animated Red Heart */}
        <div className="relative z-10 animate-heartbeat-big flex items-center justify-center mb-8">
          <svg
            viewBox="0 0 24 24"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 drop-shadow-[0_15px_35px_rgba(217,72,72,0.45)]"
          >
            <defs>
              <linearGradient id="heartGradientSplash" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#FF4A4A" />
                <stop offset="45%" stopColor="#E02930" />
                <stop offset="85%" stopColor="#C41C23" />
                <stop offset="100%" stopColor="#9C1117" />
              </linearGradient>

              {/* Gloss highlight gradient */}
              <linearGradient id="heartGloss" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Base Heart */}
            <path
              fill="url(#heartGradientSplash)"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />

            {/* Inner heart soft light */}
            <path
              fill="url(#heartGloss)"
              d="M12 4.8c-.85-.95-2.07-1.55-3.45-1.55-2.4 0-4.3 1.9-4.3 4.3 0 2.8 2.5 5.2 6.5 8.9.4.4.8.8 1.25 1.15.45-.35.85-.75 1.25-1.15 4-3.7 6.5-6.1 6.5-8.9 0-2.4-1.9-4.3-4.3-4.3-1.38 0-2.6.6-3.45 1.55z"
              opacity="0.3"
            />
          </svg>

          {/* Sparkle badge on top corner */}
          <div className="absolute -top-2 -right-2 text-[#FFE082] animate-bounce">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </div>

        {/* Foundation Branding & Welcoming message */}
        <div className="relative z-10 space-y-3">
          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#251B18] tracking-tight">
            Fundación Invadiendo Corazones
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-[#8C3A32] max-w-md mx-auto leading-relaxed">
            «Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas»
          </p>
        </div>

        {/* Skip note / Touch hint */}
        <div className="mt-8 text-xs font-medium text-[#A69389] tracking-wider uppercase flex items-center gap-1.5">
          <span>Toca en cualquier parte para continuar</span>
        </div>

      </div>
    </div>
  );
};
