import React from 'react';
import { Heart, Sparkles, Target, Eye } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="proposito" className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBCE] scroll-mt-20 relative">
      <span id="mision" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] border border-[#F5D5CE] text-xs font-semibold uppercase tracking-wider text-[#A8372D]">
            <Heart className="w-3.5 h-3.5 fill-[#D94848] text-[#D94848]" />
            <span>Esencia e Identidad</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] tracking-tight text-balance">
            Nuestro Propósito
          </h2>

          <p className="text-base sm:text-lg text-[#61514B] leading-relaxed font-normal">
            La misión, visión y principios humanos que guían cada proyecto, jornada y acción en territorio.
          </p>
        </div>

        {/* Responsive Layout: Image on top on mobile/tablet, side-by-side on desktop */}
        <div className="bg-white rounded-3xl border border-[#DECFC0] shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image: order-1 (arriba en mobile y tablets), lg:order-1 (al lado en desktop) */}
            <div className="lg:col-span-5 order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DECFC0] shadow-md bg-[#FAF4ED] group">
                <img
                  src="/assets/images/proposito_oficial.jpg?v=2"
                  alt="Propósito y acción comunitaria de Fundación Invadiendo Corazones"
                  className="w-full h-auto sm:max-h-[460px] lg:max-h-[520px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FCD34D] font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Amor en acción comunitaria</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-light leading-snug drop-shadow-xs">
                    Transformando realidades con cercanía, dignidad y esperanza.
                  </p>
                </div>
              </div>
            </div>

            {/* Text: order-2 (abajo de la imagen en mobile y tablets), lg:order-2 (al lado en desktop) */}
            <div className="lg:col-span-7 order-2 space-y-6">
              
              {/* Foundation Motto */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8E4338] italic bg-[#FAF4ED] px-4 py-2 rounded-full border border-[#F2E5D5]">
                <Sparkles className="w-3.5 h-3.5 text-[#D94848] shrink-0" />
                <span>«Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas»</span>
              </div>

              {/* Misión y Visión Blocks */}
              <div className="space-y-4">
                
                {/* Misión */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#EADBCC] space-y-1.5 transition-all hover:border-[#D94848]/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8372D]">
                    <Target className="w-4 h-4 text-[#D94848]" />
                    <span>Misión</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#3A2E29] leading-relaxed">
                    Transformar la vida de personas en condición de vulnerabilidad y discapacidad mediante proyectos y acompañamientos integrales de salud, educación y emprendimiento, garantizando sus derechos humanos y el fortalecimiento de sus comunidades.
                  </p>
                </div>

                {/* Visión */}
                <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#EADBCC] space-y-1.5 transition-all hover:border-[#D48810]/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <Eye className="w-4 h-4 text-[#D48810]" />
                    <span>Visión</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#3A2E29] leading-relaxed">
                    Ser una organización líder en intervención social y ambiental, reconocida por empoderar comunidades, preservar las tradiciones culturales y construir un futuro sostenible con equidad para todos.
                  </p>
                </div>

              </div>

              {/* Core Values Badges */}
              <div className="pt-2 border-t border-[#F0E6DC] space-y-2">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8E4338]">
                  Valores Fundamentales
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[#5A4B44]">
                  <span className="px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E7DFD5]">Amor</span>
                  <span className="px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E7DFD5]">Empatía</span>
                  <span className="px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E7DFD5]">Integridad</span>
                  <span className="px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E7DFD5]">Solidaridad</span>
                  <span className="px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#E7DFD5]">Respeto</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
