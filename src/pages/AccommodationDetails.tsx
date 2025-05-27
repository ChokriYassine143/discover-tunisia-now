
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, ArrowLeft, Heart, Share2, Users, Bed } from "lucide-react";

const AccommodationDetails = () => {
  const { id } = useParams();
  
  const accommodation = {
    id: id,
    name: "Dar El Medina",
    location: "Sidi Bou Said",
    price: "150 DT/nuit",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    description: "Maison traditionnelle avec vue sur la mer Méditerranée",
    longDescription: "Cette magnifique maison d'hôtes traditionnelle offre une expérience authentique au cœur de Sidi Bou Said. Avec ses murs blancs immaculés et ses volets bleus caractéristiques, elle incarne parfaitement l'architecture tunisienne traditionnelle. La vue imprenable sur la mer Méditerranée depuis la terrasse vous offrira des moments inoubliables.",
    amenities: ["wifi", "parking", "breakfast", "terrace", "garden"],
    rooms: 8,
    maxGuests: 16,
    checkIn: "15h00",
    checkOut: "11h00",
    features: [
      "Vue sur mer",
      "Architecture traditionnelle",
      "Terrasse panoramique",
      "Jardin méditerranéen",
      "Proximité centre-ville"
    ],
    services: [
      "Petit-déjeuner inclus",
      "Service de ménage quotidien",
      "Conciergerie",
      "WiFi gratuit",
      "Parking privé",
      "Transfert aéroport (sur demande)"
    ]
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="h-5 w-5" />;
      case "parking": return <Car className="h-5 w-5" />;
      case "breakfast": return <Coffee className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/accommodations" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux hébergements
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">Maison d'hôtes</Badge>
                <Badge variant="outline">Authentique</Badge>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
                {accommodation.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{accommodation.rating}</span>
                  <span className="text-gray-600">({accommodation.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{accommodation.location}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg">{accommodation.description}</p>
              
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  Réserver maintenant
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={accommodation.image} 
                alt={accommodation.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-gray-700">À partir de</p>
                <p className="text-xl font-bold text-green-600">{accommodation.price}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Bed className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Chambres</h3>
                <p className="text-gray-600">{accommodation.rooms} chambres</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Capacité</h3>
                <p className="text-gray-600">Jusqu'à {accommodation.maxGuests} personnes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Emplacement</h3>
                <p className="text-gray-600">{accommodation.location}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>À propos de l'hébergement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{accommodation.longDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Équipements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {accommodation.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        {getAmenityIcon(amenity)}
                        <span className="capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Points forts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {accommodation.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Services inclus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {accommodation.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Arrivée</h4>
                    <p className="text-sm text-gray-600">{accommodation.checkIn}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Départ</h4>
                    <p className="text-sm text-gray-600">{accommodation.checkOut}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full mb-2">
                    Contacter l'hôte
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationDetails;
