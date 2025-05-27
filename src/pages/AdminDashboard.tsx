
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Home, ShoppingCart, FileText, BarChart3, CheckCircle, XCircle, Eye } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Utilisateurs actifs", value: "1,234", icon: Users, color: "bg-blue-500" },
    { title: "Réservations", value: "89", icon: Home, color: "bg-green-500" },
    { title: "Commandes", value: "156", icon: ShoppingCart, color: "bg-orange-500" },
    { title: "Publications", value: "45", icon: FileText, color: "bg-purple-500" }
  ];

  const users = [
    { id: 1, name: "Ahmed Ben Ali", email: "ahmed@email.com", role: "touriste", status: "actif", joinDate: "2024-03-15" },
    { id: 2, name: "Fatma Trabelsi", email: "fatma@email.com", role: "influenceur", status: "actif", joinDate: "2024-02-20" },
    { id: 3, name: "Mohamed Sassi", email: "mohamed@email.com", role: "touriste", status: "suspendu", joinDate: "2024-01-10" }
  ];

  const accommodations = [
    { id: 1, name: "Dar El Medina", location: "Sidi Bou Said", price: "150 DT", status: "actif", owner: "Amira Bouaziz" },
    { id: 2, name: "Villa Berbère", location: "Douz", price: "200 DT", status: "en attente", owner: "Karim Messaoudi" },
    { id: 3, name: "Riad Atlas", location: "Tozeur", price: "180 DT", status: "actif", owner: "Lina Trabelsi" }
  ];

  const publications = [
    { id: 1, title: "Découverte de Carthage", author: "Amira Ben Salem", status: "publié", date: "2024-03-20" },
    { id: 2, title: "Trek dans Zaghouan", author: "Karim Messaoudi", status: "en attente", date: "2024-03-18" },
    { id: 3, title: "Saveurs de Kairouan", author: "Lina Trabelsi", status: "refusé", date: "2024-03-15" }
  ];

  const orders = [
    { id: 1, product: "Poterie de Nabeul", customer: "Ahmed Ben Ali", price: "45 DT", status: "livré" },
    { id: 2, product: "Tapis de Kairouan", customer: "Fatma Trabelsi", price: "250 DT", status: "expédié" },
    { id: 3, product: "Huile d'olive", customer: "Mohamed Sassi", price: "30 DT", status: "en préparation" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "actif":
      case "publié":
      case "livré":
        return "bg-green-100 text-green-800";
      case "en attente":
      case "expédié":
        return "bg-yellow-100 text-yellow-800";
      case "suspendu":
      case "refusé":
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Tableau de Bord Administrateur
            </h1>
            <p className="text-gray-600">Gérez votre plateforme TuniTerra</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="users">Utilisateurs</TabsTrigger>
              <TabsTrigger value="accommodations">Hébergements</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="orders">Commandes</TabsTrigger>
              <TabsTrigger value="stats">Statistiques</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des Utilisateurs</CardTitle>
                  <CardDescription>Gérez les comptes et les rôles des utilisateurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rôle</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Date d'inscription</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.role}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                Modifier
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accommodations">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des Hébergements</CardTitle>
                  <CardDescription>Gérez les maisons d'hôtes et leurs propriétaires</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Localisation</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Propriétaire</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {accommodations.map((acc) => (
                        <TableRow key={acc.id}>
                          <TableCell className="font-medium">{acc.name}</TableCell>
                          <TableCell>{acc.location}</TableCell>
                          <TableCell>{acc.price}</TableCell>
                          <TableCell>{acc.owner}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(acc.status)}>
                              {acc.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publications">
              <Card>
                <CardHeader>
                  <CardTitle>Modération des Publications</CardTitle>
                  <CardDescription>Validez ou refusez les contenus des influenceurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Titre</TableHead>
                        <TableHead>Auteur</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {publications.map((pub) => (
                        <TableRow key={pub.id}>
                          <TableCell className="font-medium">{pub.title}</TableCell>
                          <TableCell>{pub.author}</TableCell>
                          <TableCell>{pub.date}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(pub.status)}>
                              {pub.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </div>
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
                  <CardTitle>Gestion des Commandes</CardTitle>
                  <CardDescription>Suivez les commandes de produits artisanaux</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produit</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.product}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.price}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              Modifier statut
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                  <CardDescription>Analyse des performances de la plateforme</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Revenus ce mois</p>
                          <p className="text-2xl font-bold text-gray-900">12,450 DT</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Taux de conversion</p>
                          <p className="text-2xl font-bold text-gray-900">3.2%</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
