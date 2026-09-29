import React, { useState, useEffect } from 'react';
import { X, Users, Check, AlertCircle, Sparkles } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    area: 'recreacion_infantil',
    availability: 'fines_de_semana',
    experience: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Lock body scroll while modal is open on mobile & tablets to prevent background drift
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      await fetch('https://formsubmit.co/ajax/fundacioninvadiendocorazones@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nueva Inscripción de Voluntariado - ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          'Nombre Completo': formData.name.trim(),
          'Correo Electrónico': formData.email.trim(),
          'Teléfono / WhatsApp': formData.phone.trim(),
          'Ciudad / Municipio': formData.city.trim() || 'No especificada',
          'Área de Apoyo': formData.area,
          'Disponibilidad': formData.availability,
          'Motivación / Experiencia': formData.experience.trim() || 'Sin comentarios'
        })
      });
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      area: 'recreacion_infantil',
      availability: 'fines_de_semana',
      experience: '',
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs overscroll-contain animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl sm:rounded-3xl border border-[#DECFC0] shadow-2xl overflow-hidden max-h-[88dvh] sm:max-h-[85dvh] flex flex-col my-auto transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#EADBCC] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FEF4E3] text-[#D48810] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="font-serif-display text-lg sm:text-xl font-bold text-[#2A1E1A] leading-snug">
                Inscripción de Voluntariado
              </h3>
              <p className="text-xs text-[#7A6760] leading-tight">
                Pon tus dones y tu corazón al servicio de la comunidad
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de voluntariado"
            className="w-10 h-10 flex items-center justify-center text-[#7A6760] hover:text-[#2A1E1A] hover:bg-[#F2E8DC] active:bg-[#EADBCC] rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Body with smooth vertical scrolling */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain space-y-4 flex-1">
          {status === 'success' ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2A1E1A]">
                ¡Bienvenido a la familia de voluntarios!
              </h4>
              <p className="text-sm text-[#5C4C45] max-w-sm mx-auto leading-relaxed">
                Hemos registrado tus datos con mucho entusiasmo. Un coordinador de Invadiendo Corazones te escribirá por WhatsApp o correo antes de la próxima jornada.
              </p>
              <div className="p-3.5 bg-white rounded-xl border border-[#E3D6C8] text-xs text-[#7A645D]">
                «Hacer el bien, tocar vidas y dejar una huella positiva en quienes más lo necesitan.»
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D94848] active:bg-[#B82B2B] rounded-xl hover:bg-[#C93B3B] transition-colors cursor-pointer"
              >
                Cerrar y continuar navegando
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pb-2">
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Por favor completa tu nombre, correo y teléfono de contacto.</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre y apellido"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 300 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Ciudad o Municipio
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. Bogotá, Barranquilla, Cali..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Área en la que deseas apoyar
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                  >
                    <option value="salud_bienestar">Salud, Medicina y Bienestar</option>
                    <option value="educacion_pedagogia">Educación y Talleres Formativos</option>
                    <option value="emprendimiento_comunitario">Emprendimiento y Capacitación</option>
                    <option value="recreacion_infantil">Recreación Infantil e Inclusión</option>
                    <option value="logistica_mercados">Logística y Entrega de Ayudas</option>
                    <option value="sostenibilidad_ambiental">Sostenibilidad Ambiental</option>
                    <option value="comunicacion_audiovisual">Fotografía y Difusión</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B35] mb-1.5">
                  Disponibilidad habitual
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Fines de semana', 'Días de semana', 'Por convocatoria'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, availability: opt })}
                      className={`min-h-[42px] px-2 py-2 rounded-xl border font-medium text-center transition-all flex items-center justify-center cursor-pointer text-[11px] sm:text-xs leading-tight ${
                        formData.availability === opt
                          ? 'bg-[#D94848] text-white border-[#D94848] shadow-xs'
                          : 'bg-white text-[#574944] border-[#D5C5B5] hover:bg-[#FAF4ED] active:bg-[#F2E8DC]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                  ¿Tienes algún comentario o motivación? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Cuéntanos brevemente qué te motiva a sumarte..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C5B5] bg-white text-base sm:text-sm text-[#2A1E1A] focus:ring-2 focus:ring-[#D94848] focus:border-[#D94848] focus:outline-none transition-shadow"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full min-h-[48px] py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D94848] to-[#B82B2B] hover:from-[#C93B3B] hover:to-[#A32222] active:scale-[0.99] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-3"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{status === 'submitting' ? 'Procesando...' : 'Completar Registro de Voluntario'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
