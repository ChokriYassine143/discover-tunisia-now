
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from "lucide-react";

const AdminAccommodations = () => {
  const [accommodations, setAccommodations] = useState([
    {
      id: 1,
      name: "Dar El Medina",
      location: "Sidi Bou Said",
      price: "150",
      owner: "Amira Bouaziz",
      capacity: 4,
      status: "actif"
    },
    {
      id: 2,
      name: "Villa Berbère",
      location: "Douz",
      price: "200",
      owner: "Karim Messaoudi",
      capacity: 6,
      status: "en attente"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    owner: "",
    capacity: ""
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setAccommodations(prev => prev.map(acc => 
        acc.id === editingId 
          ? { ...acc, ...formData, capacity: parseInt(formData.capacity) }
          : acc
      ));
    } else {
      const newAccommodation = {
        id: Date.now(),
        ...formData,
        capacity: parseInt(formData.capacity),
        status: "en attente"
      };
      setAccommodations(prev => [...prev, newAccommodation]);
    }
    
    setFormData({ name: "", location: "", price: "", owner: "", capacity: "" });
    setEditingId(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (accommodation: any) => {
    setFormData({
      name: accommodation.name,
      location: accommodation.location,
      price: accommodation.price,
      owner: accommodation.owner,
      capacity: accommodation.capacity.toString()
    });
    setEditingId(accommodation.id);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setAccommodations(prev => prev.filter(acc => acc.id !== id));
  };

  const updateStatus = (id: number, status: string) => {
    setAccommodations(prev => prev.map(acc => 
      acc.id === id ? { ...acc, status } : acc
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              Gestion des Hébergements
            </h1>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un hébergement
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingId ? "Modifier l'hébergement" : "Ajouter un nouvel hébergement"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nom de l'hébergement</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Localisation</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Prix par nuit (DT)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="owner">Propriétaire</Label>
                    <Input
                      id="owner"
                      value={formData.owner}
                      onChange={(e) => setFormData({...formData, owner: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="capacity">Capacité (personnes)</Label>
                    <Input
                      id="capacity"
                      type="number"
                      value={formData.capacity}
                      onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {editingId ? "Modifier" : "Ajouter"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Liste des Hébergements</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Localisation</TableHead>
                    <TableHead>Prix/nuit</TableHead>
                    <TableHead>Propriétaire</TableHead>
                    <TableHead>Capacité</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accommodations.map((accommodation) => (
                    <TableRow key={accommodation.id}>
                      <TableCell className="font-medium">{accommodation.name}</TableCell>
                      <TableCell>{accommodation.location}</TableCell>
                      <TableCell>{accommodation.price} DT</TableCell>
                      <TableCell>{accommodation.owner}</TableCell>
                      <TableCell>{accommodation.capacity} pers.</TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            accommodation.status === "actif" 
                              ? "bg-green-100 text-green-800" 
                              : accommodation.status === "en attente"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {accommodation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(accommodation)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600"
                            onClick={() => updateStatus(accommodation.id, "actif")}
                          >
                            Approuver
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => updateStatus(accommodation.id, "refusé")}
                          >
                            Refuser
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(accommodation.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminAccommodations;
