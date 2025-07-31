import React, { Suspense, lazy, memo } from "react";

// 🚀 Critical components - load immediately
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";

// 🎯 Lazy load non-critical components
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Countries = lazy(() => import("./Countries"));
const Blog = lazy(() => import("./Blog"));
const Contact = lazy(() => import("./Contact"));
const FAQ = lazy(() => import("./Faq"));
const PremiumFooter = lazy(() => import("./PremiumFooter"));

// 🎨 Simple loading spinner
const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
  </div>
));

// 🚀 Optimized Home component
const Home = memo(() => {
  return (
    <>
      {/* ⚡ Above-the-fold content - loads first */}
      <TopHeader />
      <Navbar />
      <Hero />

      {/* 🎯 Below-the-fold content - lazy loaded */}
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
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <PremiumFooter />
      </Suspense>
    </>
  );
});

Home.displayName = 'Home';

export default Home;