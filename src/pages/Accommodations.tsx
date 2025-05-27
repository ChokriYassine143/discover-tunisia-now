
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Star, Wifi, Car, Coffee, Calendar, Filter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Accommodations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const accommodations = [
    {
      id: 1,
      name: "Dar El Medina",
      location: "Sidi Bou Said",
      region: "nord",
      price: "150 DT/nuit",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      amenities: ["wifi", "parking", "breakfast"],
      description: "Maison traditionnelle avec vue sur la mer"
    },
    {
      id: 2,
      name: "Villa Berbère",
      location: "Douz",
      region: "sud",
      price: "200 DT/nuit",
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      amenities: ["wifi", "breakfast"],
      description: "Villa au cœur du désert avec piscine"
    },
    {
      id: 3,
      name: "Riad Atlas",
      location: "Tozeur",
      region: "centre",
      price: "180 DT/nuit",
      rating: 4.7,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      amenities: ["wifi", "parking", "breakfast"],
      description: "Riad traditionnel avec jardin d'orangers"
    },
    {
      id: 4,
      name: "Maison du Pêcheur",
      location: "Mahdia",
      region: "centre",
      price: "120 DT/nuit",
      rating: 4.5,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      amenities: ["wifi", "parking"],
      description: "Maison face à la mer avec terrasse"
    }
  ];

  const regions = [
    { value: "all", label: "Toutes les régions" },
    { value: "nord", label: "Nord" },
    { value: "centre", label: "Centre" },
    { value: "sud", label: "Sud" }
  ];

  const filteredAccommodations = accommodations.filter(acc => {
    const matchesSearch = acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         acc.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || acc.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="h-4 w-4" />;
      case "parking": return <Car className="h-4 w-4" />;
      case "breakfast": return <Coffee className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Maisons d'Hôtes
            </h1>
            <p className="text-gray-600">Découvrez nos hébergements authentiques à travers la Tunisie</p>
          </div>

          {/* Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                <Input
                  placeholder="Nom ou ville..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Région</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
              </div>
            </div>
          </div>

          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <Card key={accommodation.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute bottom-4 left-4 bg-green-600 text-white">
                    {accommodation.price}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{accommodation.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {accommodation.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{accommodation.rating}</span>
                      <span className="text-gray-500 text-sm">({accommodation.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{accommodation.description}</p>
                  
                  <div className="flex gap-2 mb-4">
                    {accommodation.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-1 text-gray-500">
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/accommodation/${accommodation.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                        Voir détails
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Réserver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accommodations;
