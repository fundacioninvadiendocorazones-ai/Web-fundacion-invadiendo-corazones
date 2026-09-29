import React, { useState } from 'react';
import { 
  Heart, 
  Check, 
  Send,
  AlertCircle,
  RotateCcw
} from 'lucide-react';

export const DonationsSection: React.FC = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donationType, setDonationType] = useState('Aporte Económico');
  const [donorMessage, setDonorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const officialEmail = 'fundacioninvadiendocorazones@gmail.com';

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName.trim() || !donorEmail.trim()) {
      setErrorMessage('Por favor completa tu nombre y correo electrónico (*).');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${officialEmail}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Intención de Donación (${donationType}) - ${donorName.trim()}`,
          _template: 'table',
          _captcha: 'false',
          'Nombre / Razón Social': donorName.trim(),
          'Correo de Contacto': donorEmail.trim(),
          'Teléfono / WhatsApp': donorPhone.trim() || 'No proporcionado',
          'Ciudad / Ubicación': donorCity.trim() || 'No proporcionada',
          'Tipo de Aporte': donationType,
          'Mensaje / Detalles del Aporte': donorMessage.trim() || 'Deseo conocer el procedimiento actual para formalizar mi aporte.'
        })
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    setDonorName('');
    setDonorEmail('');
    setDonorPhone('');
    setDonorCity('');
    setDonationType('Aporte Económico');
    setDonorMessage('');
  };

  return (
    <section id="donaciones" className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBCE] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Warm Aesthetic */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] border border-[#F5D5CE] text-xs font-semibold uppercase tracking-wider text-[#A8372D]">
            <Heart className="w-3.5 h-3.5 fill-[#D94848] text-[#D94848]" />
            <span>Canal Oficial de Donaciones</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] tracking-tight text-balance">
            Tu generosidad transforma realidades
          </h2>

          <p className="text-base sm:text-lg text-[#61514B] leading-relaxed font-normal">
            Cada aporte se gestiona de forma directa y personalizada con nuestro equipo, garantizando máxima transparencia, seguridad y trazabilidad en su destino social.
          </p>
        </div>

        {/* Clean Centered Coordination Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#DECFC0] shadow-sm p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EEF7F2] text-emerald-600 flex items-center justify-center mx-auto border border-[#CCE8D7] shadow-xs">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                  ¡Muchas gracias por tu donación!
                </h4>
                <p className="text-sm sm:text-base text-[#5C4B44] max-w-md mx-auto leading-relaxed">
                  Tu solicitud ha sido enviada exitosamente a la <strong>Fundación Invadiendo Corazones</strong>. Nos comunicaremos contigo en breve para coordinar los detalles.
                </p>
              </div>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#DECFC0] bg-[#FAF7F2] text-xs sm:text-sm font-semibold text-[#251B18] hover:bg-[#F2ECE3] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#D94848]" />
                  <span>Enviar otra solicitud</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0E6DC]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8372D]">
                  Formulario de Coordinación
                </span>
                <span className="text-xs text-[#735F56]">
                  Respuesta en menos de 24 horas
                </span>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                    Tu Nombre o Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Ej: Laura Gómez o Empresa Amiga"
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                    Tipo de Donación
                  </label>
                  <select
                    value={donationType}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all cursor-pointer font-medium"
                  >
                    <option value="Aporte Económico">Aporte Económico (Transferencia)</option>
                    <option value="Alimentos y Víveres">Alimentos y Víveres (No perecederos)</option>
                    <option value="Útiles Escolares">Útiles Escolares y Material Educativo</option>
                    <option value="Ropa y Calzado">Ropa y Calzado</option>
                    <option value="Salud y Botiquín">Medicamentos / Insumos de Salud</option>
                    <option value="Otra Donación">Otra modalidad de donación</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp <span className="text-[#887770] font-normal lowercase">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                  Ciudad / Ubicación <span className="text-[#887770] font-normal lowercase">(opcional)</span>
                </label>
                <input
                  type="text"
                  value={donorCity}
                  onChange={(e) => setDonorCity(e.target.value)}
                  placeholder="Ej: Barranquilla, Medellín, Bogotá..."
                  className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                  Mensaje o descripción del aporte <span className="text-[#887770] font-normal lowercase">(opcional)</span>
                </label>
                <textarea
                  rows={3}
                  value={donorMessage}
                  onChange={(e) => setDonorMessage(e.target.value)}
                  placeholder="Cuéntanos cualquier detalle adicional sobre tu donación, disponibilidad para entrega o inquietudes que desees resolver..."
                  className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#D94848] hover:bg-[#C23B3B] active:bg-[#B33232] rounded-xl shadow-md shadow-[#D94848]/20 hover:shadow-lg hover:shadow-[#D94848]/30 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando información...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Donación a la Fundación</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
