import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, MessageSquare, Menu, X, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Cotizar', href: '#cotizar' },
    { name: 'Ubicación', href: '#ubicacion' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg border-b border-neutral-800/50 py-2' 
        : 'bg-gradient-to-b from-black/80 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <Logo className="h-10" showText={false} />
            <div className="flex flex-col">
              <span className="text-lg font-display font-extrabold tracking-wider text-white group-hover:text-red-500 transition-colors">
                HERRERA
              </span>
              <span className="text-[8px] font-semibold tracking-[0.2em] text-neutral-400">
                CAR DETAILING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white hover:underline decoration-red-600 underline-offset-8 decoration-2 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Actions (Call & WhatsApp) */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/herrera_cardetailing" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/people/Herrera-Detailing/61574392054051/#" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            
            <a
              href="tel:8123868359"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full hover:bg-neutral-800 transition-all"
            >
              <Phone className="w-4 h-4 text-red-500" />
              81 2386 8359
            </a>
            <a
              href="https://wa.me/528123868359?text=Hola,%20me%20gustaría%20cotizar%20un%20servicio%20de%20detallado%20para%20mi%20auto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 px-4 py-1.5 rounded-full transition-all shadow-md shadow-red-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:8123868359"
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-full"
              title="Llamar"
            >
              <Phone className="w-5 h-5 text-red-500" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <div className="flex gap-4 justify-center py-2">
              <a 
                href="https://www.instagram.com/herrera_cardetailing" 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/people/Herrera-Detailing/61574392054051/#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-neutral-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            
            <a
              href="tel:8123868359"
              className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold text-white bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-all"
            >
              <Phone className="w-4 h-4 text-red-500" />
              Llamar: 81 2386 8359
            </a>
            <a
              href="https://wa.me/528123868359?text=Hola,%20me%20gustaría%20cotizar%20un%20servicio%20de%20detallado%20para%20mi%20auto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 transition-all shadow-lg shadow-red-600/25"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
