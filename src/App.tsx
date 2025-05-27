
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Influenceurs from "./pages/Influenceurs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecommendationsIA from "./pages/RecommendationsIA";
import Carte from "./pages/Carte";
import Avis from "./pages/Avis";
import DestinationDetails from "./pages/DestinationDetails";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import Accommodations from "./pages/Accommodations";
import AdminDashboard from "./pages/AdminDashboard";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/influenceurs" element={<Influenceurs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recommendations-ia" element={<RecommendationsIA />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products" element={<Products />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
