import { FileText, Image, Gauge, HardDrive } from 'lucide-react';
import { useState } from 'react';
import { OrderModal } from './OrderModal';

export function AlaCarteSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    name: string;
    price: string;
    type: 'package' | 'service';
  } | undefined>(undefined);

  const services = [
    {
      icon: FileText,
      name: 'Instalación de Office 365',
      price: '$250',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Image,
      name: 'Instalación de Adobe (Photoshop/Premiere)',
      price: '$300',
      description: 'Por programa o suite básica',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gauge,
      name: 'Optimización (Limpieza + Telemetría)',
      price: '$300',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: HardDrive,
      name: 'Clonación de Disco (HDD a SSD)',
      price: '$400-$500',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const handleSelectService = (service: typeof services[0]) => {
    setSelectedService({
      name: service.name,
      price: service.price,
      type: 'service'
    });
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1042]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Servicios A la Carta
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            ¿Solo necesitas algo específico? Selecciona el servicio individual que necesites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {service.name}
              </h3>
              
              {service.description && (
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {service.description}
                </p>
              )}

              <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                {service.price}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">MXN</div>

              <button 
                onClick={() => handleSelectService(service)}
                className={`mt-4 sm:mt-6 w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 opacity-90 hover:opacity-100 text-sm sm:text-base`}
              >
                Solicitar
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            <span className="text-cyan-400 font-semibold">Tip:</span> Los paquetes son más económicos que contratar servicios por separado. Considera nuestros planes completos para obtener mejor valor.
          </p>
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedService}
      />
    </section>
  );
}