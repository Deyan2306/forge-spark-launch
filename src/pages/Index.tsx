import { Hero } from "@/components/Hero";
import { WhyTexForge } from "@/components/WhyTexForge";
import { PriceBuilder } from "@/components/PriceBuilder";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DiscountBanner } from "@/components/DiscountBanner";

const Index = () => {
  return (
    <main className="min-h-screen">
      <DiscountBanner />
      <Hero />
      <WhyTexForge />
      <PriceBuilder />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
