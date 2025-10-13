import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919546197882', '_blank');
  };

  return (
    <div className="fixed bottom-24 right-8 transform -translate-y-1/2 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="rounded-full w-12 h-10 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="w-6 h-4" />
        <span className="sr-only">Get in Touch via WhatsApp</span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
          Get in Touch
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;