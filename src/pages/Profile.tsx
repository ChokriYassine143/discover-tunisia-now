
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Mail, Phone, MapPin, Calendar, Star, Package, BookOpen } from "lucide-react";

const Profile = () => {
  const [user] = useState({
    name: "Ahmed Ben Ali",
    email: "ahmed.benali@email.com",
    phone: "+216 98 123 456",
    location: "Tunis, Tunisie",
    role: "touriste",
    joinDate: "Mars 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  });

  const reservations = [
    { id: 1, destination: "Dar El Medina - Sidi Bou Said", dates: "15-20 Juin 2024", status: "confirmé", price: "150 DT/nuit" },
    { id: 2, destination: "Villa Berbère - Douz", dates: "10-15 Août 2024", status: "en attente", price: "200 DT/nuit" },
    { id: 3, destination: "Riad Atlas - Tozeur", dates: "5-10 Sept 2024", status: "annulé", price: "180 DT/nuit" }
  ];

  const orders = [
    { id: 1, product: "Poterie de Nabeul", quantity: 2, price: "45 DT", status: "livré" },
    { id: 2, product: "Tapis de Kairouan", quantity: 1, price: "250 DT", status: "expédié" },
    { id: 3, product: "Huile d'olive de Sfax", quantity: 3, price: "30 DT", status: "en préparation" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmé":
      case "livré":
        return "bg-green-100 text-green-800";
      case "en attente":
      case "expédié":
        return "bg-yellow-100 text-yellow-800";
      case "annulé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Mon Profil
            </h1>
            <p className="text-gray-600">Gérez vos informations personnelles et vos activités</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>
                  <Badge className="bg-green-100 text-green-700">{user.role}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Membre depuis {user.joinDate}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                  Modifier le profil
                </Button>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="reservations" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="reservations" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Réservations
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Commandes
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Paramètres
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="reservations">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mes Réservations</CardTitle>
                      <CardDescription>Historique de vos réservations de maisons d'hôtes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Destination</TableHead>
                            <TableHead>Dates</TableHead>
                            <TableHead>Prix</TableHead>
                            <TableHead>Statut</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {reservations.map((reservation) => (
                            <TableRow key={reservation.id}>
                              <TableCell className="font-medium">{reservation.destination}</TableCell>
                              <TableCell>{reservation.dates}</TableCell>
                              <TableCell>{reservation.price}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(reservation.status)}>
                                  {reservation.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mes Commandes</CardTitle>
                      <CardDescription>Historique de vos achats de produits artisanaux</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Produit</TableHead>
                            <TableHead>Quantité</TableHead>
                            <TableHead>Prix</TableHead>
                            <TableHead>Statut</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.product}</TableCell>
                              <TableCell>{order.quantity}</TableCell>
                              <TableCell>{order.price}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Paramètres du compte</CardTitle>
                      <CardDescription>Modifiez vos informations personnelles</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Nom complet</label>
                          <Input defaultValue={user.name} />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <Input defaultValue={user.email} />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Téléphone</label>
                          <Input defaultValue={user.phone} />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Localisation</label>
                          <Input defaultValue={user.location} />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                          Sauvegarder
                        </Button>
                        <Button variant="outline">
                          Annuler
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
