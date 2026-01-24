import { useState } from 'react';
// Importamos los iconos necesarios (ya no usamos Laptop porque usaremos tu Logo real)
import { Phone, Menu, X } from 'lucide-react';

// ✅ CORRECCIÓN 1: Importamos desde la carpeta ./components/
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { AlaCarteSection } from './components/AlaCarteSection';
import { PremiumSection } from './components/PremiumSection';
import { ContactSection } from './components/ContactSection';

// ✅ CORRECCIÓN 2: Importamos tu Logo real desde su carpeta
import { Logo } from './components/Logo';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* ✅ Usamos tu componente Logo original */}
              <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-white font-bold text-lg sm:text-xl">ColmenerOS</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Servicios
              </a>
              <a href="#paquetes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Paquetes
              </a>
              <a href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contacto
              </a>
              <a 
                href="https://wa.me/527581211174" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#servicios" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#paquetes" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Paquetes
              </a>
              <a 
                href="#contacto" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="https://wa.me/527581211174" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <div id="servicios">
          <ServicesSection />
        </div>
        <div id="paquetes">
          <PackagesSection />
        </div>
        <AlaCarteSection />
        <PremiumSection />
        <div id="contacto">
          <ContactSection />
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/527581211174?text=Hola,%20me%20interesa%20optimizar%20mi%20laptop" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </a>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 bg-gradient-to-b from-[#0a0e27] to-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* ✅ Usamos tu componente Logo original aquí también */}
                <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
                <span className="text-white font-bold">ColmenerOS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Servicios profesionales de optimización y mantenimiento para laptops
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Paquetes</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>El Esencial - Estudiantes</li>
                <li>El Creativo - Diseño/Video</li>
                <li>Renovación Total - Gamer/Pro</li>
                <li>Servicios a la Carta</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Optimización de Sistema</li>
                <li>Instalación de Software</li>
                <li>Limpieza Profunda</li>
                <li>Clonación de Disco</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="mailto:colmener1os@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                    colmener1os@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/527581211174" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    +52 758 121 1174
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 ColmenerOS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}