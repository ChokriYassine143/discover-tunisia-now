
import { useState } from "react";
import { Menu, X, MapPin, Calendar, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-red-600">Discover Tunisia</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#events" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Événements
            </a>
            <a href="#map" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Carte
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Avis
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chatbot
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            <a href="#destinations" className="block text-gray-700 hover:text-red-600 font-medium">
              Destinations
            </a>
            <a href="#events" className="block text-gray-700 hover:text-red-600 font-medium">
              Événements
            </a>
            <a href="#map" className="block text-gray-700 hover:text-red-600 font-medium">
              Carte
            </a>
            <a href="#reviews" className="block text-gray-700 hover:text-red-600 font-medium">
              Avis
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chatbot
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
