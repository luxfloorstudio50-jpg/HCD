import React from 'react';
import { ServicePackage } from '../types';
import { Shield, Sparkles, Droplets, Check, Clock, ShieldAlert } from 'lucide-react';

export const servicePackages: ServicePackage[] = [
  {
    id: 'premium_wash',
    name: 'Lavado Detalle Premium',
    description: 'Tratamiento de limpieza exterior e interior meticuloso con descontaminado físico y sellador de brillo.',
    priceEstimate: 'Desde $1,200 MXN',
    duration: '3 - 4 Horas',
    features: [
      'Prelavado con Snow Foam activa para evitar rayones',
      'Lavado de carrocería con guante de microfibra de doble cara',
      'Descontaminado con Clay Bar (barra de arcilla)',
      'Limpieza profunda de rines, tolvas y llantas',
      'Aspirado premium y detallado de tablero',
      'Aplicación de cera selladora con polímeros hidrofóbicos (duración 3 meses)'
    ],
    recommendedFor: 'Mantenimiento mensual y brillo inmediato'
  },
  {
    id: 'interior_deep',
    name: 'Detallado de Interiores Profundo',
    description: 'Desmontaje parcial e inyección-succión para extraer suciedad, manchas y bacterias de alfombras y vestiduras.',
    priceEstimate: 'Desde $2,500 MXN',
    duration: '6 - 8 Horas',
    features: [
      'Lavado de asientos, alfombras, cielo y cajuela con inyección-succión',
      'Limpieza profunda de cinturones, consolas y recovecos',
      'Limpieza y acondicionamiento premium de piel (hidratación mate)',
      'Tratamiento de plásticos y molduras interiores con protección UV',
      'Sanitización y eliminación de olores con Generador de Ozono',
      'Limpieza profunda de ductos de aire acondicionado'
    ],
    recommendedFor: 'Restaurar el habitáculo al estado de agencia'
  },
  {
    id: 'paint_correction',
    name: 'Corrección de Pintura (Pulido)',
    description: 'Eliminación del efecto "telaraña" (swirls), rayones superficiales y oxidación para revivir el brillo de espejo.',
    priceEstimate: 'Desde $3,800 MXN',
    duration: '1 - 2 Días',
    features: [
      'Lavado y descontaminado químico (eliminación de lluvia ácida)',
      'Medición de espesor de laca con micrómetro digital',
      'Pulido de 2 pasos (corte y refinado) para eliminar hasta 85% de defectos',
      'Abrillantado final para potenciar reflejos metálicos y profundidad',
      'Pulido de faros delanteros y traseros con protección acrílica',
      'Sellador sintético de protección de pintura incluido'
    ],
    recommendedFor: 'Autos con pintura opaca, rayada o antes de un cerámico'
  },
  {
    id: 'ceramic_coating',
    name: 'Recubrimiento Cerámico Premium 9H',
    description: 'La máxima protección química disponible. Crea una capa de vidrio ultradura sobre la laca del auto.',
    priceEstimate: 'Desde $7,500 MXN',
    duration: '2 Días (Requiere curado)',
    features: [
      'Incluye corrección de pintura previa completa (paso esencial)',
      'Aplicación de nanotecnología cerámica 9H en carrocería',
      'Garantía de protección por 3 años contra rayos UV, químicos y savia de árbol',
      'Efecto hidrofóbico extremo (el agua y lodo resbalan de inmediato)',
      'Fácil lavado del vehículo y resistencia ante microrayones',
      'Aplicación de sellador cerámico en vidrios y caras de rines'
    ],
    recommendedFor: 'Entusiastas del automovilismo y vehículos nuevos o restaurados'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-neutral-950 text-white relative">
      {/* Decorative gradient glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
            Tratamientos de Nivel Profesional
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base">
            No somos un autolavado común. En Herrera Car Detailing cuidamos cada detalle utilizando insumos de calidad internacional (Meguiar's, Koch Chemie, CarPro) para lograr acabados impecables.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicePackages.map((pkg, index) => {
            // Pick a matching icon
            let Icon = Sparkles;
            if (pkg.id === 'premium_wash') Icon = Droplets;
            if (pkg.id === 'interior_deep') Icon = ShieldAlert;
            if (pkg.id === 'paint_correction') Icon = Sparkles;
            if (pkg.id === 'ceramic_coating') Icon = Shield;

            return (
              <div 
                key={pkg.id}
                className="bg-neutral-900/85 border border-neutral-800 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-red-600/30 hover:bg-neutral-900 transition-all duration-300 shadow-xl group relative"
              >
                {/* Popular Badge for Ceramic */}
                {pkg.id === 'ceramic_coating' && (
                  <span className="absolute -top-3 right-6 bg-gradient-to-r from-red-600 to-red-800 text-white text-[10px] tracking-widest font-extrabold uppercase px-3.5 py-1 rounded-full shadow-lg">
                    Recomendado Herrera
                  </span>
                )}

                <div>
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-neutral-800 border border-neutral-700/50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-wide">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5 font-mono">
                          <Clock className="w-3.5 h-3.5 text-red-500" />
                          {pkg.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Bullet points of features */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-red-500">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-neutral-800/80 pt-6 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-neutral-500 uppercase block">
                      Inversión estimada
                    </span>
                    <span className="text-xl font-mono font-bold text-red-500 tracking-wide mt-0.5 block">
                      {pkg.priceEstimate}
                    </span>
                  </div>
                  <a
                    href={`#cotizar?pkg=${pkg.id}`}
                    onClick={(e) => {
                      // Custom scroll action
                      const target = document.getElementById('cotizar');
                      if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                        // Dispatch event to select this package in the form
                        const event = new CustomEvent('select-package', { detail: { packageId: pkg.id } });
                        window.dispatchEvent(event);
                      }
                    }}
                    className="text-xs font-semibold uppercase bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-red-600 hover:text-white hover:border-red-600 px-5 py-2.5 rounded-lg transition-all"
                  >
                    Cotizar servicio
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about vehicle sizes */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-4 text-center max-w-2xl mx-auto text-xs text-neutral-400 leading-normal">
          ⚠️ <span className="font-semibold text-neutral-300">Nota:</span> Los precios varían según el tamaño y condiciones del vehículo (Chico, Mediano, Grande, o SUV/Premium). Puedes utilizar nuestro <a href="#cotizar" className="text-red-500 font-semibold hover:underline">Cotizador Inteligente</a> abajo para obtener un presupuesto detallado al instante.
        </div>
      </div>
    </section>
  );
}
