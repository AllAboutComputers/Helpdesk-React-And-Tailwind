import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewTicket from "./pages/NewTicket";
import MyTicket from "./pages/MyTicket";
import UserProfile from "./pages/UserProfile";
import TicketApproval from "./pages/TicketApproval";
import Database from "./pages/Database";
import Settings from "./pages/Settings";
import Performance from "./pages/Performance";
import UserLogHistory from "./pages/UserLogHistory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/ticket-approval" element={<TicketApproval />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/database" element={<Database />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/user-log-history" element={<UserLogHistory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
