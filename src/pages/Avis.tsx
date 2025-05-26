
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MessageSquare, ThumbsUp, Filter, Plus } from "lucide-react";

const Avis = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  
  const reviews = [
    {
      id: 1,
      user: "Amira Ben Salem",
      avatar: "/placeholder.svg",
      destination: "Sidi Bou Saïd",
      rating: 5,
      date: "Il y a 2 jours",
      title: "Magnifique village aux portes bleues",
      content: "Une expérience absolument magique ! Les ruelles pavées, les portes bleues et blanches, la vue sur la mer... Sidi Bou Saïd est un véritable joyau. Je recommande vivement la visite du café des Nattes pour admirer le coucher de soleil.",
      likes: 24,
      photos: 3,
      helpful: true
    },
    {
      id: 2,
      user: "Mohamed Triki",
      avatar: "/placeholder.svg",
      destination: "Djerba",
      rating: 4,
      date: "Il y a 1 semaine",
      title: "Île paradisiaque avec une riche culture",
      content: "Djerba offre un parfait mélange entre détente et découverte culturelle. Les plages sont magnifiques et la Ghriba est un lieu spirituel remarquable. Seul bémol : un peu trop touristique en haute saison.",
      likes: 18,
      photos: 5,
      helpful: false
    },
    {
      id: 3,
      user: "Fatma Hassine",
      avatar: "/placeholder.svg",
      destination: "Kairouan",
      rating: 5,
      date: "Il y a 3 semaines",
      title: "Capitale spirituelle de la Tunisie",
      content: "Kairouan est une ville chargée d'histoire et de spiritualité. La Grande Mosquée est époustouflante et les souks authentiques. Un incontournable pour comprendre l'âme de la Tunisie.",
      likes: 31,
      photos: 2,
      helpful: true
    }
  ];

  const destinations = ["Toutes", "Sidi Bou Saïd", "Djerba", "Kairouan", "Tozeur", "Hammamet", "Carthage"];

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating 
                ? "text-yellow-500 fill-current" 
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent mb-4">
              Avis et Témoignages
            </h1>
            <p className="text-gray-600 text-lg">
              Découvrez les expériences authentiques de nos voyageurs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Partager votre avis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                        Écrire un avis
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Partager votre expérience</DialogTitle>
                        <DialogDescription>
                          Aidez d'autres voyageurs en partageant votre avis
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Destination visitée</label>
                          <Input placeholder="Ex: Sidi Bou Saïd" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Note</label>
                          <div className="mt-1">
                            {renderStars(selectedRating, true, setSelectedRating)}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Titre de votre avis</label>
                          <Input placeholder="Résumez votre expérience en quelques mots" className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Votre avis détaillé</label>
                          <Textarea 
                            placeholder="Partagez votre expérience, vos conseils, ce que vous avez aimé..." 
                            className="mt-1 min-h-[120px]"
                          />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                          Publier mon avis
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filtres
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Destination</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {destinations.map(dest => (
                        <Badge key={dest} variant="outline" className="cursor-pointer hover:bg-green-100">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Note minimum</label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map(rating => (
                        <Badge key={rating} variant="outline" className="cursor-pointer hover:bg-green-100">
                          {rating}★+
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Derniers avis ({reviews.length})</h2>
                <select className="px-3 py-2 border rounded-lg bg-white">
                  <option>Plus récents</option>
                  <option>Mieux notés</option>
                  <option>Plus utiles</option>
                </select>
              </div>

              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{review.user}</h3>
                            <p className="text-sm text-gray-600">{review.date}</p>
                          </div>
                          <Badge variant="secondary">{review.destination}</Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          {renderStars(review.rating)}
                          <span className="text-sm text-gray-600">({review.rating}/5)</span>
                        </div>
                        
                        <h4 className="font-medium mb-2">{review.title}</h4>
                        <p className="text-gray-700 mb-4">{review.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{review.photos} photos</span>
                            <button className="flex items-center gap-1 hover:text-green-600">
                              <ThumbsUp className="h-4 w-4" />
                              Utile ({review.likes})
                            </button>
                            <button className="flex items-center gap-1 hover:text-green-600">
                              <MessageSquare className="h-4 w-4" />
                              Répondre
                            </button>
                          </div>
                          {review.helpful && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Avis utile
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center">
                <Button variant="outline" className="px-8">
                  Charger plus d'avis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Avis;
