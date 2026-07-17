import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'lavado' | 'interiores' | 'ceramico';
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/src/assets/images/hero_car_1784315616332.jpg',
    title: 'Acabado Espejo Audi R8',
    category: 'ceramico',
    description: 'Corrección de pintura de 2 pasos y aplicación de recubrimiento cerámico premium en carrocería.'
  },
  {
    id: '2',
    src: '/src/assets/images/foam_wash_1784315626215.jpg',
    title: 'Baño de Espuma Activa',
    category: 'lavado',
    description: 'Prelavado con Snow Foam de pH neutro para remover impurezas sin fricción ni microrayones.'
  },
  {
    id: '3',
    src: '/src/assets/images/car_interior_1784315637292.jpg',
    title: 'Detalle de Interiores Porsche',
    category: 'interiores',
    description: 'Tratamiento profundo de pieles y alfombras, hidratación mate y eliminación de bacterias con ozono.'
  },
  {
    id: '4',
    src: '/src/assets/images/ceramic_coating_1784315646126.jpg',
    title: 'Corvette C8 Protección 9H',
    category: 'ceramico',
    description: 'Aplicación de sellador cerámico de grafeno de ultra alta repelencia y brillo cristalino.'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<'todos' | 'lavado' | 'interiores' | 'ceramico'>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (src: string) => {
    const idx = galleryItems.findIndex(item => item.src === src);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galeria" className="py-16 md:py-24 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              Galería de Trabajos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
              Resultados de Agencia
            </h2>
            <p className="text-neutral-400 mt-2 max-w-xl text-sm">
              Conoce algunos de los vehículos premium y superdeportivos de Monterrey que han recibido el tratamiento exclusivo de Herrera Car Detailing.
            </p>
          </div>

          {/* Categories Filters */}
          <div className="flex flex-wrap gap-2">
            {(['todos', 'lavado', 'interiores', 'ceramico'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === cat
                    ? 'bg-red-600 border-red-600 text-white shadow-md shadow-red-600/25'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat === 'todos' ? 'Todos' : cat === 'ceramico' ? 'Cerámico & Pulido' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.src)}
              className="group cursor-pointer relative bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-neutral-700 hover:-translate-y-1"
            >
              {/* Image Container with aspect-ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-neutral-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech honeycomb overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300" />
                
                {/* Search/Zoom glass icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption Card text */}
              <div className="p-4 border-t border-neutral-800/50">
                <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block mb-1">
                  {item.category === 'ceramico' ? 'Cerámico & Corrección' : item.category === 'interiores' ? 'Habitáculo' : 'Lavado Detalle'}
                </span>
                <h4 className="text-sm font-bold tracking-wide text-white group-hover:text-red-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to Instagram and Facebook */}
        <div className="mt-16 bg-gradient-to-r from-neutral-950 to-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-500 shrink-0 mx-auto md:mx-0">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-lg text-white">¿Quieres ver más de nuestro trabajo diario?</h4>
              <p className="text-neutral-400 text-xs md:text-sm mt-0.5">Subimos videos del proceso (antes y después) de cada auto a nuestras redes oficiales.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Herrera-Detailing/61574392054051/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 px-5 py-3 rounded-xl transition-all"
            >
              Facebook Oficial
            </a>
            <a
              href="https://www.instagram.com/herrera_cardetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl transition-all shadow-md shadow-red-600/25"
            >
              Siguenos en Instagram
            </a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={showPrev}
            className="absolute left-4 p-3 rounded-full bg-neutral-900/80 border border-neutral-800/50 text-neutral-400 hover:text-white transition-all z-20 hover:bg-neutral-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={showNext}
            className="absolute right-4 p-3 rounded-full bg-neutral-900/80 border border-neutral-800/50 text-neutral-400 hover:text-white transition-all z-20 hover:bg-neutral-800"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Description Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center gap-4 relative"
          >
            <div className="aspect-[4/3] w-full max-h-[70vh] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Description Card */}
            <div className="bg-neutral-900/90 border border-neutral-800 p-5 rounded-xl w-full text-center max-w-lg shadow-2xl backdrop-blur-md">
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block mb-1">
                Herrera Car Detailing Monterrey
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                {galleryItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
