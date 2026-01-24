import { HeroSection } from '@/app/components/HeroSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { PackagesSection } from '@/app/components/PackagesSection';
import { AlaCarteSection } from '@/app/components/AlaCarteSection';
import { PremiumSection } from '@/app/components/PremiumSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CO</span>
              </div>
              <span className="text-white font-bold text-xl">ColmenerOS</span>
            </div>
            
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-8 h-8 text-white" />
      </a>

      {/* Footer */}
      <footer className="relative py-12 bg-gradient-to-b from-[#0a0e27] to-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CO</span>
                </div>
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
                  <a href="mailto:colmener1os@gmail.com" className="hover:text-cyan-400 transition-colors">
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

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 ColmenerOS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
