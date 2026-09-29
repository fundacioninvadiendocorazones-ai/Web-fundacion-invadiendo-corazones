import React, { useState, useEffect, useRef } from 'react';
import { 
  HeartPulse, 
  Trophy, 
  HeartHandshake, 
  CheckCircle2, 
  Pause,
  Play
} from 'lucide-react';

interface ActionLinesProps {
  onOpenVolunteer?: () => void;
}

interface SlideItem {
  id: number;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  alt: string;
  description: string[];
  highlightsTitle?: string;
  isNumberedHighlights?: boolean;
  highlights?: string[];
  closingNote?: string;
  colorAccent: string;
  bgAccent: string;
  quote?: string;
}

export const ActionLines: React.FC<ActionLinesProps> = ({ onOpenVolunteer }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideItem[] = [
    {
      id: 1,
      title: 'La Salud como Espacio de Recreación, Comunidad y Alivio',
      shortTitle: 'Salud & Alivio',
      tagline: 'La salud como espacio de recreación, comunidad, alivio y amor',
      icon: HeartPulse,
      image: '/assets/images/como_ayudamos_1.jpg',
      alt: 'Visitas a centros hospitalarios y acompañamiento en salud por Fundación Invadiendo Corazones',
      description: [
        'La Fundación Invadiendo Corazones aborda la salud como un espacio de recreación, comunidad, alivio y amor.',
        'Nuestro trabajo se enfoca en visibilizar y acompañar a quienes padecen alguna enfermedad o atraviesan situaciones de vulnerabilidad en salud. Como parte de nuestra labor, realizamos visitas a clínicas y centros hospitalarios para entregar detalles significativos y brindar palabras de aliento.',
        'Nuestro objetivo es proporcionar herramientas psicosociales, recreativas y educativas a estos entornos, reafirmando nuestro compromiso de velar por la vida y el bienestar integral de las personas.'
      ],
      highlightsTitle: 'Pilares de nuestra labor en salud:',
      highlights: [
        'Visitas a clínicas y centros hospitalarios entregando detalles significativos y palabras de aliento.',
        'Acompañamiento cercano a personas con enfermedad o en condición de vulnerabilidad en salud.',
        'Herramientas psicosociales, recreativas y educativas orientadas al bienestar integral de las personas.'
      ],
      colorAccent: 'text-[#D94848]',
      bgAccent: 'bg-[#FDF0EE]',
      quote: '«Abordar la salud como un espacio de recreación, comunidad y alivio reafirma nuestro compromiso por la vida.»'
    },
    {
      id: 2,
      title: 'Fundación Invadiendo Corazones apoya los espacios deportivos',
      shortTitle: 'Espacios Deportivos',
      tagline: 'Impulso al deporte, la natación y la recreación sana con el Club Marlins',
      icon: Trophy,
      image: '/assets/images/como_ayudamos_2.jpg',
      alt: 'Jornada deportiva y torneo de natación con el Club Marlins apoyada por Fundación Invadiendo Corazones',
      description: [
        'La Fundación Invadiendo Corazones reafirma su compromiso con el deporte y la recreación, apoyando la jornada deportiva realizada con el Club de Natación Marlins.',
        'Fue una jornada de torneo donde se impulsó el deporte y el amor por la natación, brindando a niños y jóvenes un espacio de aprendizaje, sana competencia y recreación.'
      ],
      highlightsTitle: '¿Por qué es importante que los niños y jóvenes aprendan a nadar?',
      isNumberedHighlights: true,
      highlights: [
        'Promueve la salud física y el desarrollo integral.',
        'Fomenta la disciplina, la constancia y el trabajo en equipo.',
        'Brinda seguridad y habilidades para la vida.',
        'Aleja a los jóvenes de los malos hábitos, ofreciéndoles espacios sanos de recreación.'
      ],
      closingNote: 'Desde la Fundación Invadiendo Corazones seguimos invadiendo corazones a través del deporte.',
      colorAccent: 'text-[#0284C7]',
      bgAccent: 'bg-[#E0F2FE]',
      quote: '«Desde la Fundación Invadiendo Corazones seguimos invadiendo corazones a través del deporte.»'
    },
    {
      id: 3,
      title: 'Acompañamiento en Territorio, Salud y Emprendimiento',
      shortTitle: 'Salud & Emprendimiento',
      tagline: 'Presencia cercana para fortalecer capacidades, salud y desarrollo comunitario',
      icon: HeartHandshake,
      image: '/assets/images/como_ayudamos_3.jpg',
      alt: 'Acompañamiento comunitario cercano y visitas en territorio con familias por Fundación Invadiendo Corazones',
      description: [
        'Nuestra labor se vive caminando las calles y veredas donde las familias enfrentan mayores barreras. Brindamos presencia constante, orientación en salud preventiva, impulso a iniciativas productivas y un acompañamiento psicosocial cercano para empoderar a la comunidad.'
      ],
      highlightsTitle: 'Acciones directas en territorio:',
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
      }, 8500);
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
            Tres frentes prioritarios donde articulamos salud, educación, deporte, nutrición y desarrollo para generar transformaciones duraderas.
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
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[620px] bg-[#1E1715] overflow-hidden group">
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

                {/* Description Paragraphs */}
                <div className="space-y-2.5">
                  {active.description.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-[#574842] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights List */}
                {active.highlights && active.highlights.length > 0 && (
                  <div className="pt-3 border-t border-[#F0E6DC] space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#7A645D]">
                      {active.highlightsTitle || 'Acciones directas en territorio:'}
                    </div>
                    {active.highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E3F39]">
                        {active.isNumberedHighlights ? (
                          <span className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#BAE6FD]">
                            {index + 1}
                          </span>
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-[#D94848] shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Closing Note Banner */}
                {active.closingNote && (
                  <div className="pt-1">
                    <p className="text-xs sm:text-sm font-medium text-[#0369A1] italic bg-[#F0F9FF] p-3 rounded-xl border border-[#BAE6FD] leading-relaxed">
                      «{active.closingNote}»
                    </p>
                  </div>
                )}

              </div>

              {/* Slide dots and autoplay controls footer */}
              <div className="pt-5 border-t border-[#F0E6DC] flex flex-wrap items-center justify-between gap-3">
                {/* Slide dots & Autoplay controls */}
                <div className="flex items-center gap-3">
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

                {onOpenVolunteer && (
                  <button
                    type="button"
                    onClick={onOpenVolunteer}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D94848] bg-[#FDF0EE] hover:bg-[#FBE4E0] active:bg-[#F7D2CC] border border-[#F8D5D0] rounded-xl transition-colors cursor-pointer"
                  >
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Inscribirme como Voluntario</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
