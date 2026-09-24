import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenVolunteer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Historia', href: '#historia' },
    { label: 'Misión y Valores', href: '#mision' },
    { label: 'Cómo Ayudamos', href: '#lineas-de-accion' },
    { label: 'Donaciones', href: '#donaciones' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5]/90 transition-all shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-2 sm:py-0">
          
          {/* Brand Wordmark with Official Logo */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94848] rounded-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#E3D6C8] shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo_clean.png"
                alt="Logo Fundación Invadiendo Corazones"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif-display text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-[#251B18] leading-tight">
                Fundación Invadiendo Corazones
              </span>
              <span className="text-[8.5px] sm:text-[10px] lg:text-[12.5px] text-[#8E4338] font-medium tracking-tight mt-0.5 leading-tight">
                Desde el corazón de Dios, uniendo nuestras manos para que brillen sonrisas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#554641]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#D94848] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D94848] hover:after:w-full after:transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {/* Quick Action Button for Donations */}
            <a
              href="#donaciones"
              onClick={(e) => handleLinkClick(e, '#donaciones')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-[#D94848] hover:bg-[#C23B3B] text-white shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donar</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#donaciones"
              onClick={(e) => handleLinkClick(e, '#donaciones')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#D94848] text-white shadow-2xs hover:bg-[#C23B3B] transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#574944] hover:text-[#2B2320] hover:bg-[#EFE7DC] rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7DFD5] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-2 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-[#4D3F3A] hover:bg-[#EFE6DB] hover:text-[#D94848] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
