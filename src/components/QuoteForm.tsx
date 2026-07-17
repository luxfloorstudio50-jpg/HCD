import React, { useState, useEffect } from 'react';
import { servicePackages } from './Services';
import { Sparkles, MessageSquare, Car, DollarSign, PlusCircle, Check, Info } from 'lucide-react';

interface CarSizeOption {
  id: 'chico' | 'mediano' | 'grande_suv' | 'superdeportivo';
  name: string;
  multiplier: number;
  examples: string;
}

const carSizes: CarSizeOption[] = [
  {
    id: 'chico',
    name: 'Chico / Compacto',
    multiplier: 1.0,
    examples: 'Audi A1, Suzuki Swift, March, Hatchbacks'
  },
  {
    id: 'mediano',
    name: 'Mediano / Sedán',
    multiplier: 1.2,
    examples: 'VW Jetta, Mazda 3, BMW Serie 3, Honda Civic'
  },
  {
    id: 'grande_suv',
    name: 'SUV / Familiar Grande',
    multiplier: 1.5,
    examples: 'Honda CR-V, Range Rover Evoque, Suburban, Pickups'
  },
  {
    id: 'superdeportivo',
    name: 'Superdeportivo / Premium',
    multiplier: 1.8,
    examples: 'Audi R8, Porsche 911, Corvette C8, Ferrari'
  }
];

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const addOnOptions: AddOnOption[] = [
  {
    id: 'engine_bay',
    name: 'Detallado de Motor Premium',
    price: 800,
    description: 'Lavado a vapor de bahía de motor, desengrasado y aplicación de sellador dieléctrico brillante.'
  },
  {
    id: 'glass_seal',
    name: 'Sellado de Cristales Hidrofóbico',
    price: 600,
    description: 'Pulido de parabrisas para lluvia ácida y capa de repelencia al agua extrema por 6 meses.'
  },
  {
    id: 'wheel_polish',
    name: 'Pulido y Sellado Cerámico de Rines',
    price: 1200,
    description: 'Desmontaje de rines, eliminación de ferodo, pulido de aleación y cerámico protector de alta temperatura.'
  },
  {
    id: 'leather_treatment',
    name: 'Acondicionamiento Cerámico de Piel',
    price: 900,
    description: 'Tratamiento hidrofóbico antimanchas sobre vestiduras de piel contra líquidos y desgaste solar.'
  }
];

export default function QuoteForm() {
  const [selectedSize, setSelectedSize] = useState<'chico' | 'mediano' | 'grande_suv' | 'superdeportivo'>('grande_suv');
  const [selectedPkgId, setSelectedPkgId] = useState('premium_wash');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Handle external selection from Services section
  useEffect(() => {
    const handleSelectPackage = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.packageId) {
        setSelectedPkgId(customEvent.detail.packageId);
      }
    };
    window.addEventListener('select-package', handleSelectPackage);
    return () => window.removeEventListener('select-package', handleSelectPackage);
  }, []);

  // Package base prices map
  const basePrices: Record<string, number> = {
    premium_wash: 1200,
    interior_deep: 2500,
    paint_correction: 3800,
    ceramic_coating: 7500
  };

  const currentPkg = servicePackages.find(p => p.id === selectedPkgId) || servicePackages[0];
  const sizeMultiplier = carSizes.find(s => s.id === selectedSize)?.multiplier || 1.0;
  
  // Calculate pricing
  const basePrice = basePrices[selectedPkgId] || 1200;
  const packageTotal = Math.round(basePrice * sizeMultiplier);
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const option = addOnOptions.find(o => o.id === addOnId);
    return sum + (option ? option.price : 0);
  }, 0);
  const grandTotal = packageTotal + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  // Generate WhatsApp dynamic message
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const sizeName = carSizes.find(s => s.id === selectedSize)?.name || '';
    const addOnNames = selectedAddOns
      .map(id => addOnOptions.find(o => o.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const addOnsSection = addOnNames ? `\n• *Adicionales:* ${addOnNames}` : '';
    const nameGreeting = clientName ? `Mi nombre es *${clientName}*` : 'Hola';

    const text = `${nameGreeting}, me gustaría cotizar y agendar un servicio de detallado en *Herrera Car Detailing*.\n\n*Detalles de mi Cotización:*\n• *Paquete:* ${currentPkg.name}\n• *Tamaño de Auto:* ${sizeName}\n• *Inversión Estimada:* $${grandTotal.toLocaleString('es-MX')} MXN${addOnsSection}\n\n_Por favor, confírmenme su disponibilidad para agendar. ¡Gracias!_`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/528123868359?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cotizar" className="py-16 md:py-24 bg-neutral-900 text-white relative">
      {/* Decorative lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.02),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            Cotizador Inteligente
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2">
            Cotiza y Agenda al Instante
          </h2>
          <p className="text-neutral-400 mt-4 text-sm md:text-base">
            Selecciona el tamaño de tu vehículo, el paquete ideal y cualquier tratamiento adicional. Obtén un presupuesto transparente y mándalo por WhatsApp con un solo click.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Interactive Calculator Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl space-y-8">
            {/* Step 1: Car Size */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-neutral-850 flex items-center justify-center text-red-500 text-xs font-bold font-mono">1</div>
                <h3 className="font-display font-bold text-lg text-white">Selecciona el tamaño de tu vehículo</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {carSizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 relative group flex flex-col justify-between ${
                      selectedSize === size.id
                        ? 'border-red-600 bg-red-600/5 shadow-md'
                        : 'border-neutral-850 bg-neutral-900/40 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-sm tracking-wide ${selectedSize === size.id ? 'text-red-400' : 'text-white'}`}>
                          {size.name}
                        </span>
                        <Car className={`w-4 h-4 ${selectedSize === size.id ? 'text-red-500' : 'text-neutral-500'}`} />
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        {size.examples}
                      </p>
                    </div>
                    <div className="text-[9px] tracking-wider text-neutral-500 uppercase mt-3">
                      Multiplicador: {size.multiplier}x
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Detailing Package */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-neutral-850 flex items-center justify-center text-red-500 text-xs font-bold font-mono">2</div>
                <h3 className="font-display font-bold text-lg text-white">Selecciona tu Paquete de Detallado</h3>
              </div>
              <div className="space-y-3">
                {servicePackages.map((pkg) => {
                  const calculatedPkgPrice = Math.round(basePrices[pkg.id] * sizeMultiplier);
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                        selectedPkgId === pkg.id
                          ? 'border-red-600 bg-red-600/5 shadow-md'
                          : 'border-neutral-850 bg-neutral-900/40 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-4.5 pr-4">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedPkgId === pkg.id ? 'border-red-600 text-red-500' : 'border-neutral-700'
                        }`}>
                          {selectedPkgId === pkg.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <span className={`font-bold text-sm tracking-wide block ${selectedPkgId === pkg.id ? 'text-red-400' : 'text-white'}`}>
                            {pkg.name}
                          </span>
                          <span className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {pkg.description}
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono text-neutral-400 block uppercase tracking-widest">Calculado</span>
                        <span className="text-base font-mono font-bold text-red-500 tracking-wide mt-0.5 block">
                          ${calculatedPkgPrice.toLocaleString('es-MX')} MXN
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-neutral-850 flex items-center justify-center text-red-500 text-xs font-bold font-mono">3</div>
                <h3 className="font-display font-bold text-lg text-white">¿Deseas agregar tratamientos extra?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {addOnOptions.map((opt) => {
                  const isChecked = selectedAddOns.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleAddOn(opt.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                        isChecked
                          ? 'border-red-600 bg-red-600/5 shadow-md'
                          : 'border-neutral-850 bg-neutral-900/40 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-bold text-xs tracking-wide ${isChecked ? 'text-red-400' : 'text-white'}`}>
                            {opt.name}
                          </span>
                          <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-red-600 border-red-600 text-white' : 'border-neutral-700'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="text-[10px] text-neutral-400 leading-relaxed mt-1">
                          {opt.description}
                        </p>
                      </div>
                      <div className="text-xs font-mono font-bold text-red-500 tracking-wide mt-3">
                        +${opt.price.toLocaleString('es-MX')} MXN
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Summary Side-card (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-neutral-950 border border-neutral-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
              {/* Hexagonal led header accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800" />

              <h3 className="font-display font-extrabold text-xl tracking-wide mb-6">
                Resumen de Cotización
              </h3>

              {/* Items breakdown */}
              <div className="space-y-4.5 mb-8 border-b border-neutral-900 pb-6">
                <div className="flex justify-between items-start gap-4 text-xs">
                  <div>
                    <span className="font-bold text-neutral-200 block">Tamaño Seleccionado</span>
                    <span className="text-neutral-400 mt-0.5 block">
                      {carSizes.find(s => s.id === selectedSize)?.name}
                    </span>
                  </div>
                  <span className="font-mono text-neutral-400">{sizeMultiplier}x</span>
                </div>

                <div className="flex justify-between items-start gap-4 text-xs">
                  <div>
                    <span className="font-bold text-neutral-200 block">Servicio Base</span>
                    <span className="text-neutral-400 mt-0.5 block">{currentPkg.name}</span>
                  </div>
                  <span className="font-mono text-neutral-300">${packageTotal.toLocaleString('es-MX')} MXN</span>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-neutral-900/60">
                    <span className="font-bold text-neutral-200 text-xs block">Tratamientos Adicionales:</span>
                    {selectedAddOns.map((id) => {
                      const opt = addOnOptions.find(o => o.id === id);
                      if (!opt) return null;
                      return (
                        <div key={id} className="flex justify-between items-center text-xs text-neutral-400">
                          <span className="line-clamp-1">• {opt.name}</span>
                          <span className="font-mono">+${opt.price.toLocaleString('es-MX')} MXN</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase block font-semibold">Total estimado</span>
                  <span className="text-3xl font-mono font-black text-red-500 tracking-wide mt-1 block">
                    ${grandTotal.toLocaleString('es-MX')} MXN
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500">
                  <DollarSign className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Client Info form */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
                    Tu Nombre Completo (Opcional)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Manuel Gómez"
                    className="w-full bg-neutral-900 border border-neutral-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Submitting button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 py-4 rounded-xl transition-all shadow-lg shadow-red-600/10 group cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  Agendar por WhatsApp
                </button>
              </form>

              {/* Informative footer */}
              <div className="flex gap-2 bg-neutral-900/60 border border-neutral-850 rounded-xl p-3.5 mt-5">
                <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-500 leading-normal">
                  Este cotizador provee un estimado basado en dimensiones estándar. El precio final se confirma por Juan Herrera al evaluar físicamente las condiciones de laca y piel del vehículo en el taller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
