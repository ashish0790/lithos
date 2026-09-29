import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MarketsSection from "@/components/MarketsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function App() {
  const [enquiryProduct, setEnquiryProduct] = useState("");

  const handleSelectProduct = (productName: string) => {
    setEnquiryProduct(productName);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MarketsSection />
        <ProductsSection onSelectProductForEnquiry={handleSelectProduct} />
        <ContactSection initialProductInterest={enquiryProduct} />
      </main>
      <Footer />
    </>
  );
}
