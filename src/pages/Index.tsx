
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Testimonials } from "@/components/sections/testimonials";
import { TeamSection } from "@/components/sections/team-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <Testimonials />
        <TeamSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
