import React, { useState } from 'react';
import { X, Users, Check, Heart, AlertCircle, Sparkles } from 'lucide-react';

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 700);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl border border-[#DECFC0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#EADBCC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FEF4E3] text-[#D48810] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl font-bold text-[#2A1E1A]">
                Inscripción de Voluntariado
              </h3>
              <p className="text-xs text-[#7A6760]">
                Pon tus dones y tu corazón al servicio de quienes más lo necesitan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7A6760] hover:text-[#2A1E1A] hover:bg-[#F2E8DC] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-[#2A1E1A]">
                ¡Bienvenido a la familia de voluntarios!
              </h4>
              <p className="text-sm text-[#5C4C45] max-w-sm mx-auto leading-relaxed">
                Hemos registrado tus datos con mucho entusiasmo. Un coordinador de Invadiendo Corazones te escribirá por WhatsApp o correo antes de la próxima jornada.
              </p>
              <div className="p-4 bg-white rounded-xl border border-[#E3D6C8] text-xs text-[#7A645D]">
                «Hacer el bien, tocar vidas y dejar una huella positiva en quienes más lo necesitan.»
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D94848] rounded-xl hover:bg-[#C93B3B] transition-colors cursor-pointer"
              >
                Cerrar y continuar navegando
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
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
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Ciudad o Municipio
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. Bogotá, Barranquilla, Cali..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                    Área en la que deseas apoyar
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
                  >
                    <option value="salud_bienestar">Salud, Medicina y Bienestar Psicosocial</option>
                    <option value="educacion_pedagogia">Educación y Talleres Formativos</option>
                    <option value="emprendimiento_comunitario">Emprendimiento y Capacitación Técnica</option>
                    <option value="recreacion_infantil">Recreación Infantil e Inclusión</option>
                    <option value="logistica_mercados">Logística y Entrega de Mercados</option>
                    <option value="sostenibilidad_ambiental">Sostenibilidad Ambiental y Territorio</option>
                    <option value="comunicacion_audiovisual">Fotografía, Diseño y Difusión</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                  Disponibilidad habitual
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Fines de semana', 'Días de semana', 'Por convocatoria'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, availability: opt })}
                      className={`p-2.5 rounded-lg border font-medium text-center transition-all ${
                        formData.availability === opt
                          ? 'bg-[#D94848] text-white border-[#D94848]'
                          : 'bg-white text-[#574944] border-[#D5C5B5] hover:bg-[#FAF4ED]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3B35] mb-1">
                  ¿Tienes algún comentario o motivación especial? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Cuéntanos brevemente qué te motiva a sumarte..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C5B5] bg-white text-sm focus:ring-2 focus:ring-[#D94848] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D94848] to-[#B82B2B] hover:from-[#C93B3B] hover:to-[#A32222] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-2"
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
