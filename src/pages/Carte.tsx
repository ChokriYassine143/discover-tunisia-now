
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Navigation as NavigationIcon, Star } from "lucide-react";

const Carte = () => {
  const destinations = [
    { name: "Sidi Bou Saïd", type: "Culturel", region: "Nord", rating: 4.8, lat: 36.8675, lng: 10.3468 },
    { name: "Djerba", type: "Balnéaire", region: "Sud", rating: 4.6, lat: 33.8076, lng: 10.8451 },
    { name: "Kairouan", type: "Religieux", region: "Centre", rating: 4.7, lat: 35.6781, lng: 10.0963 },
    { name: "Tozeur", type: "Désert", region: "Sud", rating: 4.5, lat: 33.9197, lng: 8.1342 },
    { name: "Hammamet", type: "Balnéaire", region: "Nord", rating: 4.4, lat: 36.4000, lng: 10.6167 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent mb-4">
              Carte Interactive
            </h1>
            <p className="text-gray-600 text-lg">
              Explorez la Tunisie et découvrez ses merveilles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with search and filters */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Recherche
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Rechercher une destination..." />
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filtres
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm font-medium">Type</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {["Culturel", "Balnéaire", "Désert", "Religieux"].map(type => (
                            <Badge key={type} variant="outline" className="cursor-pointer hover:bg-green-100">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Région</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {["Nord", "Centre", "Sud", "Côte"].map(region => (
                            <Badge key={region} variant="outline" className="cursor-pointer hover:bg-green-100">
                              {region}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Destinations populaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {destinations.map((dest, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{dest.name}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm">{dest.rating}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">{dest.type}</Badge>
                        <Badge variant="outline" className="text-xs">{dest.region}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-3">
              <Card className="h-[700px]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Carte de la Tunisie
                      </CardTitle>
                      <CardDescription>
                        Cliquez sur les marqueurs pour plus d'informations
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                      <NavigationIcon className="h-4 w-4 mr-2" />
                      Ma position
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for map - will be replaced with actual map integration */}
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Carte Interactive</h3>
                      <p className="text-gray-600">
                        La carte Mapbox sera intégrée ici<br />
                        avec tous les points d'intérêt de la Tunisie
                      </p>
                    </div>
                    
                    {/* Sample markers */}
                    {destinations.map((dest, index) => (
                      <div 
                        key={index} 
                        className="absolute bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors"
                        style={{
                          left: `${20 + index * 15}%`,
                          top: `${30 + index * 10}%`
                        }}
                        title={dest.name}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                    ))}
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

export default Carte;
