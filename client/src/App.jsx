import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./pages/Loader";

// 🚀 Lazy load components for code splitting
const Home = lazy(() => import("./pages/Home"));

// 🎯 Smart loading strategy based on actual content readiness
function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    // 🚀 Check if critical resources are loaded
    const checkResourcesLoaded = () => {
      // Wait for DOM to be ready
      if (document.readyState === 'complete') {
        return Promise.resolve();
      }
      
      return new Promise(resolve => {
        window.addEventListener('load', resolve, { once: true });
      });
    };

    // 🎯 Optimized loading sequence
    const initializeApp = async () => {
      try {
        // Wait for critical resources
        await checkResourcesLoaded();
        
        // Small delay for smooth transition (reduced from 2s to 800ms)
        await new Promise(resolve => setTimeout(resolve, 800));

        if (mounted) {
          setContentReady(true);
          // Slight delay for loading animation to complete
          setTimeout(() => {
            if (mounted) setLoading(false);
          }, 200);
        }
      } catch (error) {
        console.warn('App initialization error:', error);
        // Fallback: still show content after timeout
        if (mounted) {
          setContentReady(true);
          setLoading(false);
        }
      }
    };

    initializeApp();

    // 🛡️ Cleanup function
    return () => {
      mounted = false;
    };
  }, []);

  // 🚀 Show loader while loading
  if (loading) {
    return <Loader contentReady={contentReady} />;
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 🎯 Suspense for lazy-loaded components */}
        <Suspense 
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
        
             <Route path="/about" element={<About />} /> 
             <Route path="/services" element={<Services />} /> 
             <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;