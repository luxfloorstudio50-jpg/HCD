import React, { useState } from 'react';
import { Review } from '../types';
import { Star, MessageSquare, Plus, CheckCircle, X } from 'lucide-react';

const initialReviews: Review[] = [
  {
    author: 'Fabián Nieto',
    rating: 5,
    date: 'Hace 2 meses',
    text: '¡Quedé muy satisfecho con el servicio de Herrera Car Detailing! Le realizaron una limpieza profunda al interior de mi carro y el resultado fue excelente, quedó como nuevo. Súper profesionales en todo el trato.',
    isLocalGuide: false,
    photosCount: 3
  },
  {
    author: 'Adriana Santos',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'Excelente servicio. Envíe mi auto para un detallado y lo dejaron como nuevo. Se nota que les apasiona lo que hacen y cuidan cada mínimo rincón de la carrocería. Lo recomiendo ampliamente.',
    isLocalGuide: true,
    photosCount: 25
  },
  {
    author: 'Martin Maldonado',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'Les dejé mi 911 targa 50 aniversario. Hicieron un gran trabajo en cuanto a la protección de interiores y exteriores. Excelente comunicación en todo momento, me mandaron fotos de cada paso del proceso. Un servicio de primer nivel.',
    isLocalGuide: true,
    photosCount: 10
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const addedReview: Review = {
      author: newAuthor,
      rating: newRating,
      date: 'Hace unos momentos',
      text: newText,
      isLocalGuide: false
    };

    setReviews([addedReview, ...reviews]);
    setIsSubmitted(true);
    
    // Reset form after a brief delay
    setTimeout(() => {
      setNewAuthor('');
      setNewRating(5);
      setNewText('');
      setIsSubmitted(false);
      setIsFormOpen(false);
    }, 2000);
  };

  return (
    <section id="opiniones" className="py-16 md:py-24 bg-neutral-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Summary stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-10 md:mb-16 border-b border-neutral-900 pb-10 md:pb-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              Testimonios de Clientes
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2">
              Opiniones de Quienes Confían en Nosotros
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl text-sm md:text-base">
              La satisfacción de nuestros clientes es nuestra mejor garantía. Contamos con una calificación impecable en Google Maps gracias a nuestro compromiso absoluto con el detalle.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
            <span className="text-6xl font-display font-extrabold text-white leading-none">5.0</span>
            
            {/* Stars */}
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-amber-500" />
              ))}
            </div>

            <p className="text-neutral-300 text-xs font-semibold tracking-wider uppercase mt-3">
              34 Opiniones de Google Maps
            </p>

            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-5 flex items-center justify-center gap-2 w-full text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 py-3 rounded-xl transition-all shadow-lg shadow-red-600/25"
            >
              <Plus className="w-4 h-4" />
              Escribir una opinión
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-lg relative"
            >
              {/* Google G icon watermark */}
              <div className="absolute top-6 right-6 opacity-10 text-white font-black text-3xl font-display pointer-events-none select-none">
                G
              </div>

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-500 font-bold font-display text-sm">
                    {rev.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                      {rev.author}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {rev.isLocalGuide && (
                        <span className="text-[9px] font-bold text-red-500/90 border border-red-500/20 bg-red-500/5 px-1.5 py-0.2 rounded uppercase">
                          Local Guide
                        </span>
                      )}
                      <span className="text-[10px] text-neutral-500">{rev.date}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-sans">
                  "{rev.text}"
                </p>
              </div>

              {/* Photos Badge if any */}
              {rev.photosCount && rev.photosCount > 0 && (
                <div className="mt-5 pt-3 border-t border-neutral-800/40 text-[10px] text-neutral-500 font-medium flex items-center gap-1">
                  📸 Adjuntó {rev.photosCount} fotos en Google
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal: Add Review Form */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full p-6 md:p-8 relative shadow-2xl">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">¡Muchas Gracias!</h3>
                  <p className="text-neutral-400 text-sm mt-1.5">Tu opinión de 5 estrellas ha sido agregada exitosamente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-red-500" />
                      Escribir una opinión
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1 leading-normal">
                      Ayúdanos a seguir mejorando. Tu opinión se publicará directamente en esta página.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
                      Tu Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
                      Calificación (Estrellas)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 text-amber-500 transition-transform hover:scale-110"
                        >
                          <Star 
                            className={`w-8 h-8 ${newRating >= star ? 'fill-current' : 'text-neutral-700'}`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
                      Tu Comentario o Reseña
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Cuéntanos tu experiencia con el lavado o detallado de tu auto..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 py-3 rounded-xl transition-all shadow-lg shadow-red-600/25"
                  >
                    Publicar Opinión
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
