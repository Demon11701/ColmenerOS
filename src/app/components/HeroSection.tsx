import { Laptop, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0a0e27] overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Laptop className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold px-2">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Optimización
              </span>
              <br />
              <span className="text-white">y Mantenimiento</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Lleva tu laptop al máximo rendimiento con nuestros servicios profesionales de optimización y mantenimiento
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-6 sm:pt-8 px-4">
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Laptops Optimizadas</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                3X
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Velocidad Mejorada</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-900/20 border border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-sm sm:text-base">Soporte</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-4">
            <a 
              href="#paquetes"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center"
            >
              Ver Paquetes
            </a>
            <a 
              href="#contacto"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}