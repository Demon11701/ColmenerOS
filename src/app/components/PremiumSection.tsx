import { Sparkles, Cpu, HardDrive, Gauge } from 'lucide-react';

export function PremiumSection() {
  const benefits = [
    {
      icon: Cpu,
      title: 'Mayor Velocidad',
      description: 'Optimiza el procesador para un rendimiento hasta 3x más rápido'
    },
    {
      icon: HardDrive,
      title: 'Más Espacio',
      description: 'Libera espacio eliminando archivos innecesarios y duplicados'
    },
    {
      icon: Gauge,
      title: 'Mejor Rendimiento',
      description: 'Configura tu sistema para aprovechar al máximo los recursos'
    },
    {
      icon: Sparkles,
      title: 'Experiencia Premium',
      description: 'Disfruta de una laptop como nueva todos los días'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1042]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">¿Qué tu laptop se sienta </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              premium y al máximo rendimiento?
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Con nuestros servicios de optimización, tu laptop funcionará como el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Optimiza tu Laptop Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
