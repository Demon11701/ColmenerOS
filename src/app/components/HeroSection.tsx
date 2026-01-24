import { Laptop, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0a0e27] overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Laptop className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Optimización
              </span>
              <br />
              <span className="text-white">y Mantenimiento</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Lleva tu laptop al máximo rendimiento con nuestros servicios profesionales de optimización y mantenimiento
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-gray-400">Laptops Optimizadas</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                3X
              </div>
              <div className="text-gray-400">Velocidad Mejorada</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Soporte</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a 
              href="#paquetes"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Ver Paquetes
            </a>
            <a 
              href="#contacto"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
