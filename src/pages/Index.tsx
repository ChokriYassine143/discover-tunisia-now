
import { Hero } from "@/components/Hero";
import { DestinationCategories } from "@/components/DestinationCategories";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Events } from "@/components/Events";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <Navigation />
      <Hero />
      <DestinationCategories />
      <PopularDestinations />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
