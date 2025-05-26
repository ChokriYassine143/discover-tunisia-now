
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MessageCircle, Send, Bot, User, MapPin, Calendar, Sun, Cloud, Thermometer } from "lucide-react";

const RecommendationsIA = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Bonjour ! Je suis votre assistant IA pour découvrir la Tunisie. Dites-moi vos préférences (météo, type d'activité, région...) et je vous recommanderai les meilleurs endroits à visiter !"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { type: "user", content: message };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response (will be replaced with real AI integration)
    setTimeout(() => {
      const aiResponse = {
        type: "bot",
        content: "Excellente question ! Basé sur vos préférences, je vous recommande de visiter Sidi Bou Saïd pour son charme authentique et ses vues magnifiques sur la Méditerranée. Le temps y est parfait en cette saison !"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setMessage("");
  };

  const quickSuggestions = [
    { icon: Sun, text: "Destinations ensoleillées", weather: "soleil" },
    { icon: Cloud, text: "Lieux pour temps nuageux", weather: "nuages" },
    { icon: Thermometer, text: "Endroits frais", weather: "frais" },
    { icon: MapPin, text: "Sites historiques", type: "culturel" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent mb-4">
              Recommandations IA
            </h1>
            <p className="text-gray-600 text-lg">
              Découvrez les meilleurs endroits en Tunisie grâce à notre assistant intelligent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Assistant TuniTerra
                  </CardTitle>
                  <CardDescription>
                    Posez vos questions et obtenez des recommandations personnalisées
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                          <div className={`p-2 rounded-full ${msg.type === "user" ? "bg-green-100" : "bg-yellow-100"}`}>
                            {msg.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div className={`p-3 rounded-lg ${msg.type === "user" ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                            {msg.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez vos préférences (météo, activités, région...)"
                      className="flex-1"
                    />
                    <Button type="submit" className="bg-gradient-to-r from-green-600 to-yellow-600">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Suggestions rapides</CardTitle>
                  <CardDescription>
                    Cliquez pour obtenir des recommandations instantanées
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => setMessage(suggestion.text)}
                    >
                      <suggestion.icon className="h-4 w-4 mr-2" />
                      {suggestion.text}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Météo actuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold">24°C</p>
                    <p className="text-gray-600">Ensoleillé</p>
                    <p className="text-sm text-gray-500 mt-2">Tunis</p>
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

export default RecommendationsIA;
