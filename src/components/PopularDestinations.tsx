
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Sidi Bou Said",
    region: "Nord",
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Village pittoresque aux maisons blanches et bleues",
    duration: "Demi-journée",
    type: "Culturel",
    highlights: ["Architecture andalouse", "Vue mer", "Artisanat local"]
  },
  {
    id: 2,
    name: "Amphithéâtre d'El Jem",
    region: "Centre",
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Magnifique amphithéâtre romain du 3ème siècle",
    duration: "2-3 heures",
    type: "Historique",
    highlights: ["Patrimoine UNESCO", "Architecture romaine", "Musée"]
  },
  {
    id: 3,
    name: "Sahara à Douz",
    region: "Sud",
    rating: 4.7,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Porte d'entrée du Grand Erg Oriental",
    duration: "1-2 jours",
    type: "Aventure",
    highlights: ["Safari chameau", "Nuit sous étoiles", "Culture bédouine"]
  },
  {
    id: 4,
    name: "Hammamet",
    region: "Côte",
    rating: 4.6,
    reviews: 1523,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Station balnéaire avec plages de sable fin",
    duration: "Séjour",
    type: "Balnéaire",
    highlights: ["Plages dorées", "Spa & wellness", "Vie nocturne"]
  },
  {
    id: 5,
    name: "Kairouan",
    region: "Centre",
    rating: 4.8,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ville sainte et centre spirituel de l'Islam",
    duration: "Journée",
    type: "Religieux",
    highlights: ["Grande Mosquée", "Médina historique", "Artisanat tapis"]
  },
  {
    id: 6,
    name: "Tozeur",
    region: "Sud",
    rating: 4.5,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Oasis au cœur du désert avec palmiers dattiers",
    duration: "1-2 jours",
    type: "Nature",
    highlights: ["Palmeraie", "Architecture briques", "Chott el-Jerid"]
  }
];

export const PopularDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destinations populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les lieux incontournables choisis par nos visiteurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">
                    {destination.region}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {destination.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{destination.rating}</span>
                    <span className="text-gray-500">({destination.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.region}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <span key={highlight} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
