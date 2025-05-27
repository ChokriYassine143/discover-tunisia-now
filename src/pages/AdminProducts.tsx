
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
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Poterie de Nabeul",
      category: "poterie",
      price: "45",
      artisan: "Atelier Foulen",
      location: "Nabeul",
      status: "actif",
      stock: 15
    },
    {
      id: 2,
      name: "Tapis de Kairouan",
      category: "tissage",
      price: "250",
      artisan: "Cooperative El Mansour",
      location: "Kairouan",
      status: "actif",
      stock: 8
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    artisan: "",
    location: "",
    stock: ""
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setProducts(prev => prev.map(product => 
        product.id === editingId 
          ? { ...product, ...formData, stock: parseInt(formData.stock) }
          : product
      ));
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        stock: parseInt(formData.stock),
        status: "actif"
      };
      setProducts(prev => [...prev, newProduct]);
    }
    
    setFormData({ name: "", category: "", price: "", artisan: "", location: "", stock: "" });
    setEditingId(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      artisan: product.artisan,
      location: product.location,
      stock: product.stock.toString()
    });
    setEditingId(product.id);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const toggleStatus = (id: number) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, status: product.status === "actif" ? "inactif" : "actif" }
        : product
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              Gestion des Produits
            </h1>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un produit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingId ? "Modifier le produit" : "Ajouter un nouveau produit"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nom du produit</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Catégorie</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Prix (DT)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="artisan">Artisan</Label>
                    <Input
                      id="artisan"
                      value={formData.artisan}
                      onChange={(e) => setFormData({...formData, artisan: e.target.value})}
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
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
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
              <CardTitle>Liste des Produits</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Catégorie</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Artisan</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price} DT</TableCell>
                      <TableCell>{product.artisan}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Badge 
                          className={product.status === "actif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant={product.status === "actif" ? "destructive" : "default"}
                            onClick={() => toggleStatus(product.id)}
                          >
                            {product.status === "actif" ? "Désactiver" : "Activer"}
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
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

export default AdminProducts;
