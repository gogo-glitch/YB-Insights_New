import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import MarketingLayout from "./components/marketing/MarketingLayout";
import Home from "./pages/marketing/Home";
import Problems from "./pages/marketing/Problems";
import Industries from "./pages/marketing/Industries";
import Work from "./pages/marketing/Work";
import Insights from "./pages/marketing/Insights";
import InsightDetail from "./pages/marketing/InsightDetail";
import Contact from "./pages/marketing/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MarketingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/work" element={<Work />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
