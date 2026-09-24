import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Show if scrolled down past 140px
      if (scrollTop > 140) {
        setIsVisible(true);

        // Clear any previous hide countdown
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }

        // Auto-fade when user stops scrolling for 2.2 seconds
        hideTimeoutRef.current = setTimeout(() => {
          if (!isHoveredRef.current) {
            setIsVisible(false);
          }
        }, 2200);
      } else {
        // Near top of page, hide immediately
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ease-out xl:hidden ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
      }`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 1200);
      }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        onTouchStart={() => {
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
          }
        }}
        aria-label="Volver al inicio de la página"
        title="Volver al inicio"
        className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#D94848] hover:bg-[#C23B3B] active:bg-[#B33232] text-white shadow-xl shadow-[#D94848]/40 border-2 border-white/30 flex items-center justify-center active:scale-90 transition-transform duration-200 cursor-pointer touch-manipulation group"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};

