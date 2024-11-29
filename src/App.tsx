import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Toca from "./pages/Toca";
import Knowledge from "./pages/Knowledge";
import Pegadas from "./pages/Pegadas";
import Lua from "./pages/Lua";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/toca" element={<Toca />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/pegadas" element={<Pegadas />} />
          <Route path="/lua" element={<Lua />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;