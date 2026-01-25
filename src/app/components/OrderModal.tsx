import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: {
    name: string;
    price: string;
    type: 'package' | 'service';
  };
}

export function OrderModal({ isOpen, onClose, selectedPlan }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceBrand: '',
    deviceModel: '',
    additionalNotes: ''
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevenir scroll en el body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll cuando se cierra
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Duración de la animación
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Estructura el mensaje para WhatsApp
    const message = `🔧 *Nueva Solicitud - ColmenerOS* 🔧

📦 *${selectedPlan?.type === 'package' ? 'Paquete' : 'Servicio'}:* ${selectedPlan?.name}
💰 *Precio:* ${selectedPlan?.price} MXN

👤 *Datos del Cliente:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

💻 *Equipo:*
• Marca: ${formData.deviceBrand}
• Modelo: ${formData.deviceModel}

${formData.additionalNotes ? `📝 *Notas adicionales:*\n${formData.additionalNotes}` : ''}

---
_Enviado desde ColmenerOS Web_`;

    // Encode el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/527581211174?text=${encodedMessage}`;
    
    // Abre WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Cierra el modal
    handleClose();
    
    // Resetea el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      deviceBrand: '',
      deviceModel: '',
      additionalNotes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-2xl bg-gradient-to-b from-gray-900 to-gray-900/95 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed without sticky */}
        <div className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-900/80 border-b border-purple-500/30 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Solicitar Servicio
            </h2>
            <p className="text-gray-400 mt-1 text-sm sm:text-base truncate">
              {selectedPlan?.type === 'package' ? 'Paquete' : 'Servicio'}: <span className="text-white font-semibold">{selectedPlan?.name}</span>
            </p>
            <p className="text-cyan-400 font-bold text-sm sm:text-base">{selectedPlan?.price} MXN</p>
          </div>
          <button 
            onClick={handleClose}
            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Scrollable Form Container */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Información Personal</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="758 123 4567"
                  />
                </div>
              </div>
            </div>

            {/* Device Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Información del Equipo</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="deviceBrand" className="block text-sm font-medium text-gray-300 mb-2">
                    Marca del Equipo *
                  </label>
                  <input
                    type="text"
                    id="deviceBrand"
                    name="deviceBrand"
                    required
                    value={formData.deviceBrand}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Ej: HP, Dell, Lenovo"
                  />
                </div>

                <div>
                  <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-300 mb-2">
                    Modelo del Equipo *
                  </label>
                  <input
                    type="text"
                    id="deviceModel"
                    name="deviceModel"
                    required
                    value={formData.deviceModel}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Ej: Pavilion 15"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-300 mb-2">
                Notas Adicionales (opcional)
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                placeholder="Cuéntanos cualquier detalle adicional sobre tu equipo o tus necesidades..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 transition-all text-sm sm:text-base"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}