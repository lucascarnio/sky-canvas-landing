import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-glow z-50 hover:scale-110 transition-transform"
    >
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
