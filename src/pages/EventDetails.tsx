
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Ticket, ArrowLeft, Heart, Share2, Star } from "lucide-react";

const EventDetails = () => {
  const { id } = useParams();
  
  // Mock data - this would come from an API in a real app
  const event = {
    id: id,
    title: "Festival International de Carthage",
    description: "Le plus grand festival culturel de Tunisie avec des spectacles de musique, théâtre et danse.",
    longDescription: "Le Festival International de Carthage est un événement culturel majeur qui se déroule chaque été dans l'amphithéâtre romain de Carthage. Depuis 1964, ce festival accueille des artistes internationaux et tunisiens de renom dans un cadre historique exceptionnel. L'événement propose une programmation éclectique mêlant musique classique, world music, théâtre, danse et spectacles pour enfants.",
    image: "/lovable-uploads/f3c76aa4-713e-47f8-bdac-56bb2caa9748.png",
    date: "15 Juillet - 20 Août 2024",
    time: "20h00 - 23h00",
    location: "Amphithéâtre de Carthage, Tunis",
    category: "Festival",
    price: "À partir de 25 DT",
    capacity: 7000,
    rating: 4.7,
    reviews: 892,
    organizer: "Festival International de Carthage",
    website: "www.festival-carthage.tn",
    highlights: [
      "Cadre historique unique",
      "Artistes internationaux",
      "Programmation éclectique",
      "Vue sur la Méditerranée",
      "Acoustique exceptionnelle"
    ],
    program: [
      { date: "15 Juillet", artist: "Sting", type: "Concert" },
      { date: "22 Juillet", artist: "Ballet National", type: "Danse" },
      { date: "29 Juillet", artist: "Marcel Khalife", type: "Musique" },
      { date: "5 Août", artist: "Pièce Shakespearienne", type: "Théâtre" },
      { date: "12 Août", artist: "Youssou N'Dour", type: "World Music" }
    ],
    amenities: [
      "Parking gratuit",
      "Restauration sur place",
      "Boutique souvenirs",
      "Accès PMR",
      "Vestiaire"
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
            Retour aux événements
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-100 text-purple-700">{event.category}</Badge>
                <Badge variant="outline">Culturel</Badge>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
                {event.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{event.rating}</span>
                  <span className="text-gray-600">({event.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Jusqu'à {event.capacity} personnes</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg">{event.description}</p>
              
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  <Ticket className="h-4 w-4 mr-2" />
                  Réserver billets
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
                src={event.image} 
                alt={event.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-gray-700">Prix à partir de</p>
                <p className="text-xl font-bold text-green-600">{event.price}</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Dates</h3>
                <p className="text-gray-600">{event.date}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Horaires</h3>
                <p className="text-gray-600">{event.time}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Lieu</h3>
                <p className="text-gray-600">{event.location}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>À propos de l'événement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{event.longDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Programme</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.program.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.artist}</h4>
                          <p className="text-sm text-gray-600">{item.type}</p>
                        </div>
                        <Badge variant="outline">{item.date}</Badge>
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
                    {event.highlights.map((highlight, index) => (
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
                  <CardTitle>Services disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organisateur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">{event.organizer}</h4>
                    <p className="text-sm text-gray-600">{event.website}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contacter l'organisateur
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Accès</h4>
                    <p className="text-sm text-gray-600">Métro ligne 4, station Carthage</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Recommandations</h4>
                    <p className="text-sm text-gray-600">Arrivez 30 min avant le spectacle</p>
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

export default EventDetails;
