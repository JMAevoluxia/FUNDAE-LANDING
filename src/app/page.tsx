import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Features from "@/components/Features";
import ComoFunciona from "@/components/ComoFunciona";
import ParaQuien from "@/components/ParaQuien";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-night">
      <Navbar />
      <Hero />
      <Manifesto />
      <Features />
      <ComoFunciona />
      <ParaQuien />
      <Footer />
    </main>
  );
}
