import React, { useState, useEffect, useRef } from 'react';
import { 
  Utensils, 
  Gift, 
  HeartHandshake, 
  CheckCircle2, 
  Pause,
  Play
} from 'lucide-react';

interface ActionLinesProps {
  onOpenVolunteer?: () => void;
}

export const ActionLines: React.FC<ActionLinesProps> = ({ onOpenVolunteer }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      title: 'Seguridad Alimentaria y Entrega de Mercados',
      shortTitle: 'Mercados & Nutrición',
      tagline: 'Alivio inmediato y sustento nutritivo para los hogares más vulnerables',
      icon: Utensils,
      image: '/assets/images/como_ayudamos_1.jpg',
      alt: 'Jornada comunitaria de entrega de mercados y víveres de primera necesidad por Fundación Invadiendo Corazones',
      description:
        'Llegamos con mercados completos y paquetes de alimentos esenciales directamente a las familias en condición de vulnerabilidad. Organizamos jornadas de entrega con víveres de primera necesidad, granos y productos nutritivos para que en ninguna mesa falte el sustento diario con dignidad.',
      highlights: [
        'Entrega directa y organizada de mercados familiares con alimentos esenciales.',
        'Atención prioritaria a madres cabeza de hogar, niños y adultos mayores.',
        'Distribución transparente, equitativa y cercana en barrios y asentamientos.',
        'Alivio tangible para que las familias enfoquen recursos en su progreso integral.',
      ],
      colorAccent: 'text-[#D94848]',
      bgAccent: 'bg-[#FDF0EE]',
      quote: '«Garantizar el sustento de una familia es abrir la puerta a la paz, la salud y la tranquilidad en el hogar.»'
    },
    {
      id: 2,
      title: 'Celebraciones Comunitarias y Sonrisas para la Niñez',
      shortTitle: 'Niñez & Alegría',
      tagline: 'Regalos, actividades recreativas y espacios protectores para la infancia',
      icon: Gift,
      image: '/assets/images/como_ayudamos_2.jpg',
      alt: 'Celebración comunitaria festiva y entrega de regalos a niños y familias por Fundación Invadiendo Corazones',
      description:
        'Transformamos las fechas especiales y épocas navideñas en verdaderas fiestas comunitarias de afecto e inclusión. Realizamos jornadas de entrega de juguetes, refrigerios nutritivos y dinámicas lúdicas que fortalecen la autoestima y devuelven la ilusión a los más pequeños.',
      highlights: [
        'Jornadas de fin de año con entrega de juguetes, regalos y material lúdico.',
        'Espacios seguros de integración comunitaria con música, arte y recreación formativa.',
        'Fortalecimiento de los lazos familiares y del sentido de pertenencia comunitario.',
        'Inclusión activa de niños con discapacidad en todas las dinámicas recreativas.',
      ],
      colorAccent: 'text-[#D48810]',
      bgAccent: 'bg-[#FEF5E7]',
      quote: '«Ver la sonrisa y el asombro de un niño al sentirse amado y valorado es la mayor recompensa de nuestro servicio.»'
    },
    {
      id: 3,
      title: 'Acompañamiento en Territorio, Salud y Emprendimiento',
      shortTitle: 'Salud & Emprendimiento',
      tagline: 'Presencia cercana para fortalecer capacidades, salud y desarrollo comunitario',
      icon: HeartHandshake,
      image: '/assets/images/como_ayudamos_3.jpg',
      alt: 'Acompañamiento comunitario cercano y visitas en territorio con familias por Fundación Invadiendo Corazones',
      description:
        'Nuestra labor se vive caminando las calles y veredas donde las familias enfrentan mayores barreras. Brindamos presencia constante, orientación en salud preventiva, impulso a iniciativas productivas y un acompañamiento psicosocial cercano para empoderar a la comunidad.',
      highlights: [
        'Visitas domiciliarias para identificar necesidades en salud y bienestar.',
        'Acompañamiento bio-psico-social que equilibra la salud física, mental y comunitaria.',
        'Orientación para el emprendimiento familiar y fortalecimiento de habilidades productivas.',
        'Construcción de redes comunitarias sólidas de apoyo mutuo y preservación tradicional.',
      ],
      colorAccent: 'text-[#2E7D32]',
      bgAccent: 'bg-[#EEF7F2]',
      quote: '«Caminar hombro a hombro junto a quien más lo necesita es la mayor expresión del compromiso social transformador.»'
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 7500);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  const active = slides[currentSlide];
  const IconComponent = active.icon;

  return (
    <section id="lineas-de-accion" className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] text-balance">
            ¿Cómo Ayudamos?
          </h2>

          <p className="text-base sm:text-lg text-[#61514B] leading-relaxed font-normal">
            Tres frentes prioritarios donde articulamos salud, educación, nutrición y desarrollo para generar transformaciones duraderas.
          </p>
        </div>

        {/* Quick Tab Selectors */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {slides.map((s, idx) => {
            const SIcon = s.icon;
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white text-[#251B18] border-[#DECFC0] shadow-sm scale-102'
                    : 'bg-transparent text-[#736059] border-transparent hover:bg-white/60 hover:text-[#251B18]'
                }`}
              >
                <SIcon className={`w-4 h-4 ${isActive ? s.colorAccent : 'text-[#8A7970]'}`} />
                <span>{s.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Main Stage Container */}
        <div 
          className="relative bg-white rounded-3xl border border-[#DECFC0] shadow-md overflow-hidden transition-all"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Side (Left) */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] lg:h-[580px] bg-[#1E1715] overflow-hidden group">
              <img
                key={active.image}
                src={active.image}
                alt={active.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 pointer-events-none" />

              {/* Tagline Bottom of Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10 space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#FCD34D] font-bold">
                  Labor Social en Territorio
                </p>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
                  {active.tagline}
                </h3>
              </div>

            </div>

            {/* Content Narrative Side (Right) */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6 bg-white">
              
              <div className="space-y-5">
                
                {/* Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${active.bgAccent} ${active.colorAccent} flex items-center justify-center shadow-xs border border-[#DECFC0]`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#251B18] leading-tight">
                      {active.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#574842] leading-relaxed">
                  {active.description}
                </p>

                {/* Highlights List */}
                <div className="pt-2 border-t border-[#F0E6DC] space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A645D]">
                    Acciones directas en territorio:
                  </div>
                  {active.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E3F39]">
                      <CheckCircle2 className="w-4 h-4 text-[#D94848] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Slide dots and autoplay controls footer */}
              <div className="pt-5 border-t border-[#F0E6DC] flex items-center justify-between gap-4">
                {/* Slide dots & Autoplay controls */}
                <div className="flex items-center gap-3 w-full justify-between sm:justify-start">
                  <div className="flex items-center gap-1.5" role="tablist" aria-label="Indicador de diapositivas">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        role="tab"
                        aria-selected={currentSlide === idx}
                        aria-label={`Ir a diapositiva ${idx + 1}`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx
                            ? 'w-6 bg-[#D94848]'
                            : 'w-2 bg-[#DECFC0] hover:bg-[#B3A090]'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center gap-1 text-[11px] font-medium text-[#7D6B64] hover:text-[#251B18] cursor-pointer"
                    title={isAutoPlaying ? "Pausar avance automático" : "Reanudar avance automático"}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-[#D94848]" />
                        <span>Auto</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-[#7D6B64]" />
                        <span>Pausado</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
