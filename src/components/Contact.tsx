import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageSquare, Compass, Share2 } from 'lucide-react';

export default function Contact() {
  const address = 'Manuel Gómez de Castro 4711, Burócratas del Estado, 64370 Monterrey, N.L.';
  const phone = '81 2386 8359';
  const mapsSearchQuery = encodeURIComponent('Herrera Car Detailing Monterrey Manuel Gómez de Castro 4711');
  
  // Clean, high-fidelity Google Maps embed URL based on the real address
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-neutral-950 text-white relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            ¿Dónde estamos?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
            Visítanos en Monterrey
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base">
            Nuestras instalaciones cuentan con iluminación especializada, control de temperatura y filtrado de aire para garantizar la correcta aplicación y curado de todos los recubrimientos cerámicos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Informational Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-5 sm:p-8 rounded-2xl flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <h3 className="font-display font-extrabold text-xl tracking-wide border-b border-neutral-800 pb-4">
                Información del Taller
              </h3>

              {/* Address */}
              <div className="flex gap-4.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-semibold block">Dirección</span>
                  <p className="text-neutral-200 text-sm font-sans mt-1 leading-relaxed">
                    {address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-red-500 hover:underline mt-2 inline-flex items-center gap-1"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-semibold block">Teléfono de Atención</span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-neutral-100 font-mono text-lg font-bold hover:text-red-500 transition-colors mt-1 block"
                  >
                    {phone}
                  </a>
                  <p className="text-neutral-400 text-xs mt-1">Llamadas o cotizaciones por WhatsApp</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-red-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-semibold block">Horarios de Servicio</span>
                  <div className="text-neutral-200 text-sm mt-1 space-y-1">
                    <p className="font-semibold flex items-center gap-1.5 text-red-500">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                      Abierto hoy hasta las 7:00 PM
                    </p>
                    <div className="text-xs text-neutral-400 grid grid-cols-2 gap-x-4 pt-2">
                      <span>Lunes a Sábado:</span>
                      <span className="font-semibold text-neutral-200">9:00 AM - 7:00 PM</span>
                      <span>Domingo:</span>
                      <span className="text-neutral-500">Bajo Cita Previa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Contact Links */}
            <div className="border-t border-neutral-800 pt-6 mt-8">
              <span className="text-[9px] tracking-widest text-neutral-500 uppercase font-semibold block mb-3.5">
                Conectar en redes sociales
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/people/Herrera-Detailing/61574392054051/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800/80 py-3 rounded-xl hover:border-neutral-700 transition-all"
                >
                  <Facebook className="w-4 h-4 text-red-500" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/herrera_cardetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800/80 py-3 rounded-xl hover:border-neutral-700 transition-all"
                >
                  <Instagram className="w-4 h-4 text-red-500" />
                  Instagram
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Block (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-2 shadow-2xl flex flex-col justify-between h-[450px] lg:h-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
              <iframe
                title="Herrera Car Detailing Google Maps"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) invert(0)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Glowing overlay lines representing high-tech detailing bay */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 border border-neutral-800 p-3.5 rounded-xl backdrop-blur-md flex items-center justify-between shadow-2xl pointer-events-none md:pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                    Punto de entrega seguro en Burócratas del Estado
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapsSearchQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Cómo Llegar
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
