
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, Heart, MessageCircle, Share2 } from "lucide-react";

const Influenceurs = () => {
  const influencers = [
    {
      id: 1,
      name: "Amira Ben Salem",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150",
      specialty: "Patrimoine & Culture",
      followers: "25K",
      posts: 150,
      location: "Tunis",
      bio: "Passionnée d'histoire et de culture tunisienne, je partage mes découvertes des sites historiques et traditions locales."
    },
    {
      id: 2,
      name: "Karim Messaoudi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      specialty: "Aventure & Nature",
      followers: "18K",
      posts: 89,
      location: "Douz",
      bio: "Guide de montagne et photographe, j'explore les paysages naturels exceptionnels de la Tunisie."
    },
    {
      id: 3,
      name: "Lina Trabelsi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      specialty: "Gastronomie",
      followers: "32K",
      posts: 203,
      location: "Sfax",
      bio: "Cheffe cuisinière spécialisée dans la cuisine traditionnelle tunisienne et les découvertes culinaires."
    }
  ];

  const experiences = [
    {
      id: 1,
      author: "Amira Ben Salem",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150",
      title: "Exploration de Carthage au coucher du soleil",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=500",
      description: "Une visite magique des ruines de Carthage avec une lumière exceptionnelle. Les vestiges romains prennent une dimension mystique à cette heure dorée.",
      location: "Carthage, Tunis",
      date: "Il y a 2 jours",
      likes: 245,
      comments: 32
    },
    {
      id: 2,
      author: "Karim Messaoudi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      title: "Trek dans les montagnes de Zaghouan",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      description: "Une randonnée inoubliable dans les montagnes de Zaghouan. Paysages à couper le souffle et rencontres authentiques avec les bergers locaux.",
      location: "Zaghouan",
      date: "Il y a 1 semaine",
      likes: 189,
      comments: 28
    },
    {
      id: 3,
      author: "Lina Trabelsi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      title: "Découverte des saveurs de Kairouan",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500",
      description: "Un voyage culinaire extraordinaire à travers les marchés et restaurants traditionnels de Kairouan. Les makroudh authentiques sont un délice !",
      location: "Kairouan",
      date: "Il y a 3 jours",
      likes: 312,
      comments: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Nos Influenceurs TuniTerra
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la Tunisie à travers les yeux de nos ambassadeurs passionnés qui partagent leurs expériences authentiques
            </p>
          </div>

          {/* Influencers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {influencers.map((influencer) => (
              <Card key={influencer.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img 
                      src={influencer.avatar} 
                      alt={influencer.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{influencer.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{influencer.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center space-x-6 text-sm text-gray-600">
                    <div>
                      <div className="font-bold text-lg text-gray-800">{influencer.followers}</div>
                      <div>Abonnés</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-800">{influencer.posts}</div>
                      <div>Posts</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {influencer.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{influencer.bio}</p>
                  <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white w-full">
                    Suivre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Latest Experiences */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dernières Expériences Partagées</h2>
            
            <div className="space-y-8">
              {experiences.map((experience) => (
                <Card key={experience.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img 
                        src={experience.avatar} 
                        alt={experience.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-800">{experience.author}</h3>
                          <span className="text-green-600 text-sm">•</span>
                          <span className="text-gray-500 text-sm">{experience.date}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{experience.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{experience.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{experience.comments}</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>Partager</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vous êtes passionné de voyage ?</h3>
            <p className="text-gray-600 mb-6">Rejoignez notre communauté d'influenceurs et partagez vos expériences tunisiennes avec le monde entier</p>
            <Button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white text-lg px-8 py-3">
              Devenir Influenceur TuniTerra
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Influenceurs;
