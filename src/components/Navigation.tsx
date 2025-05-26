
import { useState } from "react";
import { Menu, X, MessageCircle, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f3c76aa4-713e-47f8-bdac-56bb2caa9748.png" 
              alt="TuniTerra Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
              TuniTerra
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#events" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Événements
            </a>
            <Link to="/influenceurs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Influenceurs
            </Link>
            <Link to="/carte" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Carte
            </Link>
            <Link to="/avis" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Avis
            </Link>
            <Link to="/recommendations-ia">
              <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Recommandations IA
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white">
                  <User className="w-4 h-4 mr-2" />
                  Inscription
                </Button>
              </Link>
            </div>
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
            <a href="#destinations" className="block text-gray-700 hover:text-green-600 font-medium">
              Destinations
            </a>
            <a href="#events" className="block text-gray-700 hover:text-green-600 font-medium">
              Événements
            </a>
            <Link to="/influenceurs" className="block text-gray-700 hover:text-green-600 font-medium">
              Influenceurs
            </Link>
            <Link to="/carte" className="block text-gray-700 hover:text-green-600 font-medium">
              Carte
            </Link>
            <Link to="/avis" className="block text-gray-700 hover:text-green-600 font-medium">
              Avis
            </Link>
            <Link to="/recommendations-ia">
              <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white w-full mb-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Recommandations IA
              </Button>
            </Link>
            <div className="space-y-2">
              <Link to="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white w-full">
                  <User className="w-4 h-4 mr-2" />
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
