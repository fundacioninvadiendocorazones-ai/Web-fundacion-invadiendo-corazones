import React from 'react';
import { Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenVolunteer?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#1C1513] text-[#E8DFD8] border-t border-[#3B2D27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#3E2F29] shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src="/logo_clean.png"
                  alt="Logo oficial de Invadiendo Corazones"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Fundación Invadiendo Corazones
              </span>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#F5C4B8] tracking-wide max-w-md">
              «Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas»
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BDB0A6]">
              <li><a href="#historia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#mision" className="hover:text-white transition-colors">Misión y Valores</a></li>
              <li><a href="#lineas-de-accion" className="hover:text-white transition-colors">Cómo Ayudamos</a></li>
              <li><a href="#donaciones" className="hover:text-white transition-colors">Donaciones</a></li>
            </ul>
          </div>

          {/* Direct Contact info & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contacto Institucional</h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#BDB0A6]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D94848] shrink-0 mt-0.5" />
                <a
                  href="mailto:fundacioninvadiendocorazones@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  fundacioninvadiendocorazones@gmail.com
                </a>
              </div>
            </div>

            {/* Official Instagram (Icon Only) */}
            <div className="pt-1">
              <a
                href="https://www.instagram.com/fundacioninvadiendocorazones"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Fundación Invadiendo Corazones"
                title="@fundacioninvadiendocorazones"
                className="w-10 h-10 rounded-xl bg-[#281D1A] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] border border-[#3E2F29] hover:border-transparent text-[#E8DFD8] hover:text-white flex items-center justify-center shadow-xs transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#312520] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7D72]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2018 - {new Date().getFullYear()} Fundación Invadiendo Corazones. Todos los derechos reservados.</span>
          </div>

          <div className="text-xs text-[#8F7D72]">
            Transformando vidas a través del amor y el servicio
          </div>
        </div>

      </div>
    </footer>
  );
};
