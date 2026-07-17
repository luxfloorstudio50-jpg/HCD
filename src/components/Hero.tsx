import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { Sparkles, Calendar, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  // Use the generated hero image (black Audi R8 showroom style)
  const heroImgUrl = '/src/assets/images/hero_car_1784315616332.jpg';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20">
      {/* Background Image with Dark Overlays for legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="Herrera Car Detailing Luxury Sports Car"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/80" />
      </div>

      {/* Grid line overlay for technical feeling */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-neutral-900/90 border border-red-600/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-red-400 uppercase flex items-center gap-1.5">
            Detallado Premium en Monterrey • <Star className="w-3.5 h-3.5 fill-current text-amber-500" /> 5.0 (34 reseñas)
          </span>
        </motion.div>

        {/* Central Logo Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/75 border border-neutral-800 p-5 sm:p-8 md:p-12 rounded-2xl backdrop-blur-sm max-w-lg mb-6 md:mb-10 shadow-2xl relative group hover:border-red-600/30 transition-all duration-500"
        >
          {/* Hexagonal ambient light reflection lines */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative z-10">
            <Logo className="h-24 md:h-28" showText={true} light={true} />
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-4 md:mt-6 leading-relaxed max-w-sm mx-auto font-sans">
              Protección, corrección y brillo extremo para vehículos de alta gama. Pasión por la perfección automotriz.
            </p>
          </div>
        </motion.div>

        {/* Hero CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#cotizar"
            className="flex items-center justify-center gap-2 text-base font-semibold text-white bg-red-600 hover:bg-red-500 px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-600/40 group"
          >
            <Calendar className="w-5 h-5 text-white" />
            Cotizar Detallado
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 text-base font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-8 py-4 rounded-xl transition-all"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Features list strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-neutral-800/60 pt-8 mt-10 md:mt-16 w-full text-neutral-400 text-xs tracking-wider uppercase font-medium"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-500 font-bold text-xl font-display">Cerámico</span>
            <span>Protección 9H</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-500 font-bold text-xl font-display">Interiores</span>
            <span>Limpieza Profunda</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-500 font-bold text-xl font-display">Corrección</span>
            <span>Pulido y Brillo</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-500 font-bold text-xl font-display">Garantía</span>
            <span>Satisfacción 100%</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
        <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Deslizar</span>
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-red-600 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
