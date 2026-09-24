import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const heroSlides = [
    {
      id: 1,
      image: '/assets/images/hero_transformando_vidas.jpg',
      alt: 'Jornada comunitaria de Fundación Invadiendo Corazones transformando vidas a través del amor y el servicio',
      tag: 'Jornadas Comunitarias en Territorio',
      quote: '"El apoyo y la entrega dignifican el presente; el amor genuino, la educación y el acompañamiento transforman para siempre."',
    },
    {
      id: 2,
      image: '/assets/images/carrusel_nueva_1.jpg',
      alt: 'Comunidad y labor social de Fundación Invadiendo Corazones en territorio',
      tag: 'Presencia Activa y Solidaria',
      quote: '"Sembrando amor y esperanza en cada comunidad, uniendo manos para transformar realidades."',
    },
    {
      id: 3,
      image: '/assets/images/carrusel_nueva_2.jpg',
      alt: 'Compromiso y entrega con amor de Fundación Invadiendo Corazones en las comunidades',
      tag: 'Vocación, Cercanía y Solidaridad',
      quote: '"Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas."',
    },
  ];

  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background ambient warm illumination */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-[#FADCD5]/40 via-[#F7ECE1]/25 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Framing */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Emotional Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#251B18] leading-[1.14] text-balance">
              ¡Transformando vidas a través del <span className="text-[#D94848] italic font-serif">amor</span> y el servicio!
            </h1>

            {/* Human Subtitle */}
            <p className="text-base sm:text-lg text-[#55453F] leading-relaxed max-w-xl font-normal">
              Ayudamos y enriquecemos a personas en condición de vulnerabilidad y discapacidad mediante proyectos integrales de salud, educación y emprendimiento, garantizando sus derechos humanos y fortaleciendo sus comunidades.
            </p>

          </div>

          {/* Right Column: Hero Visual Carousel Showcase */}
          <div 
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#DECFC0] shadow-2xl shadow-[#58392C]/15 bg-[#1C1412] h-[480px] sm:h-[560px] lg:h-[620px] group">
              
              {/* Slides */}
              {heroSlides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dual Gradient Scrim for deep contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1412]/95 via-[#1C1412]/35 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none" />

                    {/* Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 space-y-2 text-white">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FCD34D]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{slide.tag}</span>
                      </div>
                      
                      <p className="font-serif text-base sm:text-lg font-medium text-white/95 leading-snug max-w-lg">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Dot Indicators */}
              <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ver imagen ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-6 bg-[#D94848]' : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Top Accent Tile with Official Logo */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E0D3C5] shadow-sm text-xs font-bold text-[#8C3A32] flex items-center gap-2 z-20">
                <img src="/logo_clean.png" alt="Logo Invadiendo Corazones" className="w-5 h-5 object-contain" />
                <span>Invadiendo Corazones</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
