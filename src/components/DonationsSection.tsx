import React, { useState } from 'react';
import { 
  Heart, 
  Check, 
  Send, 
  Mail, 
  Copy, 
  ExternalLink, 
  AlertCircle,
  FileText,
  RotateCcw
} from 'lucide-react';

export const DonationsSection: React.FC = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donationType, setDonationType] = useState('Aporte Económico');
  const [donationAmount, setDonationAmount] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const officialEmail = 'fundacioninvadiendocorazones@gmail.com';

  const generateEmailContent = () => {
    const subject = `Intención de Donación (${donationType}) - ${donorName.trim() || 'Donante Solidario'}`;
    const bodyText = 
`Hola, equipo de la Fundación Invadiendo Corazones:

Deseo coordinar una donación para apoyar su labor social y comunitaria. A continuación comparto mis datos:

DATOS DEL DONANTE:
• Nombre o Razón Social: ${donorName.trim() || 'No especificado'}
• Correo Electrónico: ${donorEmail.trim() || 'No especificado'}
• Teléfono / WhatsApp: ${donorPhone.trim() || 'No especificado'}
• Ciudad / Municipio: ${donorCity.trim() || 'No especificado'}

DETALLES DEL APORTE:
• Modalidad de donación: ${donationType}
• Valor estimado / Cantidad: ${donationAmount.trim() || 'Por definir con la fundación'}
• Mensaje / Especificaciones adicionales:
${donorMessage.trim() || 'Deseo conocer las cuentas autorizadas o puntos de acopio oficiales para formalizar mi entrega.'}

Quedo atento(a) a su pronta respuesta oficial.

Muchas gracias por su entrega y compromiso con las comunidades.`;

    return { subject, bodyText };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName.trim() || !donorEmail.trim() || !donorPhone.trim() || !donorCity.trim()) {
      setErrorMessage('Por favor completa todos los campos requeridos marcados con (*).');
      return;
    }

    setErrorMessage('');
    const { subject, bodyText } = generateEmailContent();
    const mailtoUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    
    // Attempt to open default mail client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Continue to submitted screen
    }

    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const { bodyText } = generateEmailContent();
    navigator.clipboard.writeText(`Para: ${officialEmail}\n\n${bodyText}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
    });
  };

  const getGmailWebLink = () => {
    const { subject, bodyText } = generateEmailContent();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(officialEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    setErrorMessage('');
  };

  return (
    <section id="donaciones" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBCE] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] border border-[#F5D5CE] text-xs font-semibold uppercase tracking-wider text-[#A8372D]">
            <Heart className="w-3.5 h-3.5 fill-[#D94848] text-[#D94848]" />
            <span>Canal Oficial de Donaciones</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251B18] tracking-tight text-balance">
            Formulario de Donaciones
          </h2>

          <p className="text-base sm:text-lg text-[#61514B] leading-relaxed font-normal max-w-2xl mx-auto">
            Diligencia tus datos para coordinar tu aporte directamente con el equipo de la fundación a través del correo oficial: <strong className="text-[#A8372D] break-all">{officialEmail}</strong>.
          </p>
        </div>

        {/* Main Form Container Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DECFC0] shadow-sm p-6 sm:p-10 md:p-12 transition-all">
          {submitted ? (
            /* Success confirmation & action options */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF7F2] text-emerald-600 flex items-center justify-center mx-auto border border-[#CCE8D7] shadow-xs">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                  ¡Formulario generado con éxito!
                </h3>
                <p className="text-sm sm:text-base text-[#5C4B44] max-w-lg mx-auto leading-relaxed">
                  Tu solicitud ha sido redactada para ser enviada directamente a <strong>{officialEmail}</strong>.
                </p>
              </div>

              {/* Action Buttons for Sending */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-lg mx-auto">
                {/* 1. Open Gmail Web in new tab */}
                <a
                  href={getGmailWebLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D94848] hover:bg-[#C23B3B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Enviar por Gmail Web</span>
                </a>

                {/* 2. Re-trigger native mail client */}
                <button
                  type="button"
                  onClick={() => {
                    const { subject, bodyText } = generateEmailContent();
                    window.location.href = `mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F2ECE3] text-[#251B18] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#D94848]" />
                  <span>Abrir App de Correo</span>
                </button>

                {/* 3. Copy message to clipboard */}
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F2ECE3] text-[#251B18] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-[#735F56]" />
                  <span>{copied ? '¡Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>

              {/* Preview of the structured message */}
              <div className="text-left bg-[#FAF7F2] border border-[#EADBCC] rounded-xl p-4 sm:p-5 max-w-xl mx-auto space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#735F56] uppercase tracking-wider border-b border-[#DECFC0] pb-2">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#D94848]" />
                    Resumen del mensaje a enviar
                  </span>
                  <span className="text-[#A8372D] lowercase font-semibold">{officialEmail}</span>
                </div>
                <div className="text-xs sm:text-sm text-[#4A3B35] space-y-1 pt-1 font-mono leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
                  {generateEmailContent().bodyText}
                </div>
              </div>

              {/* Reset to form button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#735F56] hover:text-[#251B18] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Modificar o enviar otro formulario</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Datos Personales / Donante */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A8372D] flex items-center gap-2 pb-2 border-b border-[#F0E6DC]">
                  <span>1. Datos del Donante o Empresa</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                      Nombre Completo o Razón Social *
                    </label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Ej. María Pérez o Empresa Solidaria"
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
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
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                      Teléfono o WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+57 300 123 4567"
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                      Ciudad o Municipio *
                    </label>
                    <input
                      type="text"
                      required
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                      placeholder="Ej. Barranquilla, Cali, Bogotá..."
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Detalles de la Donación */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A8372D] flex items-center gap-2 pb-2 border-b border-[#F0E6DC]">
                  <span>2. Modalidad y Detalles del Aporte</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                      Tipo de Donación *
                    </label>
                    <select
                      value={donationType}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all cursor-pointer"
                    >
                      <option value="Aporte Económico (Transferencia)">Aporte Económico (Cuentas Oficiales)</option>
                      <option value="Mercados y Víveres">Mercados y Alimentos No Perecederos</option>
                      <option value="Útiles Escolares y Educación">Kits y Útiles Escolares</option>
                      <option value="Ropa y Calzado">Ropa, Calzado o Abrigo</option>
                      <option value="Salud y Medicamentos">Medicamentos e Insumos Médicos</option>
                      <option value="Jornadas y Logística">Apoyo Logístico o Transporte</option>
                      <option value="Otra Modalidad de Apoyo">Otra modalidad de donación</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                      Monto o Cantidad Estimada (opcional)
                    </label>
                    <input
                      type="text"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder="Ej. $100.000 COP, 3 mercados, 10 kits..."
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#251B18] mb-1.5">
                    Mensaje o especificaciones adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={donorMessage}
                    onChange={(e) => setDonorMessage(e.target.value)}
                    placeholder="Escribe aquí cualquier consulta, fecha en la que deseas donar, disponibilidad de entrega o mensaje para la fundación..."
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#F0E6DC] space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#D94848] hover:bg-[#C23B3B] active:bg-[#B33232] rounded-xl shadow-md shadow-[#D94848]/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Formulario a la Fundación</span>
                </button>
                
                <p className="text-center text-xs text-[#735F56] leading-relaxed">
                  Al enviar, se abrirá tu correo predeterminado dirigido a <strong className="text-[#A8372D]">{officialEmail}</strong> con todos los datos organizados para su recepción inmediata.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
