import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import AboutSection from "@/components/home/AboutSection";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <AboutSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
