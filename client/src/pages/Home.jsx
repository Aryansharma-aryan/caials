import React, { Suspense, lazy, memo } from "react";

// Critical components - load immediately
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import Hero from "../components/Hero";
import ConsultancyForm from "../Forms/ConsultancyForm";

// Lazy load below-the-fold components
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Countries = lazy(() => import("./Countries"));
const Blog = lazy(() => import("./Blog"));
const Contact = lazy(() => import("./Contact"));
const FAQ = lazy(() => import("./Faq"));
const PremiumFooter = lazy(() => import("./PremiumFooter"));

// Loading Spinner Component
const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
  </div>
));

// Main Home Component
const Home = memo(() => {
  return (
    <div className="relative">
      {/* Fixed Components - Absolutely positioned to avoid any wrapper backgrounds */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <TopHeader />
          
        </div>
       
      </div>

      {/* Main content - No padding top since components are absolute */}
      <main>
        {/* Above-the-fold content */}
        <Hero />

        {/* Lazy-loaded sections */}
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Countries />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ConsultancyForm />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PremiumFooter />
        </Suspense>
      </main>
    </div>
  );
});

Home.displayName = "Home";
export default Home;
