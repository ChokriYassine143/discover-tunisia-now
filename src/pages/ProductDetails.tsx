
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, User } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  
  const product = {
    id: id,
    name: "Tapis Berbère Authentique",
    price: "450 DT",
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Artisanat Traditionnel",
    artisan: "Fatma Ben Salem",
    location: "Kairouan",
    description: "Magnifique tapis berbère tissé à la main selon les techniques ancestrales",
    longDescription: "Ce superbe tapis berbère est le fruit d'un savoir-faire ancestral transmis de génération en génération. Tissé entièrement à la main par des artisanes expertes de Kairouan, il représente des mois de travail minutieux. Les motifs géométriques colorés racontent l'histoire et les traditions du peuple berbère, chaque symbole ayant sa propre signification.",
    specifications: {
      "Dimensions": "200cm x 150cm",
      "Matière": "Laine pure",
      "Origine": "Kairouan, Tunisie",
      "Technique": "Tissage manuel",
      "Temps de fabrication": "3-4 mois",
      "Entretien": "Nettoyage à sec recommandé"
    },
    features: [
      "Tissage 100% manuel",
      "Laine de mouton locale",
      "Teintures naturelles",
      "Motifs traditionnels berbères",
      "Pièce unique",
      "Certificat d'authenticité inclus"
    ],
    shipping: {
      "Tunisie": "Livraison gratuite (3-5 jours)",
      "International": "50 DT (7-14 jours)",
      "Emballage": "Emballage soigné inclus"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux produits
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-700">{product.category}</Badge>
                <Badge variant="outline">Fait main</Badge>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <User className="h-4 w-4" />
                  <span>Par {product.artisan}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg">{product.description}</p>
              
              <div className="text-3xl font-bold text-green-600 mb-4">
                {product.price}
              </div>
              
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-green-600 to-yellow-600 flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Ajouter au panier
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Favoris
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                Authentique
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Description détaillée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spécifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Caractéristiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Artisan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">{product.artisan}</h4>
                    <p className="text-sm text-gray-600">{product.location}</p>
                  </div>
                  <p className="text-sm">Artisane spécialisée dans le tissage traditionnel avec plus de 20 ans d'expérience.</p>
                  <Button variant="outline" className="w-full">
                    Voir le profil
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Livraison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {Object.entries(product.shipping).map(([key, value]) => (
                      <li key={key} className="flex justify-between text-sm">
                        <span className="font-medium">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Garanties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Authenticité garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Retour 30 jours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Support client</span>
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

export default ProductDetails;
