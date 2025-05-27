
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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/f3c76aa4-713e-47f8-bdac-56bb2caa9748.png" 
              alt="TuniTerra Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
              TuniTerra
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Accueil
            </Link>
            <a href="#destinations" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Destinations
            </a>
            <a href="#events" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Événements
            </a>
            <Link to="/accommodations" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Hébergements
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Artisanat
            </Link>
            <Link to="/influenceurs" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Influenceurs
            </Link>
            <Link to="/carte" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Carte
            </Link>
            <Link to="/avis" className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 xl:px-3 py-2 text-sm xl:text-base">
              Avis
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 border-l border-gray-300 pl-2 xl:pl-4">
            <Cart />
            <Link to="/recommendations-ia">
              <Button size="sm" className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white text-xs xl:text-sm px-2 xl:px-3">
                <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">IA</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50 text-xs xl:text-sm px-2 xl:px-3">
                <User className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Profil</span>
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="sm" className="border-orange-600 text-orange-600 hover:bg-orange-50 text-xs xl:text-sm px-2 xl:px-3">
                <UserCog className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Admin</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50 text-xs xl:text-sm px-2 xl:px-3">
                <LogIn className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Connexion</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="hidden sm:block">
              <Cart />
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
              size="sm"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {/* Mobile Cart (for small screens) */}
              <div className="sm:hidden pb-2 border-b border-gray-200">
                <Cart />
              </div>
              
              {/* Navigation Links */}
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <a 
                href="#destinations" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </a>
              <a 
                href="#events" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Événements
              </a>
              <Link 
                to="/accommodations" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hébergements
              </Link>
              <Link 
                to="/products" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Artisanat
              </Link>
              <Link 
                to="/influenceurs" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Influenceurs
              </Link>
              <Link 
                to="/carte" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Carte
              </Link>
              <Link 
                to="/avis" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium px-3 py-2 rounded-md text-base transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Avis
              </Link>
              
              {/* Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <Link to="/recommendations-ia" onClick={() => setIsOpen(false)}>
                  <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Recommandations IA
                  </Button>
                </Link>
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Profil
                  </Button>
                </Link>
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full justify-start">
                    <UserCog className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Connexion
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
