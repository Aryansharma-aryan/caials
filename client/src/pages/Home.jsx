import React, { Suspense, lazy } from "react";

// Lazy-loaded components
const TopHeader = lazy(() => import("../components/TopHeader"));
const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Countries = lazy(() => import("./Countries"));
const Blog = lazy(() => import("./Blog"));
const Contact = lazy(() => import("./Contact"));
const FAQ = lazy(() => import("./Faq"));
const PremiumFooter = lazy(() => import("./PremiumFooter"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TopHeader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Countries />
      <Blog />
      <Contact />
      <FAQ />
      <PremiumFooter />
    </Suspense>
  );
}
