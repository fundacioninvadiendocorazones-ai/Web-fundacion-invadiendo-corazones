import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  HeartHandshake, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Award,
  Activity, 
  Leaf, 
  UsersRound, 
  Scale, 
  Star,
  Heart,
  Compass
} from 'lucide-react';

export const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'valores' | 'principios'>('todos');

  const values = [
    {
      number: '01',
      title: 'Empatía',
      description: 'Sentir como propio el bienestar de los demás para actuar con cercanía, sensibilidad humana y escucha activa.',
      icon: HeartHandshake,
      color: 'text-[#D94848]',
      bg: 'bg-[#FDF0EE]',
      border: 'border-[#F8D5D0]',
    },
    {
      number: '02',
      title: 'Integridad',
      description: 'Actuar con honestidad, rectitud y transparencia total en la administración de cada recurso y proyecto comunitario.',
      icon: ShieldCheck,
      color: 'text-[#2E7D32]',
      bg: 'bg-[#EEF7F2]',
      border: 'border-[#CCE8D7]',
    },
    {
      number: '03',
      title: 'Compromiso Social',
      description: 'Dedicación continua y decidida para elevar las condiciones de vida de las poblaciones y familias en mayor vulnerabilidad.',
      icon: Users,
      color: 'text-[#D48810]',
      bg: 'bg-[#FEF5E7]',
      border: 'border-[#F9E2BE]',
    },
    {
      number: '04',
      title: 'Inclusión',
      description: 'Garantizar el acceso y participación activa de todas las personas, respetando la diversidad física, cognitiva y cultural.',
      icon: Sparkles,
      color: 'text-[#7B2CBF]',
      bg: 'bg-[#F5EDFC]',
      border: 'border-[#E3C9FA]',
    },
    {
      number: '05',
      title: 'Respeto',
      description: 'Reconocer la dignidad inalienable de cada persona y velar por la protección incondicional de sus derechos fundamentales.',
      icon: Award,
      color: 'text-[#1E88E5]',
      bg: 'bg-[#EBF5FB]',
      border: 'border-[#BFDCF5]',
    },
  ];

  const principles = [
    {
      number: '01',
      category: 'Salud Integral',
      title: 'Enfoque Bio-Psico-Social',
      description: 'Promovemos el bienestar armónico entre la salud física, la salud mental y el tejido social de la comunidad.',
      icon: Activity,
      color: 'text-[#D94848]',
      bg: 'bg-[#FDF0EE]',
      border: 'border-[#F8D5D0]',
    },
    {
      number: '02',
      category: 'Medio Ambiente',
      title: 'Sostenibilidad Ambiental',
      description: 'Diseñamos cada intervención con respeto activo por el entorno natural, fomentando la conservación de los ecosistemas.',
      icon: Leaf,
      color: 'text-[#2E7D32]',
      bg: 'bg-[#EEF7F2]',
      border: 'border-[#CCE8D7]',
    },
    {
      number: '03',
      category: 'Comunidad Activa',
      title: 'Participación Comunitaria',
      description: 'Impulsamos a las comunidades a ser protagonistas de sus propias soluciones y guardianas de sus saberes ancestrales.',
      icon: UsersRound,
      color: 'text-[#D48810]',
      bg: 'bg-[#FEF5E7]',
      border: 'border-[#F9E2BE]',
    },
    {
      number: '04',
      category: 'Justicia Social',
      title: 'Equidad',
      description: 'Brindamos apoyos diferenciados y prioritarios a quienes enfrentan las mayores brechas y barreras socioeconómicas.',
      icon: Scale,
      color: 'text-[#7B2CBF]',
      bg: 'bg-[#F5EDFC]',
      border: 'border-[#E3C9FA]',
    },
    {
      number: '05',
      category: 'Rigor y Calidad',
      title: 'Excelencia en el Servicio',
      description: 'Ejecutamos cada jornada, asesoría y programa con altos estándares profesionales, técnicos y de calidez humana.',
      icon: Star,
      color: 'text-[#1E88E5]',
      bg: 'bg-[#EBF5FB]',
      border: 'border-[#BFDCF5]',
    },
  ];

  return (
    <section id="mision" className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] text-balance">
            Misión y Valores
          </h2>
          <p className="text-base sm:text-lg text-[#61514B] leading-relaxed font-normal">
            Los fundamentos éticos y estratégicos que guían cada proyecto, jornada y acción en favor de nuestras comunidades.
          </p>
        </div>

        {/* Misión y Visión: 2 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Misión Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DECFC0] shadow-xs relative overflow-hidden flex flex-col justify-between group hover:border-[#D94848]/60 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDF0EE]/70 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF0EE] text-[#D94848] flex items-center justify-center border border-[#F8D5D0] shadow-2xs shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A8372D]">Propósito Central</span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                    Nuestra Misión
                  </h3>
                </div>
              </div>

              <p className="text-[#4A3E39] leading-relaxed text-base sm:text-[17px] font-normal pt-1">
                Transformar la vida de personas en condición de vulnerabilidad y discapacidad mediante proyectos y acompañamientos integrales de salud, educación y emprendimiento, garantizando sus derechos humanos y el fortalecimiento de sus comunidades.
              </p>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-[#EFE5DB]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7A675E] mb-3">
                Ejes de Intervención
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#55453F]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D94848] shrink-0" />
                  <span>Salud y Bienestar Integral</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D94848] shrink-0" />
                  <span>Educación e Inclusión</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D94848] shrink-0" />
                  <span>Emprendimiento Productivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D94848] shrink-0" />
                  <span>Derechos Humanos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visión Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DECFC0] shadow-xs relative overflow-hidden flex flex-col justify-between group hover:border-[#D48810]/60 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEF5E7]/70 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF5E7] text-[#D48810] flex items-center justify-center border border-[#F9E2BE] shadow-2xs shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">Hacia Dónde Vamos</span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                    Nuestra Visión
                  </h3>
                </div>
              </div>

              <p className="text-[#4A3E39] leading-relaxed text-base sm:text-[17px] font-normal pt-1">
                Ser una organización líder en intervención social y ambiental, reconocida por empoderar comunidades, preservar las tradiciones culturales y construir un futuro sostenible con equidad para todos.
              </p>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-[#EFE5DB]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7A675E] mb-3">
                Horizonte de Impacto
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#55453F]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48810] shrink-0" />
                  <span>Liderazgo en Territorio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48810] shrink-0" />
                  <span>Sostenibilidad Ambiental</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48810] shrink-0" />
                  <span>Tradición y Cultura</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48810] shrink-0" />
                  <span>Equidad Sostenible</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Valores & Principios Block */}
        <div className="space-y-8 pt-4">
          
          {/* Header & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E3D6C8]">
            <div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                Valores Éticos y Principios de Acción
              </h3>
              <p className="text-sm text-[#6E5B53] mt-1">
                Los 5 pilares morales que nos identifican y los 5 principios que rigen cada jornada en territorio.
              </p>
            </div>

            {/* Segmented Controller */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#EFE5DB] border border-[#DECFC0] gap-1 self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('todos')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'todos'
                    ? 'bg-white text-[#251B18] shadow-xs'
                    : 'text-[#6E5B53] hover:text-[#251B18]'
                }`}
              >
                Ver Todo (10)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('valores')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'valores'
                    ? 'bg-white text-[#251B18] shadow-xs'
                    : 'text-[#6E5B53] hover:text-[#251B18]'
                }`}
              >
                Valores (5)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('principios')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'principios'
                    ? 'bg-white text-[#251B18] shadow-xs'
                    : 'text-[#6E5B53] hover:text-[#251B18]'
                }`}
              >
                Principios (5)
              </button>
            </div>
          </div>

          {/* Layout: Dual Column when 'todos', Single Section when 'valores' or 'principios' */}
          {activeTab === 'todos' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: 5 Valores */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FDF0EE] text-[#D94848] flex items-center justify-center border border-[#F8D5D0]">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-xl font-bold text-[#251B18]">
                        Nuestros Valores Éticos
                      </h4>
                      <p className="text-xs text-[#7A675E]">Cultura de cercanía, respeto y vocación de servicio</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8C7A71] bg-white px-2.5 py-1 rounded-md border border-[#DECFC0]">
                    5 Valores
                  </span>
                </div>

                <div className="space-y-3">
                  {values.map((val) => {
                    const Icon = val.icon;
                    return (
                      <div
                        key={val.title}
                        className="bg-white rounded-2xl p-5 border border-[#DECFC0] shadow-2xs hover:border-[#D94848]/50 hover:shadow-xs transition-all flex items-start gap-4"
                      >
                        <div className={`w-10 h-10 rounded-xl ${val.bg} ${val.color} flex items-center justify-center border ${val.border} shrink-0 mt-0.5`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h5 className="font-serif-display text-base sm:text-lg font-bold text-[#251B18]">
                              {val.title}
                            </h5>
                            <span className="text-xs font-mono font-semibold text-[#A8988E]">
                              {val.number}
                            </span>
                          </div>
                          <p className="text-sm text-[#4E413C] leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: 5 Principios */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FEF5E7] text-[#D48810] flex items-center justify-center border border-[#F9E2BE]">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-xl font-bold text-[#251B18]">
                        Principios de Actuación
                      </h4>
                      <p className="text-xs text-[#7A675E]">Criterios técnicos y metodológicos en cada proyecto</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8C7A71] bg-white px-2.5 py-1 rounded-md border border-[#DECFC0]">
                    5 Principios
                  </span>
                </div>

                <div className="space-y-3">
                  {principles.map((pr) => {
                    const Icon = pr.icon;
                    return (
                      <div
                        key={pr.title}
                        className="bg-white rounded-2xl p-5 border border-[#DECFC0] shadow-2xs hover:border-[#D48810]/50 hover:shadow-xs transition-all flex items-start gap-4"
                      >
                        <div className={`w-10 h-10 rounded-xl ${pr.bg} ${pr.color} flex items-center justify-center border ${pr.border} shrink-0 mt-0.5`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2">
                              <h5 className="font-serif-display text-base sm:text-lg font-bold text-[#251B18]">
                                {pr.title}
                              </h5>
                              <span className="text-[11px] font-semibold text-[#8C7A71] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE0D5]">
                                {pr.category}
                              </span>
                            </div>
                            <span className="text-xs font-mono font-semibold text-[#A8988E]">
                              {pr.number}
                            </span>
                          </div>
                          <p className="text-sm text-[#4E413C] leading-relaxed">
                            {pr.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : activeTab === 'valores' ? (
            /* Only Valores Tab View: Clean 2-column or list */
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FDF0EE] text-[#D94848] flex items-center justify-center border border-[#F8D5D0]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-display text-xl font-bold text-[#251B18]">
                    Nuestros Valores Éticos Institucionales
                  </h4>
                  <p className="text-xs text-[#7A675E]">La esencia humana con la que tratamos a cada persona y comunidad</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="bg-white rounded-2xl p-6 border border-[#DECFC0] shadow-2xs hover:border-[#D94848]/50 hover:shadow-xs transition-all flex items-start gap-4"
                    >
                      <div className={`w-11 h-11 rounded-xl ${val.bg} ${val.color} flex items-center justify-center border ${val.border} shrink-0 mt-0.5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h5 className="font-serif-display text-lg font-bold text-[#251B18]">
                            {val.title}
                          </h5>
                          <span className="text-xs font-mono font-semibold text-[#A8988E]">
                            {val.number}
                          </span>
                        </div>
                        <p className="text-sm text-[#4E413C] leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Only Principios Tab View: Clean 2-column or list */
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FEF5E7] text-[#D48810] flex items-center justify-center border border-[#F9E2BE]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-display text-xl font-bold text-[#251B18]">
                    Principios de Actuación y Metodología en Campo
                  </h4>
                  <p className="text-xs text-[#7A675E]">Normas y criterios técnicos que garantizan el impacto y la sostenibilidad</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {principles.map((pr) => {
                  const Icon = pr.icon;
                  return (
                    <div
                      key={pr.title}
                      className="bg-white rounded-2xl p-6 border border-[#DECFC0] shadow-2xs hover:border-[#D48810]/50 hover:shadow-xs transition-all flex items-start gap-4"
                    >
                      <div className={`w-11 h-11 rounded-xl ${pr.bg} ${pr.color} flex items-center justify-center border ${pr.border} shrink-0 mt-0.5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <h5 className="font-serif-display text-lg font-bold text-[#251B18]">
                              {pr.title}
                            </h5>
                            <span className="text-[11px] font-semibold text-[#8C7A71] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE0D5]">
                              {pr.category}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-semibold text-[#A8988E]">
                            {pr.number}
                          </span>
                        </div>
                        <p className="text-sm text-[#4E413C] leading-relaxed">
                          {pr.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
