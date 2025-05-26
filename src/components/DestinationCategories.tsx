
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Waves, Building, TreePine, Camera, MapPin } from "lucide-react";

const regions = [
  {
    name: "Nord",
    icon: Mountain,
    description: "Montagnes et histoire",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Tunis", "Carthage", "Sidi Bou Said"]
  },
  {
    name: "Côte",
    icon: Waves,
    description: "Plages méditerranéennes",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Sousse", "Hammamet", "Monastir"]
  },
  {
    name: "Centre",
    icon: Building,
    description: "Patrimoine et culture",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Kairouan", "Mahdia", "Sfax"]
  },
  {
    name: "Sud",
    icon: TreePine,
    description: "Désert et oasis",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Douz", "Tozeur", "Tataouine"]
  }
];

const tourismTypes = [
  {
    name: "Culturel",
    icon: Camera,
    description: "Sites historiques et monuments",
    color: "bg-purple-500"
  },
  {
    name: "Écologique",
    icon: TreePine,
    description: "Nature et écotourisme",
    color: "bg-green-500"
  },
  {
    name: "Aventure",
    icon: Mountain,
    description: "Sports et activités",
    color: "bg-orange-500"
  },
  {
    name: "Balnéaire",
    icon: Waves,
    description: "Plages et détente",
    color: "bg-blue-500"
  }
];

export const DestinationCategories = () => {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explorez par région
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les merveilles de la Tunisie organisées par région géographique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {regions.map((region, index) => {
            const Icon = region.icon;
            return (
              <Card key={region.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-8 h-8 mb-2" />
                    <h3 className="text-xl font-bold">{region.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.destinations.map((dest) => (
                      <span key={dest} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {dest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Types de tourisme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez l'expérience qui vous correspond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourismTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
