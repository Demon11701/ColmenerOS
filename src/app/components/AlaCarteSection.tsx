import { FileText, Image, Gauge, HardDrive } from 'lucide-react';

export function AlaCarteSection() {
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

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1042]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Servicios A la Carta
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Solo necesitas algo específico? Selecciona el servicio individual que necesites
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {service.name}
              </h3>
              
              {service.description && (
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
              )}

              <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                {service.price}
              </div>
              <div className="text-gray-400 text-sm">MXN</div>

              <button className={`mt-6 w-full py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 opacity-90 hover:opacity-100`}>
                Solicitar
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400 font-semibold">Tip:</span> Los paquetes son más económicos que contratar servicios por separado. Considera nuestros planes completos para obtener mejor valor.
          </p>
        </div>
      </div>
    </section>
  );
}
