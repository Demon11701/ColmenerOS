import { Check } from 'lucide-react';
import { useState } from 'react';
import { OrderModal } from './OrderModal';

export function PackagesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    type: 'package' | 'service';
  } | undefined>(undefined);

  const packages = [
    {
      name: 'El Esencial',
      subtitle: 'Estudiantes',
      price: '$350-$450',
      period: 'MXN',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Eliminación de Telemetría y Basura',
        'Instalación de Office 365',
        'Navegador sin anuncios',
        'Limpieza externa básica'
      ]
    },
    {
      name: 'El Creativo',
      subtitle: 'Diseño/Video',
      price: '$550-$700',
      period: 'MXN',
      popular: true,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Todo lo del paquete Esencial',
        'Instalación de Photoshop / Premiere',
        'Drivers de Video actualizados (instalación limpia)',
        'Optimización de energía para renderizado'
      ]
    },
    {
      name: 'Renovación Total',
      subtitle: 'Gamer/Pro',
      price: '$800-$950',
      period: 'MXN',
      color: 'from-pink-500 to-rose-500',
      features: [
        'Todo lo anterior',
        'Optimización de Red (DNS y Ping)',
        'Personalización estética completa (Windows)',
        'Limpieza detallada de puertos y pantalla'
      ]
    }
  ];

  const handleSelectPlan = (pkg: typeof packages[0]) => {
    setSelectedPackage({
      name: pkg.name,
      price: pkg.price,
      type: 'package'
    });
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1a1042] to-[#0a0e27]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Paquetes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Elige el paquete perfecto según tus necesidades y ahorra más que contratando servicios por separado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border ${
                pkg.popular ? 'border-purple-500 md:scale-105' : 'border-gray-800'
              } hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{pkg.subtitle}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2 text-sm sm:text-base">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectPlan(pkg)}
                className={`w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r ${pkg.color} text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base ${
                  pkg.popular ? 'hover:shadow-purple-500/50' : 'hover:shadow-cyan-500/50'
                }`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPackage}
      />
    </section>
  );
}