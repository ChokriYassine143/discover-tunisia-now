
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { User, Camera, MapPin, Calendar, Star, Heart, MessageCircle, Users, TrendingUp, Plus } from "lucide-react";

const InfluencerDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const influencerStats = {
    followers: 15420,
    totalPosts: 127,
    avgLikes: 845,
    totalViews: 234567,
    collaborations: 23,
    revenue: 3250
  };

  const recentPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d0c0ac?w=300",
      caption: "Découverte des souks de Tunis - Une expérience authentique!",
      likes: 1243,
      comments: 56,
      date: "2024-01-15"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300",
      caption: "Sunset à Sidi Bou Said 🌅",
      likes: 987,
      comments: 34,
      date: "2024-01-12"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544918969-6bb6f18a1b3a?w=300",
      caption: "Les merveilles du Sahara tunisien",
      likes: 1567,
      comments: 78,
      date: "2024-01-10"
    }
  ];

  const collaborationRequests = [
    {
      id: 1,
      brand: "Hotel Laico Tunis",
      type: "Séjour sponsorisé",
      budget: "800 DT",
      deadline: "2024-02-15",
      status: "pending"
    },
    {
      id: 2,
      brand: "Tunisia Tourism Board",
      type: "Campagne destination",
      budget: "1200 DT",
      deadline: "2024-02-20",
      status: "accepted"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Tableau de Bord Influenceur
            </h1>
            <p className="text-gray-600">Gérez votre profil et vos collaborations</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="stats">Statistiques</TabsTrigger>
              <TabsTrigger value="posts">Publications</TabsTrigger>
              <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Photo de Profil</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                      <User className="h-16 w-16 text-gray-400" />
                    </div>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Changer la photo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Informations Personnelles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nom</label>
                        <Input placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Prénom</label>
                        <Input placeholder="Votre prénom" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="votre@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Téléphone</label>
                        <Input placeholder="+216 XX XXX XXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows={4}
                        placeholder="Décrivez-vous en quelques mots..."
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                      Sauvegarder les modifications
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="text-2xl font-bold">{influencerStats.followers.toLocaleString()}</h3>
                    <p className="text-gray-600">Abonnés</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Camera className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="text-2xl font-bold">{influencerStats.totalPosts}</h3>
                    <p className="text-gray-600">Publications</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <h3 className="text-2xl font-bold">{influencerStats.avgLikes}</h3>
                    <p className="text-gray-600">Likes moyens</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h3 className="text-2xl font-bold">{influencerStats.totalViews.toLocaleString()}</h3>
                    <p className="text-gray-600">Vues totales</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <h3 className="text-2xl font-bold">{influencerStats.collaborations}</h3>
                    <p className="text-gray-600">Collaborations</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-green-600 text-2xl font-bold mb-2">DT</div>
                    <h3 className="text-2xl font-bold">{influencerStats.revenue}</h3>
                    <p className="text-gray-600">Revenus (ce mois)</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="posts" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Mes Publications</h2>
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvelle publication
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.id}>
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt="Post"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-700 mb-3">{post.caption}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborations" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Demandes de Collaboration</h2>
              </div>
              
              <div className="space-y-4">
                {collaborationRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{request.brand}</h3>
                          <p className="text-gray-600">{request.type}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Budget: {request.budget}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Échéance: {request.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={request.status === 'accepted' ? 'default' : 'secondary'}
                            className={request.status === 'accepted' ? 'bg-green-100 text-green-700' : ''}
                          >
                            {request.status === 'accepted' ? 'Acceptée' : 'En attente'}
                          </Badge>
                          {request.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Refuser</Button>
                              <Button size="sm" className="bg-green-600">Accepter</Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InfluencerDashboard;
