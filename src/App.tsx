import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Map from "./components/Map";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
import StyleGuide from "./components/StyleGuide";
import GalleryDemo from "./components/Gallery";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "style-guide">(
    "home"
  );

  // Sync scroll position when switching pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header
        onNavigate={(page: "home" | "style-guide") => setCurrentPage(page)}
        currentPage={currentPage}
      />

      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <Clients />
            <Features />
            <About />
            <Services />
            <HowItWorks />
            <Stats />
            <Portfolio />
            <Testimonials />
            <Team />
            <Pricing />
            <GalleryDemo/>
            <FAQ />
            <CTA />
            <Blog />
            <SocialProof />
            <Contact />
            <Newsletter />
            <Map />
          </>
        ) : (
          <StyleGuide />
        )}
      </main>

      <Footer
        onNavigate={(page: "home" | "style-guide") => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
