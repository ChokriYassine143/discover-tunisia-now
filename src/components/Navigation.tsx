import { useState } from "react";
import { Menu, X, MessageCircle, User, LogIn, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cart } from "@/components/Cart";

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
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Accueil
            </Link>
            <a href="#destinations" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Destinations
            </a>
            <a href="#events" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Événements
            </a>
            <Link to="/accommodations" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Hébergements
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Artisanat
            </Link>
            <Link to="/influenceurs" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Influenceurs
            </Link>
            <Link to="/carte" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Carte
            </Link>
            <Link to="/avis" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-3 py-2">
              Avis
            </Link>
            
            <div className="flex items-center space-x-2 ml-4 border-l border-gray-300 pl-4">
              <Cart />
              <Link to="/recommendations-ia">
                <Button size="sm" className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  IA
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                  <User className="w-4 h-4 mr-2" />
                  Profil
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <UserCog className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
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
          <div className="md:hidden py-4 space-y-2 bg-white border-t border-gray-200">
            <Link to="/" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Accueil
            </Link>
            <a href="#destinations" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Destinations
            </a>
            <a href="#events" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Événements
            </a>
            <Link to="/accommodations" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Hébergements
            </Link>
            <Link to="/products" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Artisanat
            </Link>
            <Link to="/influenceurs" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Influenceurs
            </Link>
            <Link to="/carte" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Carte
            </Link>
            <Link to="/avis" className="block text-gray-700 hover:text-green-600 font-medium px-3 py-2">
              Avis
            </Link>
            
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="px-3">
                <Cart />
              </div>
              <Link to="/recommendations-ia" className="block">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Recommandations IA
                </Button>
              </Link>
              <Link to="/profile" className="block">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                  <User className="w-4 h-4 mr-2" />
                  Profil
                </Button>
              </Link>
              <Link to="/admin" className="block">
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full">
                  <UserCog className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
              <Link to="/login" className="block">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
