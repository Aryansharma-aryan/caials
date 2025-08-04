// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import ConsultancyForm from './Forms/ConsultancyForm';
import AdminPanel from "./Admin/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from './components/ProtectedRoute';
import PremiumFooter from "./pages/PremiumFooter"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/Faq";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultancy" element={<ConsultancyForm />} />
        <Route path="/login" element={<AdminLogin />} />
                <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/faq" element={<FAQ />} />




        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
      <PremiumFooter/>
    </BrowserRouter>
  );
}

export default App;
