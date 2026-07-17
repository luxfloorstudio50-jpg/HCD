import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-900 py-16 relative overflow-hidden">
      {/* Background radial lines */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-neutral-900 pb-12 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Logo className="h-10" showText={false} />
              <div className="text-left">
                <h4 className="font-display font-extrabold text-lg tracking-wider text-white">HERRERA</h4>
                <p className="text-[8px] font-semibold tracking-[0.2em] text-neutral-500">CAR DETAILING</p>
              </div>
            </div>
            <p className="text-neutral-400 text-xs md:text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              El taller boutique de detallado automotriz de referencia en Monterrey. Especializados en protección cerámica, pulido correctivo y restauración interior de vehículos de alta gama.
            </p>
            {/* Social media icons */}
            <div className="flex gap-4.5 justify-center md:justify-start pt-2">
              <a 
                href="https://www.facebook.com/people/Herrera-Detailing/61574392054051/#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-white hover:scale-110 transition-all"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/herrera_cardetailing" 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-white hover:scale-110 transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/528123868359" 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-500 hover:text-red-500 hover:scale-110 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links Column */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Menú</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#opiniones" className="hover:text-white transition-colors">Opiniones de Clientes</a></li>
              <li><a href="#cotizar" className="hover:text-white transition-colors">Cotizador Digital</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Contacto</h4>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="leading-tight text-center md:text-left">Manuel Gómez de Castro 4711, Monterrey</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:8123868359" className="hover:text-white font-mono font-bold">{`81 2386 8359`}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>herrera.detailing.mty@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal copyrights and scroll-up */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <p className="text-[10px] text-neutral-500 text-center sm:text-left leading-normal">
            © {currentYear} Herrera Car Detailing. Monterrey, N.L., México. Todos los derechos reservados.<br />
            Los logotipos y marcas de vehículos exhibidos pertenecen a sus respectivos fabricantes y son usados meramente con fines ilustrativos de portafolio de detallado.
          </p>
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-md shrink-0 cursor-pointer"
            title="Volver Arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
