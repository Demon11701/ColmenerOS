import { Zap, Shield, Wrench, Rocket } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: 'Optimización de Rendimiento',
      description: 'Mejora la velocidad y eficiencia de tu laptop eliminando archivos innecesarios y optimizando el sistema.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Mantenimiento Preventivo',
      description: 'Protege tu equipo con revisiones periódicas y actualizaciones de seguridad para prevenir problemas.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wrench,
      title: 'Limpieza Profunda',
      description: 'Limpieza física y digital completa para mantener tu laptop en condiciones óptimas de funcionamiento.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Rocket,
      title: 'Actualización de Hardware',
      description: 'Mejora el rendimiento de tu laptop con actualizaciones de RAM, SSD y otros componentes.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1042]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones profesionales para mantener tu laptop en perfecto estado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400">
                {service.description}
              </p>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
