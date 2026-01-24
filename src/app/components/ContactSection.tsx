import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Estructura el mensaje para WhatsApp
    const message = `💬 *Nuevo Mensaje - ColmenerOS* 💬

👤 *Datos del Cliente:*
• Nombre: ${formData.name}
• Email: ${formData.email}
${formData.phone ? `• Teléfono: ${formData.phone}` : ''}

📝 *Mensaje:*
${formData.message}

---
_Enviado desde ColmenerOS Web - Formulario de Contacto_`;

    // Encode el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/527581211174?text=${encodedMessage}`;
    
    // Abre WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Resetea el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1a1042] to-[#0a0e27]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contacto y Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Listo para optimizar tu laptop? Contáctanos y te responderemos pronto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:colmener1os@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      colmener1os@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp / Teléfono</h4>
                    <a href="https://wa.me/527581211174" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                      +52 758 121 1174
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Click para contactar por WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-400">Servicio a domicilio</p>
                    <p className="text-gray-400">o en nuestro taller</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-white font-semibold mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Lunes - Sábado: 9:00 AM - 8:00 PM</p>
                  <p>Domingo: Con cita previa</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://wa.me/527581211174?text=Hola,%20me%20interesa%20optimizar%20mi%20laptop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}