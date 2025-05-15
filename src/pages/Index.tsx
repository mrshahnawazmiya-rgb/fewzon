
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { FeaturesSection } from "@/components/sections/features-section";
import { Testimonials } from "@/components/sections/testimonials";
import { TeamSection } from "@/components/sections/team-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { BlogsSection } from "@/components/sections/blogs-section";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <FeaturesSection />
        <Testimonials />
        <TeamSection />
        <BlogsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
