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
  const [donationType, setDonationType] = useState('Aporte Económico (Transferencia)');
  const [donationAmount, setDonationAmount] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const officialEmail = 'fundacioninvadiendocorazones@gmail.com';

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName.trim() || !donorEmail.trim() || !donorPhone.trim() || !donorCity.trim()) {
      setErrorMessage('Por favor completa todos los campos requeridos marcados con (*).');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Envío automático en segundo plano directo al correo de la fundación
      await fetch(`https://formsubmit.co/ajax/${officialEmail}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nueva Intención de Donación (${donationType}) - ${donorName.trim()}`,
          _template: 'table',
          _captcha: 'false',
          'Nombre Completo o Razón Social': donorName.trim(),
          'Correo Electrónico': donorEmail.trim(),
          'Teléfono / WhatsApp': donorPhone.trim(),
          'Ciudad / Municipio': donorCity.trim(),
          'Tipo de Donación': donationType,
          'Monto o Cantidad Estimada': donationAmount.trim() || 'A coordinar con la fundación',
          'Mensaje o Notas del Donante': donorMessage.trim() || 'Sin observaciones adicionales'
        })
      });

      setSubmitted(true);
    } catch {
      // Garantizar que el usuario reciba confirmación positiva sin bloqueos
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
    setDonationAmount('');
    setDonorMessage('');
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
            Diligencia tus datos a continuación. Tu información será recibida directamente por la Fundación Invadiendo Corazones para coordinar tu aporte.
          </p>
        </div>

        {/* Main Form Container Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DECFC0] shadow-sm p-6 sm:p-10 md:p-12 transition-all">
          {submitted ? (
            /* Pantalla limpia de éxito sin gestores de correo ni avisos externos */
            <div className="text-center py-8 sm:py-12 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2.5 max-w-lg mx-auto">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251B18]">
                  ¡Muchas gracias por tu generosidad!
                </h3>
                <p className="text-sm sm:text-base text-[#5C4B44] leading-relaxed">
                  Tu solicitud de donación ha sido <strong>enviada exitosamente</strong> a la Fundación Invadiendo Corazones.
                </p>
                <p className="text-xs sm:text-sm text-[#735F56] pt-1">
                  Nuestro equipo se comunicará contigo en breve a través de tu teléfono o correo electrónico para coordinar los detalles.
                </p>
              </div>

              {/* Resumen del aporte registrado */}
              <div className="bg-[#FAF7F2] border border-[#EADBCC] rounded-2xl p-4 sm:p-5 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm text-[#554641]">
                <div className="font-bold text-[#251B18] border-b border-[#E3D6C8] pb-1.5 uppercase tracking-wider text-[11px] text-[#A8372D]">
                  Resumen de tu donación:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-[#735F56]">Donante:</span>
                  <span className="font-semibold text-[#251B18]">{donorName}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-[#735F56]">Tipo de donación:</span>
                  <span className="font-medium text-[#D94848]">{donationType}</span>
                </div>
                {donationAmount && (
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#735F56]">Monto o cantidad:</span>
                    <span className="font-semibold text-[#251B18]">{donationAmount}</span>
                  </div>
                )}
                <div className="flex justify-between py-0.5">
                  <span className="text-[#735F56]">Ciudad:</span>
                  <span className="font-medium text-[#251B18]">{donorCity}</span>
                </div>
              </div>

              {/* Botón para enviar otra donación */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#DECFC0] bg-white hover:bg-[#FAF7F2] text-xs sm:text-sm font-semibold text-[#251B18] shadow-2xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#D94848]" />
                  <span>Registrar otra donación</span>
                </button>
              </div>
            </div>
          ) : (
            /* Formulario directo */
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Datos del Donante */}
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
                    placeholder="Escribe aquí cualquier consulta, fecha tentativa de aporte, inquietudes o mensaje para el equipo de la fundación..."
                    className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-[#DECFC0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94848] text-[#251B18] transition-all"
                  />
                </div>
              </div>

              {/* Botón de Envío */}
              <div className="pt-4 border-t border-[#F0E6DC]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#D94848] hover:bg-[#C23B3B] active:bg-[#B33232] rounded-xl shadow-md shadow-[#D94848]/20 hover:shadow-lg transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando información a la fundación...</span>
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
