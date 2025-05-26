
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Calendar, Camera, Users, ArrowLeft, Heart, Share2 } from "lucide-react";

const DestinationDetails = () => {
  const { id } = useParams();
  
  // Mock data - this would come from an API in a real app
  const destination = {
    id: id,
    name: "Sidi Bou Saïd",
    description: "Un village pittoresque perché sur une colline surplombant la Méditerranée, célèbre pour ses maisons blanches et bleues.",
    longDescription: "Sidi Bou Saïd est l'un des plus beaux villages de Tunisie, situé à 20 km au nord-est de Tunis. Ce village d'artistes offre une vue imprenable sur le golfe de Tunis et la Méditerranée. Ses ruelles pavées, ses maisons blanches aux volets bleus, ses cafés traditionnels et ses galeries d'art en font un lieu magique et romantique.",
    image: "/lovable-uploads/f3c76aa4-713e-47f8-bdac-56bb2caa9748.png",
    rating: 4.8,
    reviews: 1247,
    category: "Culturel",
    region: "Nord",
    location: "Gouvernorat de Tunis",
    bestTime: "Avril - Juin, Septembre - Novembre",
    duration: "1-2 jours",
    price: "Gratuit",
    highlights: [
      "Café des Nattes traditionnel",
      "Vue panoramique sur la Méditerranée",
      "Architecture andalouse unique",
      "Galeries d'art locales",
      "Palais Dar El Annabi"
    ],
    activities: [
      "Promenade dans les ruelles",
      "Visite des galeries d'art",
      "Dégustation de thé à la menthe",
      "Photographie d'architecture",
      "Shopping d'artisanat local"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux destinations
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">{destination.category}</Badge>
                <Badge variant="outline">{destination.region}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
                {destination.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="text-gray-600">({destination.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.location}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg">{destination.description}</p>
              
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Planifier la visite
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Ajouter aux favoris
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4">
                <Button size="sm" className="bg-white/90 text-gray-700 hover:bg-white">
                  <Camera className="h-4 w-4 mr-2" />
                  Photos
                </Button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Meilleure période</h3>
                <p className="text-gray-600">{destination.bestTime}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Durée recommandée</h3>
                <p className="text-gray-600">{destination.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Prix d'entrée</h3>
                <p className="text-gray-600">{destination.price}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>À propos de {destination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{destination.longDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Points forts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activités disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {destination.activities.map((activity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Accès</h4>
                    <p className="text-sm text-gray-600">Train TGM depuis Tunis</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Parking</h4>
                    <p className="text-sm text-gray-600">Disponible en centre-ville</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Conseil</h4>
                    <p className="text-sm text-gray-600">Évitez les heures de pointe touristique</p>
                  </div>
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

export default DestinationDetails;
