import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import About from "./About"
import Countries from "./Countries"

import Services from "./Services"

import FAQ from "./Faq";
import Contact from "./Contact";

import PremiumFooter from "./PremiumFooter";
import Blog from "./Blog";






export default function Home() {
  return (
    <>
    <TopHeader/>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Countries/>
      <Blog/>
      <Contact/>
      <FAQ/>
      <PremiumFooter/>
    </>
  );
}
