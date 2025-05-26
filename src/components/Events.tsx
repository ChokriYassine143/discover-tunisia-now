import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Bell } from "lucide-react";

const events = [
  {
    id: 1,
    name: "Festival International de Carthage",
    date: "Juillet 2024",
    location: "Carthage",
    type: "Culturel",
    description: "Festival de musique, théâtre et danse dans les thermes d'Antonin",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attendees: "50K+",
    featured: true
  },
  {
    id: 2,
    name: "Festival du Sahara",
    date: "Décembre 2024",
    location: "Douz",
    type: "Traditionnel",
    description: "Célébration de la culture bédouine avec courses de chameaux",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attendees: "20K+",
    featured: false
  },
  {
    id: 3,
    name: "Festival de Jazz de Tabarka",
    date: "Août 2024",
    location: "Tabarka",
    type: "Musical",
    description: "Rencontres musicales dans un cadre méditerranéen unique",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attendees: "15K+",
    featured: false
  },
  {
    id: 4,
    name: "Festival des Oasis",
    date: "Octobre 2024",
    location: "Tozeur",
    type: "Culturel",
    description: "Célébration de l'héritage des oasis tunisiennes",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attendees: "12K+",
    featured: false
  }
];

export const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Événements & Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les célébrations culturelles qui rythment la vie tunisienne
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <div className="lg:col-span-2">
            {events.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 lg:h-96">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">
                      Événement Phare
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {event.type}
                      </Badge>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{event.attendees} participants</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{event.name}</h3>
                    <p className="text-lg text-white/90 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button className="bg-white text-red-600 hover:bg-gray-100">
                        <Bell className="w-4 h-4 mr-2" />
                        S'abonner
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Events */}
          <div className="space-y-6">
            {events.filter(event => !event.featured).map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-2">{event.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} participants
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Bell className="w-4 h-4 mr-2" />
                    Recevoir les notifications
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Voir tous les événements
          </Button>
        </div>
      </div>
    </section>
  );
};
