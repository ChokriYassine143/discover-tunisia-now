
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(227, 24, 55, 0.7), rgba(227, 24, 55, 0.5)), url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Découvrez la
          <span className="block text-yellow-300">Tunisie</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Explorez les merveilles historiques, les paysages époustouflants et la culture riche de la Tunisie
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
            <MapPin className="w-5 h-5 mr-2" />
            Explorer les destinations
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600 text-lg px-8 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            Voir les événements
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold">200+</div>
            <div className="text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm">Visiteurs</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <div className="text-sm">Note moyenne</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
