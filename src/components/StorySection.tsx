import React from 'react';
import { Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="historia" className="py-20 sm:py-24 bg-white border-y border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] leading-tight text-balance">
            Nuestra Historia
          </h2>
        </div>

        {/* Adaptive Showcase Image with pristine overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-[#DECFC0] shadow-xl bg-[#1D1614] group">
          
          <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[600px] overflow-hidden">
            <img
              src="/assets/images/historia_oficial.jpg?v=2"
              alt="Historia y labor comunitaria de Fundación Invadiendo Corazones en territorio"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlays for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none hidden sm:block" />

            {/* Bottom Hero Overlay Content */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 z-10 max-w-3xl text-white space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FCD34D] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Presencia real en el corazón de las comunidades</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-sm text-balance">
                «Un abrazo sincero y una mano extendida pueden transformar un destino»
              </h3>

              <p className="text-xs sm:text-sm text-white/85 max-w-xl font-light leading-relaxed">
                Fotografía testimonial de las primeras jornadas de Fundación Invadiendo Corazones llevando sustento, abrigo y acompañamiento directo a las familias.
              </p>
            </div>

          </div>

        </div>

        {/* Story Narrative */}
        <div className="max-w-3xl mx-auto space-y-6 text-[#4F3F39] text-base sm:text-[18px] leading-relaxed text-left">
          <p>
            <strong className="text-[#251B18]">Fundación Invadiendo Corazones</strong> nació en octubre de 2018 como una iniciativa profundamente humana con la firme finalidad de ayudar y enriquecer a las poblaciones y comunidades más vulnerables a través del amor genuino y la solidaridad activa.
          </p>

          <p>
            Desde su origen, el propósito fundamental ha sido <em>hacer el bien, tocar vidas y dejar una huella positiva</em> en aquellos que más lo necesitan. Brindamos un acompañamiento integral y desinteresado, buscando dignificar cada hogar y generar oportunidades reales de progreso.
          </p>

          <p>
            Más allá de suplir necesidades materiales inmediatas, buscamos llevar <strong>esperanza, fortaleza y herramientas para el desarrollo</strong> a quienes atraviesan momentos difíciles. Cada jornada comunitaria, cada paquete de alimentos y cada sesión de acompañamiento es una oportunidad viva para recordarles que no están solos y que su dignidad es inviolable.
          </p>
        </div>

      </div>
    </section>
  );
};
