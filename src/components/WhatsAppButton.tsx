import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 animate-fade-in">
      {/* Tooltip balloon */}
      <div className="hidden md:block bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg font-medium whitespace-nowrap animate-bounce">
        Nos chame pelo WhatsApp!
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>
      
      {/* WhatsApp Icon Button */}
      <a
        href="https://wa.me/5516982213496"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
