
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Star, Filter, MapPin } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Poterie de Nabeul",
      category: "poterie",
      price: "45 DT",
      originalPrice: "60 DT",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      artisan: "Atelier Foulen",
      location: "Nabeul",
      rating: 4.8,
      reviews: 124,
      description: "Vase traditionnel fait à la main avec motifs berbères"
    },
    {
      id: 2,
      name: "Tapis de Kairouan",
      category: "tissage",
      price: "250 DT",
      originalPrice: "300 DT",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      artisan: "Cooperative El Mansour",
      location: "Kairouan",
      rating: 4.9,
      reviews: 89,
      description: "Tapis tissé main en laine pure, motifs traditionnels"
    },
    {
      id: 3,
      name: "Huile d'olive premium",
      category: "gastronomie",
      price: "30 DT",
      originalPrice: "35 DT",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
      artisan: "Domaine Chetoui",
      location: "Sfax",
      rating: 4.7,
      reviews: 156,
      description: "Huile d'olive extra vierge première pression"
    },
    {
      id: 4,
      name: "Bijoux en argent",
      category: "bijoux",
      price: "80 DT",
      originalPrice: "100 DT",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
      artisan: "Bijouterie Andalouse",
      location: "Tunis",
      rating: 4.6,
      reviews: 67,
      description: "Collier en argent massif avec motifs filigrane"
    },
    {
      id: 5,
      name: "Épices mélangées",
      category: "gastronomie",
      price: "15 DT",
      originalPrice: "20 DT",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500",
      artisan: "Épicerie du Souk",
      location: "Djerba",
      rating: 4.5,
      reviews: 93,
      description: "Mélange d'épices traditionnelles tunisiennes"
    },
    {
      id: 6,
      name: "Céramique de Sejnane",
      category: "poterie",
      price: "35 DT",
      originalPrice: "45 DT",
      image: "https://images.unsplash.com/photo-1565193566173-7a0691d3465e?w=500",
      artisan: "Femmes de Sejnane",
      location: "Sejnane",
      rating: 4.8,
      reviews: 78,
      description: "Poterie berbère traditionnelle sans tour"
    }
  ];

  const categories = [
    { value: "all", label: "Toutes catégories" },
    { value: "poterie", label: "Poterie" },
    { value: "tissage", label: "Tissage" },
    { value: "bijoux", label: "Bijoux" },
    { value: "gastronomie", label: "Gastronomie" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const isInCart = (productId: number) => cart.includes(productId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Produits Artisanaux
            </h1>
            <p className="text-gray-600">Découvrez l'artisanat tunisien authentique</p>
          </div>

          {/* Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                <Input
                  placeholder="Nom du produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      Promo
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{product.location} • {product.artisan}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-gray-500">({product.reviews} avis)</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-yellow-600"
                    onClick={() => addToCart(product.id)}
                    disabled={isInCart(product.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {isInCart(product.id) ? "Ajouté au panier" : "Ajouter au panier"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="fixed bottom-4 right-4">
              <Button className="bg-gradient-to-r from-green-600 to-yellow-600 shadow-lg">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier ({cart.length})
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
