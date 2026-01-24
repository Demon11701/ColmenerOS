import { Check } from 'lucide-react';

export function PackagesSection() {
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

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1a1042] to-[#0a0e27]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Paquetes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elige el paquete perfecto según tus necesidades y ahorra más que contratando servicios por separado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border ${
                pkg.popular ? 'border-purple-500 scale-105' : 'border-gray-800'
              } hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 mb-4">{pkg.subtitle}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg bg-gradient-to-r ${pkg.color} text-white font-semibold hover:shadow-lg transition-all duration-300 ${
                pkg.popular ? 'hover:shadow-purple-500/50' : 'hover:shadow-cyan-500/50'
              }`}>
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
