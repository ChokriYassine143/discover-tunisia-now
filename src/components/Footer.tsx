
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f3c76aa4-713e-47f8-bdac-56bb2caa9748.png" 
                alt="TuniTerra Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                TuniTerra
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Votre guide intelligent pour découvrir les merveilles de la Tunisie. 
              Explorez, planifiez et vivez des expériences inoubliables avec nos recommandations IA.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Destinations</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Nord de la Tunisie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Côte méditerranéenne</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Centre historique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sud et Sahara</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Recommandations IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides d'influenceurs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planification de voyage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assistance 24/7</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@tuniterra.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+216 71 XXX XXX</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>Tunis, Tunisie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TuniTerra. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
