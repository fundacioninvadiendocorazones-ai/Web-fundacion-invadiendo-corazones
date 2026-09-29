import React, { useState } from 'react';
import { 
  Heart, 
  Check, 
  Send 
} from 'lucide-react';

export const DonationsSection: React.FC = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donationType, setDonationType] = useState('Aporte Económico');
  const [donorMessage, setDonorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const officialEmail = 'fundacioninvadiendocorazones@gmail.com';

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Intención de Donación (${donationType}) - ${donorName || 'Donante Solidario'}`);
    const bodyText = `Hola, equipo de la Fundación Invadiendo Corazones:\n\n` +
      `Me pongo en contacto para coordinar una donación con ustedes:\n\n` +
      `• Nombre / Razón Social: ${donorName || 'No especificado'}\n` +
      `• Correo de contacto: ${donorEmail || 'No especificado'}\n` +
      `• Teléfono / WhatsApp: ${donorPhone || 'No especificado'}\n` +
      `• Ciudad / Ubicación: ${donorCity || 'No especificado'}\n` +
      `• Tipo de aporte: ${donationType}\n` +
      `• Mensaje / Detalles del aporte:\n${donorMessage || 'Deseo conocer el procedimiento actual para formalizar mi aporte.'}\n\n` +
      `Quedo atento(a) a su respuesta oficial.\n\n` +
      `Saludos cordiales.`;

    const mailtoUrl = `mailto:${officialEmail}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
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
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF7F2] text-emerald-600 flex items-center justify-center mx-auto border border-[#CCE8D7] shadow-xs">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-[#251B18]">
                ¡Borrador listo para enviar!
              </h4>
              <p className="text-sm text-[#5C4B44] max-w-md mx-auto leading-relaxed">
                Hemos abierto tu gestor de correo predeterminado con el mensaje estructurado dirigido a <strong>{officialEmail}</strong>. Si no se abrió automáticamente, puedes enviarnos los detalles directamente a esa dirección.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#DECFC0] bg-[#FAF7F2] text-xs font-semibold text-[#251B18] hover:bg-[#F2ECE3] transition-colors cursor-pointer"
                >
                  Redactar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendDraft} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0E6DC]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8372D]">
                  Formulario de Coordinación
                </span>
                <span className="text-xs text-[#735F56]">
                  Respuesta en menos de 24 horas
                </span>
              </div>

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
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
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
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
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
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all cursor-pointer"
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
                    Teléfono / WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                  Ciudad / Ubicación
                </label>
                <input
                  type="text"
                  value={donorCity}
                  onChange={(e) => setDonorCity(e.target.value)}
                  placeholder="Ej: Barranquilla, Medellín, Bogotá..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251B18] uppercase tracking-wider mb-1.5">
                  Mensaje o descripción del aporte (opcional)
                </label>
                <textarea
                  rows={3}
                  value={donorMessage}
                  onChange={(e) => setDonorMessage(e.target.value)}
                  placeholder="Cuéntanos cualquier detalle adicional sobre tu donación, disponibilidad para entrega o inquietudes que desees resolver..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#D94848] hover:bg-[#C23B3B] rounded-xl shadow-md shadow-[#D94848]/20 hover:shadow-lg hover:shadow-[#D94848]/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Generar Correo de Coordinación</span>
                </button>
                <p className="text-center text-[11px] text-[#7A675F] mt-2">
                  Se preparará un correo dirigido a <strong>{officialEmail}</strong> listo para enviar con tus datos.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
