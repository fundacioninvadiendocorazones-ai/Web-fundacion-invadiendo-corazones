import React, { useState, useEffect } from 'react';

export const HeartSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Listen for custom trigger to replay animation if requested (e.g. clicking header logo)
    const handleReplay = () => {
      setIsExiting(false);
      setIsVisible(true);
    };
    window.addEventListener('replay-heart-splash', handleReplay);

    // Fast, responsive entrance: exit after 1.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1500);

    // Fully unmount after 1.95 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1950);

    return () => {
      window.removeEventListener('replay-heart-splash', handleReplay);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [isVisible]);

  const handleDismiss = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 350);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FAF7F2] select-none transition-all duration-450 ease-out cursor-pointer ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Animación de bienvenida - Fundación Invadiendo Corazones"
      role="dialog"
      aria-modal="true"
    >
      {/* Self-contained high-performance keyframes */}
      <style>{`
        @keyframes logoHeartbeat {
          0% { transform: scale(0.94); }
          15% { transform: scale(1.12); }
          30% { transform: scale(1.01); }
          45% { transform: scale(1.16); }
          70% { transform: scale(1); }
          100% { transform: scale(0.94); }
        }

        @keyframes logoHeartGlow {
          0%, 100% {
            filter: drop-shadow(0 4px 18px rgba(220, 42, 48, 0.4)) drop-shadow(0 0 35px rgba(220, 42, 48, 0.2));
          }
          45% {
            filter: drop-shadow(0 8px 30px rgba(235, 45, 45, 0.8)) drop-shadow(0 0 65px rgba(220, 42, 48, 0.4));
          }
        }

        .splash-logo-beating {
          animation: logoHeartbeat 1.15s cubic-bezier(0.215, 0.61, 0.355, 1) infinite,
                     logoHeartGlow 1.15s ease-in-out infinite;
          transform-origin: center center;
        }

        @keyframes rippleRingFast {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.6);
            opacity: 0;
          }
        }

        .splash-ripple-fast-1 {
          animation: rippleRingFast 1.8s cubic-bezier(0.1, 0.6, 0.3, 1) infinite;
        }
        .splash-ripple-fast-2 {
          animation: rippleRingFast 1.8s cubic-bezier(0.1, 0.6, 0.3, 1) 0.7s infinite;
        }
      `}</style>

      {/* Background ambient warm illumination */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-[#FCD5CE]/60 via-[#F7ECE1]/40 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-6 text-center max-w-lg mx-auto">
        
        {/* Pulsing Concentric Ripple Rings behind the official hands & heart */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center mb-6">
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-2 border-[#E03338]/30 splash-ripple-fast-1 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-2 border-[#E03338]/20 splash-ripple-fast-2 pointer-events-none" />

          {/* Official Emblem: The exact hands and heart from the foundation's logo */}
          <div className="relative z-10 splash-logo-beating flex items-center justify-center">
            <img
              src="/logo_hands_heart.png"
              alt="Corazón y manos del logo de Fundación Invadiendo Corazones"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Slogan phrase directly underneath */}
        <div className="relative z-10 px-4">
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#7D2820] max-w-lg mx-auto leading-relaxed text-balance">
            «Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas»
          </p>
        </div>

      </div>
    </div>
  );
};
